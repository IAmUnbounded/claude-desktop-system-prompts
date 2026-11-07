---
source_file: app.asar/.vite/build/index.chunk-BhvMozMH.js
byte_offset: 144064
line: 1
column: 144064
literal: TemplateLiteral
context: "description of tool `list_plugins`"
length_chars: 766
sha256: 03d064c9bd562dd899bd612fb150d63e554849230088e7ec25fec798dba36ba1
app_version: 1.46388.4
---

````text
Render the user's installed plugins as an interactive card with drill-in detail per plugin. Call this when the user asks what plugins they have, instead of writing them out as text.

Routing:
- "what plugins do I have" / "show my plugins" → call with no args
- "what {topic} plugins do I have" / "plugins for {topic}" → pass keywords (the filter) and optionally context_label (the header). context_label is display-only and does not filter — without keywords the card shows every installed plugin regardless of the label.

To suggest a plugin the user does not have yet, use search_plugins → suggest_plugin_install instead.

The card renders at the call site, so write any lead-in before the call. The result lists what rendered — skip re-listing in text afterwards.
````
