---
description: Track XP, zones, map runs, deaths, and loot deltas while playing PoE2.
---

# Live Tracking

Live Tracking records your current play session so you can see XP rate, zone history, deaths, map runs, map modifiers, and currency deltas while you play.

::: danger Terms of Service disclaimer
Live Tracking uses read-only process memory access. This is quality-of-life functionality, but it may still be against GGG's Terms of Service or anti-cheat policy. Enable it only if you accept that risk.
:::

## Requirements

- Enable **Memory Reading** on the Authorization page and acknowledge the risk.
- Connect OAuth on the Authorization page so Sift can load your character list.
- Run PoE2 on the same Windows user session as Sift.
- Select the character you are playing.

Sift reads local PoE2 process memory for live XP, area, map, and inventory delta data. It does not write to the process, modify game files, inject code, or automate gameplay.

## Memory-Only Data

This page is hidden or blocked while memory reading is disabled. The following live values are memory-only:

- XP, level, and XP/hour updates.
- Current zone and zone history.
- Map run detection, map modifiers, and completion state.
- Inventory currency deltas used for loot tracking.
- Auto-start tracking on app launch.

## Starting a Session

1. Open **Live Tracking**.
2. Select your character.
3. Optionally enter a session label.
4. Press **Start Tracking**.

While tracking, the page shows connection state, current character level, total and mapping XP/hour, session XP, deaths, time tracked, ETA, current zone, and recent activity.

Use **New Session** when you want a fresh run without changing character. Use **Stop** when you are done.

## Map Runs and Loot Deltas

The run table records zone changes and map-like activity. When Sift can identify map details, it shows map level, duration, XP, deaths, modifiers, completion state, and currency deltas.

Loot tracking is based on inventory changes seen during tracking. It is strongest for currency and stackable items that Sift can map to known market values. Unknown IDs are surfaced in Loot Analytics for review.

## Auto-Start

The Authorization page includes an XP Tracking auto-start setting after memory reading is enabled. When enabled, Sift attempts to resume tracking the saved character on launch once PoE2 is available.

## Troubleshooting

- If the page says **Waiting for PoE2**, start or focus the game and enter an area.
- If no characters load, reconnect OAuth on the Authorization page.
- If XP does not move, make sure the selected character is the one currently in-game.
- If loot values show `~`, some deltas were recognized but not fully priced.
