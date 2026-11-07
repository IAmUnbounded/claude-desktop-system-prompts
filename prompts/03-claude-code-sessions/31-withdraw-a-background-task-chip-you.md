---
source_file: app.asar/.vite/build/index.chunk-BhvMozMH.js
byte_offset: 121416
line: 1
column: 121416
literal: TemplateLiteral
context: "assigned to `js` (minified)"
length_chars: 565
sha256: 1d22eced22f2b420df39f72c7a95524b9cb94f7b0cdc5742bc2d924880fa1183
app_version: 1.46388.4
---

````text
Withdraw a background-task chip you previously created with spawn_task.

Call this when a suggestion you flagged is now stale, superseded, or irrelevant — e.g. you (or the user) already fixed it in this session, or you spawned a better-scoped replacement. To replace a chip: call spawn_task with the new suggestion first, then dismiss the old task_id.

Only chips the user hasn't acted on can be withdrawn from the queue. If the user already started or dismissed the task, the result says so (a dismissed task's copy kept for later is withdrawn too) — do not retry.
````
