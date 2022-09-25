---
label: Dependencies
icon: package-dependents
order: 99
---

# Dependencies

Saucer relies on fairly common dependencies found on most systems 🦥.

---

## Windows

The following packages are required on Windows:

- [WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2/#download-section)

!!!
The WebView2 Runtime is pre-installed under the following circumstances:

- The machine is using Windows 11

_or_  

- [The machine is using Windows 10 and has version 2101 or later of Microsoft 365 Apps installed](https://docs.microsoft.com/deployoffice/webview2-install){target="_blank"}
!!!

## Linux

The following packages are required on Linux:

- Qt
- Qt WebEngine
- Qt WebChannel

**Both Qt5 and Qt6 are supported.**

We chose Qt as our backend on Linux because it is well established in the Linux world and most systems have it installed already.  

Also, from personal experiences, we have encountered fewer issues when using the [Qt WebEngine](https://wiki.qt.io/QtWebEngine) as compared to [WebKit2Gtk](https://webkitgtk.org/).

+++ Arch Linux
```bash Quick Install
sudo pacman -S qt5-base qt5-webchannel qt5-webengine
``` 
+++ Ubuntu
!!!warning Old Packages
Distributions like Ubuntu may have fairly old packages and will thus only provide relatively old Chromium versions.  
You can mitigate this by using a PPA.
!!!

```bash Quick Install
sudo apt install libqt5webengine5 libqt5webenginecore5 libqt5webenginewidgets5
```
+++ Fedora
 ```bash # Quick Install
sudo dnf install qt5-qtwebengine qt5-qtwebchannel qt5-qtbase-gui qt5-qtbase
```
+++
