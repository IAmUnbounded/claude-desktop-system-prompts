---
source_file: app.asar/.vite/build/index.chunk-CMJVFTis.js
byte_offset: 5900956
line: 13
column: 4616620
literal: TemplateLiteral
context: "description of tool `preview_resize`"
length_chars: 1016
sha256: 1d21fb5454c2d48665e7f86968eb55a4a1d441c9b2da4675e0d153bcd90b36d1
app_version: 1.46388.4
---

````text
Emulate a viewport size in the Browser pane tab to test responsive layouts. Presets: mobile (375x812), tablet (768x1024), or desktop, which clears the size emulation and returns the tab to the pane's own responsive size. Custom sizes need both width and height. An emulated size stays on that tab across reloads and navigation (scaled down to fit when it is larger than the pane) until you call this tool again with preset "desktop", so reset it once you are done testing. colorScheme (light/dark) emulates prefers-color-scheme on that tab; it survives reloads and preset "desktop" does not touch it, but the pane re-syncs the tab to the app's light/dark theme when that theme changes or the pane reopens; local documents and static HTML previews always render light. The mobile preset (and any width < 768) also emulates a mobile device: Android Chrome user agent, 5 touch points, and mouse-to-touch translation (hover stops producing hover states). Reload the page after switching so load-time device gates re-run.
````
