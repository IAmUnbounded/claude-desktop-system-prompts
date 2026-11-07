---
source_file: app.asar/.vite/build/index.chunk-BLybwbkK.js
byte_offset: 153785
line: 1
column: 153785
literal: StringLiteral
context: "description of tool `request_teach_access`"
length_chars: 571
sha256: 475291ef4c5c8bcb4da82aa5a2747562a1733ac80aea8c060898ff8a374dee8f
app_version: 1.46388.4
---

````text
Request permission to guide the user through a task step-by-step with on-screen tooltips. Use this INSTEAD OF request_access when the user wants to LEARN how to do something (phrases like "teach me", "walk me through", "show me how", "help me learn"). On approval the main Claude window hides and a fullscreen tooltip overlay appears. You then call teach_step repeatedly; each call shows one tooltip and waits for the user to click Next. Same app-allowlist semantics as request_access, but no clipboard/system-key flags. Teach mode ends automatically when your turn ends.
````
