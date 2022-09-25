---
icon: package
order: 96
---

# Embedding

No one wants to ship all of their frontend files along their binary. That's why we support embedding 🪐!

---

## Pre-Requisites

1. In order to follow this guide you need to have installed the <kbd>CLI</kbd>.  

[!ref](Installation.md#saucer-cli)

2. You'll also need to have all of your frontend files in one folder

``` Example Folder Structure
out
├── 404.html
├── icon.webp
├── index.html
├── logos
└── _next
    ├── data
    │   └── I0JjY_SsFNIFkY51LHHZ8
    │       └── index.json
    ├── I0JjY_SsFNIFkY51LHHZ8
    └── static
        ├── chunks
        │   ├── 617-62e76ca49feff4cf.js
        │   ├── ef6529d7-eceeabab9e91fbfa.js
        │   ├── framework-4556c45dd113b893.js
        │   ├── main-8622cd0e77d03013.js
        │   ├── pages
        │   │   ├── _app-21ef9ef16725f9ba.js
        │   │   ├── _error-a4ba2246ff8fb532.js
        │   │   └── index-5206a6595f9ffd08.js
        │   ├── polyfills-0d1b80a048d4787e.js
        │   └── webpack-c491b2a411a4f8fa.js
        └── I0JjY_SsFNIFkY51LHHZ8
            ├── _buildManifest.js
            └── _ssgManifest.js
```

## Generating Embed-Files

With all pre-requisites full-filled embedding is as easy as running

```bash Command Syntax
saucer embed [output <directory>] <Folder>
```

=== Examples
```bash
saucer embed "out"
saucer embed "dist"
saucer embed output "embedding" "out"
```
===

## Using Embed Headers

After you've successfully generated all the embedding headers, you need to make sure you can include it from within your project, and then simply pass `embed::get_all_files()` to `smartview::embed_files()`.

```CMake Example
target_include_directories(${PROJECT_NAME} PRIVATE "path/to/generated/folder")
```

```cpp Include the header
#include <output_folder/all.hpp>
```

```cpp Embed Files
smartview.embed_files(std::move(embedded::get_all_files()));
```