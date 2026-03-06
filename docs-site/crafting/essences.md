---
description: How essences provide deterministic mod targeting and when the Crafting Advisor recommends using them over rolling.
---

# Essences

::: info TL;DR
Essences guarantee a specific mod. The advisor uses them when they're cheaper than rolling — no RNG, just a fixed cost.
:::

Essences are the opposite of gambling. Instead of rolling randomly and hoping, you use an essence to **guarantee** a specific mod on your item. The tradeoff is cost — essences can be expensive, but sometimes that fixed cost beats the expected cost of rolling.

## Essence Tiers

| Tier | Target | Effect |
|---|---|---|
| **Lesser** | Normal → Magic | Upgrade to Magic, guarantee specific mod |
| **Normal** | Normal → Magic | Upgrade to Magic, guarantee specific mod |
| **Greater** | Magic → Rare | Upgrade to Rare, guarantee specific mod |
| **Perfect** | Rare item | Remove 1 random mod + add guaranteed mod |
| **Corrupted** | Rare item | Remove 1 random mod + add guaranteed mod |

### Lower Tiers (Lesser, Normal, Greater)

These work like enhanced versions of Transmutation and Regal. Instead of getting a random mod, you get the essence's specific mod. The item still changes rarity as expected.

### Perfect & Corrupted Essences

These are the interesting ones for endgame crafting. On a Rare item, they work like a **targeted Chaos Orb**: remove 1 random mod, then add the essence's guaranteed mod.

The key difference from Chaos: you *know* what mod you're getting. The removal is still random, but the addition is deterministic.

## When Are Essences Worth It?

The advisor compares two paths:

**Rolling path:** Use currency orbs and hope to hit the mod randomly. Cost = expected attempts × currency price.

**Essence path:** Buy the essence and apply it. Cost = essence price (+ Crystallisation omen if protecting the other side).

If the essence path is cheaper, the advisor recommends it.

### Common Scenarios

- **+Level to skill gems** — Often very rare in the random pool but available via essence. Essence is frequently the cheapest path.
- **Specific resistance types** — When a particular resistance mod has low weight in the pool, essences can shortcut past bad odds.
- **Niche build-enabling mods** — Mods that only a few players want tend to have cheap essences on trade.

## Protecting Existing Mods

Perfect and Corrupted essences remove a random mod before adding their guaranteed one. If your item already has valuable mods, you need protection.

This is where **Crystallisation omens** come in:

| Omen | Effect |
|---|---|
| **Sinistral Crystallisation** | The essence removes a **prefix** only |
| **Dextral Crystallisation** | The essence removes a **suffix** only |

If your desired mods are all on the suffix side and the essence adds a suffix, use Sinistral Crystallisation to ensure only a prefix gets removed — protecting your suffix-side investment.

::: tip
The advisor factors in Crystallisation omen cost when evaluating the essence path. An essence that's cheap on its own but requires an expensive omen might lose to the rolling path.
:::

## Essences in the Side-First Strategy

Essences integrate naturally into the [side-first approach](/crafting/side-first-strategy):

1. **During Phase 1 (Build Primary Side)** — If an essence guarantees a primary-side mod cheaply, the advisor substitutes it for the equivalent rolling step
2. **During Phase 4 (Build Secondary Side)** — Perfect/Corrupted essences can target secondary-side mods while Crystallisation protects the fractured primary side

The advisor always compares: is the essence + omen combo cheaper than Erasure spam or targeted exalts? If yes, it goes with the essence.

## Key Takeaways

- Essences remove randomness at a fixed cost
- The advisor only recommends them when they're genuinely cheaper than rolling
- Crystallisation omens protect existing mods during essence use
- Check essence prices on trade — they fluctuate with the meta and league economy
