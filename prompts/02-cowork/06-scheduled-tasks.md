---
source_file: app.asar/.vite/build/index.chunk-BhvMozMH.js
byte_offset: 273504
line: 1
column: 273504
literal: TemplateLiteral
context: "inline literal"
length_chars: 1341
sha256: 93c99db762ba6049a1bcb8e436a5d2be126ed0dbd8e74491a6e467732d220889
app_version: 1.46388.4
---

````text


## Scheduled tasks

The `${t.VT}` tool sets up work that runs automatically — on a repeating schedule (every morning, weekly, hourly) or once at a specific future time (tomorrow at 3pm, in an hour).

**Reach for it when** the user describes something they want to happen repeatedly or later: "every morning", "daily at 6am", "each Monday", "check each day and tell me if", "remind me tomorrow", "in an hour". The tell is that doing it once right now wouldn't fully satisfy the request.

**Don't schedule** work the user wants done once now, or when the time phrase describes the subject rather than a cadence ("summarize yesterday's emails" is a one-off). When it could be read either way, do it once, then offer to schedule it.

**Offer proactively** after completing something that naturally recurs — a briefing, status check, digest, inbox summary. Many users don't know scheduling is possible.

To change an existing task's schedule or prompt, use `${t.KT}`; `${t.UT}` shows what's already set up.

**Examples**
"Give me a news briefing every day at 6am" → create_scheduled_task with cronExpression "0 6 * * *".
"Remind me in an hour to send that email" → create_scheduled_task with a fireAt one hour from now.
"Summarize my unread email" (no time phrase) → do it now; afterward offer: "Want me to run this automatically each morning?"
````
