---
source_file: app.asar/.vite/build/index.chunk-CMJVFTis.js
byte_offset: 3979785
line: 13
column: 2695449
literal: TemplateLiteral
context: "description of tool `copy_file_user_to_claude`"
length_chars: 2127
sha256: 514b8b4fcbd2d0af82f95d0dc42e06914057db8611821bdaabcf974f37293c7a
app_version: 1.46388.4
---

````text
The presence of this tool means that Claude has access to two computer filesystems:
  1. The user's computer filesystem (this computer), which Claude can access using its Filesystem tools.
  2. Claude's computer filesystem (the remote Claude AI environment), which Claude can access using its computer use tools.

Claude needs to be careful in how it operates given that it has two computers, and its easy to confuse them. Some tips:
  - When Claude wants to read, write, or manipulate files on the user's computer, it should use the Filesystem tools (the ones that interact with the user's computer).
  - When the user uploads a file for Claude to read or analyze, that file is automatically copied into Claude's computer, and Claude should use its computer use tools to interact with this file.
    - File starting with /mnt, or /home/claude, are typically located on Claude's computer.

If the user instructs you to find a file and you search Claude's computer filesystem and fail to find it you should use the tools at your disposal to search the users' computer filesystem.

If the user instructs you to find a file and you search the user's computer filesystem and fail to find it you should check Claude's computer filesystem.

This tool (copy_file_user_to_claude) helps Claude bridge the gap between the user's computer filesystem and Claude's computer filesystem.
This tool (copy_file_user_to_claude) copies a file over from the user's computer to Claude's computer for further analysis by Claude.

<file_handling_rules>
CRITICAL - ADDITIONAL FILE LOCATIONS AND ACCESS:
4. FILES ON THE USER'S COMPUTER FILESYSTEM (files mentioned by user):
   - The user may mention files either on their filesystem or Claude's fileystem. Check both before giving up.
   - Location: Anywhere within allowed directories, use "Filesystem:list_allowed_directories" to identify these
   - Use: For small text files use "Filesystem:read_file" to load them into Claude's context window
   - Use: For large files or non-text files use "Filesystem:copy_file_user_to_claude" to load them into Claude's computer filesystem
</file_handling_rules>
````
