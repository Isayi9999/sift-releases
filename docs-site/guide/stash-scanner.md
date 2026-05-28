---
description: Capture and bulk-price your stash items using Sift's clipboard scanner.
---

# Stash Scanner

The stash scanner lets you quickly capture and price items from your stash tabs without manually price-checking each one. Hover items in-game, press a hotkey, and Sift captures and prices them automatically.

## How It Works

The scanner uses **clipboard capture** — the same mechanism as the price check overlay, but optimized for rapid bulk scanning:

1. Navigate to a stash tab in-game
2. **Hover** an item and press <kbd>F3</kbd> (default capture hotkey)
3. Sift copies the item text, parses it, and adds it to the scanner list
4. Repeat for as many items as you want to scan

There's no start/stop button — just press the hotkey whenever you want to capture an item. The scanner is always listening.

::: tip
You can change the capture hotkey on the **Trade Popup** settings page. The default is <kbd>F3</kbd>.
:::

## Auto-Price

When **Auto-Price** is enabled (toggle at the top of the Stash Scanner page), captured items are automatically priced as they're added. This queries the trade API in the background, so you can keep scanning while prices come in.

With Auto-Price off, items are captured but not priced until you manually trigger it.

## Price All

The **Price All** button kicks off a bulk pricing run across all captured items that haven't been priced yet (or that you want to re-check). Sift works through the list, respecting GGG's rate limits, and fills in prices as results come back.

## Value Alerts

Sift can notify you when a captured item is worth something:

### Toast Notifications
When an item's estimated value exceeds your configured threshold, a toast notification pops up showing the item name and value. This is useful for quickly spotting sleepers in your dump tabs.

### Sound Alerts
Enable sound alerts to get an audible notification alongside the toast — helpful when you're focused on the game and might miss a visual popup.

### Alert Threshold
Set the minimum value (in chaos) that triggers an alert. Items priced below this threshold are added silently. Configure this in the scanner settings panel.

### Toast Duration
Control how long toast notifications stay visible:
- **2–30 seconds** — slides away automatically after the set duration
- **Keep until closed** — toast stays on screen until you manually dismiss it

## Scanner Settings

Expand the **Settings** panel on the Stash Scanner page to configure scanner-specific options:

### Stat Threshold
Same concept as the price check overlay — controls how tightly Sift matches mod values when building trade queries. Lower values find more results but may over-value items.

### Weighted Mods
Uses weighted totals for resistances and attributes (same as the overlay).

### Buyout Only
Only consider listings with fixed buyout prices.

### Match Rarity / Match Base Type
Restrict price lookups to items of the same rarity or base type.

### Auto-Lower Threshold
When enabled, if a price lookup returns too few results, Sift automatically lowers the stat threshold and retries. This helps price niche items that might not have exact comparables.

## Excluded Mods

Some mods consistently produce bad price matches (e.g., very common mods that inflate result counts). You can exclude specific mods from being used in trade queries:

1. Open the scanner settings panel
2. Find the **Excluded Mods** section
3. Search for a mod by name
4. Click to add it to the exclusion list

Excluded mods are ignored when building trade queries for all scanned items. Remove an excluded mod by clicking the X next to it.

## Reading Scanner Results

### Value Column
Shows the estimated value in chaos orbs. Items are sorted by value (highest first) by default.

### Confidence Badges
Same system as the price check overlay:
- **High** — Strong price match, consistent listings
- **Medium** — Decent match, some price variance
- **Low** — Few comparables or wide price spread

### Threshold-Lowered Indicator
If Sift had to lower the stat threshold to find results (via auto-lower), the item shows a small indicator. This means the price is based on looser matching criteria — treat it as a rougher estimate.

## Inspect Button

Click the **Inspect** button on any scanned item to open the full price check overlay for it. This shows the same detailed view as a manual price check — individual listings, price groups, and a trade link.

## Tips

- **Scan dump tabs first** — they're the most likely to contain underpriced items you've forgotten about
- Use a low alert threshold (5–10 chaos) at first to get a feel for what your stash is worth, then raise it once you know your baseline
- Items that can't be parsed (e.g., certain special item types) are silently skipped
- The scanner remembers captured items for the session — you won't lose your list if you switch tabs in Sift
