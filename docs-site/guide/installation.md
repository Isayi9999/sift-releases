---
description: How to install Sift, connect your account, and get price checking in minutes.
---

# Installation & Setup

Getting Sift running takes a few minutes. Price checking needs a trade login, while character-based tools need OAuth. Live tracking also has an optional memory-reading gate that is disabled by default.

## System Requirements

| Requirement | Details |
|---|---|
| OS | Windows 10 or Windows 11 |
| Runtime | .NET 10, bundled with the installer |
| Game mode | PoE2 must run in **Windowed Fullscreen** for the overlay to appear |

## Download & Install

1. Head to the [GitHub Releases](https://github.com/Isayi9999/sift-releases/releases) page.
2. Download the latest `.exe` installer.
3. Run it. Sift installs via [Velopack](https://velopack.io) and auto-updates itself going forward.

On first launch, Sift lives in your **system tray** near the clock. Right-click the tray icon to open settings or exit.

## Connecting Your Account

Sift has two account connections because GGG exposes trade and account data through different flows.

### Trade API Login

Trade login enables the price check overlay, stash scanner pricing, and trade result links.

1. Open Sift settings by right-clicking the tray icon or pressing <kbd>F12</kbd>.
2. On the **Authorization** page, click **Log in to pathofexile.com**.
3. A browser window opens inside Sift. Log in with your PoE2 account as you normally would.
4. Once logged in, the window closes and Sift confirms the connection.

::: tip
This login is handled inside the app using an embedded browser. Your session is encrypted on your machine with Windows DPAPI and never leaves your computer except when Sift talks directly to GGG APIs.
:::

::: warning Security Note
Sift stores your session cookie encrypted at rest. It is never transmitted anywhere except to GGG's own API servers. You can disconnect at any time from the Authorization page.
:::

### OAuth Connection

OAuth enables account and character features such as Live Tracking character selection, XP Analytics, Leveling character progress, and the Skill Tree equipment panel. It also authorizes stash access for features that use GGG's stash endpoints.

1. On the Authorization page, click **Connect with OAuth**.
2. You'll be redirected to pathofexile.com to authorize Sift.
3. Grant the requested permissions: `account:stashes`, `account:profile`, and `account:characters`.
4. You're redirected back to Sift automatically.

::: info
The clipboard-based Stash Scanner does not require OAuth. It captures the item currently hovered in-game and uses your trade login for pricing.
:::

## League Selection

After connecting, select your active league from the dropdown on the Authorization page. Sift uses this league for trade lookups, stash scanner pricing, and market-backed tools.

## Optional Memory Reading

Live Tracking can read the running PoE2 process for XP, area, map, and inventory delta information. This is optional and disabled by default.

::: danger Terms of Service disclaimer
Sift uses memory reading only for quality-of-life live tracking, but read-only process access may still be against GGG's Terms of Service or anti-cheat policy. There is no guarantee that this is permitted or risk-free. Use it at your own discretion.
:::

To enable memory-backed features:

1. Open the **Authorization** page.
2. Turn on **Enable memory-backed live tracking**.
3. Read the acknowledgement and press **Enable**.

For the full breakdown of memory-only features, see [Memory Reading & Risk](/guide/memory-reading).

## Overlay and Tracking Notes

- The trade overlay needs PoE2 in **Windowed Fullscreen** so Windows can draw Sift above the game.
- Price checking and stash scanning use the clipboard copy text for the hovered item.
- Live Tracking requires memory reading to be enabled and acknowledged. Sift does not modify game files, inject code, or automate gameplay.

## Auto-Updates

Sift checks for updates automatically on launch. When an update is available, it downloads and installs in the background. You'll get the new version next time you restart.

## Data Storage

All Sift data is stored locally at:

```text
%LOCALAPPDATA%\Sift\
```

This includes your settings database, price cache, tracking data, and encrypted session data. Nothing is stored in the cloud.
