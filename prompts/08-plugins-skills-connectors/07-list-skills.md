---
source_file: app.asar/.vite/build/index.chunk-BhvMozMH.js
byte_offset: 149666
line: 1
column: 149666
literal: TemplateLiteral
context: "description of tool `list_skills`"
length_chars: 858
sha256: 4b9aef660fbadcbd6471d9b6d06517d54423b650d34f6aaa0d3c0f707efa9833
app_version: 1.46388.4
---

````text
Render the user's installed slash-menu skills as an interactive widget with 'Try it' buttons. Use this when the user asks what skills they have, instead of writing skill names in text.

Routing:
- "what skills do I have" / "show my skills" → call this tool (no args = show all)
- "any skills for git / docs / {topic}" → call this tool with keywords; if nothing matches, the result will say so — fall back to suggest_skills

To recommend skills the user does NOT have yet, use suggest_skills instead.

Pass relevant names in skill_names; the widget truncates to 5 with an expander. Pass keywords as a fallback. Omit both to show everything. The result lists what actually rendered — call once per request.

The card renders at the call site, so write any lead-in before the call. After the call, a brief follow-up question is fine; skip re-listing the skills.
````
