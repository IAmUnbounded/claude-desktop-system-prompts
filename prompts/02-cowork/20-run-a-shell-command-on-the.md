---
source_file: app.asar/.vite/build/index.chunk-CmsBuMLg.js
byte_offset: 11041
line: 1
column: 11041
literal: StringLiteral
context: "object key `description`"
length_chars: 578
sha256: 6d8d2dd8af0b3be4142326ca661fbc9024b9b36eadfdf9d7d1aef95b2b51ab49
app_version: 1.46388.4
---

````text
Run a shell command on the user's local machine, inside the desktop Cowork workspace (an isolated Linux VM). This is NOT the cloud container — the `Bash` tool runs there; device_bash runs on the user's device.

The session's connected folders are mounted under `$HOME/mnt/<folder-name>`; a folder may be mounted read-only (for example when the user's administrator requires it), in which case writes there fail with 'Read-only file system' — call device_list_dir first to see what folders are connected and what each contains. If no folders are connected, this tool will fail — 
````
