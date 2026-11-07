---
source_file: app.asar/.vite/build/index.chunk-BhvMozMH.js
byte_offset: 155941
line: 1
column: 155941
literal: TemplateLiteral
context: "description of tool `show_onboarding_role_picker`"
length_chars: 692
sha256: eb01479179a7c4ca28d69233b8d4b9682669f7b9bf19b0243d7092971785adde
app_version: 1.46388.4
---

````text
Render a clickable role-picker chip row during Cowork onboarding. Call this when asking the user what kind of work they do so they can pick their role and get a matching plugin installed. The role list is hardcoded in the frontend — call with no args.

The call blocks until the user responds. Three resolution paths all land in the tool result: chip click or free-form typed answer → {"role": "Legal"} or {"role": "paralegal"}; X button → {"dismissed": true}. Free-form roles may not match the chip list — search the marketplace with whatever string you get.

Do NOT call this in normal conversation. Only call this when explicitly helping the user set up Cowork for their role/job function.
````
