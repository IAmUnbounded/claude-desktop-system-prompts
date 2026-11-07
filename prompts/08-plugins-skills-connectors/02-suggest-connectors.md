---
source_file: app.asar/.vite/build/index.chunk-BhvMozMH.js
byte_offset: 137140
line: 1
column: 137140
literal: TemplateLiteral
context: "description of tool `suggest_connectors`"
length_chars: 572
sha256: 775dc19c23bad1e1c28709a75ba7f9ed99c66813ea5c3af61899b90d125ee7de
app_version: 1.46388.4
---

````text
Display connector suggestions to the user with Connect buttons. Call this:
- After search_mcp_registry when it returned connectors that are not yet connected or whose tools are disabled in chat, and would help with the user's task
- When a tool call fails with an authentication or credential error — pass the server UUID from the failed tool name (format: mcp__{uuid}__{toolName}) so the user can re-authenticate

Do NOT call this if:
- The connector is already connected and working (just use it directly)
- None of the search results are relevant to what the user needs
````
