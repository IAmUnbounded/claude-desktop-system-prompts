---
source_file: app.asar/.vite/build/index.chunk-BhvMozMH.js
byte_offset: 141956
line: 1
column: 141956
literal: TemplateLiteral
context: "description of tool `suggest_plugin_install`"
length_chars: 554
sha256: 5fd0c5de50f394949a74d026b235f918f284358df6100d24a72bb20938bb3be3
app_version: 1.46388.4
---

````text
Render an inline plugin card in the message stream. Works for one plugin or several: with multiple, the card lists them and the user can drill into each to see its skills and Add or Manage it. The card handles all UI — do not describe the plugins in text.

When the user asks what plugins they already have, use list_plugins instead.

Do NOT call this if:
- The suggestion is not relevant to what the user asked about
- You are unsure whether the plugin would actually help
- You already rendered a suggestion this conversation and the user didn't engage
````
