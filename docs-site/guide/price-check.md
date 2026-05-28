---
description: Use Sift's in-game overlay to instantly price check items while playing PoE2.
---

# Price Check Overlay

The price check overlay is Sift's core feature. Hover an item in-game, press a hotkey, and get live trade prices without leaving the game.

## How It Works

1. **Hover** an item in Path of Exile 2
2. Press <kbd>F2</kbd> (default hotkey) — PoE2 copies the item to your clipboard, and Sift reads it
3. Sift **parses** the item text, identifies the item type and mods
4. Sift **queries the GGG trade API** for comparable listings
5. The **overlay** appears near your cursor with results

The whole process takes 1–3 seconds depending on your connection and GGG's API response time.

## Changing the Hotkey

The default price check hotkey is <kbd>F2</kbd>. To change it:

1. Open settings (<kbd>F12</kbd> or right-click the tray icon)
2. Navigate to the **Trade Popup** page
3. Select a different key from the **Price Check Hotkey** dropdown
4. The change takes effect immediately

::: tip
Avoid keys that conflict with PoE2's own bindings. Function keys (F1–F12) generally work well since PoE2 doesn't use most of them by default.
:::

## Reading the Overlay

When the overlay appears, here's what you're looking at:

### Item Header
The item name, base type, and rarity are displayed at the top.

### Price Listings
Individual listings from the trade site, showing:
- **Price** in the seller's listed currency
- **Account name** of the seller

### Price Groups
When multiple sellers list at the same price, they're grouped together showing the count.

### Confidence Badge
A colored badge indicating how confident Sift is in the price:
- **High** — Many comparable listings found, prices are consistent
- **Medium** — Some listings found, but prices vary
- **Low** — Few listings or wide price spread

### Trade Link
Click a price to open the full listing on the GGG trade website in your browser.

## Search Filters

These filters control how Sift builds the trade query. Configure them on the **Trade Popup** settings page:

### Stat Threshold
Controls the minimum mod value when searching. By default, Sift searches for items with mods at **80%** of your item's rolled values. Lower the threshold to find more results (at the cost of less accurate pricing), or raise it for tighter matches.

For example, if your item has "+95 to maximum Life", an 80% threshold searches for "+76 to maximum Life" minimum.

### Buyout Only
When enabled, only shows listings with a fixed buyout price (filters out "price negotiable" listings). Enabled by default.

### Match Rarity
When enabled, restricts results to items of the same rarity (Rare, Unique, etc.).

### Match Base Type
When enabled, restricts results to the same base type (e.g., "Expert Vaal Regalia" specifically, not just any body armour).

## Weighted Stats

For resistance and attribute mods, Sift uses **weighted totals** — it combines related mods into a single search parameter. For example, instead of searching for "+42% Fire Res" and "+38% Cold Res" separately, it searches for "80% total elemental resistance" which finds more comparable items.

## Supported Item Types

Sift handles all major item types:

| Type | Search Method |
|---|---|
| **Rare equipment** | Top 3–4 mods by value, with stat thresholds |
| **Unique items** | Exact name match |
| **Currency** | Exact type lookup |
| **Skill gems** | Gem name + level + quality |
| **Waystones** | Tier + relevant mods |

## Tips

- **Unidentified items** can't be price checked — Sift needs to see the mods
- If the overlay shows no results, try lowering the **stat threshold** to broaden the search
- The overlay dismisses when you press <kbd>Escape</kbd> or click outside it
- PoE2 must be in **Windowed Fullscreen** mode for the overlay to appear over the game
