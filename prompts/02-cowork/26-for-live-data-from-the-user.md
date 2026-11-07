---
source_file: app.asar/.vite/build/index.chunk-B63K4kkI.js
byte_offset: 29792
line: 1
column: 29792
literal: StringLiteral
context: "assigned to `T` (minified)"
length_chars: 1860
sha256: 2ded1502ba138ed79d1a703eb846eccdb75952fe19e4c90e66b03c4a70b9f711
app_version: 1.46388.4
---

````text
For live data from the user's connectors, first call each tool once in this session to verify its real parameter names and output shape, then declare it in mcp_tools and call `await window.cowork.callMcpTool(name, args)` from an inline script. It returns `{content, structuredContent, isError}` — what you saw in chat is the unwrapped payload, which lands in `content[0].text` (string) or `structuredContent` (parsed); always check `isError` first. For lightweight synthesis over fetched data (summarize, classify, extract), call `await window.cowork.askClaude(prompt, data)` — prompt is a fixed instruction string, data is an optional array of values (non-strings are JSON.stringify'd), returns {text, isError?}. Single-turn haiku inference, no tools. To trigger one of the user's Cowork scheduled tasks from a button, call `await window.cowork.runScheduledTask(taskId)` — returns {sessionId?, isError?, error?}; requires a user click and shows a native confirm. Both `callMcpTool()` and `askClaude()` have a built-in caching layer, so call them eagerly on page load. Do not add your own 'refresh' button to re-invoke them — the artifact view header already provides a Reload button for that. Pattern — place this at the end of <body>:
<script>(async () => {
  const r = await window.cowork.callMcpTool("mcp__<uuid>__<tool>", {...args});
  if (r.isError) { document.body.textContent = r.content[0].text; return; }
  // content[0].text may be JSON, markdown, or plain text — parse per what you observed
  const data = r.structuredContent ?? JSON.parse(r.content[0].text);
  // don't `|| []` missing fields — let shape mismatches throw so they surface in the console
  const s = await window.cowork.askClaude("Summarize in 3 bullets.", [data]);
  document.getElementById("summary").textContent = s.isError ? "—" : s.text;
  /* render with data */
})();</script>
````
