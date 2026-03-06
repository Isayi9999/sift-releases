---
description: Quick reference for all Sift settings, organized by app page.
---

# Settings Reference

All Sift settings at a glance, organized by the page where you'll find them.

## Authorization Page

*Route: Main settings window (default page)*

| Setting | Description |
|---|---|
| **Trade API Login** | Log in to pathofexile.com to enable price checking. Uses an embedded browser — no manual cookie copying. |
| **Disconnect** | Clears your stored session. You'll need to log in again to use trade features. |
| **OAuth Connect** | Authorize Sift for stash tab API access (separate from trade login). |
| **League Selection** | Choose your active league. All trade lookups and stash scanning use this league. |

## Trade Popup Page

*Route: Trade Popup settings*

| Setting | Default | Description |
|---|---|---|
| **Price Check Hotkey** | <kbd>F2</kbd> | Hotkey to trigger a price check while hovering an item in-game. |
| **Open Settings Hotkey** | <kbd>F12</kbd> | Hotkey to open the Sift settings window. |
| **Stash Capture Hotkey** | <kbd>F3</kbd> | Hotkey to capture an item for the stash scanner. |
| **Stat Threshold** | 80% | Minimum mod value percentage used when building trade queries. Lower = more results, less precise. |
| **Buyout Only** | On | Only show listings with a fixed buyout price. |
| **Match Rarity** | Off | Restrict results to items of the same rarity. |
| **Match Base Type** | Off | Restrict results to the same base type. |

## Stash Scanner Page

*Route: Stash Scanner*

Settings are in the expandable **Settings** panel on the Stash Scanner page.

| Setting | Description |
|---|---|
| **Auto-Price** | Automatically price items as they're captured. |
| **Stat Threshold** | Scanner-specific stat threshold (independent of the trade popup threshold). |
| **Weighted Mods** | Use weighted totals for resistances and attributes. |
| **Buyout Only** | Only consider buyout listings for scanner pricing. |
| **Match Rarity** | Restrict scanner lookups to same rarity. |
| **Match Base Type** | Restrict scanner lookups to same base type. |
| **Auto-Lower Threshold** | Automatically retry with a lower threshold if too few results are found. |
| **Toast Duration** | How long value alert toasts stay visible (2–30s, or indefinite). |
| **Value Alert Threshold** | Minimum value (chaos) to trigger a toast/sound alert. |
| **Sound Alerts** | Play a sound when a high-value item is detected. |
| **Excluded Mods** | Mods to exclude from trade query building. |

## Hotkey Summary

| Hotkey | Default | Action |
|---|---|---|
| Price Check | <kbd>F2</kbd> | Parse hovered item and show price overlay |
| Open Settings | <kbd>F12</kbd> | Open/focus the settings window |
| Stash Capture | <kbd>F3</kbd> | Capture hovered item to the stash scanner |

## Data Storage

All data is stored locally at `%LOCALAPPDATA%\Sift\`, including:
- **Settings database** (SQLite)
- **Price cache** (poe.ninja snapshots)
- **Encrypted session data** (DPAPI)

For more details, see the [Installation guide](/guide/installation) and [FAQ](/faq).
