---
source_file: app.asar/.vite/build/index.chunk-BhvMozMH.js
byte_offset: 151179
line: 1
column: 151179
literal: TemplateLiteral
context: "description of tool `suggest_skills`"
length_chars: 1322
sha256: a379b3b13fabbccd35657f9c27aaf1201f9d414979acc50baf87ae567e6ce8a0
app_version: 1.46388.4
---

````text
Render an interactive widget of standalone skills the user can add (org or shared skills not yet enabled) with 'Add' buttons.

Call this when the user's task is one a skill could make repeatable — drafting in a house style, reviews against a playbook or checklist, recurring reports, a domain workflow they'll do again — and nothing they have installed covers it. The user does not need to ask about skills. Also call it when they explicitly ask for skill recommendations, ask for skills for a domain they have nothing installed for, or when list_skills returned zero matches. Use list_skills instead for skills they already have.

Do NOT call this if:
- The task is a one-off question you can answer directly
- You are unsure a skill would actually help with this task
- You already rendered a suggestion this conversation and the user didn't engage

Pass keywords drawn from the task itself, not generic terms, and set trigger ('proactive' when you initiated this from task context, 'user_asked' when they asked). Covers standalone skills only — when search_plugins is available, also call it with the same keywords and trigger (skills may live inside an uninstalled plugin).

Do NOT write a lead-in before this call — pass context_label for the header. The result may be empty; its note field tells you what to do next.
````
