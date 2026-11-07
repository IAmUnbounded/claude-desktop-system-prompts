---
source_file: app.asar/.vite/build/index.chunk-CMJVFTis.js
byte_offset: 3101043
line: 13
column: 1816707
literal: TemplateLiteral
context: "description of tool `navigate`"
length_chars: 871
sha256: 8afaf03c62aa65d6de13e6d6ad6f7274eb0c66431606d3661af841a22cdf19fd
app_version: 1.46388.4
---

````text
Navigate to a URL, or go forward/back in browser history. tabId may be omitted for URL navigation when calling navigate STANDALONE (not inside browser_batch): tabs_context_mcp{createIfEmpty:true} is called for you and the first tab in the session's group is navigated — its result is appended to this call's output so you have the tab list and ids for subsequent calls. Inside browser_batch, navigate (and other tools that act on a page) requires an explicit tabId. Pass an explicit tabId when you need a specific tab or when the session's group has multiple tabs whose state you must preserve. tabId is required for url:"back"/"forward". A tab opened for you this way is yours to clean up, the same as one from tabs_create_mcp: close it with tabs_close_mcp once you no longer need it and before finishing your task, unless the user asked to see it or wants it kept open.
````
