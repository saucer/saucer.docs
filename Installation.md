---
label: Installation
icon: download
order: 4
---

# Installation

Saucer is meant to be used with CMake.  
You can also use other Build Systems but it is recommended to use CMake for the best and most convenient experience.

+++ CLI
```bash
saucer init <name>
```
+++ CPM
```cmake # CMakeLists.txt
CPMAddPackage("gh:saucer/saucer#master")
target_link_libraries(<target> saucer)
```
+++ Fetch Content
```cmake # CMakeLists.txt
include(FetchContent)

FetchContent_Declare(saucer GIT_REPOSITORY "https://github.com/saucer/saucer")
FetchContent_MakeAvailable(saucer)

target_link_libraries(<target> saucer)
```
+++ Git Submodule
```bash # Command Line
git clone https://github.com/saucer/saucer
```
```cmake # CMakeLists.txt
add_subdirectory(saucer)
target_link_libraries(<target> saucer)
```
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
