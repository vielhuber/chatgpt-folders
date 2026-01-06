# 📁 ChatGPT folders 📁

A browser extension that organizes your ChatGPT projects in a sortable, hierarchical folder structure.

## Features

- 📂 **Hierarchical folders** - Organize GPT projects in multiple levels using `-` separator
- 🔢 **Conversation counter** - See how many conversations each project contains
- ✅ **Completed projects** - Mark projects as done by including "done" in the name
- 💾 **Smart caching** - Fast loading with localStorage
- 🔄 **Auto-sync** - Real-time updates on URL and title changes
- 📍 **Scroll persistence** - Remembers your scroll position
- 🎨 **Background theme** - The extension offers a background theme for ChatGPT.

## Installation

### Chrome

- [https://chromewebstore.google.com/detail/chatgpt-folders/eladlappidlicdlohjjbecghafblfflc](https://chromewebstore.google.com/detail/chatgpt-folders/eladlappidlicdlohjjbecghafblfflc)

### Firefox

- [https://addons.mozilla.org/de/firefox/addon/chatgptfolders/](https://addons.mozilla.org/de/firefox/addon/chatgptfolders/)

## Usage

### Creating hierarchies

Use `-` (space-dash-space) in your GPT project names:

```
Project A - Subproject 1
Project A - Subproject 2
Project B - Feature X - Details
```

Results in:

```
📦 Project A
  📁 Subproject 1 (3)
  📁 Subproject 2 (5)
📦 Project B
  📦 Feature X
    📁 Details (2)
```

### Marking as done

Include "done" anywhere in the project name. Completed projects are sorted to the end and marked with ✅.
