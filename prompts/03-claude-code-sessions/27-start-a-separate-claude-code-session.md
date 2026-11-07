---
source_file: app.asar/.vite/build/index.chunk-BhvMozMH.js
byte_offset: 115668
line: 1
column: 115668
literal: TemplateLiteral
context: "assigned to `Cs` (minified)"
length_chars: 1257
sha256: b4e836791e1225408745df617f2f14efa13a3de4d561150de090d824efd62af9
app_version: 1.46388.4
---

````text
Start a separate Claude Code session for a task while you stay with the user (when: see "Starting other sessions"). `initiation` says who wants it: "user_asked" starts it now and returns its id (its final message reaches you as a note); "own_initiative" only proposes it — the user sees a card and nothing runs until they start it, by clicking it or by telling you (then call this again with just proposal_id); an unstarted proposal expires after ${Ss} days.
context: "fork" = this whole conversation + your brief. "fresh" (default) = your brief + `background` only, so background is required (min ${xs} chars: overall goal, decisions/constraints so far, how the piece fits).
Checkout ("fresh" only): use_worktree false = read-only: shares this checkout (on an SSH host: the project's base folder, not your worktree), no file-editing tools; true = its own worktree for edits (the default when this session is in one). A "fork" from a worktree session gets a fresh worktree, normally cut from your branch tip (commit first; uncommitted edits stay here); from a plain checkout it shares the folder.
Right before calling, write its bold title line and one sentence on what it will do; it has started only once this returns saying so. Never wait for it or poll.
````
