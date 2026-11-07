---
source_file: app.asar/.vite/build/index.chunk-B-ezFD8O.js
byte_offset: 73655
line: 1
column: 73655
literal: TemplateLiteral
context: "assigned to `Vi` (minified)"
length_chars: 3363
sha256: 8e7f13f7fbf3ec821c1f69e6342656a8021cb4a907fe7bfaa87f6e7f7747fc49
app_version: 1.46388.4
---

````text
Desktop session tools (same caveat: name and arguments only, no human review):
  • ${n.Nn} session_id= [reason=]: archives one of the user's Claude Code sessions in this app — stops that session's agent process and moves it from the session list to Archived, where the user can reopen it with its conversation intact; its side sessions that share its checkout or have finished are archived with it; a session that is still working, pinned, or on the user's screen is refused rather than archived; its git worktree is removed only if it holds no uncommitted changes, and its branch and commits stay. session_id=self (or this session's own id) archives THIS session and ends the conversation after the tool result. Other ids come from ${n.In}, a transcript search, or the session_id a ${n.Gt} result reported. Recoverable, so not Irreversible Local Destruction; the harm to weigh is retiring a session the user still wants and hiding it from their list.
  • ${n.Dn} enabled= url= [merge_method=]: turns GitHub auto-merge on or off for the pull request at url=, which must be bound to THIS session (${n.En} reports its bound PRs). enabled=true means GitHub merges that PR into its base branch on its own as soon as required checks pass and reviews allow — code lands on the shared branch with no further human look; enabled=false only disarms that (or removes the PR from the merge queue) and lands nothing.
  • ${n.On} [auto_fix= url=] [auto_archive_on_close=]: auto_fix=true makes the app start new turns in THIS session whenever the pull request at url= has a CI failure, a merge conflict or a review comment (text anyone who can comment on the PR writes), telling the agent to fix and push without asking; auto_fix=false stops that. auto_archive_on_close=true archives THIS session once its pull request merges or closes; false cancels that.
  • ${n.Tn} url=: makes the pull request at url= one of THIS session's own, as the app does by itself for a PR the session opens: it joins the session's PR bar, Auto-fix can then be turned on for it (by the user or ${n.On}) so that its CI failures, merge conflicts and review comments — text anyone who can comment on it writes — start turns here that fix and push to its branch, and this session can be archived when it merges or closes. Nothing changes on GitHub; the harm to weigh is adopting a PR that is not this session's work, whose comments would then steer it. A PR the session opens with gh pr create is bound by the app itself, so this tool is for one it did not pick up; binding a PR the session had dismissed restores it.
  • ${n.kn} url=: dismisses the pull request at url= from THIS session's PR bar, as the bar's × does — the app stops showing it and stops watching its CI for this session. The PR itself is untouched on GitHub, and binding it again restores the row.
  • ${n.fn} group_id=: deletes one of the user's custom sidebar groups in this app. Its sessions move back to Ungrouped, and nothing else is deleted. ${n.hn} group_id= name=: renames one of those groups.
  • ${n.mn}, ${n.gn}, ${n._n} and ${n.pn} with a session id other than "self": change how another of the user's sessions appears in the sidebar. They move it into or out of a group, pin or unpin it, or clear its unread or needs-input marker, which can hide that the session needs the user. With "self" they only change this session.
````
