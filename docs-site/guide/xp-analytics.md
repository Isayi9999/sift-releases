---
description: Review XP sessions, zone performance, and tracked loot history.
---

# XP & Loot Analytics

Sift stores tracking history locally so you can review performance after a session.

::: warning Memory-only source data
XP and Loot Analytics are review pages for Live Tracking data. Viewing stored history does not itself need to read process memory, but the XP sessions, map runs, and loot deltas shown here are created only while memory reading is enabled and Live Tracking is running.
:::

## XP Analytics

Open **XP Analytics** after tracking at least one session.

The page requires OAuth character access. Select a character to view:

- **Sessions** - session duration, XP gained, deaths, zones visited, and editable session labels.
- **Zones** - all-time zone summaries for the selected character.

Additional completion-based tabs may appear in builds where those analytics are enabled.

## Loot Analytics

Open **Loot Analytics** to review session loot deltas for the selected character.

The page summarizes tracked currency changes by session and estimates chaos value when market prices are available. It also exposes **Unmapped loot IDs** so unrecognized inventory items can be copied into a report and reviewed later.

## Memory-Only Data

These analytics fields come from memory-backed tracking:

- Session XP gained, XP/hour, and zone history.
- Map run rows, map modifiers, and completion state.
- Inventory deltas used by Loot Analytics.

OAuth character data and stored local history can still be loaded without opening the PoE2 process.

## Data Model

Analytics data is local. Sift stores session summaries, zone summaries, activity events, run history, and inventory deltas in its local database under `%LOCALAPPDATA%\Sift\`.

## Good Habits

- Start a new session before a mapping block, farming test, or leveling segment.
- Give sessions short labels so they are easy to compare later.
- Treat loot values as estimates. They depend on recognized item IDs and current currency pricing.
