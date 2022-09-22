---
label: Installation
icon: download
order: 4
---

# Installation

Saucer is meant to be used with CMake.  
You can also use other Build Systems but it is recommended to use CMake for the best and most convenient experience.

+++ CMake
=== Fetch Content
!!!
You may want to add `GIT_TAG dev` to `FetchContent_Declare` if you want to use the latest features.
!!!
```cmake # CMakeLists.txt
include(FetchContent)

FetchContent_Declare(saucer GIT_REPOSITORY "https://github.com/saucer/saucer")
FetchContent_MakeAvailable(saucer)

target_link_libraries(<target> saucer)
```
==- Git Submodule
```bash # Command Line
git clone https://github.com/saucer/saucer
```
```cmake # CMakeLists.txt
add_subdirectory(saucer)
target_link_libraries(<target> saucer)
```
==- CPM
!!!
You may want to replace `#master` with `#dev` if you want to use the latest features.
!!!
```cmake # CMakeLists.txt
CPMAddPackage("gh:saucer/saucer#master")
target_link_libraries(<target> saucer)
```
===
+++ CLI
```bash
saucer init <name>
```
+++ VCPKG
=== Windows
```bash
vcpkg install saucer
```
=== Linux
!!!warning
You currently need to use the custom triplet `x64-linux-dynamic` when installing saucer on linux.
!!!
```bash
vcpkg install saucer:x64-linux-dynamic
```
===
+++

# Saucer-CLI

Saucer also supplies a cli-utility.  
It can help you setup projects and allows you to easily embed dependencies.

+++ npm
```bash
npm i -g saucer-app
```
```bash
yarn global add saucer-app
```
+++ AUR
```bash
paru -S saucer-cli-git
```
```bash
yay -S saucer-cli-git
```
+++
