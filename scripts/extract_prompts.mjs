// Parse minified bundles with @babel/parser (no execution) and emit prompt-like literals.
// usage: npm install && node scripts/extract_prompts.mjs <out.json> <extracted_asar_dir> <relative bundle files...>
// e.g.  node scripts/extract_prompts.mjs prompts.json ./app $(cd app && ls .vite/build/*.js .vite/build/*/*.js)
import { createRequire } from "node:module";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const { parse } = require("@babel/parser");

const [outPath, root, ...files] = process.argv.slice(2);
const MARKERS = /\b(you are|you're|your task|the user|do not|don't|never|always|must|should|call this|use this|respond|tool|claude)\b/gi;

function keyName(k) {
  if (!k) return null;
  if (k.type === "Identifier") return k.name;
  if (k.type === "StringLiteral") return k.value;
  return null;
}

function templateText(node, src) {
  let out = "";
  node.quasis.forEach((q, i) => {
    out += q.value.cooked ?? q.value.raw;
    if (i < node.expressions.length) {
      const e = node.expressions[i];
      out += "${" + src.slice(e.start, e.end).slice(0, 80) + "}";
    }
  });
  return out;
}

function isPromptLike(text) {
  if (text.length < 280) return false;
  const words = text.match(/[A-Za-z]{2,}/g) || [];
  if (words.length < 45) return false;
  const letters = [...text].filter((c) => /[A-Za-z\s]/.test(c)).length / text.length;
  const hits = (text.match(MARKERS) || []).length;
  return letters > 0.72 && hits >= 3;
}

const results = [];
for (const rel of files) {
  const src = readFileSync(join(root, rel), "utf8");
  let ast;
  try {
    ast = parse(src, { sourceType: "unambiguous", errorRecovery: true, allowReturnOutsideFunction: true, plugins: [] });
  } catch (e) {
    console.error("parse failed", rel, e.message);
    continue;
  }
  // iterative walk with context
  const stack = [{ node: ast.program, ctx: { key: null, varName: null, toolName: null, callee: null } }];
  while (stack.length) {
    const { node, ctx } = stack.pop();
    if (!node || typeof node.type !== "string") continue;
    let text = null;
    if (node.type === "StringLiteral") text = node.value;
    else if (node.type === "TemplateLiteral") text = templateText(node, src);
    if (text !== null && isPromptLike(text)) {
      results.push({
        file: rel, start: node.start, line: node.loc?.start.line, column: node.loc?.start.column,
        literal: node.type, key: ctx.key, var: ctx.varName, tool: ctx.toolName, callee: ctx.callee,
        length: text.length, text,
      });
    }
    // derive context for children
    let toolName = ctx.toolName;
    if (node.type === "ObjectExpression") {
      for (const p of node.properties) {
        if (p.type === "ObjectProperty" && keyName(p.key) === "name" && p.value.type === "StringLiteral") toolName = p.value.value;
      }
    }
    for (const [k, v] of Object.entries(node)) {
      if (k === "loc" || k === "start" || k === "end" || k === "extra" || k === "leadingComments" || k === "trailingComments") continue;
      const children = Array.isArray(v) ? v : [v];
      for (const ch of children) {
        if (!ch || typeof ch.type !== "string") continue;
        const c = { ...ctx, toolName };
        if (node.type === "ObjectProperty" && k === "value") c.key = keyName(node.key);
        else if (node.type === "VariableDeclarator" && k === "init") c.varName = node.id?.name ?? null;
        else if (node.type === "AssignmentExpression" && k === "right") c.varName = node.left?.name ?? node.left?.property?.name ?? null;
        else if (node.type === "CallExpression" && k === "arguments") {
          const cal = node.callee;
          c.callee = cal.type === "Identifier" ? cal.name : cal.property?.name ?? null;
        }
        stack.push({ node: ch, ctx: c });
      }
    }
  }
  console.error(`${rel}: cumulative ${results.length}`);
}
writeFileSync(outPath, JSON.stringify(results, null, 1));
console.log("wrote", results.length);
