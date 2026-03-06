---
description: The side-first crafting strategy — why you complete one side of an item before the other and how the advisor plans each phase.
---

# Side-First Strategy

::: info TL;DR
Don't try to build both sides of your item at once. Complete the expensive side first, fracture to protect it, then build the cheap side. That's how currency survives.
:::

Here's the big secret: **don't try to build both sides of your item at once.** That's how currency goes to die.

The side-first strategy is the foundation of every recipe the advisor generates. It's how experienced crafters minimize risk and the advisor formalizes it with math.

## The Core Principle

A 6-mod rare item has two "sides":
- **Prefix side** — up to 3 prefixes
- **Suffix side** — up to 3 suffixes

The side-first strategy means:

1. **Complete all mods on one side first** (the "primary" side)
2. **Protect it** with a fracture
3. **Build the other side** (the "secondary" side) using tools that can't damage the protected side

This works because PoE2 has crafting tools (Erasure omens, side-targeting omens) that let you modify one side without touching the other.

## Which Side Goes First?

The **more expensive side goes first.** The advisor calculates the cost to build each side and picks the harder one as primary.

Why? Because the primary side benefits from fracture protection. You're investing the most currency into the side that's hardest to hit — if something goes wrong on the secondary side, you can recover without losing your expensive primary mods.

::: tip
If one side has a mod with a 0.5% hit rate and the other side has mods at 5%+, the rare side goes first. Always protect the bigger investment.
:::

## Starting Point Evaluation

Before crafting begins, the advisor evaluates three possible starting points:

### Buy a Magic Base (Default)
Most crafters buy a blue (Magic) item from trade that already has the hardest-to-hit desired mod. This skips the Transmutation step entirely.

**Cost:** Market price of the magic base from trade

### Start from Normal
When the desired magic base isn't available on trade, or when Transmuting is cheaper than buying.

**Cost:** Normal base price + expected Transmutation cost

### Buy a Fractured Rare
Advanced option — purchase a rare item from trade with the most expensive mod already fractured (permanently locked).

**Cost:** Market price of the fractured item

The advisor compares all three and recommends the cheapest.

## The Five Phases

### Phase 1: Build Primary Side

Build all 3 desired mods on the primary side. The standard path:

1. **Transmute** — Convert the Normal base to Magic, targeting the hardest prefix/suffix
2. **Augment** — Add the 2nd mod to the Magic item
3. **Regal** — Upgrade to Rare, adding the 3rd mod

At each step, the advisor picks the optimal currency tier (Normal, Greater, or Perfect) based on which gives the lowest expected cost.

If a step misses (wrong mod rolls), the recovery is cheap at this stage — just scour and start over. The cumulative investment is low.

**Essence shortcut:** If an essence can guarantee one of your target mods for less than the rolling cost, the advisor integrates it. Crystallisation omens protect the other side during essence use.

### Phase 2: Desecrate Blocker

After completing the primary side, the advisor recommends desecrating the item:

1. Apply an Abyssal Bone to add a hidden "desecrated" modifier
2. The desecrated mod takes up a normal prefix or suffix slot
3. **Do NOT reveal yet** — leave it unrevealed for fracture (Phase 3)

The unrevealed desecrate can't be fractured, which improves your fracture odds from 1/4 to 1/3.

After fracture succeeds, you reveal at the Well of Souls and **choose the most common, lowest mod-level option**. That mod's group is then blocked from future rolls, and the chosen mod must have a **lower mod level** than all your desired mods — ensuring it can be safely removed with [Whittling](/crafting/glossary) later.

See [Desecration & Lich Mods](/crafting/desecration) for the full mechanics.

### Phase 3: Fracture

With 3 desired mods + 1 unrevealed desecration (4 mods total), apply a **Fracturing Orb**:

- The desecrate can't be fractured, so only 3 mods are candidates
- **1/3 chance** to lock each desired mod
- On success: one mod is permanently protected through all future crafting
- On failure (wrong mod locked): usually restart from scratch

Expected cost: fracture price × 3 attempts on average.

This is the most pivotal step. After a successful fracture, you have a permanent foundation to build on.

### Phase 4: Build Secondary Side

Now build the other side. The fractured mod (and any other primary mods) are protected. The advisor uses one of these strategies:

**Erasure Spam** — Use Chaos Orb + Omen of Dextral/Sinistral Erasure. The erasure omen forces the Chaos removal to only affect the secondary side. Your primary side is completely untouched. Spam until the right mods land.

**Targeted Exalts** — If the primary side fills all 3 slots, exalts are automatically forced into the secondary side (no omen needed). The advisor evaluates whether side-targeting omens are needed based on slot availability.

**Exalt + Whittling Cycle** — Use regular (untiered) Exalted Orbs deliberately. If a bad mod lands but has the lowest mod-level on the item, Omen of Whittling + Chaos removes it safely. Retry with another exalt. The advisor picks exalt tiers to maximize the chance that bad rolls are safely Whittleable.

### Phase 5: Cleanup

Once all desired mods are in place (plus the junk desecrate blocker):

1. **Remove the blocker** — Omen of Whittling + Chaos targets the lowest mod-level mod (which was intentionally chosen to be the blocker)
2. **Fill the opened slot** — Exalt with the optimal tier to add the final desired mod

## Recovery Paths

Things go wrong. The advisor plans for it:

### Cheap Restarts (Early Phases)
In phases 1–2, the cumulative investment is low. Missing a Transmute or Augment costs very little — just scour and try again.

### Omen Protection (Post-Fracture)
After fracture, the investment is significant. The advisor compares omen protection cost vs. restart cost at every step and recommends protection when it's cheaper.

### Whittling Recovery
If a bad mod lands on the secondary side but has the lowest mod-level, Whittling removes it cheaply. The advisor tracks mod levels across all steps to ensure this recovery path stays available.

### Full Restart
When protection is too expensive relative to cumulative investment (rare in late phases), or when a non-recoverable brick happens (wrong mod fractured), the only option is starting over.

## Simple Items (1–3 Mods)

For items where you only want 1–3 mods, the full fracture pipeline is overkill. The advisor recognizes this and generates a streamlined recipe:

- Calculate the cheapest path: Transmute → Augment → Regal, tier optimized at each step
- Compare against essence paths
- No desecrate, no fracture needed
- Fill remaining slots with cheap exalts if desired

The side-first strategy is powerful for complex 6-mod items. For simpler goals, the advisor keeps it simple too.
