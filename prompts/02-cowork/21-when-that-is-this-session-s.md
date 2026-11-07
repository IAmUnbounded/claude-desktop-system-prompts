---
source_file: app.asar/.vite/build/index.chunk-CmsBuMLg.js
byte_offset: 11992
line: 1
column: 11992
literal: StringLiteral
context: "object key `description`"
length_chars: 2241
sha256: 27355bf9522c2396a47e4add453c137d1020b816263bfa0b08877b5c27e1b28b
app_version: 1.46388.4
---

````text
` when that is this session's scratch folder (get_device_info reports it as scratchFolder; files you write there can be passed to device_stage_files by that path, but are not surfaced to the user as results and are deleted with the session), otherwise in the session home ($HOME). `ls $HOME/mnt/` lists the mounted folders. Each call is a fresh `bash -c` (no cwd/env carryover between calls); anchor paths at `$HOME` (e.g. `$HOME/mnt/<folder-name>`) — do not construct `/sessions/...` paths by hand, the session's home path is not predictable. device_list_dir, device_stage_files and device_commit_files take the folder's path on this device (get_device_info.connectedFolders): `$HOME/mnt/<folder-name>/x` here is `<that folder's path>/x` to them.

Network access from this shell follows the session's egress allowlist — the same org/account allowlist the cloud container enforces, possibly narrower. When no allowlist applies this shell has no network access and commands that need the network fail with a network error. Try an install here first when a package is missing; if the network refuses, run that one step with the cloud container's `Bash` and bring only its result across.

Decision rule when a connected folder is involved: work here unless a step needs something only the container has. Here: cat/head/grep/find/wc to read and search; sed -i, awk or a short python read-modify-write to edit files in place (never re-typing a file's content from tool output, which can be truncated) and to write new ones beside their sources; csv/json/markdown/code processing; renaming and reorganizing; batch conversions with whatever `which` shows is installed. Container instead (device_stage_files → work → device_commit_files), staging only the files that step needs: you must look at an image or PDF page yourself (Read renders those only in the container); the step needs a tool, library or skill that is only in the container and cannot be installed here; the step needs network this shell cannot reach; or the user asked for a chat download (SendUserFile). Do not stage a file just to read or edit it — a round trip costs two transfers, usually a whole-file read and re-write in tokens, and risks writing back a stale copy. Each call 
````
