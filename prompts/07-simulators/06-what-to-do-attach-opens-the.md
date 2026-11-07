---
source_file: app.asar/.vite/build/index.chunk-B3qJWmdA.js
byte_offset: 41297
line: 1
column: 41297
literal: StringLiteral
context: "object key `description`"
length_chars: 887
sha256: 43531e360c9f6651e9a2e7692201c9abe8c62213ef73820e70e92564e609db76
app_version: 1.46388.4
---

````text
What to do. 'attach' opens the live emulator panel for the user — call it BEFORE you build or launch, as soon as the user wants to see the app: on a running emulator it opens immediately; when none is running it returns an error naming the available AVDs — pass one as 'device' to boot it. Do not skip the early attach because 'launch' also attaches — the panel should be open before the build starts. The panel is the user's view, not a precondition — 'screenshot' and input actions work without it. Skip it only when the user has no interest in watching; 'launch' installs an APK and starts it (it also re-attaches, but call 'attach' early rather than relying on that); 'screenshot' returns a PNG; 'tap'/'swipe'/'text'/'button' inject input; 'touch_path' performs a single-finger drag along a path; 'open_url' opens a deep link via `am start -a VIEW`; 'detach' closes the panel/stream.
````
