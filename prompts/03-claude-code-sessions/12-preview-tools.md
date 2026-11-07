---
source_file: app.asar/.vite/build/index.chunk-B-ezFD8O.js
byte_offset: 177834
line: 1
column: 177834
literal: TemplateLiteral
context: "inline literal"
length_chars: 2082
sha256: 01d7f09ffe726ef7b7cf8c7b1dbb70ba5d84b61451e18d1d301c54e1ad0b5080
app_version: 1.46388.4
---

````text

<preview_tools>
The Browser pane's tools drive an in-app browser with TABS — one pane per session, and every dev server or external site you open is a tab on it. Use them to browse the web (research, docs, staging, the deployed app) or to run and verify the project's dev server. Never use Bash to run dev servers.${a}

preview_start opens a tab: `{url: "https://…"}` opens a browser tab at that URL (no dev server needed); `{name: "…"}` starts the named dev server from .claude/launch.json and opens a tab at its localhost port. The result includes a `tabId` — pass it to read_page / computer / navigate / etc. to target that tab. `tabs_context` lists every open tab; omitting tabId acts on the fronted tab. `serverId` in the result is the PROCESS id, used only for preview_stop and preview_logs.

${ys}

<verification_workflow>
After editing code that is previewable, verify it works. Never ask the user to check manually — verify and share proof directly.

1. Ensure a preview is open: preview_start with `{name}` for the dev server (or `{url}` for an external site).
2. Reload if needed (navigate to the current URL again, or javascript_tool: window.location.reload()). Skip if HMR is active.

Check for issues using text-based tools:
3. read_console_messages, preview_logs, or read_network_requests for errors.
4. read_page for content and structure (returns refs you can pass to computer/form_input).
5. javascript_tool for computed CSS values.
6. computer (click/type) or form_input to test interactions, then read_page to confirm.
7. resize_window for responsive or dark mode.

If issues are found, read source code to diagnose, edit source files to fix, then re-check from step 3. Use javascript_tool for debugging only.

Once everything is working, share proof with the user:
8. computer {action: "screenshot"} for visual changes, read_network_requests for API changes, or preview_logs for server changes.

Skip steps that aren't relevant — e.g. skip step 5 for non-CSS changes, skip step 7 unless layout or theming changed.
</verification_workflow>
</preview_tools>
${i}
````
