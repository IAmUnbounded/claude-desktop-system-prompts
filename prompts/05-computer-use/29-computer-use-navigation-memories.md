---
source_file: app.asar/.vite/build/index.chunk-BinSjUJ8.js
byte_offset: 288101
line: 1
column: 288101
literal: StringLiteral
context: "assigned to `iu` (minified)"
length_chars: 1325
sha256: f3e415f5b2fb2997b8ac4e7f77bfce246833dd161722bbe34d5418d26192ae52
app_version: 1.46388.4
---

````text
## Computer-use navigation memories

When using computer-use tools (`screenshot`/`left_click`/`type` or the background `app_*` family) you will sometimes find that a tool reports success but a follow-up screenshot shows nothing changed — and then discover a different path that DOES work. Save that as a `reference` memory so the next session starts from the working path instead of re-discovering it.

**File it under** `computer-use/<app-name-or-bundle-id>.md` (one file per app; create the subdirectory). Link it from `MEMORY.md` like any other memory. In the body, note: which approach didn't work, which one did, and which tool/element you used (e.g. "`app_type` into the To: field reports ok but doesn't filter — use the Search box (`app_type element_index` on the 'Query' combo box) or click the labeled DM list instead").

**Do not follow these blindly.** A saved path describes what worked for ONE version of that app under ONE version of these tools. Apps redesign; the tools improve. If a saved path doesn't work on the first try, treat the memory as stale: take a fresh screenshot, navigate from what you actually see, and update or delete the memory. Never retry a stale saved path more than once.

**Only save paths you actually verified** (the screenshot showed the result), not paths you inferred should work.
````
