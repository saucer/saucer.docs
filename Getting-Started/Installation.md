---
label: Installation
icon: download
order: 100
---

# Installation

---

## CMake

Saucer is most easily consumed through <img src="https://www.vectorlogo.zone/logos/cmake/cmake-icon.svg" width=20> CMake.  
There are several ways to add _Saucer_ to your existing CMake Project:

+++ FetchContent
Our preferred way to consume libraries is through [`FetchContent`](https://cmake.org/cmake/help/latest/module/FetchContent.html).  

1. First, include <kbd>FetchContent</kbd>, in case you didn't already
```CMake CMakeLists.txt
include(FetchContent)
```

2. Declare <kbd>Saucer</kbd> as a dependency

!!!
You may want to specify the `GIT_TAG` explicitly.

To use the latest features, add `GIT_TAG dev` to the `FetchContent_Declare` call.

To use a specific version, add `GIT_TAG vX.Y` to the `FetchContent_Declare` call.
!!!

```CMake CMakeLists.txt
FetchContent_Declare(saucer GIT_REPOSITORY "https://github.com/saucer/saucer")
FetchContent_MakeAvailable(saucer)
```

3. Link <kbd>Saucer</kbd>

!!!
In case you want to link saucer to something else than the current project, replace `${PROJECT_NAME}` with what ever target you want to use instead.
!!!

```CMake CMakeLists.txt
target_link_libraries(${PROJECT_NAME} saucer)
```

+++ CPM

[CPM](https://github.com/cpm-cmake/CPM.cmake) is another great way to manage dependencies in CMake!  

1. Add the <kbd>Saucer</kbd> package

!!!
You may want to use another tag than `#master`

To use the latest features, replace `#master` with `#dev`.

To use a specific version, replace `#master`  with `#vX.Y`.
!!!

```CMake CMakeLists.txt
CPMAddPackage("gh:saucer/saucer#master")
```


2. Link <kbd>Saucer</kbd>

!!!
In case you want to link saucer to something else than the current project, replace `${PROJECT_NAME}` with what ever target you want to use instead.
!!!

```CMake CMakeLists.txt
target_link_libraries(${PROJECT_NAME} saucer)
```

+++ Sub-Directory
Lastly, you can also include _Saucer_ from a sub-directory.  
A common use case is with Git-Submodules.  

1. Clone <kbd>Saucer</kbd> to your preferred location
```bash $
cd "<preferred_location>"
git clone https://github.com/saucer/saucer
```

2. (Optionally) Checkout desired tag  
```bash $
cd saucer
git checkout TAG # For example "git checkout dev" 
```

3. Add as sub-directory
```CMake CMakeLists.txt
add_subdirectory("<preferred_location>")
```

4. Link <kbd>Saucer</kbd>

!!!
In case you want to link saucer to something else than the current project, replace `${PROJECT_NAME}` with what ever target you want to use instead.
!!!

```CMake CMakeLists.txt
target_link_libraries(${PROJECT_NAME} saucer)
```

+++

## VCPKG

_Saucer_ has an official [vcpkg](https://github.com/microsoft/vcpkg)-port.  

!!!warning
Linux users are currently required to explicitly specify the `x64-linux-dynamic` triplet.
!!!

```bash $
vcpkg install saucer
```

# Saucer-CLI

Saucer also supplies a [CLI-Utility](https://github.com/saucer/saucer-cli).  
It can help you setup projects and allows you to easily embed dependencies.

## Install the CLI

+++ npm
You can use our [npm package](https://www.npmjs.com/package/saucer-app) to install the CLI-Utility on Windows and Linux 🎉

```bash #‍
npm i -g saucer-app
```
```bash #‍
yarn global add saucer-app
```
+++ AUR
Arch Linux users can install the CLI-Utility through it's [aur package](https://aur.archlinux.org/packages/saucer-cli-git) 🌟
```bash $
paru -S saucer-cli-git
```
```bash $
yay -S saucer-cli-git
```
+++

### Setup Saucer-Project

The CLI can be used to setup a basic CMake Project that includes _Saucer_:  

```bash $
saucer init <name>
```