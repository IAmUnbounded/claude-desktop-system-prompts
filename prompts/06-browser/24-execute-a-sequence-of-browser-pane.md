---
source_file: app.asar/.vite/build/index.chunk-CMJVFTis.js
byte_offset: 5885548
line: 13
column: 4601212
literal: StringLiteral
context: "object key `description`"
length_chars: 1065
sha256: 803a897e6e5f6d8c7df520dd194744385da465673c17a6ab5ada18a9452dbb5a
app_version: 1.46388.4
---

````text
Execute a sequence of Browser pane tool calls in ONE round trip. Each item is {name, input} where input is exactly what you'd pass to that tool standalone. Actions execute SEQUENTIALLY (not in parallel) and stop on the first error. Use this tool extensively to quickly execute work whenever you can predict two or more steps ahead — e.g. navigate, click a field, type, press Return, screenshot. Each tool's own permission check runs per item — a step on a site the user hasn't allowed either asks the user inline (and continues if they allow) or is refused, which stops the batch; if a step is refused for a missing permission, call that tool on its own (that call can ask the user), then batch the rest. Screenshots and other images are returned interleaved with outputs; coordinates you write in THIS batch refer to the screenshot taken BEFORE this call. browser_batch cannot be nested, and preview_start is not batchable — but if the Browser pane isn't open yet, a batch whose FIRST action is navigate with a url opens it (other actions still need an open page).
````
