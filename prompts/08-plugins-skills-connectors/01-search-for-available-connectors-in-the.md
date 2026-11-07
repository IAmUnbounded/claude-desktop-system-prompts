---
source_file: app.asar/.vite/build/index.chunk-BhvMozMH.js
byte_offset: 136191
line: 1
column: 136191
literal: TemplateLiteral
context: "object key `description`"
length_chars: 632
sha256: 5c1e795fd25c55dadfcd082acdbc6c3002883556a10d3fc6e649892235eb624c
app_version: 1.46388.4
---

````text
Search for available connectors in the MCP registry. Call this when connecting to a new MCP might help resolve the user query.

Examples:
- "check my Asana tasks" → search ["asana", "tasks", "todo"]
- "find issues in Jira" → search ["jira", "issues"]
- "help me manage my tasks" → search ["tasks", "todo", "project management"]
- "did the call cover Mike's latest ticket" → thinking: "I don't have any context about the call or meeting, let's see if there are any connectors available" → search ["meeting", "gong", "meet", "zoom"]

Returns results with connected status. Call suggest_connectors to show unconnected ones to the user.
````
