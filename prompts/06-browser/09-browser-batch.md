---
source_file: app.asar/.vite/build/index.chunk-CMJVFTis.js
byte_offset: 3099582
line: 13
column: 1815246
literal: StringLiteral
context: "description of tool `browser_batch`"
length_chars: 726
sha256: 6b0f464295c4f31c6f2e6975fe0cdd2fe9e36c5f95592ace50ef30a897388cd1
app_version: 1.46388.4
---

````text
Execute a sequence of browser tool calls in ONE round trip. Each item is {name, input} where input is exactly what you'd pass to that tool standalone. Actions execute SEQUENTIALLY (not in parallel) and stop on the first error. Use this tool extensively to quickly execute work whenever you can predict two or more steps ahead — e.g. navigate, click a field, type, press Return, screenshot. Each tool's own permission check runs per item — if an action navigates to a domain without permission, the next item's check fails and the batch stops. Screenshots and other images are returned interleaved with outputs; coordinates you write in THIS batch refer to the screenshot taken BEFORE this call. browser_batch cannot be nested.
````
