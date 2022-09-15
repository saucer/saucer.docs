---
label: Welcome
icon: home
---

# Welcome to Saucer

_Saucer_ is a library that aims to provide an easy way to develop desktop applications with Web-Technologies.  

---

<p align="center">
    <img src="assets/logo.gif" width=400 />
</p>

_Saucer_ creates a simple WebView for you, in which you can display your custom web-content.  

## Features

### :tada: Easy to use
Saucer is really easy to install (&rarr; [Installation](Installation.md)) and is also easy to use (&rarr; [Getting Started](Getting-Started/Your%20First%20App.md))!  

### :package: Embeddable Content
You can easily include all your web-content in your binary (&rarr; [Embedding](Getting-Started/Embedding.md)).

### :desktop_computer: Cross-Platform
Saucer runs on ~~all three major platforms~~ Windows and Linux (&rarr; [Supported Platforms](#supported-platforms))!

### :link: Interoperability 
Interaction between JavaScript and C++ has never been easier!  
We provide easy methods to interact with <img src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" width=20 /> from <img src="https://cdn.worldvectorlogo.com/logos/c.svg" width=20 /> and vice versa (&rarr; [Interoperability](Getting-Started/Interoperability.md)).

---

## Roadmap

### `v1.3`
- [ ] Clipboard Module
- [ ] Offscreen Rendering
- [ ] Input Module _(Keyboard / Mouse)_
- [ ] Desktop Notifications Module

### `v1.2` [!badge text="SOON" variant="info"]
- [ ] Tray Plugin
- [ ] Drag & Drop
- [ ] macOS Cocoa / WebKit support

### `v1.1` [!badge text="NEXT" variant="info"]
- [ ] HTTP Plugin
- [ ] Window Plugin
  - [ ] Custom Title-Bars
- [ ] File-System Plugin
- [ ] Blur & Transparency Module _(Partially done)_

### `v1.0` [!badge text="BETA" variant="secondary"] [!badge text="CURRENT" variant="info"] 
- [x] CLI
- [x] Easy bundling
- [x] Plugin support
- [x] Module support
- [x] Multiple Windows
- [x] C-Bindings (In-house bindings for <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" width=20 /> <kbd>Node.js</kbd>, <img src="https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg" width=20 /> <kbd>Kotlin</kbd> and <img src="https://cdn.worldvectorlogo.com/logos/c--4.svg" width=20 /> <kbd>C#</kbd> are currently being worked on)

---

## Supported Platforms

| Platform     | Windows            | Linux / Universal¹ | macOS                    |
| ------------ | ------------------ | ------------------ | ------------------------ |
| Supported    | :white_check_mark: | :white_check_mark: | :hourglass_flowing_sand: |
| Dependencies | None / WebView2    | Qt, QtWebEngine    | None / Cocoa, WebKit     |

!!!info
¹ The current linux build of saucer uses Qt and no platform specific code, so it _should_ work on every operating system that Qt supports.  
However this has not yet been tested.
!!!

[!ref icon="package-dependents"](Dependencies.md)
