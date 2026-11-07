---
source_file: app.asar/.vite/build/index.chunk-BLybwbkK.js
byte_offset: 155665
line: 1
column: 155665
literal: StringLiteral
context: "description of tool `teach_batch`"
length_chars: 1176
sha256: ab1b06a494788b7272f468a445f4d17e36e62adb498b4bc3f9389e1e8e060094
app_version: 1.46388.4
---

````text
Queue multiple teach steps in one tool call. Parallels computer_batch: N steps → one model↔API round trip instead of N. Each step still shows a tooltip and waits for the user's Next click, but YOU aren't waiting for a round trip between steps. You can call teach_batch multiple times in one tour — treat each batch as one predictable SEGMENT (typically: all the steps on one page). The returned screenshot shows the state after the batch's final actions; anchor the NEXT teach_batch against it. WITHIN a batch, all anchors and click coordinates refer to the PRE-BATCH screenshot (same invariant as computer_batch) — for steps 2+ in a batch, either omit anchor (centered tooltip) or target elements you know won't have moved. Good pattern: batch 5 tooltips on page A (last step navigates) → read returned screenshot → batch 3 tooltips on page B → done. Returns {exited:true, stepsCompleted:N} if the user clicks Exit — do NOT call again after that; {stepsCompleted, stepFailed, ...} if an action errors mid-batch; otherwise {stepsCompleted, results:[...]} plus a final screenshot. Fall back to individual teach_step calls when you need to react to each intermediate screenshot.
````
