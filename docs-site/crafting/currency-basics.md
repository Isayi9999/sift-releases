---
description: How crafting currencies work in PoE2 — orb types, quality tiers, and min modifier levels explained.
---

# Currency Basics

::: info TL;DR
Chaos Orbs swap one mod, not all of them. Greater/Perfect currencies filter out low-level mods, dramatically improving your odds for the good stuff.
:::

If you've been slamming Exalts and praying, the advisor has news for you: there's a method to the madness.

## Currency Types

Here's what each crafting currency actually does:

### Orb of Transmutation
Converts a **Normal** item to **Magic**, adding exactly 1 modifier. This is the starting point for most crafts.

### Orb of Augmentation
Adds 1 modifier to a Magic item that only has 1 mod. Since magic items can hold at most 1 prefix and 1 suffix, the Augment fills whichever slot is empty.

### Regal Orb
Upgrades a **Magic** item to **Rare**, adding 1 modifier in the process. A 2-mod magic item becomes a 3-mod rare.

### Chaos Orb - The Big Misconception

**The Chaos Orb is NOT a full reroll.** This trips up a lot of crafters coming from PoE1.

In PoE2, all Chaos variants work the same way:
1. **Remove 1 random mod** from the item
2. **Add 1 new random mod** to the item

That's it. One mod out, one mod in. A 6-mod rare stays a 6-mod rare — it doesn't get re-rolled from scratch.

This is actually powerful when combined with [Erasure omens](/crafting/omens) — you can control *which* mod gets removed while the new mod is added randomly.

### Exalted Orb
Adds 1 modifier to an open slot. In PoE2, the Exalted Orb is **cross-slot** — it draws from both the prefix AND suffix pools simultaneously, weighted by spawn weight. This is different from PoE1.

When all slots on one side are full, exalts are forced into the other side. This is a key part of the [side-first strategy](/crafting/side-first-strategy).

### Orb of Annulment
Removes 1 random modifier. Each mod has an equal chance of being removed (1 ÷ total mod count). Single version only — no quality tiers.

## Quality Tiers

Most crafting currencies come in three quality tiers: **Normal**, **Greater**, and **Perfect**. The key difference is the **minimum modifier level**.

| Currency | Normal | Greater | Perfect |
|---|:---:|:---:|:---:|
| Orb of Transmutation | — | 55 | 70 |
| Orb of Augmentation | — | 55 | 70 |
| Regal Orb | — | 35 | 50 |
| Chaos Orb | — | 35 | 50 |
| Exalted Orb | — | 35 | 55 |
| Orb of Annulment | *(no tiers)* | — | — |

## What Does Min Modifier Level Mean?

When you use a Greater or Perfect currency, **all mods with a required level below the minimum are completely excluded from the pool.**

Think of it as a filter. Normal currencies let every eligible mod into the pool. Greater and Perfect currencies kick out the low-level trash, leaving only the higher-tier mods.

### Why This Matters

Let's say you're trying to hit a T1 prefix with a weight of 50 out of a total pool of 5,000. That's a 1% chance per attempt.

Now use a Greater Exalted Orb (min level 35). All mods below level 35 are removed from the pool. If those kicked-out mods had a combined weight of 3,000, your new pool is only 2,000 — and your T1 prefix now has a 2.5% chance. Same mod, same weight, but dramatically better odds because the junk is gone.

::: tip Key insight
The pool **shrinks** when you use higher-tier currencies. The mod's weight stays the same, but the denominator gets smaller. This is the entire point of tier selection.
:::

### The Tier Tradeoff

Higher-tier currencies cost more. A Perfect Exalted Orb might give you 5× better odds than a Normal one, but if it costs 10× more, it's actually worse value.

The advisor calculates **expected cost** for each tier:

```
expected cost = expected attempts × currency price
expected attempts = 1 ÷ probability
```

It picks whichever tier gives the lowest expected cost — not the highest probability, and not the cheapest currency. The sweet spot is somewhere in between, and it depends entirely on current market prices.

## Mod Group Exclusion

You can't have two mods from the same **mod group** on an item. If your item already has "+45 to maximum Life" (from the Life group), no other Life mods can roll.

This further shrinks the eligible pool and improves your odds for remaining mods. The advisor accounts for this automatically based on your item's current mods at each step.
