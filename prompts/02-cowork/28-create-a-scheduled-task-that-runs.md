---
source_file: app.asar/.vite/build/index.chunk-B_f5Mx4t.js
byte_offset: 11977
line: 1
column: 11977
literal: TemplateLiteral
context: "object key `tools`"
length_chars: 2302
sha256: d2f49eeb904c4791db0fb28a5a93030e724b1bf28dae238422c540dfff0b84ae
app_version: 1.46388.4
---

````text
Create a scheduled task that runs automatically — on a recurring schedule or once at a future moment. Use this when the user asks for something to happen repeatedly ("every day at 6am", "each Monday", "hourly") or at a specific later time ("remind me in 20 minutes", "tomorrow at 3pm"), rather than once right now. Go ahead and call it when the request clearly describes a schedule; if the schedule or task content is ambiguous, confirm the details with the user first — an approval prompt may or may not appear depending on the user's permission settings, so don't rely on it as the confirmation step.

To modify an existing scheduled task's schedule or prompt, use `update_scheduled_task` instead.

The task is stored as {taskId}/SKILL.md in ${g}/. Each run starts fresh with no memory of this conversation, so the prompt must be fully self-contained: include which connectors to use, the output format, and any preferences the user expressed here.

Scheduled tasks run while this app is open. If the app is closed when a task is due, it runs on next launch — tell the user this so they aren't surprised.

**Scheduling options (pick at most one):**
- cronExpression: recurring (daily, weekly, etc.)
- fireAt: one-time — runs once at the given moment, then auto-disables. Never use a cron expression for a one-time task; cron has no one-shot semantics.
- Omit both: "ad-hoc" — can only be started manually

**Recurring (cronExpression):** Cron is evaluated in the user's LOCAL timezone, not UTC. Use local times directly. Format: minute hour dayOfMonth month dayOfWeek
- "0 9 * * *" — Every day at 9:00 AM local time
- "0 9 * * 1-5" — Weekdays at 9:00 AM local time
- "30 8 * * 1" — Every Monday at 8:30 AM local time
- "0 0 1 * *" — First day of every month at midnight local time

**One-time (fireAt):** An ISO 8601 timestamp with timezone offset. The task fires once at that moment (or on next app launch if it was closed), then disables itself.
- "2026-03-05T14:30:00-08:00" — Runs once on March 5 at 2:30 PM Pacific
- Use this for reminders ("remind me in 5 minutes"), one-off future actions ("tomorrow at 3pm"), or specific dates

**Note on timing:** Recurring tasks apply a small deterministic delay of several minutes at dispatch time to balance server load. One-time tasks fire without delay.
````
