---
icon: package
order: 2
---

# Embedding

To embed your files it is advised to use the saucer command line utility.

[!ref](../Installation.md#saucer-cli)

First you need to generate the embed headers, this can be done by calling
```bash
saucer embed [output <directory>] <File/Folder>
```

||| Examples
```bash
saucer embed "react_dist_folder"
saucer embed "react_dist_folder" output "output_folder"
```
|||

After generating the embed headers you just need to go ahead and include the generated folder into your project.

||| CMakeLists
```cmake
target_include_directories(<target> PRIVATE "path/to/generated/folder")
```
```cpp
#include <output_folder/all.hpp>
```
|||

To then make saucer aware of the embedded files call `embedded::get_all_files()`

```cpp
webview.embed_files(std::move(embedded::get_all_files()));
```