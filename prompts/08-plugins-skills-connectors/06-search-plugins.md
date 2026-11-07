---
source_file: app.asar/.vite/build/index.chunk-BhvMozMH.js
byte_offset: 145430
line: 1
column: 145430
literal: TemplateLiteral
context: "description of tool `search_plugins`"
length_chars: 1192
sha256: 9f43263c4cef7fafd7551fece9200b1252bbbc3fb35415537759c713b2afa616
app_version: 1.46388.4
---

````text
Search for installable plugins that match the user's request. Call this when the request references the user's own work context — their pipeline, accounts, contracts, tickets, playbooks, templates, or company data — and you don't already have a tool that covers it. Plugins package the user's org-specific workflows.

Plugins are matched by their skills, commands, and bundled connectors, so requests like "prep for my call with Acme", "review this contract against our playbook", or "what's in my Salesforce pipeline" can surface a plugin even when the user doesn't name one. Do not use browser or web search to find plugins — this is the only source.

Do not call this for generic knowledge tasks you can answer directly ("explain MEDDIC", "draft a cold email", "what is a SAFE note").

Results include a matchedCapabilities array showing which skill, command, or connector matched, plus the plugin's full skills list. When results fit, call suggest_plugin_install once with the matching plugins (and their skills) to render the install card — the card shows skills inline, so describing them in text isn't needed. If nothing relevant, proceed normally without mentioning that you searched.
````
