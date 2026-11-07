# Claude Desktop system prompts (v1.46388.4, macOS)

**210 model-facing prompts, tool descriptions and injected messages** (328,264 characters), extracted statically from the Claude Desktop app bundle (`Claude.app/Contents/Resources/app.asar`, Electron, version **1.46388.4**, built 2026-09-05).

> **Unofficial.** Not affiliated with or endorsed by Anthropic. All prompt text is © Anthropic PBC and is reproduced here, as shipped in the publicly distributed app, for research and transparency. Text inside `${…}` is a template placeholder the app fills in at runtime (minified expression shown).

## Highlights

- **Cowork agent system prompt** (`01-core-system-prompts/01-…`, 37.8 KB): tells Claude it runs in a lightweight Linux VM, is built on Claude Code and the Claude Agent SDK but "is NOT Claude Code", and "should not mention implementation details like this".
- **`<claude_behavior>`** block (17.6 KB): refusal handling, child safety, legal/financial advice, formatting, user wellbeing, even-handedness, acting vs. clarifying.
- **Auto-mode permission rubric** (`04-…`): per-tool categories ("Cowork Delete Grant", "Desktop Session Archive", …) each with a "**must name:**" rule, written for a reviewer that "sees only name and arguments; assume no human reviews the call".
- **Dispatch orchestrator**, Remote Control, side-chat, session-title generator, memory consolidation, computer-use teach mode, iOS/Android simulator tools.

## How this was extracted

1. `npx @electron/asar extract /Applications/Claude.app/Contents/Resources/app.asar app`
2. `node scripts/extract_prompts.mjs prompts.json app <bundle files…>`: parses every bundle with `@babel/parser` (nothing is executed), walks every string and template literal, and keeps prose-like literals of at least 280 characters with instruction markers.
3. Deduplicated by SHA-256, then reviewed by hand. Excluded: admin-policy help text, Claude Code settings-schema docs, i18n strings, HTML pages and injected JS (not model-facing).

Each file's front matter records the source chunk, byte offset, line and column, context (object key, tool name or minified variable), length and SHA-256, so every entry can be checked against your own copy of the app. Minified variable names and chunk hashes change between builds.

Prompts are assembled at runtime from these pieces plus per-session data, so the exact final prompt a session receives isn't reproduced here.

## Index


### Core system prompts

| File | Chars | Begins with |
|---|---:|---|
| [`01-cowork-agent-system-prompt.md`](prompts/01-core-system-prompts/01-cowork-agent-system-prompt.md) | 37,811 | <application_details> Claude is operating as an agent inside the Claude desktop app. This … |
| [`02-claude-behavior.md`](prompts/01-core-system-prompts/02-claude-behavior.md) | 17,598 | <claude_behavior> <refusal_handling> Claude can discuss virtually any topic factually and … |
| [`03-chat-mode-application-details.md`](prompts/01-core-system-prompts/03-chat-mode-application-details.md) | 1,615 | <application_details> Claude is powering Chat mode, a feature of the Claude desktop app. C… |
| [`04-chat-surface-a.md`](prompts/01-core-system-prompts/04-chat-surface-a.md) | 792 | This is a conversational chat surface. Claude can read files the user attaches to this con… |
| [`05-chat-surface-b.md`](prompts/01-core-system-prompts/05-chat-surface-b.md) | 891 | This is a conversational chat surface. Claude can read files the user attaches to this con… |
| [`06-chat-shell-access.md`](prompts/01-core-system-prompts/06-chat-shell-access.md) | 1,289 | <shell_access> Claude can run shell commands with `mcp__${t.DT}__${t.ET}`. Commands run in… |
| [`07-claude-p-one-shot-cli.md`](prompts/01-core-system-prompts/07-claude-p-one-shot-cli.md) | 961 | <application_details> Claude is answering a one-shot `claude -p "<prompt>"` CLI call from … |
| [`08-cowork-dashboard-synthesis.md`](prompts/01-core-system-prompts/08-cowork-dashboard-synthesis.md) | 800 | <application_details> Claude is powering a Cowork dashboard's synthesis call. A dashboard … |
| [`09-organization-instructions-wrapper.md`](prompts/01-core-system-prompts/09-organization-instructions-wrapper.md) | 429 | CRITICAL: The following are organization-level instructions set by the user's administrato… |
| [`10-org-disabled-external-tools.md`](prompts/01-core-system-prompts/10-org-disabled-external-tools.md) | 462 | IMPORTANT: This user's organization administrator has disabled Claude's TOOLS for external… |

### Cowork (agent in a Linux VM): environment sections and Cowork tools

| File | Chars | Begins with |
|---|---:|---|
| [`01-first-decide-whether-the-user-wants.md`](prompts/02-cowork/01-first-decide-whether-the-user-wants.md) | 2,130 | First, decide whether the user wants to **create a new** scheduled task or **change an exi… |
| [`02-setup-cowork.md`](prompts/02-cowork/02-setup-cowork.md) | 2,883 | # Setup Cowork Help the user get Cowork configured for their work. A few steps — role, plu… |
| [`03-memory-consolidation.md`](prompts/02-cowork/03-memory-consolidation.md) | 1,821 | # Memory Consolidation You're doing a reflective pass over what you've learned about this … |
| [`04-show-me-where-this-session-s.md`](prompts/02-cowork/04-show-me-where-this-session-s.md) | 1,133 | Show me where this session's tokens went. The transcript is a *.jsonl file at `$HOME/mnt/.… |
| [`05-skills-instructions.md`](prompts/02-cowork/05-skills-instructions.md) | 1,102 | <skills_instructions> When users ask you to perform tasks, check if any of the available s… |
| [`06-scheduled-tasks.md`](prompts/02-cowork/06-scheduled-tasks.md) | 1,341 | ## Scheduled tasks The `${t.VT}` tool sets up work that runs automatically — on a repeatin… |
| [`07-artifacts.md`](prompts/02-cowork/07-artifacts.md) | 933 | ## Artifacts (live, persisted HTML views) The `mcp__${t.mw}__${t.gw}` tool saves a self-co… |
| [`08-localstorage-persists-across-reloads-and-app.md`](prompts/02-cowork/08-localstorage-persists-across-reloads-and-app.md) | 512 | `localStorage` persists across reloads and app restarts, so you can remember the user's fi… |
| [`09-probe-before-you-build-before-writing.md`](prompts/02-cowork/09-probe-before-you-build-before-writing.md) | 1,108 | **Probe before you build.** Before writing an artifact that calls a connector tool, call t… |
| [`10-claude-design.md`](prompts/02-cowork/10-claude-design.md) | 1,135 | ## Claude Design (shared visual canvas) The `ClaudeDesign` tool creates and edits designs … |
| [`11-dispatch-routing-work-to-task-sessions.md`](prompts/02-cowork/11-dispatch-routing-work-to-task-sessions.md) | 3,720 | ## Dispatch: routing work to task sessions You are the Dispatch orchestrator. The ONLY way… |
| [`12-exploring-the-host-filesystem.md`](prompts/02-cowork/12-exploring-the-host-filesystem.md) | 583 | ## Exploring the host filesystem A read-only index of the host filesystem is mounted at `$… |
| [`13-each-bash-call-starts-in-d.md`](prompts/02-cowork/13-each-bash-call-starts-in-d.md) | 280 | Each bash call starts in `${D}`; that directory and `/tmp` exist only inside the Linux env… |
| [`14-filesystem-the-agent-runs-in-a.md`](prompts/02-cowork/14-filesystem-the-agent-runs-in-a.md) | 781 | Filesystem: the agent runs in a sandbox VM under /sessions/<name>/. Paths there outside mn… |
| [`15-filesystem-the-agent-runs-directly-on.md`](prompts/02-cowork/15-filesystem-the-agent-runs-directly-on.md) | 1,030 | Filesystem: the agent runs directly on the user's computer, not in a VM, so file tools (Re… |
| [`16-imported-knowledge.md`](prompts/02-cowork/16-imported-knowledge.md) | 469 | <imported_knowledge> The user has attached knowledge from Claude.ai. It is mounted read-on… |
| [`17-staged-skill-stub.md`](prompts/02-cowork/17-staged-skill-stub.md) | 956 | --- ${o} --- This is a staged stub. The full skill lives on the user's device and was not … |
| [`18-start-a-new-claude-code-session.md`](prompts/02-cowork/18-start-a-new-claude-code-session.md) | 1,033 | Start a NEW Claude Code session on the host machine, outside the Cowork VM. The session ru… |
| [`19-list-host-workspace-paths-the-user.md`](prompts/02-cowork/19-list-host-workspace-paths-the-user.md) | 459 | List host workspace paths the user has opened in Claude Code. Use these as cwd values for … |
| [`20-run-a-shell-command-on-the.md`](prompts/02-cowork/20-run-a-shell-command-on-the.md) | 578 | Run a shell command on the user's local machine, inside the desktop Cowork workspace (an i… |
| [`21-when-that-is-this-session-s.md`](prompts/02-cowork/21-when-that-is-this-session-s.md) | 2,241 | ` when that is this session's scratch folder (get_device_info reports it as scratchFolder;… |
| [`22-suggest-launching-a-dedicated-claude-code.md`](prompts/02-cowork/22-suggest-launching-a-dedicated-claude-code.md) | 518 | Suggest launching a dedicated Claude Code session for a coding task. Use this when the use… |
| [`23-surface-recurring-multi-step-procedures-from.md`](prompts/02-cowork/23-surface-recurring-multi-step-procedures-from.md) | 352 | Surface recurring multi-step procedures from the user's memory as skill proposals. Render-… |
| [`24-request-access-to-a-directory-on.md`](prompts/02-cowork/24-request-access-to-a-directory-on.md) | 402 | Request access to a directory on the user's computer. If you know the path, pass it — the … |
| [`25-present-files-to-the-user-with.md`](prompts/02-cowork/25-present-files-to-the-user-with.md) | 393 | Present files to the user with interactive cards in the chat. Use this after creating file… |
| [`26-for-live-data-from-the-user.md`](prompts/02-cowork/26-for-live-data-from-the-user.md) | 1,860 | For live data from the user's connectors, first call each tool once in this session to ver… |
| [`27-render-a-writing-draft-as-an.md`](prompts/02-cowork/27-render-a-writing-draft-as-an.md) | 1,050 | Render a writing draft as an inline preview card in the chat. Call this whenever you prese… |
| [`28-create-a-scheduled-task-that-runs.md`](prompts/02-cowork/28-create-a-scheduled-task-that-runs.md) | 2,302 | Create a scheduled task that runs automatically — on a recurring schedule or once at a fut… |
| [`29-update-an-existing-scheduled-task-taskid.md`](prompts/02-cowork/29-update-an-existing-scheduled-task-taskid.md) | 1,118 | Update an existing scheduled task. taskId must be an exact ID from list_scheduled_tasks. T… |
| [`30-the-entries-marked-savebackblocked-are-staged.md`](prompts/02-cowork/30-the-entries-marked-savebackblocked-are-staged.md) | 770 | The entries marked saveBackBlocked are staged like the others, but saving changes back to … |
| [`31-one-or-more-of-these-folders.md`](prompts/02-cowork/31-one-or-more-of-these-folders.md) | 459 | One or more of these folders is in a location this device's OS protects (on macOS: Desktop… |
| [`32-file-staging-was-denied-because-this.md`](prompts/02-cowork/32-file-staging-was-denied-because-this.md) | 283 | File staging was denied because this device's sign-in is stale or the device is no longer … |
| [`33-i-can-t-be-mounted-into.md`](prompts/02-cowork/33-i-can-t-be-mounted-into.md) | 328 | ${i} can't be mounted into device_bash on this device (network-drive and UNC folders stay … |
| [`34-copy-output-files-from-this-container.md`](prompts/02-cowork/34-copy-output-files-from-this-container.md) | 307 | Copy output files from this container back to the user's device. Call this for every file … |
| [`35-type-is-file-dir-symlink-other.md`](prompts/02-cowork/35-type-is-file-dir-symlink-other.md) | 422 | `type` is "file" \| "dir" \| "symlink" \| "other"; `size` (bytes) and `mtimeMs` are set for r… |
| [`36-each-devicepath-must-be-absolute-is.md`](prompts/02-cowork/36-each-devicepath-must-be-absolute-is.md) | 420 | Each devicePath must be absolute (~ is the user's home folder on this device) and resolve … |
| [`37-list-all-cowork-artifacts-on-a.md`](prompts/02-cowork/37-list-all-cowork-artifacts-on-a.md) | 363 | List all Cowork artifacts on a connected Claude desktop app. Returns each artifact's id, n… |
| [`38-create-a-new-persisted-cowork-artifact.md`](prompts/02-cowork/38-create-a-new-persisted-cowork-artifact.md) | 705 | Create a new persisted Cowork artifact on a connected Claude desktop app. This is the defa… |
| [`39-update-an-existing-cowork-artifact-on.md`](prompts/02-cowork/39-update-an-existing-cowork-artifact-on.md) | 584 | Update an existing Cowork artifact on a connected Claude desktop app. Call list_artifacts … |
| [`40-spends-the-user-s-attention-so.md`](prompts/02-cowork/40-spends-the-user-s-attention-so.md) | 556 | spends the user's attention, so ask exactly once, for the minimal set of folders the task … |
| [`41-ask-the-user-for-permission-to.md`](prompts/02-cowork/41-ask-the-user-for-permission-to.md) | 955 | Ask the user for permission to delete files in one or more of this session's connected fol… |
| [`42-existing-word-files-are-the-exception.md`](prompts/02-cowork/42-existing-word-files-are-the-exception.md) | 557 | Existing Word files are the exception: a .docx the user uploaded or already has is an ordi… |
| [`43-exception-when-your-tool-list-also.md`](prompts/02-cowork/43-exception-when-your-tool-list-also.md) | 449 | Exception: when your tool list also has a first-party connector for living pages that peop… |
| [`44-cd-doc-create-with-a-path.md`](prompts/02-cowork/44-cd-doc-create-with-a-path.md) | 1,060 | ${cd}: doc_create with a path under ${t}/ and the .cd extension, named after the document'… |

### Claude Code in Desktop: session prompts and session tools

| File | Chars | Begins with |
|---|---:|---|
| [`01-framebuffer-tools.md`](prompts/03-claude-code-sessions/01-framebuffer-tools.md) | 481 | <framebuffer_tools> The framebuffer_* tools connect to a remote screen (a VM, an emulator,… |
| [`02-use-framebuffer-screenshot-to-see-the.md`](prompts/03-claude-code-sessions/02-use-framebuffer-screenshot-to-see-the.md) | 760 | Use framebuffer_screenshot to see the screen, then framebuffer_click / framebuffer_type / … |
| [`03-when-referencing-files-in-your-responses.md`](prompts/03-claude-code-sessions/03-when-referencing-files-in-your-responses.md) | 590 | When referencing files in your responses, format them as markdown links so the user can cl… |
| [`04-terminal-dialog-slash-commands-such-as.md`](prompts/03-claude-code-sessions/04-terminal-dialog-slash-commands-such-as.md) | 373 | Terminal-dialog slash commands such as `/permissions`, `/config`, `/doctor`, and `/hooks` … |
| [`05-auto-fix-pull-requests-is-enabled.md`](prompts/03-claude-code-sessions/05-auto-fix-pull-requests-is-enabled.md) | 866 | "Auto-fix pull requests" is enabled for this session. The desktop app is watching this ses… |
| [`06-starting-other-sessions.md`](prompts/03-claude-code-sessions/06-starting-other-sessions.md) | 3,485 | ## Starting other sessions Work that should not happen here goes to its own session — `mcp… |
| [`07-you-are-a-session-started-from-another-session.md`](prompts/03-claude-code-sessions/07-you-are-a-session-started-from-another-session.md) | 976 | ## You are a session started from another session Your first message is the task another C… |
| [`08-one-question-is-yours-to-ask.md`](prompts/03-claude-code-sessions/08-one-question-is-yours-to-ask.md) | 409 | One question is yours to ask with a tool, only when the moment comes (it shows the user a … |
| [`09-remote-control-session.md`](prompts/03-claude-code-sessions/09-remote-control-session.md) | 1,360 | ${r?`The user started this session from another device (a phone or browser, throug} It sta… |
| [`10-if-you-can-t-determine-the.md`](prompts/03-claude-code-sessions/10-if-you-can-t-determine-the.md) | 411 | If you can't determine the path, ask the user for it in the conversation; do not call `req… |
| [`11-the-user-s-bracketed-mentions-refer.md`](prompts/03-claude-code-sessions/11-the-user-s-bracketed-mentions-refer.md) | 470 | The user's bracketed @-mentions refer to other Claude Code sessions on this machine, count… |
| [`12-preview-tools.md`](prompts/03-claude-code-sessions/12-preview-tools.md) | 2,082 | <preview_tools> The Browser pane's tools drive an in-app browser with TABS — one pane per … |
| [`13-preview-tools.md`](prompts/03-claude-code-sessions/13-preview-tools.md) | 1,255 | <preview_tools> Use preview_* tools for running dev servers and verifying code changes. Ne… |
| [`14-output-style-drafter.md`](prompts/03-claude-code-sessions/14-output-style-drafter.md) | 1,172 | You draft "output styles" for Claude Code. An output style is a markdown file whose body r… |
| [`15-side-chat.md`](prompts/03-claude-code-sessions/15-side-chat.md) | 446 | You are running in a side chat — a lightweight fork of the main conversation. The main age… |
| [`16-this-session-started-directly-in-the.md`](prompts/03-claude-code-sessions/16-this-session-started-directly-in-the.md) | 1,233 | This session started directly in the user's checkout; the desktop app did not create a wor… |
| [`17-ci-monitor-event.md`](prompts/03-claude-code-sessions/17-ci-monitor-event.md) | 749 | <ci-monitor-event>"Auto-fix pull requests" was just enabled for this session. The desktop … |
| [`18-auto-fix-pull-requests-is-enabled.md`](prompts/03-claude-code-sessions/18-auto-fix-pull-requests-is-enabled.md) | 863 | "Auto-fix pull requests" is enabled for this session. The desktop app is watching this ses… |
| [`19-request-access-to-a-directory-on.md`](prompts/03-claude-code-sessions/19-request-access-to-a-directory-on.md) | 304 | Request access to a directory on the user's computer that is outside your current working … |
| [`20-move-this-session-to-a-different.md`](prompts/03-claude-code-sessions/20-move-this-session-to-a-different.md) | 499 | Move this session to a different project directory on the user's computer. Access is grant… |
| [`21-ask-the-user-whether-your-changes.md`](prompts/03-claude-code-sessions/21-ask-the-user-whether-your-changes.md) | 444 | Ask the user whether your changes should go on a new Git branch or land on the branch that… |
| [`22-list-the-user-s-other-ccd.md`](prompts/03-claude-code-sessions/22-list-the-user-s-other-ccd.md) | 930 | List the user's other CCD sessions (active and optionally archived). Returns a compact JSO… |
| [`23-read-the-recent-transcript-of-another.md`](prompts/03-claude-code-sessions/23-read-the-recent-transcript-of-another.md) | 341 | Read the recent transcript of another CCD session. Returns a compact plaintext rendering o… |
| [`24-archive-a-ccd-session-archiving-stops.md`](prompts/03-claude-code-sessions/24-archive-a-ccd-session-archiving-stops.md) | 1,049 | Archive a CCD session. Archiving stops the session's process and (by default) cleans up it… |
| [`25-rename-a-ccd-session-another-session.md`](prompts/03-claude-code-sessions/25-rename-a-ccd-session-another-session.md) | 502 | Rename a CCD session — another session, or this one. Use it when the user asks to rename a… |
| [`26-bind-this-session-to-a-pr.md`](prompts/03-claude-code-sessions/26-bind-this-session-to-a-pr.md) | 414 | Bind this session to a PR the PR bar did not pick up (fork remote, GitHub Enterprise host,… |
| [`27-start-a-separate-claude-code-session.md`](prompts/03-claude-code-sessions/27-start-a-separate-claude-code-session.md) | 1,257 | Start a separate Claude Code session for a task while you stay with the user (when: see "S… |
| [`28-fresh-only-cloud-run-it-as.md`](prompts/03-claude-code-sessions/28-fresh-only-cloud-run-it-as.md) | 439 | "fresh" only. "cloud" = run it as a cloud session (keeps going when this computer sleeps).… |
| [`29-move-the-task-you-are-in.md`](prompts/03-claude-code-sessions/29-move-the-task-you-are-in.md) | 538 | Move the task you are in the middle of into its own session (a fork of this conversation p… |
| [`30-flag-an-out-of-scope-issue.md`](prompts/03-claude-code-sessions/30-flag-an-out-of-scope-issue.md) | 664 | Flag an out-of-scope issue for a separate background task. Call this when you notice somet… |
| [`31-withdraw-a-background-task-chip-you.md`](prompts/03-claude-code-sessions/31-withdraw-a-background-task-chip-you.md) | 565 | Withdraw a background-task chip you previously created with spawn_task. Call this when a s… |
| [`32-withdraw-a-proposal-you-made-with.md`](prompts/03-claude-code-sessions/32-withdraw-a-proposal-you-made-with.md) | 491 | Withdraw a proposal you made with start_session (initiation "own_initiative") that the use… |
| [`33-mark-the-start-of-a-new.md`](prompts/03-claude-code-sessions/33-mark-the-start-of-a-new.md) | 699 | Mark the start of a new chapter in this session. Call this when the work shifts to a meani… |
| [`34-c-has-n-length-new-review.md`](prompts/03-claude-code-sessions/34-c-has-n-length-new-review.md) | 774 | ${c} has ${n.length} new review ${e}${o} Please address the feedback and push a fix — but … |
| [`35-auto-fix-pull-requests-is-watching.md`](prompts/03-claude-code-sessions/35-auto-fix-pull-requests-is-watching.md) | 697 | "Auto-fix pull requests" is watching ${c} and detected the following. The CI and merge sta… |
| [`36-session-title-generator.md`](prompts/03-claude-code-sessions/36-session-title-generator.md) | 1,518 | You are coming up with a succinct title for an agent chat session based on the provided de… |
| [`37-session-title-and-branch-generator.md`](prompts/03-claude-code-sessions/37-session-title-and-branch-generator.md) | 1,942 | You are coming up with a succinct title and git branch name for a coding session based on … |
| [`38-dev-server-command-detector.md`](prompts/03-claude-code-sessions/38-dev-server-command-detector.md) | 1,287 | You are detecting a project's dev-server command(s) for a preview pane. You have read-only… |

### Auto-mode permission rubric (what counts as the user explicitly authorizing a tool call)

| File | Chars | Begins with |
|---|---:|---|
| [`01-desktop-scheduled-task-tools-you-see.md`](prompts/04-auto-mode-permission-rubric/01-desktop-scheduled-task-tools-you-see.md) | 654 | Desktop scheduled-task tools (you see only name and arguments; assume no human reviews the… |
| [`02-desktop-session-tools-same-caveat-name.md`](prompts/04-auto-mode-permission-rubric/02-desktop-session-tools-same-caveat-name.md) | 3,363 | Desktop session tools (same caveat: name and arguments only, no human review): • ${n.Nn} s… |
| [`03-desktop-scheduled-task-write-named-specifics.md`](prompts/04-auto-mode-permission-rubric/03-desktop-scheduled-task-write-named-specifics.md) | 751 | Desktop Scheduled Task Write [named+specifics — **must name:** the schedule (recurrence or… |
| [`04-desktop-session-archive-named-specifics-must.md`](prompts/04-auto-mode-permission-rubric/04-desktop-session-archive-named-specifics-must.md) | 790 | Desktop Session Archive [named+specifics — **must name:** that session (by title, branch, … |
| [`05-desktop-pull-request-auto-merge-named.md`](prompts/04-auto-mode-permission-rubric/05-desktop-pull-request-auto-merge-named.md) | 597 | Desktop Pull Request Auto Merge [named+specifics — **must name:** auto-merge (or "merge it… |
| [`06-desktop-pull-request-monitor-named-specifics.md`](prompts/04-auto-mode-permission-rubric/06-desktop-pull-request-monitor-named-specifics.md) | 575 | Desktop Pull Request Monitor [named+specifics — **must name:** the switch (Auto-fix, "watc… |
| [`07-desktop-pull-request-bind-named-specifics.md`](prompts/04-auto-mode-permission-rubric/07-desktop-pull-request-bind-named-specifics.md) | 761 | Desktop Pull Request Bind [named+specifics — **must name:** that pull request (its URL or … |
| [`08-desktop-pull-request-unbind-named-specifics.md`](prompts/04-auto-mode-permission-rubric/08-desktop-pull-request-unbind-named-specifics.md) | 384 | Desktop Pull Request Unbind [named+specifics — **must name:** that pull request and removi… |
| [`09-desktop-sidebar-group-delete-named-specifics.md`](prompts/04-auto-mode-permission-rubric/09-desktop-sidebar-group-delete-named-specifics.md) | 339 | Desktop Sidebar Group Delete [named+specifics — **must name:** that group and deleting or … |
| [`10-desktop-sidebar-changes-to-other-sessions.md`](prompts/04-auto-mode-permission-rubric/10-desktop-sidebar-changes-to-other-sessions.md) | 580 | Desktop Sidebar Changes To Other Sessions [named+specifics — **must name:** the group bein… |
| [`11-desktop-finished-side-sessions-n-nn.md`](prompts/04-auto-mode-permission-rubric/11-desktop-finished-side-sessions-n-nn.md) | 575 | Desktop Finished Side Sessions: ${n.Nn} on a session_id that a prior ${n.Gt} tool_use in t… |
| [`12-cowork-built-in-tools-you-see.md`](prompts/04-auto-mode-permission-rubric/12-cowork-built-in-tools-you-see.md) | 969 | Cowork built-in tools (you see only name and arguments; assume no human reviews the call):… |
| [`13-cowork-delete-grant-named-specifics-must.md`](prompts/04-auto-mode-permission-rubric/13-cowork-delete-grant-named-specifics-must.md) | 465 | Cowork Delete Grant [named+specifics — **must name:** deleting files in that connected fol… |
| [`14-cowork-folder-access-named-specifics-must.md`](prompts/04-auto-mode-permission-rubric/14-cowork-folder-access-named-specifics-must.md) | 570 | Cowork Folder Access [named+specifics — **must name:** that folder or something inside it]… |
| [`15-cowork-skill-persistence-named-specifics-must.md`](prompts/04-auto-mode-permission-rubric/15-cowork-skill-persistence-named-specifics-must.md) | 544 | Cowork Skill Persistence [named+specifics — **must name:** saving a skill, or remembering … |
| [`16-cowork-scheduled-task-write-named-specifics.md`](prompts/04-auto-mode-permission-rubric/16-cowork-scheduled-task-write-named-specifics.md) | 577 | Cowork Scheduled Task Write [named+specifics — **must name:** the schedule (recurrence or … |
| [`17-cowork-local-deliverables-reading-connected-folders.md`](prompts/04-auto-mode-permission-rubric/17-cowork-local-deliverables-reading-connected-folders.md) | 394 | Cowork Local Deliverables: reading connected folders or mnt/uploads/ for the user's task a… |

### Computer use: tool descriptions, guidance, and messages returned to the model

| File | Chars | Begins with |
|---|---:|---|
| [`01-i-o-is-granted-at-tier.md`](prompts/05-computer-use/01-i-o-is-granted-at-tier.md) | 428 | "${I(o)}" is granted at tier "click" — typing, key presses, and paste require tier "full".… |
| [`02-per-app-background-control-the-app.md`](prompts/05-computer-use/02-per-app-background-control-the-app.md) | 438 | Per-app background control (the app_* tools) was just turned off for this device by a remo… |
| [`03-you-requested-access-to-claude-s.md`](prompts/05-computer-use/03-you-requested-access-to-claude-s.md) | 362 | You requested access to Claude's own application. Claude cannot be granted control of its … |
| [`04-if-you-genuinely-need-this-restricted.md`](prompts/05-computer-use/04-if-you-genuinely-need-this-restricted.md) | 409 | If you genuinely need this restricted access, call request_access again right now, in THIS… |
| [`05-you-requested-access-to-a-browser.md`](prompts/05-computer-use/05-you-requested-access-to-a-browser.md) | 469 | You requested access to a browser. It is rare for this to be required: browser application… |
| [`06-the-user-saw-the-permission-prompt.md`](prompts/05-computer-use/06-the-user-saw-the-permission-prompt.md) | 328 | The user saw the permission prompt but macOS ${s.join(" and ")} permission(s) are still no… |
| [`07-r-i-doesn-t-don-t.md`](prompts/05-computer-use/07-r-i-doesn-t-don-t.md) | 451 | ${r} ${i?"doesn't":"don't"} match any installed or running application. The request was NO… |
| [`08-t-n-is-are-in-the.md`](prompts/05-computer-use/08-t-n-is-are-in-the.md) | 333 | ${t} ${n?"is":"are"} in the user's auto-deny list (Settings → Desktop app (General) → Comp… |
| [`09-t-n-is-are-blocked-by.md`](prompts/05-computer-use/09-t-n-is-are-blocked-by.md) | 391 | ${t} ${n?"is":"are"} blocked by policy for computer use. Requests for ${n?"this app":"thes… |
| [`10-the-user-saw-the-permission-prompt.md`](prompts/05-computer-use/10-the-user-saw-the-permission-prompt.md) | 334 | The user saw the permission prompt but macOS ${s.join(" and ")} permission(s) are still no… |
| [`11-request-access.md`](prompts/05-computer-use/11-request-access.md) | 615 | Request user permission to control a set of applications for this session. Must be called … |
| [`12-zoom.md`](prompts/05-computer-use/12-zoom.md) | 391 | Take a higher-resolution screenshot of a specific region of the last full-screen screensho… |
| [`13-computer-batch.md`](prompts/05-computer-use/13-computer-batch.md) | 934 | Execute a sequence of actions in ONE tool call. Each individual tool call requires a model… |
| [`14-save-the-images-produced-by-any.md`](prompts/05-computer-use/14-save-the-images-produced-by-any.md) | 282 | Save the images produced by any screenshot/zoom actions in this batch to disk so they can … |
| [`15-release-full-control.md`](prompts/05-computer-use/15-release-full-control.md) | 379 | Drop back to BACKGROUND control: releases the display lock (screen glow off) and clears th… |
| [`16-request-full-control.md`](prompts/05-computer-use/16-request-full-control.md) | 366 | Ask the user to approve full-screen control (screenshot, left_click, type, ...) for THIS S… |
| [`17-request-teach-access.md`](prompts/05-computer-use/17-request-teach-access.md) | 571 | Request permission to guide the user through a task step-by-step with on-screen tooltips. … |
| [`18-teach-step.md`](prompts/05-computer-use/18-teach-step.md) | 829 | Show one guided-tour tooltip and wait for the user to click Next. On Next, execute the act… |
| [`19-teach-batch.md`](prompts/05-computer-use/19-teach-batch.md) | 1,176 | Queue multiple teach steps in one tool call. Parallels computer_batch: N steps → one model… |
| [`20-the-user-declined-to-let-this.md`](prompts/05-computer-use/20-the-user-declined-to-let-this.md) | 409 | The user declined to let this session take over the screen. That's a separate consent from… |
| [`21-tiered-apps-some-apps-are-granted.md`](prompts/05-computer-use/21-tiered-apps-some-apps-are-granted.md) | 2,504 | **Tiered apps:** some apps are granted at a restricted tier based on their category — the … |
| [`22-app-access-all-approved-applications-are.md`](prompts/05-computer-use/22-app-access-all-approved-applications-are.md) | 1,206 | **App access:** all approved applications are granted at tier **"full"** — you can screens… |
| [`23-the-user-saw-the-enable-prompt.md`](prompts/05-computer-use/23-the-user-saw-the-enable-prompt.md) | 294 | The user saw the enable prompt and chose not to turn on Computer Use. Do not retry in this… |
| [`24-computer-use-screenshots-desktop-control-is.md`](prompts/05-computer-use/24-computer-use-screenshots-desktop-control-is.md) | 627 | Computer use (screenshots + desktop control) is available but not yet enabled. If a task n… |
| [`25-computer-use.md`](prompts/05-computer-use/25-computer-use.md) | 1,663 | ## Computer use (desktop control) You have a computer-use MCP available (tools named `mcp_… |
| [`26-loading-via-toolsearch-load-in-bulk.md`](prompts/05-computer-use/26-loading-via-toolsearch-load-in-bulk.md) | 386 | **Loading via ToolSearch — load in bulk, not one-by-one:** if computer-use tools are in th… |
| [`27-computer-use.md`](prompts/05-computer-use/27-computer-use.md) | 2,157 | ## Computer use (desktop control) You have a computer-use MCP available (tools named `mcp_… |
| [`28-loading-via-toolsearch-load-in-bulk.md`](prompts/05-computer-use/28-loading-via-toolsearch-load-in-bulk.md) | 1,022 | **Loading via ToolSearch — load in bulk, not one-by-one:** if computer-use tools are in th… |
| [`29-computer-use-navigation-memories.md`](prompts/05-computer-use/29-computer-use-navigation-memories.md) | 1,325 | ## Computer-use navigation memories When using computer-use tools (`screenshot`/`left_clic… |
| [`30-when-you-reproduce-or-write-a.md`](prompts/05-computer-use/30-when-you-reproduce-or-write-a.md) | 746 | When you reproduce or write a skill, do NOT replay the manual mouse/keyboard actions. For … |
| [`31-computer-use-is-not-currently-enabled.md`](prompts/05-computer-use/31-computer-use-is-not-currently-enabled.md) | 644 | - Computer use is not currently enabled for this user. For any step whose outcome you can'… |
| [`32-watch-record-demonstration.md`](prompts/05-computer-use/32-watch-record-demonstration.md) | 1,149 | The user recorded a demonstration of a desktop workflow (${e.actionCount} actions over ${(… |
| [`33-watch-record-events.md`](prompts/05-computer-use/33-watch-record-events.md) | 1,062 | The user recorded a watch-record demonstration of a desktop workflow (${e.eventCount} even… |
| [`34-computer-use-is-turned-on-but.md`](prompts/05-computer-use/34-computer-use-is-turned-on-but.md) | 283 | Computer use is turned on, but macOS ${t} permission is not yet granted to the Claude desk… |
| [`35-resolve-application-names-on-this-device.md`](prompts/05-computer-use/35-resolve-application-names-on-this-device.md) | 352 | Resolve application names on this device before requesting computer-use access. Returns th… |
| [`36-request-user-permission-to-control-applications.md`](prompts/05-computer-use/36-request-user-permission-to-control-applications.md) | 563 | Request user permission to control applications on this device for this session. `apps` MU… |

### In-app browser pane and Claude in Chrome tools

| File | Chars | Begins with |
|---|---:|---|
| [`01-in-app-browser.md`](prompts/06-browser/01-in-app-browser.md) | 1,908 | ## In-app browser Claude has an in-app browser (tools named `{{browserPrefix}}*`): a real … |
| [`02-browser-surfaces.md`](prompts/06-browser/02-browser-surfaces.md) | 700 | <browser_surfaces> {{#if preferChrome}}- Claude in Chrome (mcp__claude-in-chrome__*): the … |
| [`03-send-a-message-the-user-will.md`](prompts/06-browser/03-send-a-message-the-user-will.md) | 340 | Send a message the user will read verbatim. Use this for content they need to see exactly … |
| [`04-ask-the-person-to-let-the.md`](prompts/06-browser/04-ask-the-person-to-let-the.md) | 386 | Ask the person to let the browser pane use a site. Call this when a browser pane tool answ… |
| [`05-before-any-browser-action-you-must.md`](prompts/06-browser/05-before-any-browser-action-you-must.md) | 670 | Before any browser action, you MUST call ${e?`the ${e} tool`:"your ask-user tool (if avail… |
| [`06-upload-one-or-multiple-files-to.md`](prompts/06-browser/06-upload-one-or-multiple-files-to.md) | 322 | Upload one or multiple files to a file input element on the page. Do not click on file upl… |
| [`07-computer.md`](prompts/06-browser/07-computer.md) | 678 | Use a mouse and keyboard to interact with a web browser, and take screenshots. If you don'… |
| [`08-computer.md`](prompts/06-browser/08-computer.md) | 468 | For `screenshot` and `zoom` only. Scale factor in [${mrn}, ${hrn}] for the returned image;… |
| [`09-browser-batch.md`](prompts/06-browser/09-browser-batch.md) | 726 | Execute a sequence of browser tool calls in ONE round trip. Each item is {name, input} whe… |
| [`10-navigate.md`](prompts/06-browser/10-navigate.md) | 871 | Navigate to a URL, or go forward/back in browser history. tabId may be omitted for URL nav… |
| [`11-tabs-context-mcp.md`](prompts/06-browser/11-tabs-context-mcp.md) | 396 | Get context information about the current MCP tab group. Returns all tab IDs inside the gr… |
| [`12-tabs-create-mcp.md`](prompts/06-browser/12-tabs-create-mcp.md) | 425 | Creates a new empty tab in the MCP tab group. CRITICAL: You must get the context using tab… |
| [`13-switch-browser.md`](prompts/06-browser/13-switch-browser.md) | 383 | Send a connection request to every Chrome browser with the extension installed and wait (u… |
| [`14-the-t-call-was-never-delivered.md`](prompts/06-browser/14-the-t-call-was-never-delivered.md) | 335 | The "${t}" call was never delivered to the Chrome extension: the computer running that bro… |
| [`15-the-t-tool-did-not-respond.md`](prompts/06-browser/15-the-t-tool-did-not-respond.md) | 311 | The "${t}" tool did not respond in time. The Chrome extension is connected but the page ma… |
| [`16-the-t-tool-call-failed-because.md`](prompts/06-browser/16-the-t-tool-call-failed-because.md) | 391 | The "${t}" tool call failed because the Chrome extension disconnected mid-operation. This … |
| [`17-claude-in-chrome-is-not-connected.md`](prompts/06-browser/17-claude-in-chrome-is-not-connected.md) | 573 | ⚠️ **Claude in Chrome is not connected** The Chrome extension isn't reachable over the loc… |
| [`18-claude-in-chrome-is-not-connected.md`](prompts/06-browser/18-claude-in-chrome-is-not-connected.md) | 648 | ⚠️ **Claude in Chrome is not connected** The Chrome extension isn't reachable right now. I… |
| [`19-copy-file-user-to-claude.md`](prompts/06-browser/19-copy-file-user-to-claude.md) | 2,127 | The presence of this tool means that Claude has access to two computer filesystems: 1. The… |
| [`20-url-is-json-stringify-t-href.md`](prompts/06-browser/20-url-is-json-stringify-t-href.md) | 367 | "url" is ${JSON.stringify(t.href)}, a localhost address with a path or query. For security… |
| [`21-ask-the-user-does-this-server.md`](prompts/06-browser/21-ask-the-user-does-this-server.md) | 398 | Ask the user: does this server need port ${e} specifically (e.g. for OAuth callbacks, webh… |
| [`22-note-the-page-wrote-to-the.md`](prompts/06-browser/22-note-the-page-wrote-to-the.md) | 395 | - Note: the page wrote to the user's OS clipboard during your synthetic input (a page scri… |
| [`23-resize-window.md`](prompts/06-browser/23-resize-window.md) | 989 | Emulate a viewport size in the Browser pane tab. Presets: mobile (375x812), tablet (768x10… |
| [`24-execute-a-sequence-of-browser-pane.md`](prompts/06-browser/24-execute-a-sequence-of-browser-pane.md) | 1,065 | Execute a sequence of Browser pane tool calls in ONE round trip. Each item is {name, input… |
| [`25-preview-eval.md`](prompts/06-browser/25-preview-eval.md) | 378 | Execute JavaScript in the Browser pane's page for DEBUGGING and INSPECTION only. Use for r… |
| [`26-preview-resize.md`](prompts/06-browser/26-preview-resize.md) | 1,016 | Emulate a viewport size in the Browser pane tab to test responsive layouts. Presets: mobil… |

### iOS Simulator, Android emulator, framebuffer tools

| File | Chars | Begins with |
|---|---:|---|
| [`01-simulator-tools.md`](prompts/07-simulators/01-simulator-tools.md) | 1,832 | <simulator_tools> When the user wants to run, test, or visually check an ${r?"iOS or Andro… |
| [`02-run-test-and-visually-verify-ios.md`](prompts/07-simulators/02-run-test-and-visually-verify-ios.md) | 1,307 | Run, test, and visually verify iOS apps in the iOS Simulator on this Mac. Use this wheneve… |
| [`03-what-to-do-attach-opens-the.md`](prompts/07-simulators/03-what-to-do-attach-opens-the.md) | 1,327 | What to do. 'attach' opens the live simulator panel for the user — call it BEFORE you buil… |
| [`04-build-ios-apps-headlessly-on-this.md`](prompts/07-simulators/04-build-ios-apps-headlessly-on-this.md) | 494 | Build iOS apps headlessly on this Mac. 'build' compiles an Xcode project/workspace via xco… |
| [`05-run-test-and-visually-verify-android.md`](prompts/07-simulators/05-run-test-and-visually-verify-android.md) | 1,409 | Run, test, and visually verify Android apps on an Android emulator on this machine (emulat… |
| [`06-what-to-do-attach-opens-the.md`](prompts/07-simulators/06-what-to-do-attach-opens-the.md) | 887 | What to do. 'attach' opens the live emulator panel for the user — call it BEFORE you build… |
| [`07-add-a-framebuffer-entry-to-claude.md`](prompts/07-simulators/07-add-a-framebuffer-entry-to-claude.md) | 571 | Add a framebuffer entry to .claude/launch.json (configurations[]) or drop a single-entry J… |
| [`08-framebuffer-batch.md`](prompts/07-simulators/08-framebuffer-batch.md) | 519 | Execute a sequence of input actions in ONE tool call. Actions execute sequentially and sto… |

### Plugins, skills and connector discovery tools

| File | Chars | Begins with |
|---|---:|---|
| [`01-search-for-available-connectors-in-the.md`](prompts/08-plugins-skills-connectors/01-search-for-available-connectors-in-the.md) | 632 | Search for available connectors in the MCP registry. Call this when connecting to a new MC… |
| [`02-suggest-connectors.md`](prompts/08-plugins-skills-connectors/02-suggest-connectors.md) | 572 | Display connector suggestions to the user with Connect buttons. Call this: - After search_… |
| [`03-search-connectors.md`](prompts/08-plugins-skills-connectors/03-search-connectors.md) | 789 | Search the user's organization plugin library for connectors (MCP servers) bundled inside … |
| [`04-suggest-plugin-install.md`](prompts/08-plugins-skills-connectors/04-suggest-plugin-install.md) | 554 | Render an inline plugin card in the message stream. Works for one plugin or several: with … |
| [`05-list-plugins.md`](prompts/08-plugins-skills-connectors/05-list-plugins.md) | 766 | Render the user's installed plugins as an interactive card with drill-in detail per plugin… |
| [`06-search-plugins.md`](prompts/08-plugins-skills-connectors/06-search-plugins.md) | 1,192 | Search for installable plugins that match the user's request. Call this when the request r… |
| [`07-list-skills.md`](prompts/08-plugins-skills-connectors/07-list-skills.md) | 858 | Render the user's installed slash-menu skills as an interactive widget with 'Try it' butto… |
| [`08-suggest-skills.md`](prompts/08-plugins-skills-connectors/08-suggest-skills.md) | 1,322 | Render an interactive widget of standalone skills the user can add (org or shared skills n… |
| [`09-show-onboarding-role-picker.md`](prompts/08-plugins-skills-connectors/09-show-onboarding-role-picker.md) | 692 | Render a clickable role-picker chip row during Cowork onboarding. Call this when asking th… |
| [`10-skill-e-was-invoked-t-it.md`](prompts/08-plugins-skills-connectors/10-skill-e-was-invoked-t-it.md) | 999 | [Skill "${e}" was invoked. ${t?`It expects: ${t}`:"It did not declare an argument-hint, so… |

### Memory system prompts

| File | Chars | Begins with |
|---|---:|---|
| [`01-task-continuation-summary.md`](prompts/09-memory/01-task-continuation-summary.md) | 1,323 | You have been working on the task described above but have not yet completed it. Write a c… |
| [`02-description.md`](prompts/09-memory/02-description.md) | 720 | <description>Contain information about the user's role, goals, responsibilities, and knowl… |
| [`03-how-to-use.md`](prompts/09-memory/03-how-to-use.md) | 381 | <how_to_use>When your work should be informed by the user's profile or perspective. For ex… |
| [`04-description.md`](prompts/09-memory/04-description.md) | 483 | <description>Guidance the user has given you about how to approach work — both what to avo… |
| [`05-when-to-save.md`](prompts/09-memory/05-when-to-save.md) | 673 | <when_to_save>Any time the user corrects your approach ("no not that", "don't", "stop doin… |
| [`06-when-to-use-or-update-a.md`](prompts/09-memory/06-when-to-use-or-update-a.md) | 410 | - When to use or update a plan instead of memory: If you are about to start a non-trivial … |
| [`07-sensitive-personal-information.md`](prompts/09-memory/07-sensitive-personal-information.md) | 883 | ## Sensitive personal information Do not save the following to memory unless the user expl… |

### Bundled skill documents (Imagine visual suite, design system, elicitation)

| File | Chars | Begins with |
|---|---:|---|
| [`01-generated-by-apps-cds-docs-scripts.md`](prompts/10-bundled-skill-docs/01-generated-by-apps-cds-docs-scripts.md) | 21,932 | <!-- @generated by apps/cds-docs/scripts/gen-cds-skill.mjs from packages/cds/{CLAUDE.md,do… |
| [`02-imagine.md`](prompts/10-bundled-skill-docs/02-imagine.md) | 10,755 | # Imagine — Visual Creation Suite ## Modules Call read_me again with the modules parameter… |
| [`03-ui-components.md`](prompts/10-bundled-skill-docs/03-ui-components.md) | 7,323 | ## UI components ### Layout width The widget container is ${e}px wide. ${e<=400?`**Mobile … |
| [`04-elicitation.md`](prompts/10-bundled-skill-docs/04-elicitation.md) | 13,983 | ## Elicitation — collecting skill arguments Use this when a skill or slash command needs i… |
| [`05-color-palette.md`](prompts/10-bundled-skill-docs/05-color-palette.md) | 3,662 | ## Color palette 9 color ramps, each with 7 stops from lightest to darkest. 50 = lightest … |
| [`06-svg-setup.md`](prompts/10-bundled-skill-docs/06-svg-setup.md) | 10,110 | ## SVG setup **ViewBox safety checklist** — before finalizing any SVG, verify: 1. Find you… |
| [`07-diagram-types.md`](prompts/10-bundled-skill-docs/07-diagram-types.md) | 28,143 | ## Diagram types *"Explain how compound interest works" / "How does a process scheduler wo… |
| [`08-charts.md`](prompts/10-bundled-skill-docs/08-charts.md) | 6,115 | ## Charts (Chart.js) ```html <div style="position: relative; width: 100%; height: 300px;">… |
| [`09-data-visualization.md`](prompts/10-bundled-skill-docs/09-data-visualization.md) | 5,028 | ## Data visualization — the design layer Color comes LAST. Most bad charts pick colors fir… |
| [`10-show-widget.md`](prompts/10-bundled-skill-docs/10-show-widget.md) | 648 | Show visual content — SVG graphics, diagrams, charts, or interactive HTML widgets — that r… |

### Microsoft Office add-in

| File | Chars | Begins with |
|---|---:|---|
| [`01-excel-addin-continuation.md`](prompts/11-office/01-excel-addin-continuation.md) | 683 | The user continued this conversation in Microsoft Excel with the Claude add-in, in the wor… |
| [`02-office-addin-run.md`](prompts/11-office/02-office-addin-run.md) | 974 | Execute Office.js code in Excel. Changes appear instantly in the document. The code runs i… |

### Miscellaneous

| File | Chars | Begins with |
|---|---:|---|
| [`01-search-the-public-web-and-use.md`](prompts/12-misc/01-search-the-public-web-and-use.md) | 756 | - Search the public web and use the results to inform responses - Provides up-to-date info… |
| [`02-returns-runtime-environment-details-for-this.md`](prompts/12-misc/02-returns-runtime-environment-details-for-this.md) | 2,101 | Returns runtime environment details for this device (platform, arch, app/electron/node ver… |
