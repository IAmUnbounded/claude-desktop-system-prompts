---
source_file: app.asar/.vite/build/index.chunk-BhvMozMH.js
byte_offset: 294079
line: 1
column: 294079
literal: StringLiteral
context: "assigned to `n` (minified)"
length_chars: 1022
sha256: 031f1e671172a79340e5f6f1dee85931228a4e93023eaed2ed9473cf265ce23b
app_version: 1.46388.4
---

````text
**Loading via ToolSearch — load in bulk, not one-by-one:** if computer-use tools are in the deferred list, load them ALL in a single ToolSearch call: `{ query: "computer-use", max_results: 30 }`. The keyword search matches the server-name substring in every tool name, so one query returns the entire toolkit.

For the Chrome MCP (`mcp__claude-in-chrome__*`), load every tool you expect to need in ONE ToolSearch call — the `select:` query accepts a comma-separated list — never one call per tool. Start with the core set:

`ToolSearch { query: "select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__read_page,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__browser_batch", max_results: 6 }`

Add task-specific tools to the same call when the task obviously needs them: `read_console_messages` / `read_network_requests` for debugging, `form_input` for forms, `gif_creator` for recordings, `javascript_tool` for page scripting.


````
