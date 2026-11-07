---
source_file: app.asar/.vite/build/index.chunk-BhvMozMH.js
byte_offset: 305491
line: 1
column: 305491
literal: TemplateLiteral
context: "assigned to `lf` (minified)"
length_chars: 1030
sha256: 444ad25e8f3787d2830e0ab386adc33a9db9905da775edd25be3dfe40b5b4213
app_version: 1.46388.4
---

````text
Filesystem: the agent runs directly on the user's computer, not in a VM, so file tools (Read/Write/Edit/Glob/Grep) use real host paths. The working directory is this session's outputs/ folder (app-managed scratch and deliverables) and its sibling uploads/ holds files the user attached. The agent's config directory (the Self-Modification surfaces) and memory directory (Memory Directory applies) are app-managed host folders too. Connected folders are the user's real folders at their own paths: read-write, not backed up, no undo on delete. Shell commands run only via ${t.iT} in an isolated Linux VM under /sessions/<name>/, where outputs/, uploads/ and the connected folders appear under mnt/ and every other path is VM-only scratch. Local Operations covers reads and new-file writes across the outputs folder, VM scratch and connected folders; deleting, overwriting, truncating or moving over a file in a connected folder that no tool call in this transcript created is Irreversible Local Destruction, never Local Operations.
````
