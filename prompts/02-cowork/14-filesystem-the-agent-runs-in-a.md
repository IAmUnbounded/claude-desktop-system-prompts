---
source_file: app.asar/.vite/build/index.chunk-BhvMozMH.js
byte_offset: 304704
line: 1
column: 304704
literal: StringLiteral
context: "assigned to `cf` (minified)"
length_chars: 781
sha256: 7eaa127e8d161808d70f46b151f9262d5a0d9201e65e7ce2f139aaba391093c2
app_version: 1.46388.4
---

````text
Filesystem: the agent runs in a sandbox VM under /sessions/<name>/. Paths there outside mnt/ are VM-only scratch. mnt/outputs/ is this session's deliverables folder and mnt/uploads/ holds files the user attached. mnt/.claude/ is the agent's config directory (the Self-Modification surfaces) and mnt/.auto-memory/ is its memory directory (Memory Directory applies). Every other mnt/<folder>/ is a real folder on the user's computer that they connected: read-write, not backed up, no undo on delete. Local Operations covers reads and new-file writes across the session directory and connected folders; deleting, overwriting, truncating or moving over a file in a connected folder that no tool call in this transcript created is Irreversible Local Destruction, never Local Operations.
````
