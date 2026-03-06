---
description: How desecration works in PoE2 — Abyssal Bones, the Well of Souls, blocker strategies, Lich-exclusive mods, and the two-pool probability model.
---

# Desecration & Lich Mods

::: info TL;DR
Desecration fills a slot with a mod from the Abyss. Use it as a cheap blocker before fracturing, or to access Lich-exclusive mods you can't roll normally.
:::

Desecration is one of the most powerful and complex crafting mechanics in PoE2. It has two strategic uses:

1. **Blocker strategy** — Fill a slot with a cheap common mod to improve fracture odds
2. **Lich mod acquisition** — Access exclusive mods from the three Lich bosses that can't be rolled any other way

## Abyssal Bones

Items are desecrated using Abyssal Bones. There are three types based on equipment category:

| Bone Type | Target Items |
|---|---|
| **Jawbone** | Weapons, Quivers |
| **Rib** | Armour (Body, Boots, Gloves, Helmet) |
| **Collarbone** | Jewelry (Ring, Amulet, Belt) |

And three tiers:

| Tier | Restriction |
|---|---|
| **Gnawed** | Max item level 64 |
| **Preserved** | No restriction |
| **Ancient** | Min modifier level 40 |

For blocker strategy, **Preserved** bones are usually the right choice — no level cap and no pool filtering, giving you the widest selection of cheap junk mods.

## The Desecration Process

1. **Apply an Abyssal Bone** to your item — it gains a hidden "desecrated" modifier
2. The desecrated mod **occupies a normal prefix or suffix slot** (50/50 which side)
3. Only **1 desecrated modifier** can exist on an item at a time
4. **Visit the Well of Souls** to reveal your options

## Well of Souls Reveal

At the Well of Souls, you're presented with **3 random mod options** to choose from:

- At item level 65+, at least **1 option is guaranteed** to be a Lich-exclusive mod
- The remaining slots have an estimated ~50% chance each of being from the exclusive pool vs. the normal mod pool
- You pick one. The others are discarded.

### Omen of Abyssal Echoes

This omen doubles the reveal from 3 to **6 options**. Same rules apply — at least 1 guaranteed exclusive, rest are mixed. More options means a much better chance of finding the specific mod you want.

### Choosing the Right Mod

For **blocker strategy**: pick the most common, lowest mod-level option available. You want a mod that:
- Has the **lowest possible mod level** — this ensures [Whittling](/crafting/omens#whittling-in-detail) can safely target it for removal later
- Is from a **common mod group** — this blocks that group from appearing on future exalt/chaos rolls
- Is **not** a mod you actually want — you're going to remove it eventually

For **Lich mod acquisition**: pick the Lich mod you're targeting. Use Lich-targeting omens (Blackblooded, Liege, Sovereign) to narrow the options.

## The Blocker Strategy

This is the primary use of desecration in optimized crafting:

1. **Build 3 desired mods** on the primary side (e.g., Transmute + Augment + Regal to reach Rare with 3 mods)
2. **Desecrate** to fill an open slot with a hidden junk mod (now 3 real mods + 1 unrevealed desecrate = ready for fracture)
3. **Fracture** — the unrevealed desecrate **cannot be fractured**, so only your 3 real mods are candidates → **1/3 chance** instead of 1/4

After fracturing:
4. **Reveal** the desecrated mod at the Well of Souls (choose a low mod-level junk mod)
5. The junk mod's group is now **blocked** from future rolls
6. Eventually **remove it** with [Whittling](/crafting/omens#whittling-in-detail)

::: tip Why low mod-level matters
The Omen of Whittling always removes the mod with the **globally lowest mod-level** on the item. By choosing a very low mod-level blocker, you guarantee Whittling targets it instead of your desired mods.
:::

## Desecrate and Fracturing

A critical interaction:

> **Unrevealed desecrated mods cannot be fractured.**

This is the key to the blocker strategy. With 3 desired mods + 1 unrevealed desecration, the Fracturing Orb sees 4 mods but can only pick from the 3 real ones. That's a **1/3 chance** to lock any specific desired mod, compared to 1/4 if you had a 4th real mod instead.

## Slot-Side Penalty

Desecrated mods land on a random prefix or suffix slot — 50/50. If you need it on a specific side and it lands on the wrong one, you have to:

1. Use **Omen of Light + Annulment** to cleanly remove it
2. Re-desecrate and try again

**Sinistral/Dextral Necromancy** omens eliminate this penalty by forcing the desecrate onto the desired side. The advisor compares the omen cost vs. the expected retry cost from the 50% penalty.

## Lich-Exclusive Mods

These mods can **only** be obtained through desecration. They're organized by Lich type:

::: details Amanamu — Lich of Darkness (Prefixes)
Chaos damage over time multiplier, cold/fire/lightning/physical damage variants, flat armour/evasion/energy shield, movement speed, attack and cast speed, +level to skill gems, flat damage, attributes, life and energy shield regeneration.
:::

::: details Kurgal — Lich of the Depths (Prefixes)
Elemental penetration, critical strike multiplier, maximum elemental resistance, cooldown recovery, mana reservation efficiency, curse on hit, damage over time multiplier, flask charges.
:::

::: details Ulaman — Lich of the Void (Suffixes)
Critical strike chance, accuracy + crit, attack speed + crit, additional curse, spell suppression, elemental/ailment avoidance, culling strike, life/mana on hit, nearby enemy resistance reduction, minimum charges, item quantity, +skill gems, charge generation.
:::

Use **Lich-targeting omens** (Blackblooded, Liege, Sovereign) to narrow the Well of Souls options to a specific Lich's mod pool.

## The Two-Pool Probability Model

When you reveal at the Well of Souls, the game uses a **two-pool model**:

- **Exclusive pool** — Lich-exclusive mods only, weighted by spawn weight
- **Normal pool** — Regular mods eligible for the item/slot, weighted by spawn weight

At least 1 reveal slot is guaranteed from the exclusive pool. The remaining slots have roughly a 50/50 chance of drawing from either pool.

### What This Means in Practice

For **Lich-exclusive targets** (wanting a specific Lich mod):
- 1 guaranteed exclusive slot gives you a base chance
- Additional slots that roll exclusive give bonus chances
- Using Abyssal Echoes (6 reveals) roughly doubles your probability

For **normal targets** (wanting a common blocker):
- No guaranteed normal slot — you rely on the ~50% chances
- With 3 reveals, you almost always see at least one normal option
- The most common mods are easy to find; rare normal mods are less reliable

::: info
The 50% exclusive/normal split is an approximation based on community testing (Craft of Exile). GGG hasn't confirmed the exact mechanic. The advisor uses this estimate and it produces results consistent with observed crafting outcomes.
:::

## Tips

- **Always desecrate before fracturing** when building 6-mod items — the fracture odds improvement is significant
- **Preserved bones** are the default choice for blocking — widest pool of cheap junk
- **Ancient bones** (min level 40) are better when specifically hunting high-tier Lich mods
- The advisor handles all of this automatically — it evaluates bone tier, side probability, and omen costs at each decision point
