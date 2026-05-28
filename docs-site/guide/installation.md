---
description: How to install Sift, connect your account, and get price checking in minutes.
---

# Installation & Setup

Getting Sift running takes about two minutes. Here's everything you need.

## System Requirements

| Requirement | Details |
|---|---|
| OS | Windows 10 or Windows 11 |
| Runtime | .NET 10 (bundled with the installer — no separate download needed) |
| Game mode | PoE2 must run in **Windowed Fullscreen** (not exclusive fullscreen) for the overlay to appear |

## Download & Install

1. Head to the [GitHub Releases](https://github.com/Isayi9999/sift-releases/releases) page
2. Download the latest `.exe` installer
3. Run it — Sift installs via [Velopack](https://velopack.io) and auto-updates itself going forward

On first launch, Sift lives in your **system tray** (bottom-right of your taskbar, near the clock). Right-click the tray icon to open settings or exit.

## Connecting Your Account

Sift needs access to the PoE2 trade API to look up prices. This requires logging in to pathofexile.com through Sift.

### Trade API Login

1. Open Sift settings (right-click the tray icon, or press <kbd>F12</kbd>)
2. On the **Authorization** page, click **"Log in to pathofexile.com"**
3. A browser window opens inside Sift — log in with your PoE2 account as you normally would
4. Once logged in, the window closes and Sift confirms the connection

::: tip
This login is handled entirely within the app using a secure embedded browser. Your session is encrypted on your machine with Windows DPAPI and never leaves your computer.
:::

::: warning Security Note
Sift stores your session cookie encrypted at rest. It is never transmitted anywhere except to GGG's own API servers. If you're uncomfortable with this, you can disconnect at any time from the Authorization page.
:::

### OAuth Connection (Stash API)

Sift also supports OAuth for stash tab access. This is a separate connection:

1. On the Authorization page, click **"Connect with OAuth"**
2. You'll be redirected to pathofexile.com to authorize Sift
3. Grant the requested permissions (`account:stashes`, `account:profile`)
4. You're redirected back to Sift automatically

::: info
The GGG Stash API is not yet enabled for PoE2 as of March 2026. The OAuth flow is fully built but stash tab scanning via the API is blocked until GGG enables it. In the meantime, the **clipboard capture** stash scanner works without OAuth.
:::

## League Selection

After connecting, select your active league from the dropdown on the Authorization page. Sift uses this for all trade lookups and stash scanning.

## Auto-Updates

Sift checks for updates automatically on launch. When an update is available, it downloads and installs in the background — you'll get the new version next time you restart. No manual updating needed.

## Data Storage

All Sift data is stored locally at:

```
%LOCALAPPDATA%\Sift\
```

This includes your settings database, price cache, and encrypted session data. Nothing is stored in the cloud.
