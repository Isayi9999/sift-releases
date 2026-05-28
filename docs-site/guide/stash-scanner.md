---
description: Capture and price stash items using Sift's clipboard scanner.
---

# Stash Scanner

The Stash Scanner lets you capture and price items from stash tabs without opening the full price overlay for every item.

## How It Works

The scanner uses clipboard capture, the same item text source as the price check overlay, but it keeps a queue of captured items.

1. Navigate to a stash tab in-game.
2. Hover an item and press <kbd>F3</kbd>, the default scanner hotkey.
3. Sift copies the item text, parses it, and adds it to the scanner list.
4. If **Auto-scan** is enabled, Sift prices queued items in the background.
5. Repeat for as many items as you want to scan.

The scanner captures one hovered item per hotkey press. It also de-duplicates exact copied item text, so pressing the scanner hotkey twice on the same item in a session will not add a second copy.

::: tip
You can change the capture hotkey from the dropdown in the Stash Scanner header. The default is <kbd>F3</kbd>.
:::

## Auto-Scan

When **Auto-scan** is enabled, captured items are priced automatically as they enter the queue. This queries the trade API in the background, so you can keep scanning while prices come in.

With Auto-scan off, Sift still captures items into the list, but it does not run the pricing queue. Turn Auto-scan back on before bulk scanning if you want values to fill in continuously.

## Value Alerts

Sift can notify you when a captured item is worth something.

### Toast Notifications

When an item's estimated value exceeds your configured threshold, a toast notification pops up showing the item name and value.

### Sound Alerts

Enable sound alerts to get an audible notification alongside the toast.

### Alert Thresholds

Set the minimum value that triggers an alert. The scanner settings include separate thresholds for Exalted, Chaos, Annulment, and Divine values. Items below the configured thresholds are added silently.

### Toast Duration

Control how long toast notifications stay visible:

- **2-30 seconds** - slides away automatically after the set duration.
- **Keep until closed** - toast stays on screen until you manually dismiss it.

## Scanner Settings

Expand the **Settings** panel on the Stash Scanner page to configure scanner-specific options.

### Stat Threshold

Controls how tightly Sift matches mod values when building trade queries. Lower values find more results but may over-value items.

### Pseudo Resistances and Pseudo Attributes

Use weighted total filters for resistances and attributes where possible.

### Instant Buyout Only

Only consider listings with fixed instant buyout prices.

### Match Rarity / Match Base Type

Restrict scanner lookups to items of the same rarity or base type.

### Auto-Lower Threshold

When enabled, if a price lookup returns too few results, Sift automatically lowers the stat threshold and retries. This helps price niche items that might not have exact comparables.

## Excluded Mods

Some mods consistently produce bad price matches. You can exclude specific mods from scanner trade queries:

1. Open the scanner settings panel.
2. Find the **Excluded Mods** section.
3. Search for a mod by name.
4. Click to add it to the exclusion list.

Excluded mods are ignored when building scanner trade queries. Remove an excluded mod by clicking the X next to it.

## Reading Scanner Results

### Value Column

Shows the estimated value in the listing currency. The totals bar summarizes priced value across the current scanner list.

### Confidence Badges

The scanner uses the same confidence system as the price overlay:

- **High** - strong price match and consistent listings.
- **Medium** - decent match with some price variance.
- **Low** - few comparables or a wide price spread.

### Threshold-Lowered Indicator

If Sift had to lower the stat threshold to find results, the item shows an indicator. Treat that price as a rougher estimate.

## Inspect Action

Click the inspect action on any scanned item to open the full price check overlay for it. This shows individual listings, price groups, and the trade link.

## Tips

- Scan dump tabs first. They are the most likely to contain underpriced items you forgot about.
- Use a low alert threshold at first to learn your baseline, then raise it.
- Items that can't be parsed are skipped.
- The scanner remembers captured items for the session.
- Inventory-wide capture is not currently a separate command. The scanner captures the hovered item text supplied by the game clipboard copy.
