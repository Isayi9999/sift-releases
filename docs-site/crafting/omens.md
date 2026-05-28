---
description: Every omen type in PoE2, how they modify currencies, and when the Crafting Advisor recommends using them.
---

# Omens

::: info TL;DR
Omens are insurance — they modify the next currency you use. The advisor compares omen cost vs. restart cost to decide whether protection is worth it.
:::

Omens are consumable items that change the behavior of the **next** crafting currency you use. Each omen is consumed on use. They don't do anything on their own — they enhance or redirect the next orb.

The advisor considers omen costs at every decision point and recommends them only when they're cheaper than the alternative (usually restarting from scratch).

## Exalted Orb Omens

Control where the next Exalted Orb adds a mod.

| Omen | Effect | When to Use |
|---|---|---|
| **Sinistral Exaltation** | Next Exalted adds a **prefix** only | When you need a specific prefix and have open slots on both sides |
| **Dextral Exaltation** | Next Exalted adds a **suffix** only | When you need a specific suffix and have open slots on both sides |
| **Greater Exaltation** | Next Exalted adds **2 mods** instead of 1 | When filling 2 slots at once is cheaper than 2 separate exalts |

Without these omens, Exalted Orbs in PoE2 are **cross-slot** — they draw from both prefix and suffix pools. Use side-targeting omens when you can't afford a mod landing on the wrong side.

::: warning Removed
**Omen of Homogenising Exaltation** was removed in patch 0.4.
:::

## Chaos Orb Omens

Control what the next Chaos Orb removes. Remember: [Chaos Orbs swap 1 mod](/crafting/currency-basics#chaos-orb-the-big-misconception), they don't reroll.

| Omen | Effect | When to Use |
|---|---|---|
| **Sinistral Erasure** | Next Chaos removes a **prefix** only (still adds random) | Protect suffixes during Chaos spam on the prefix side |
| **Dextral Erasure** | Next Chaos removes a **suffix** only (still adds random) | Protect prefixes during Chaos spam on the suffix side |
| **Whittling** | Next Chaos removes the **lowest mod-level** mod | Safely remove a known junk mod without risking desired mods |

### Erasure Omens in Detail

Erasure is the backbone of [Phase 4 (Build Secondary Side)](/crafting/side-first-strategy#phase-4-build-secondary-side). After fracturing a primary-side mod, you spam Chaos + Erasure to reroll the secondary side without touching the protected primary.

**Cost per attempt:** Chaos price + Erasure omen price. The advisor calculates whether this is cheaper than other approaches (targeted exalts, Whittling cycles).

### Whittling in Detail

Whittling is precise surgery. It always targets the mod with the **globally lowest mod-level** on the item. This is why the [desecrate blocker](/crafting/desecration) strategy insists on choosing a low mod-level junk mod — it ensures Whittling will target the blocker, not your desired mods.

::: warning
If your desired mod has the lowest mod-level, Whittling will destroy it. The advisor tracks mod levels at every step to ensure Whittling is safe before recommending it.
:::

## Annulment Omens

Control which side the next Annulment targets.

| Omen | Effect | When to Use |
|---|---|---|
| **Sinistral Annulment** | Next Annulment removes a **prefix** only | Remove a bad prefix without risking suffix mods |
| **Dextral Annulment** | Next Annulment removes a **suffix** only | Remove a bad suffix without risking prefix mods |

Without these omens, Annulment removes a random mod from any slot. Use side-targeting when you have valuable mods on both sides.

## Essence Omens

Control which mod gets removed during Perfect/Corrupted Essence use.

| Omen | Effect | When to Use |
|---|---|---|
| **Sinistral Crystallisation** | Next Perfect/Corrupted Essence removes a **prefix** only | Protect suffix-side mods during essence crafting |
| **Dextral Crystallisation** | Next Perfect/Corrupted Essence removes a **suffix** only | Protect prefix-side mods during essence crafting |

These are critical when using essences on items that already have valuable mods on one side. See [Essences](/crafting/essences) for details.

## Desecration Omens

Control how desecration interacts with items.

| Omen | Effect | When to Use |
|---|---|---|
| **Omen of Light** | Next Annulment **targets the desecrated mod** specifically | Remove a desecrate blocker cleanly to re-desecrate for a better option |
| **Omen of Abyssal Echoes** | Next desecrate reveal offers **6 options** instead of 3 | When you need a specific Lich mod and want better odds at the Well of Souls |
| **Sinistral Necromancy** | Next desecrated mod is forced to a **prefix** slot | Eliminate the 50% wrong-side penalty when you specifically need a prefix-side desecrate |
| **Dextral Necromancy** | Next desecrated mod is forced to a **suffix** slot | Eliminate the 50% wrong-side penalty when you specifically need a suffix-side desecrate |

### Omen of Light

This is the primary tool for managing desecrate blockers. When you need to remove a desecrated mod (to re-desecrate or to clean up after fracturing), Omen of Light + Annulment guarantees it hits the desecrated mod instead of risking a random removal.

## Lich-Targeting Omens

Force desecrate reveals to show mods from a specific Lich.

| Omen | Effect | When to Use |
|---|---|---|
| **Omen of Blackblooded** | Reveals only **Amanamu** (Lich of Darkness) mods | Targeting specific Amanamu prefixes (phys damage, chaos DoT, etc.) |
| **Omen of Liege** | Reveals only **Kurgal** (Lich of the Depths) mods | Targeting specific Kurgal prefixes (penetration, crit multi, etc.) |
| **Omen of Sovereign** | Reveals only **Ulaman** (Lich of the Void) mods | Targeting specific Ulaman suffixes (crit chance, suppression, etc.) |

These narrow the reveal pool dramatically, making it much more likely to find the specific Lich mod you want. See [Desecration & Lich Mods](/crafting/desecration#lich-exclusive-mods) for the full mod lists.

::: warning Removed
**Omen of Homogenising Coronation** (for Regal Orbs) was removed in patch 0.4.
:::

## When Are Omens Worth It?

The advisor's decision is purely economic:

```
Is omen cost < probability of failure × restart cost?
```

- **Early in the craft** (low investment): omens are rarely worth it — restarting is cheap
- **After fracture** (high investment): omens are almost always worth it — you're protecting a large cumulative investment
- **For Whittling cleanup**: always worth checking — Whittling + Chaos is often the cheapest way to remove a specific junk mod

The advisor runs this comparison at every step and only recommends omens when the math works out.
