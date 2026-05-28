---
description: Frequently asked questions about Sift — security, troubleshooting, compatibility, and crafting advice.
---

# FAQ & Troubleshooting

## Is my login safe?

Yes. Your login is encrypted and stored only on your computer — it never leaves your machine.

When you log in through Sift, your session cookie is encrypted using Windows DPAPI (Data Protection API), which ties the encryption to your Windows user account. The encrypted data is stored locally in `%LOCALAPPDATA%\Sift\`. The only time the cookie is transmitted is directly to GGG's own API servers (`pathofexile.com`) for trade lookups — Sift never sends it anywhere else.

You can disconnect at any time from the Authorization settings page, which clears the stored session.

## Why are prices wrong or missing?

A few common reasons:

- **Niche item** — If few comparable items are listed on trade, Sift may not find enough results for an accurate estimate. Try lowering the stat threshold.
- **New league** — Early in a league, trade data is sparse and prices are volatile. Results improve as the economy stabilizes.
- **Rate limiting** — GGG limits how many trade API requests can be made per minute. If Sift is rate-limited, it may return partial results. Wait a moment and try again.
- **Stat threshold too high** — If you're searching for items with mods at 80% of your values and your item has a godly roll, there may be very few comparable listings. Lower the threshold on the Trade Popup page.

## The overlay doesn't appear

- **Game mode** — PoE2 must be in **Windowed Fullscreen** mode, not exclusive fullscreen. The overlay cannot render over exclusive fullscreen applications.
- **Hotkey conflict** — Another application may be capturing the hotkey before Sift. Try changing the hotkey on the Trade Popup settings page.
- **Sift not running** — Check for the Sift icon in your system tray. If it's not there, launch Sift.
- **Not hovering an item** — You need to be hovering an item in-game when you press the hotkey. PoE2 copies item text to clipboard on hover + key press.

## Can I use this with PoE 1?

No. Sift is built exclusively for **Path of Exile 2**. The item format, trade API, mod system, and crafting mechanics are all PoE2-specific. For PoE1, check out [Sidekick](https://github.com/Sidekick-Poe/Sidekick) or [Awakened PoE Trade](https://github.com/SnosMe/awakened-poe-trade).

## Does this work with Steam and standalone client?

Yes, both. Sift reads item data from the clipboard and communicates with GGG's web API — it doesn't interact with the game client directly. It works regardless of how you launch PoE2.

## How do I update Sift?

Sift updates itself automatically via [Velopack](https://velopack.io). When a new version is available, it downloads in the background and installs on your next restart. No manual action needed.

To check your current version, right-click the tray icon.

## Where is my data stored?

All data is stored locally at:

```
%LOCALAPPDATA%\Sift\
```

This includes:
- **Settings database** (SQLite) — your preferences, hotkey bindings, excluded mods
- **Price cache** — poe.ninja snapshot data for quick lookups
- **Encrypted session data** — your login cookie, encrypted with Windows DPAPI

Nothing is stored in the cloud. Deleting this folder resets Sift to a fresh install state.

## The crafting advisor gives expensive recipes

The expected cost in the recipe accounts for probability — it's not the best-case cost, it's the **average** cost including misses and retries.

A few things to keep in mind:

- **Check the P50 column** — this is the median cost. Half of crafters will spend less than this. The "expected cost" can be skewed by worst-case outliers.
- **High-tier mods are expensive to target** — A mod with a 0.5% hit rate naturally requires ~200 attempts on average. That's the reality of the mod pool, not a limitation of the advisor.
- **Simplify your goals** — Want to spend less? Target fewer mods, or accept lower tiers. A 4-mod item is dramatically cheaper than a 6-mod item.
- **Compare against buying** — Sometimes it's cheaper to buy the finished item from trade than to craft it yourself. The advisor helps you see the true cost so you can make that comparison.

## Is this allowed by GGG's Terms of Service?

Sift is a **third-party tool** that interacts with GGG's public trade API. It does not modify game files, inject into the game process, or automate gameplay.

::: warning Disclaimer
Sift is not affiliated with or endorsed by Grinding Gear Games. Use of third-party tools is at your own discretion. While tools that read public API data are generally tolerated by GGG, there is no official guarantee. Always review GGG's current Terms of Service for the most up-to-date policy.
:::

## I found a bug / have a feature request

Report issues or suggest features on the [GitHub Issues](https://github.com/Isayi9999/sift-releases/issues) page.
