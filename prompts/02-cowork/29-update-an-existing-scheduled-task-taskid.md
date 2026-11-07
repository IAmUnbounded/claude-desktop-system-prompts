---
source_file: app.asar/.vite/build/index.chunk-B_f5Mx4t.js
byte_offset: 15768
line: 1
column: 15768
literal: TemplateLiteral
context: "object key `tools`"
length_chars: 1118
sha256: e55b4a7ec32f893bc9fab4d9f19f2f0e1f131f534ee95f2f8161ab91babb18e6
app_version: 1.46388.4
---

````text
Update an existing scheduled task. taskId must be an exact ID from list_scheduled_tasks. To see the current prompt before editing it, Read the `path` returned by list_scheduled_tasks.

Supports partial updates — only supply the fields you want to change:
- title: Rename the task as shown in the task list (any characters; empty string reverts to the taskId in sentence case)
- prompt: Replace the instructions Claude executes on each run
- description: Replace the one-line summary shown in the sidebar
- cronExpression: Change or set a recurring schedule (5-field cron string in LOCAL time, not UTC). Clears any one-time fireAt.
- fireAt: Change or set a one-time run (ISO 8601 timestamp with offset, must be in the future). Clears any cron schedule and re-arms the task.
- enabled: Pass false to pause automatic runs, true to resume them
- notifyOnCompletion: Pass true to receive a notification each time the task finishes a run; pass false to stop

**Note on timing:** Recurring tasks apply a small deterministic delay of several minutes at dispatch time to balance server load. One-time tasks fire without delay.
````
