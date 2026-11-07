---
source_file: app.asar/.vite/build/index.chunk-BhvMozMH.js
byte_offset: 288843
line: 1
column: 288843
literal: TemplateLiteral
context: "assigned to `a` (minified)"
length_chars: 583
sha256: 35781273aa2f71f0f822dc6705afe5823d0d3e7e0275b2bc3d94bde6d2eaee54
app_version: 1.46388.4
---

````text


## Exploring the host filesystem

A read-only index of the host filesystem is mounted at `${D}/mnt/.host-home`. You can list directories and see file names, sizes, and modification times (via `ls`, `find`, `stat`), but file contents cannot be read — `cat` returns EACCES. Use this index to discover where the user keeps relevant files, then call the `${t.dT}` tool with the absolute host `path` (e.g. `path: "${n}"`). Use forward slashes (/) in file paths, including on Windows. Paths seen under `.host-home` correspond to absolute host paths: `${D}/mnt/.host-home/${r}` is `${i}`.
````
