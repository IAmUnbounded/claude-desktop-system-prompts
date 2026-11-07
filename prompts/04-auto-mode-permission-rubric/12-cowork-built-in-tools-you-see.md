---
source_file: app.asar/.vite/build/index.chunk-BhvMozMH.js
byte_offset: 306527
line: 1
column: 306527
literal: TemplateLiteral
context: "assigned to `uf` (minified)"
length_chars: 969
sha256: 1407c9b792457499956295eadc0c8f785a6a5c613edea55be8ec67bf104a6c4e
app_version: 1.46388.4
---

````text
Cowork built-in tools (you see only name and arguments; assume no human reviews the call):
  • ${t.Ww} path=: mounts that host folder (whole subtree) read-write for the session. With no path it opens the OS folder picker, which only the human can complete.
  • ${t.Lw} file_path=: enables permanent deletion for the ENTIRE connected folder containing file_path, for the rest of the session.
  • ${t.Gw} name= description= content= [overwrite]: saves a persistent skill to the user's account; description enters the system prompt of every future session and content loads when it matches — equivalent to writing .claude/skills/.
  • ${t.VT} taskId= prompt= [cronExpression|fireAt]: stores prompt to run later as a new unattended session with the user's folders, connectors and current permission mode. ${t.KT} taskId= […] can replace the prompt or schedule; ${t.HT} taskId= removes a task; ${t.UT} is read-only. The Claude Code Scheduling exception does not cover these.
````
