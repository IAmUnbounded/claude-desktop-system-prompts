---
source_file: app.asar/.vite/build/index.chunk-C6NLphDP.js
byte_offset: 853
line: 1
column: 853
literal: TemplateLiteral
context: "description of tool `office_addin_run`"
length_chars: 974
sha256: deb08828c8f216a5c3755b860c61eac81f17e28284e2b6205d4ab1d8ea362549
app_version: 1.46388.4
---

````text
Execute Office.js code in Excel. Changes appear instantly in the document.

The code runs inside Excel.run with `context` available.

**IMPORTANT:** You MUST call `await context.sync()` after making changes to apply them.

**SETUP:** The user must have the Excel add-in open and connected to Claude Desktop.

**Multiple Workbooks:** Use the workbook parameter to target a specific workbook when
multiple are connected. Use list_connected_workbooks to see available workbooks.

**Display Message:** The display_message parameter shows a brief status in the add-in UI
describing what the code does (e.g., "Calculate sum", "Create chart").

Example:
```
// Write to cell A1
context.workbook.worksheets.getActiveWorksheet().getRange("A1").values = [["Hello"]];
await context.sync();
```

Example reading data:
```
const range = context.workbook.worksheets.getActiveWorksheet().getRange("A1:B10");
range.load("values");
await context.sync();
range.values; // Returns the data
```
````
