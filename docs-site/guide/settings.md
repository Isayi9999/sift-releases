---
description: Quick reference for all Sift settings, organized by app page.
---

# Settings Reference

All Sift settings at a glance, organized by the page where you'll find them.

## Authorization Page

*Route: Authorization*

| Setting | Description |
|---|---|
| **Trade API Login** | Log in to pathofexile.com to enable price checking. Uses an embedded browser, with no manual cookie copying. |
| **Disconnect** | Clears your stored trade session. You'll need to log in again to use trade features. |
| **OAuth Connect** | Authorize Sift for character, profile, and stash-scoped account features. Required for Live Tracking character selection, XP Analytics, Leveling character selection, and Skill Tree equipment loading. |
| **League Selection** | Choose your active league. Trade lookups, scanner pricing, and market-backed tools use this league. |
| **Enable memory-backed live tracking** | Unlocks memory-only live tracking features after an explicit risk acknowledgement. Disabled by default. |
| **XP Tracking Auto-Start** | Automatically resume tracking for your selected character when Sift starts and PoE2 is available. Shown only after memory reading is enabled. |

::: danger Terms of Service disclaimer
Memory reading is optional quality-of-life functionality, but read-only process access may still be against GGG's Terms of Service or anti-cheat policy. Enable it only if you accept that risk.
:::

## Trade Popup Page

*Route: Trade Popup*

| Setting | Default | Description |
|---|---|---|
| **Price Check Hotkey** | <kbd>F2</kbd> | Hotkey to trigger a price check while hovering an item in-game. |
| **Open Settings Hotkey** | <kbd>F12</kbd> | Hotkey to open or focus the Sift settings window. |
| **Stat Threshold** | 90% | Minimum mod value percentage used when building trade queries. Lower = more results, less precise. |
| **Instant Buyout Only** | On | Only show listings with a fixed instant buyout price. |

## Stash Scanner Page

*Route: Stash Scanner*

Settings are in the scanner header and the expandable **Settings** panel.

| Setting | Default | Description |
|---|---|---|
| **Scanner Hotkey** | <kbd>F3</kbd> | Hotkey to capture the hovered item into the scanner queue. |
| **Auto-scan** | On | Automatically price items as they're captured. |
| **Stat Threshold** | 90% | Scanner-specific stat threshold. |
| **Pseudo Resistances** | On | Use weighted total resistance filters where possible. |
| **Pseudo Attributes** | On | Use weighted total attribute filters where possible. |
| **Instant Buyout Only** | On | Only consider instant buyout listings for scanner pricing. |
| **Match Rarity** | Off | Restrict scanner lookups to same rarity. |
| **Match Base Type** | Off | Restrict scanner lookups to same base type. |
| **Auto-Lower Threshold** | Off | Automatically retry with a lower threshold if too few results are found. |
| **Toast Duration** | 10s | How long value alert toasts stay visible. `0` keeps the toast until closed. |
| **Alert Thresholds** | Varies | Minimum Exalted, Chaos, Annulment, and Divine values to trigger a toast or sound alert. |
| **Sound Alerts** | Off | Play a sound when a high-value item is detected. |
| **Excluded Mods** | Empty | Mods to exclude from scanner trade query building. |

## Live Tracking Page

*Route: Live Tracking*

This page is memory-only and is hidden or blocked until **Enable memory-backed live tracking** is acknowledged on the Authorization page.

| Setting | Description |
|---|---|
| **Character** | OAuth character to track. |
| **Session Label** | Optional label for the current XP session. |
| **Start Tracking / Stop** | Start or stop reading live XP, area, map, and inventory delta data. |
| **New Session** | Ends the current session and starts a fresh labeled session for the same character. |
| **Hide map stats** | Hides map modifier chips and current map detail in the run table. |

## XP & Loot Analytics Pages

*Routes: XP Analytics, Loot Analytics*

These pages review stored Live Tracking history. The history they display is produced by memory-backed tracking.

| Setting | Description |
|---|---|
| **Character** | Select the character whose sessions and loot history you want to review. |
| **Session Label** | XP Analytics lets you rename tracked sessions. |
| **Unknown Loot Report** | Loot Analytics can copy or clear unmapped inventory item observations. |

## Leveling Page

*Route: Leveling*

| Setting | Description |
|---|---|
| **Character** | Select an OAuth character or enter a manual character name. |
| **Act / Reward Filters** | Filter permanent reward tasks by act, reward type, search text, and completion state. |
| **Auto zone** | Memory-only live zone follow. Hidden unless memory reading is enabled and a current zone is available. |
| **Reward Choices** | Store the choice you took for rewards that have multiple outcomes. |

## Chat Commands Page

*Route: Chat Commands*

| Setting | Description |
|---|---|
| **Command Text** | Chat command or message to send. Use `@last` for the last player who whispered you. |
| **Hotkey** | Assign one of the available chat hotkeys: F5-F12, Ctrl+F, or Ctrl+H. |
| **Auto-send** | When enabled, submits the command. When disabled, opens chat and pastes the command for review. |

## Hotkey Summary

| Hotkey | Default | Action |
|---|---|---|
| Price Check | <kbd>F2</kbd> | Parse hovered item and show price overlay |
| Open Settings | <kbd>F12</kbd> | Open or focus the settings window |
| Stash Capture | <kbd>F3</kbd> | Capture hovered item to the stash scanner |
| Chat Commands | <kbd>F5</kbd> for `/hideout` | Send configured chat commands |

## Data Storage

All data is stored locally at `%LOCALAPPDATA%\Sift\`, including:

- Settings database, including preferences, hotkey bindings, excluded mods, and chat commands.
- Price cache and market snapshots.
- Encrypted session data and OAuth tokens, protected with Windows DPAPI.
- XP sessions, zone summaries, run history, loot deltas, and leveling progress.

For more details, see the [Installation guide](/guide/installation) and [FAQ](/faq).
