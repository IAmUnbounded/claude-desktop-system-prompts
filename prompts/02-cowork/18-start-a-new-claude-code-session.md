---
source_file: app.asar/.vite/build/index.chunk-ClhvbmuC.js
byte_offset: 2678
line: 1
column: 2678
literal: TemplateLiteral
context: "assigned to `d` (minified)"
length_chars: 1033
sha256: 925658036dbdea000c56ee1d383c9c78f2975b5e76aef692990121f812d575df
app_version: 1.46388.4
---

````text
Start a NEW Claude Code session on the host machine, outside the Cowork VM. The session runs against the real filesystem with git worktree isolation and appears in the desktop Code tab. ALWAYS prefer this over start_task for code-related work — editing a repo, running tests, fixing a bug, anything touching a codebase.

BEFORE calling this:
(1) Check your existing tasks. If the user is following up on work a code session already did (fix, tweak, add one more thing), route with send_message to that session_id — it already has the repo, the branch, the worktree, and the context. A fresh session starts from zero. Only start a new session for genuinely new work or a different repo.
(2) Call list_code_workspaces to find the right path.
(3) If the workspace is ambiguous (multiple repos could match the user's request), ask the user to confirm which one before calling this tool.
(4) When you call this tool, ALWAYS tell the user which repo/workspace you are starting the task in (e.g. 'Starting a code task in /Users/name/repo').
````
