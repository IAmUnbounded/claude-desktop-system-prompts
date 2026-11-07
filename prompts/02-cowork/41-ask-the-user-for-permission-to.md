---
source_file: app.asar/.vite/build/index.chunk-BMaOGVX6.js
byte_offset: 109364
line: 1
column: 109364
literal: StringLiteral
context: "object key `description`"
length_chars: 955
sha256: 8b8d72d8ab1f9a5bc4259d0cca3fce4c1be8641688db45774ae9e6faa069ff4b
app_version: 1.46388.4
---

````text
Ask the user for permission to delete files in one or more of this session's connected folders on this device. IMPORTANT: call this when a delete operation (rm, rmdir, unlink) in device_bash fails with 'Operation not permitted', rather than telling the user deletion is impossible. The user sees a permission prompt on whatever client they're using, listing the exact folders; on approval, deletion is enabled for each listed folder's whole subtree for the rest of this session, starting with your next device_bash call. Pass the exact connected folder roots from get_device_info.connectedFolders — not files or subfolders. Each prompt spends the user's attention, so ask exactly once with the minimal set of folders the task needs, and pass `reason` so the user sees why. If the user declines, don't repeat the request — move files into a _to_delete/ subfolder under the same connected folder and tell the user, so they can delete that folder themselves.
````
