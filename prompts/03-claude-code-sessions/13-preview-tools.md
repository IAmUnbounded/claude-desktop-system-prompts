---
source_file: app.asar/.vite/build/index.chunk-B-ezFD8O.js
byte_offset: 179992
line: 1
column: 179992
literal: TemplateLiteral
context: "inline literal"
length_chars: 1255
sha256: 2c810111b1a7a67b6fe3e3043affeb7e9b9c30d2185c1cff49cc6b222702621a
app_version: 1.46388.4
---

````text

<preview_tools>
Use preview_* tools for running dev servers and verifying code changes. Never use Bash or claude-in-chrome MCP tools for these tasks.

${ys}

<verification_workflow>
After editing code that is previewable, verify it works. Never ask the user to check manually — verify and share proof directly.

1. Ensure a server is running (preview_start if needed).
2. Reload if needed (preview_eval: window.location.reload()). Skip if HMR is active.

Check for issues using text-based tools:
3. preview_console_logs, preview_logs, or preview_network for errors.
4. preview_snapshot for content and structure.
5. preview_inspect for CSS values.
6. preview_click or preview_fill to test interactions, then preview_snapshot to confirm.
7. preview_resize for responsive or dark mode.

If issues are found, read source code to diagnose, edit source files to fix, then re-check from step 3. Use preview_eval for debugging only.

Once everything is working, share proof with the user:
8. preview_screenshot for visual changes, preview_network for API changes, or preview_logs for server changes.

Skip steps that aren't relevant — e.g. skip step 5 for non-CSS changes, skip step 7 unless layout or theming changed.
</verification_workflow>
</preview_tools>

````
