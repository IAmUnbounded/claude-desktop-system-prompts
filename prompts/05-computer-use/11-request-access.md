---
source_file: app.asar/.vite/build/index.chunk-BLybwbkK.js
byte_offset: 127874
line: 1
column: 127874
literal: StringLiteral
context: "description of tool `request_access`"
length_chars: 615
sha256: e5b2672d7472d13d6ccf67684f9ff8e7b62d63f822fcbb03aa543dae40c12411
app_version: 1.46388.4
---

````text
Request user permission to control a set of applications for this session. Must be called before any other tool in this server. The user sees a single dialog listing all requested apps and either allows the whole set or denies it. Call this again mid-session to add more apps; previously granted apps remain granted. Returns the granted apps, denied apps, and screenshot filtering capability. This does NOT grant permission to take over the screen — that consent has its own separate card, raised automatically the first time a display-scope tool runs after background work; do not call request_access to obtain it.
````
