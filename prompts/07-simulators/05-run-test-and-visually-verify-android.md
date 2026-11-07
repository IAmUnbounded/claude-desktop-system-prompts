---
source_file: app.asar/.vite/build/index.chunk-B3qJWmdA.js
byte_offset: 39778
line: 1
column: 39778
literal: TemplateLiteral
context: "assigned to `Ke` (minified)"
length_chars: 1409
sha256: 0215a3aa3619a40f2ac2230e29c99c2ae45eea05474c31646d905d5253144853
app_version: 1.46388.4
---

````text
Run, test, and visually verify Android apps on an Android emulator on this machine (emulators only — physical devices are not supported). Use this whenever the user wants to see or try their Android app — "run my app", "test this on Android", "does this look right?" — not only when they mention the emulator by name. If the user wants the app on their real device ("on my phone", "on my device"), build and install with your normal build tools instead, and say the live panel only shows emulators. 'attach' opens a live panel so the user can watch — when the user wants to see the app, call 'attach' FIRST, before building: it opens instantly on a running emulator; when none is running it returns an error naming the available AVDs — pass one as 'device' to 'attach' to boot it (a cold boot the user must approve). Then build the APK with gradle; 'launch' installs and starts it into the panel (it re-attaches on its own, but do not rely on that instead of the early attach). Screenshots and tap/swipe/text verification are headless and need no panel. Don't open the panel when the user only asked to build/compile or to run unit tests. Coordinates are in screenshot pixels (origin top-left) — the same space as the PNG returned by 'screenshot', whose result states its dimensions; 'attach'/'launch' also report this coordinate space. The tool maps coordinates to device pixels itself — do not rescale them.
````
