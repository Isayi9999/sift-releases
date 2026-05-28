---
description: Frequently asked questions about Sift, including security, troubleshooting, compatibility, and crafting advice.
---

# FAQ & Troubleshooting

## Is my login safe?

Your login is encrypted and stored only on your computer.

When you log in through Sift, your session cookie is encrypted using Windows DPAPI, which ties the encryption to your Windows user account. The encrypted data is stored locally in `%LOCALAPPDATA%\Sift\`. The only time the cookie is transmitted is directly to GGG's own API servers for trade lookups.

OAuth tokens are stored the same way and are used only for GGG account features such as character lists, profile data, and stash-scoped endpoints.

You can disconnect at any time from the Authorization page, which clears the stored session.

## Why are prices wrong or missing?

A few common reasons:

- **Niche item** - If few comparable items are listed on trade, Sift may not find enough results for an accurate estimate. Try lowering the stat threshold.
- **New league** - Early in a league, trade data is sparse and prices are volatile. Results improve as the economy stabilizes.
- **Rate limiting** - GGG limits how many trade API requests can be made per minute. If Sift is rate-limited, it may return partial results. Wait a moment and try again.
- **Stat threshold too high** - If you're searching for items with mods at 90% of your values and your item has a very high roll, there may be very few comparable listings. Lower the threshold on the Trade Popup page.

## The overlay doesn't appear

- **Game mode** - PoE2 must be in **Windowed Fullscreen** mode, not exclusive fullscreen.
- **Hotkey conflict** - Another application may be capturing the hotkey before Sift. Try changing the hotkey on the Trade Popup page.
- **Sift not running** - Check for the Sift icon in your system tray. If it's not there, launch Sift.
- **Not hovering an item** - You need to be hovering an item in-game when you press the price check hotkey.

## Can I use this with PoE 1?

No. Sift is built exclusively for **Path of Exile 2**. The item format, trade API, mod system, and crafting mechanics are PoE2-specific.

For PoE1, check out [Sidekick](https://github.com/Sidekick-Poe/Sidekick) or [Awakened PoE Trade](https://github.com/SnosMe/awakened-poe-trade).

## Does this work with Steam and standalone client?

Yes, both. Price checking and stash scanning use the clipboard item text plus GGG web APIs. Live Tracking also reads the running PoE2 process to observe XP, area, map, and inventory delta data. It works regardless of whether you launch PoE2 through Steam or the standalone client.

Sift does not modify game files, inject code, or automate gameplay.

## How do I update Sift?

Sift updates itself automatically via [Velopack](https://velopack.io). When a new version is available, it downloads in the background and installs on your next restart.

To check your current version, look at the Sift sidebar or right-click the tray icon.

## Live Tracking says PoE2 is not connected

- Make sure memory reading is enabled on the Authorization page and that you acknowledged the risk prompt.
- Make sure PoE2 is running on the same Windows user session as Sift.
- Connect OAuth on the Authorization page so Sift can load your character list.
- Select the correct character and press **Start Tracking**.
- Enter an area or change zones if the current XP or area display has not populated yet.

## Where is my data stored?

All data is stored locally at:

```text
%LOCALAPPDATA%\Sift\
```

This includes:

- Settings database, including preferences, hotkey bindings, excluded mods, and chat commands.
- Price cache and poe.ninja snapshots.
- Encrypted session data and OAuth tokens, protected with Windows DPAPI.
- XP sessions, zone summaries, run history, loot deltas, and leveling progress.

Nothing is stored in the cloud. Deleting this folder resets Sift to a fresh install state.

## The crafting advisor gives expensive recipes

The expected cost in the recipe accounts for probability. It is not the best-case cost; it is the average cost including misses and retries.

A few things to keep in mind:

- **Check the P50 column** - this is the median cost. Half of crafters will spend less than this.
- **High-tier mods are expensive to target** - a mod with a 0.5% hit rate naturally requires about 200 attempts on average.
- **Simplify your goals** - target fewer mods, accept lower tiers, or add optional pool mods.
- **Compare against buying** - sometimes it is cheaper to buy the finished item from trade than to craft it yourself.

## Is this allowed by GGG's Terms of Service?

Sift is a third-party tool that interacts with GGG's public trade and account APIs. Most features do not read game memory: price checking and stash scanning use clipboard item text and web APIs, while crafting, currency, chat command, and manual checklist features are local or API-backed.

Live Tracking is different. It reads local PoE2 process memory to display XP, area, map, and inventory delta information. Sift does not modify game files, inject into the game process, or automate gameplay, but read-only process access can still be against a game's Terms of Service or anti-cheat policy.

::: danger Disclaimer
Sift is not affiliated with or endorsed by Grinding Gear Games. Memory reading is optional quality-of-life functionality, but there is no guarantee that GGG permits it or that it is risk-free. Use it at your own discretion and review GGG's current Terms of Service before enabling it.
:::

See [Memory Reading & Risk](/guide/memory-reading) for the list of memory-only features.

## I found a bug / have a feature request

Report issues or suggest features on the [GitHub Issues](https://github.com/Isayi9999/sift-releases/issues) page.
