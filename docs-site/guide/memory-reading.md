---
description: What Sift memory reading does, which features require it, and the Terms of Service risk to understand before enabling it.
---

# Memory Reading & Risk

Sift can run entirely for price checking, stash scanning, crafting, market views, chat commands, and manual checklists without reading Path of Exile 2 process memory.

Memory reading is an optional quality-of-life mode for live tracking. It is disabled by default and must be enabled from the Authorization page after acknowledging the risk.

::: danger Terms of Service disclaimer
Sift is not affiliated with or endorsed by Grinding Gear Games. Even though Sift uses memory reading only for quality-of-life display features, read-only process access may still be against GGG's Terms of Service or anti-cheat policy. There is no guarantee that this is permitted or risk-free. Use it at your own discretion and review GGG's current rules before enabling it.
:::

## What Memory Reading Does

When enabled, Sift may open the running PoE2 process with read access and read local state needed for live tracking:

- Current XP and level.
- Current area or zone.
- Map instance and completion state.
- Map modifier information used by tracking analytics.
- Inventory currency and stackable item state used to calculate loot deltas.

Sift does not write to the game process, modify game files, inject DLLs, hook rendering, or automate gameplay.

## Memory-Only Features

These features require memory reading and stay hidden, blocked, or inactive until memory reading is enabled:

| Feature | Why memory reading is needed |
|---|---|
| **Live Tracking** | Reads live XP, current zone, deaths/session state, map data, and inventory deltas. |
| **XP Analytics source data** | Analytics can only show live tracking sessions that were recorded while memory reading was enabled. |
| **Loot Analytics source data** | Loot deltas come from inventory snapshots recorded during live tracking. |
| **Leveling live zone follow** | The checklist can follow your current zone only when Sift can read live area data. |
| **Sidebar game/inventory status** | The sidebar status checks whether PoE2 and inventory state are readable. |
| **XP Tracking auto-start** | Auto-start is disabled unless memory reading has already been acknowledged and enabled. |

## Features That Do Not Need Memory Reading

These features do not use process memory:

- Price Check Overlay.
- Clipboard-based Stash Scanner capture and pricing.
- Crafting Advisor and crafting reference pages.
- Currency Trends, Pulse, and Arbitrage.
- Chat command hotkeys.
- Skill Tree account/equipment loading through OAuth.
- Manual Leveling Checklist progress.

Some of these features still need trade login or OAuth, but they do not open or read the PoE2 process.

## Enabling or Disabling

1. Open Sift settings with <kbd>F12</kbd> or the tray icon.
2. Go to the **Authorization** page.
3. Turn on **Enable memory-backed live tracking**.
4. Read the acknowledgement text and press **Enable**.

The setting persists across restarts. Turning it off stops active tracking and disconnects the memory reader. While disabled, Sift's central memory reader guard refuses connect and read calls before they reach the PoE2 reader.

## Practical Guidance

- Keep memory reading disabled if you only need pricing, crafting, currency, chat commands, or manual checklists.
- Enable it only when you specifically want live XP, zone, map, or loot tracking.
- Disable it again when you do not need live tracking.
- Treat all live tracking as optional quality-of-life data, not required functionality.
