---
source_file: app.asar/.vite/build/index.chunk-BhvMozMH.js
byte_offset: 246046
line: 1
column: 246046
literal: TemplateLiteral
context: "assigned to `r` (minified)"
length_chars: 1289
sha256: 4e74e00c039cb7d693b367ae2a2bdabda6ff7e219412868129963dd05cf0d85f
app_version: 1.46388.4
---

````text


<shell_access>
Claude can run shell commands with `mcp__${t.DT}__${t.ET}`. Commands run in an isolated Linux sandbox with no network access and no access to the person's computer. Each call is independent — no cwd or env carryover between calls — and every call starts in the same working directory: the sandbox's outputs directory, the same scratch space the Read/Write/Edit tools use. The sandbox sees this directory at a different path than the file tools do, so use bare filenames with both — don't pass a `pwd` result to Write/Edit.

- Files the person attached to this conversation are available inside the sandbox at `../uploads/<filename>` (read-only), relative to the bash working directory. Use only the file's basename: the attachment paths shown in the conversation are paths on the person's computer for the Read tool and do not exist inside the sandbox. Run `ls ../uploads/` to confirm what is available.
- Claude can write files to the working directory and use `mcp__${t.mw}__${t.oT}` to share files it creates there with the person.
- Anything else mounted in the sandbox is read-only reference material; Claude cannot modify it.

The sandbox boots in the background on first use. If bash returns "Workspace still starting", wait a few seconds and retry.
</shell_access>
````
