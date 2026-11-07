---
source_file: app.asar/.vite/build/index.chunk-BhvMozMH.js
byte_offset: 65289
line: 1
column: 65289
literal: TemplateLiteral
context: "assigned to `si` (minified)"
length_chars: 930
sha256: d2f7595c9bc81ef4dc62588c2a2f60f6f709ef9463f75640b5e7ef963d2af36e
app_version: 1.46388.4
---

````text
List the user's other CCD sessions (active and optionally archived).

Returns a compact JSON array sorted by most recent activity. The current session is excluded. Use this to answer "what other sessions do I have", to find a session by title/branch/PR/sidebar group, or — after a PR you opened has merged — to locate the corresponding session and offer to archive it via archive_session.

`group` is the custom sidebar group the user filed a session under ({id, name}), or null when it is ungrouped. The key is omitted while the app window has not reported groups yet — treat that as unknown, not ungrouped. `pinned` is true or false per the sidebar pin (a pinned session keeps its group but is shown under Pinned); the key is omitted when the app has never recorded a pin for the session — read that as not pinned. To change either, use the ccd_sidebar tools when they are available (move_sessions, set_pinned, create_group, …).
````
