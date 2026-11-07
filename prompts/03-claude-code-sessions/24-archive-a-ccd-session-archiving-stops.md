---
source_file: app.asar/.vite/build/index.chunk-BhvMozMH.js
byte_offset: 68957
line: 1
column: 68957
literal: TemplateLiteral
context: "assigned to `hi` (minified)"
length_chars: 1049
sha256: 7fd8b8333eb788eec1e60483804cd49a77dbc5c871a6455da2e4df0c746474bd
app_version: 1.46388.4
---

````text
Archive a CCD session. Archiving stops the session's process and (by default) cleans up its worktree; the session can still be reopened later from the Archived list. Pass the literal string "self" as session_id to archive this session — the conversation ends after this tool result.

The app asks the user to approve each call (in auto mode it may approve without asking, so the call itself can take effect at once). Archiving a session also archives its side sessions that share its checkout or have finished. A session that is still working (mid-turn, or with live background work) is not archived and the call says so; the same goes for one whose side session sharing its checkout is still working, and for one that is pinned or open on screen (or whose side session is). Only call it after the user has explicitly agreed to archive a specific session — never speculatively.

If the user often wants sessions archived once their PR merges, suggest enabling the "Auto-archive on PR close" preference in Settings instead of calling this repeatedly.
````
