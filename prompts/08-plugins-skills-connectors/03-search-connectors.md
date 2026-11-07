---
source_file: app.asar/.vite/build/index.chunk-BhvMozMH.js
byte_offset: 140280
line: 1
column: 140280
literal: TemplateLiteral
context: "description of tool `search_connectors`"
length_chars: 789
sha256: 19a6c7b789543804aafb8ba9c4351fcb195760c60c07b9a38ac279f117cbc7dc
app_version: 1.46388.4
---

````text
Search the user's organization plugin library for connectors (MCP servers) bundled inside plugins. Call this when connecting a tool or data source would help with the user's task — e.g. "check my Asana tasks" → ["asana", "tasks"], "what's in our Snowflake warehouse" → ["snowflake", "warehouse"] — and you don't already have a tool that covers it.

Connectors here ship inside plugins, so each result is the PLUGIN that carries the matching connector (see its mcpServerNames). Connectors the user already has are excluded. When results fit, call suggest_plugin_install once with those plugins to render the Add card — installing the plugin adds its connectors. If nothing relevant, proceed normally without mentioning that you searched. Do not use browser or web search to find connectors.
````
