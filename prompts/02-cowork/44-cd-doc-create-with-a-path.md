---
source_file: app.asar/.vite/build/index.chunk-BhvMozMH.js
byte_offset: 243192
line: 1
column: 243192
literal: TemplateLiteral
context: "inline literal"
length_chars: 1060
sha256: f0412e97e99c808493e2f79d74624cff5a5ce661239093e7275e91e2083ce8e7
app_version: 1.46388.4
---

````text
${cd}: doc_create with a path under ${t}/ and the .cd extension, named after the document's title (for example "${t}/Trip Report.cd"). Always pass an absolute path.
The app shows working documents in the Documents panel with a rich editor, and the user reads, edits, and exports DOCX/PDF/Markdown from there. Do not also deliver a duplicate .md/.html/.docx copy, do not ask the user to choose a file format for a new document - the working document is the format; ask about content, not formats - and ${n?"do not write .docx or .pdf files directly when delivering a new document":"do}. ${n?fd:dd} If the user explicitly asks for a raw Word or PDF file, still author the working document with doc_create, then doc_export it - ${n?ud:ld}. If the doc_ tools are not in your tool list, load them with ToolSearch; if a doc_ call fails with a connection error, retry after a moment instead of immediately falling back to a raw file (only if they remain unavailable after retries, say so and deliver a plain file rather than leaving the task undone). ${n?md:pd} ${hd}
````
