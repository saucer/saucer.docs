---
label: Dependencies
icon: package-dependents
order: 3
---

# Dependencies

+++Linux

The following packages are required:

- Qt
- Qt WebEngine
- Qt WebChannel

!!!Qt6 Support
For distributions that ship newer packages you can enable the `Qt6` backend, for more information see [Configuration](Configuration.md).
!!!

||| Required Packages

==- Ubuntu
!!!warning Old Packages
Distributions like Ubuntu may have fairly old packages and will thus only provide relatively old Chromium versions.  
!!!
```bash # Quick Install
sudo apt install libqt5webengine5 libqt5webenginecore5 libqt5webenginewidgets5
``` 
==- Arch Linux
 ```bash # Quick Install
sudo pacman -S qt5-base qt5-webchannel qt5-webengine
``` 
==- Fedora
 ```bash # Quick Install
sudo dnf install qt5-qtwebengine qt5-qtwebchannel qt5-qtbase-gui qt5-qtbase
```
===

|||

+++Windows

=== Windows 10
Most of the time Windows 10 will have the _WebView2 Runtime_ preinstalled, however this is not always the case, according to Microsoft the _WebView2 Runtime_ will be installed on all Windows 10 devices [that have Version 2101 or later of Microsoft 365 Apps installed](https://docs.microsoft.com/deployoffice/webview2-install).
==- Windows 11
Windows 11 comes with the _WebView2 Runtime_ preinstalled.
===

+++macOS
_Documentation in progress_
+++