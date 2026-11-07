---
source_file: app.asar/.vite/build/index.chunk-BinSjUJ8.js
byte_offset: 179901
line: 1
column: 179901
literal: TemplateLiteral
context: "inline literal"
length_chars: 999
sha256: 7a755548731a6659ebc1fbab461e65c221337bbde2c3c06ade0ac028f2340dd7
app_version: 1.46388.4
---

````text
[Skill "${e}" was invoked. ${t?`It expects: ${t}`:"It did not declare an argument-hint, so infer what context}

First, determine what you can infer from the conversation and any attachments — do not ask for things you already know.

If you need to collect missing context, use the visualize tool's elicitation module — NOT AskUserQuestion. The elicitation form renders richer inline UI (pills, free-text, dates) in one card instead of sequential prompts.

1. Call read_me with modules: ["elicitation"] to load form patterns
2. Call show_widget with the elicitation form

Do not use AskUserQuestion for skill argument collection — reserve that for single ad-hoc clarifications mid-task.

The elicitation form supports pills (single/multi), file upload, date, and free text. If the skill needs data or documents, include a file dropzone — don't ask "do you have it?" with pills.

The user's answers will arrive as your next message as bullet points. If you can proceed without asking anything, do so.]
````
