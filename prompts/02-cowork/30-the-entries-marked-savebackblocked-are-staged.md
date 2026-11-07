---
source_file: app.asar/.vite/build/index.chunk-BMaOGVX6.js
byte_offset: 41568
line: 1
column: 41568
literal: StringLiteral
context: "assigned to `oi` (minified)"
length_chars: 770
sha256: 2145c744c4a21e37a809ca02df1c476f6ca6f0546362f09eadde9ee3df4c996a
app_version: 1.46388.4
---

````text
The entries marked saveBackBlocked are staged like the others, but saving changes back to those paths (device_commit_files, or a device_bash write) is expected to fail while the condition holds: "open_in_another_app" means another application on the device (for example Excel or Word, or a preview pane) has the file open and locked; "read_only" means the file is read-only or the Claude app is not permitted to write it. If you plan to modify such a file, tell the user before you start editing it: ask them to close it in the other application (or make it writable), or offer to save your result under a new name in the same folder. Work that does not overwrite that path can continue meanwhile. If the user saves the file while closing it, re-stage it before editing.
````
