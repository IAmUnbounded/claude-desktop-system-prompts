---
source_file: app.asar/.vite/build/index.chunk-BLybwbkK.js
byte_offset: 154689
line: 1
column: 154689
literal: StringLiteral
context: "description of tool `teach_step`"
length_chars: 829
sha256: 587754fcbb7f28de54088bece5bff3a0d5d50a1fa9a1489bf104b6fffce098f2
app_version: 1.46388.4
---

````text
Show one guided-tour tooltip and wait for the user to click Next. On Next, execute the actions, take a fresh screenshot, and return both — you do NOT need a separate screenshot call between steps. The returned image shows the state after your actions ran; anchor the next teach_step against it. IMPORTANT — the user only sees the tooltip during teach mode. Put ALL narration in `explanation`. Text you emit outside teach_step calls is NOT visible until teach mode ends. Pack as many actions as possible into each step's `actions` array — the user waits through the whole round trip between clicks, so one step that fills a form beats five steps that fill one field each. Returns {exited:true} if the user clicks Exit — do not call teach_step again after that. Take an initial screenshot before your FIRST teach_step to anchor it.
````
