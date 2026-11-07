---
source_file: app.asar/.vite/build/index.chunk-BMaOGVX6.js
byte_offset: 106927
line: 1
column: 106927
literal: StringLiteral
context: "object key `description`"
length_chars: 584
sha256: 46ee7915dd1e931b7bd9abcdd18c7bff1b9fe34ef5d43fad19ed3709059aecc5
app_version: 1.46388.4
---

````text
Update an existing Cowork artifact on a connected Claude desktop app. Call list_artifacts first to find the artifact id, write the updated self-contained HTML document to a file, call SendUserFile with that path, then pass the file_uuid it returns here. Same constraints as local artifacts: inline all CSS and JS, use data: URLs for images. Only works when the user is connected via the Claude desktop app — the artifact renders in the desktop Cowork sidebar and does not appear on web or mobile. A remote update keeps the artifact's existing connector grants and cannot add new ones.
````
