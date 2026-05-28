---
description: Use Sift's in-game overlay to instantly price check items while playing PoE2.
---

# Price Check Overlay

The price check overlay is Sift's core trade feature. Hover an item in-game, press a hotkey, and get live trade prices without leaving the game.

## How It Works

1. **Hover** an item in Path of Exile 2.
2. Press <kbd>F2</kbd>, the default hotkey. Sift triggers the item copy flow and reads the clipboard text.
3. Sift parses the item text, identifies the item type and mods.
4. Sift queries the GGG trade API for comparable listings.
5. The overlay appears near your cursor with results.

The whole process takes 1-3 seconds depending on your connection and GGG's API response time.

## Changing the Hotkey

The default price check hotkey is <kbd>F2</kbd>. To change it:

1. Open settings with <kbd>F12</kbd> or by right-clicking the tray icon.
2. Navigate to the **Trade Popup** page.
3. Select a different key from the **Price Check Hotkey** dropdown.
4. The change takes effect immediately.

::: tip
Avoid keys that conflict with PoE2's own bindings, Sift scanner capture, or Sift chat commands.
:::

## Reading the Overlay

### Item Header

The item name, base type, and rarity are displayed at the top.

### Price Listings

Individual listings from the trade site show the seller's price and account name.

### Price Groups

When multiple sellers list at the same price, they're grouped together with a count.

### Confidence Badge

A colored badge indicates how reliable the estimate is:

- **High** - many comparable listings found and prices are consistent.
- **Medium** - some listings found, but prices vary.
- **Low** - few listings or a wide price spread.

### Trade Link

Click a price to open the full listing on the GGG trade website in your browser.

## Search Filters

Configure these filters on the **Trade Popup** page.

### Stat Threshold

Controls the minimum mod value when searching. By default, Sift searches for items with mods at **90%** of your item's rolled values. Lower the threshold to find more results at the cost of looser matches, or raise it for tighter matches.

For example, if your item has "+95 to maximum Life", a 90% threshold searches for "+85 to maximum Life" minimum.

### Instant Buyout Only

When enabled, Sift only shows listings with a fixed instant buyout price. This filters out negotiable listings and is enabled by default.

## Weighted Stats

For resistance and attribute mods, Sift can use weighted totals. It combines related mods into a single search parameter. For example, instead of searching for "+42% Fire Resistance" and "+38% Cold Resistance" separately, it can search for a total elemental resistance value.

## Supported Item Types

Sift handles the item types its parser can identify:

| Type | Search Method |
|---|---|
| **Rare equipment** | Valuable mods with stat thresholds |
| **Unique items** | Exact name match |
| **Currency** | Exact type lookup |
| **Skill gems** | Gem name, level, and quality |
| **Divination cards and similar stackables** | Exact type lookup when recognized |
| **Waystones and map-like items** | Tier and relevant mods when recognized |

## Tips

- **Unidentified items** can't be price checked. Sift needs to see the mods.
- If the overlay shows no results, try lowering the **Stat Threshold**.
- The overlay dismisses when you press <kbd>Escape</kbd> or click outside it.
- PoE2 must be in **Windowed Fullscreen** mode for the overlay to appear over the game.
