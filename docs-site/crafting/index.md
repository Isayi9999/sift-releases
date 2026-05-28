---
description: What Sift's Crafting Advisor does and how to use it.
---

# Crafting Advisor

::: info TL;DR
The Crafting Advisor finds the cheapest expected path to your desired item. Pick a pasted item or a base, choose required and optional mods, and compare expected cost and risk.
:::

## What It Does

PoE2 crafting is expensive and random. The Crafting Advisor reduces guesswork by calculating strategies for a target item and comparing expected cost, probability, recovery, and restart risk.

You tell it what you want. It tells you how to get there.

Specifically, the advisor:

- Evaluates Normal, Greater, and Perfect crafting currencies.
- Compares omen protection costs against restart costs.
- Uses live market prices from poe.ninja for currency, omens, and essences.
- Runs 10,000 Monte Carlo simulations to show realistic budget ranges.
- Plans full paths from scratch, from a pasted item, or from a selected white base.
- Supports saved presets and optional mod pools.

## Quick Walkthrough

1. **Choose a starting point** - paste an item, pick a base, or load a saved preset.
2. **Pick required mods** - use the mod browser to choose prefixes and suffixes, including tiers.
3. **Add optional mods** - add acceptable filler mods when your goal does not require a strict six-mod result.
4. **Run the advisor** - it calculates the strategy and displays the recipe.

The output shows a step-by-step recipe with expected costs, probabilities, recovery options, and budget percentiles at each phase.

## What the Advisor Considers

| Factor | How It's Used |
|---|---|
| **Currency prices** | Live poe.ninja prices for orbs, omens, essences, and related materials |
| **Mod pool weights** | GGG spawn weight data; heavier mods are more likely to roll |
| **Min modifier levels** | Greater and Perfect currencies filter out low-level mods, changing the odds |
| **Omen costs** | Protection vs. restart cost comparison at every decision point |
| **Recovery strategies** | What to do when a step fails: Whittle, annul, retry, or restart |
| **Side-first planning** | Complete one side of the item before the other to minimize risk |
| **Optional pool** | Acceptable non-required mods that reduce cleanup cost and avoid over-forcing |
| **Base market profile** | Normal, exceptional quality, exceptional sockets, and other base assumptions when available |

## You Don't Need the Math

The advisor handles probability calculations, tier optimization, and simulation behind the scenes. You can just follow the recipe.

If you want to understand why it recommends a currency tier, a fracture setup, an omen, or a recovery path, the deep dive pages below explain the underlying logic.

## Deep Dive Pages

- **[Reading the Output](/crafting/reading-output)** - How to interpret the advisor's recipe display.
- **[Side-First Strategy](/crafting/side-first-strategy)** - The core planning algorithm: why you build one side at a time.
- **[Currency Basics](/crafting/currency-basics)** - How currency tiers and min modifier levels affect your odds.
- **[Crafting Path](/crafting/crafting-path)** - Rarity progression from Normal to Rare.
- **[Omens](/crafting/omens)** - Every omen type and when the advisor recommends each one.
- **[Essences](/crafting/essences)** - Deterministic mod targeting and when it's cheaper than rolling.
- **[Desecration & Lich Mods](/crafting/desecration)** - Blocker strategies, Lich-exclusive mods, and the two-pool model.
- **[Cost Optimizer](/crafting/cost-optimizer)** - Probability math, Monte Carlo simulation, and percentile budgets.
- **[Anointment Checker](/crafting/anointments)** - Search PoE2 anointments and compare Liquid Emotion costs.
- **[Glossary](/crafting/glossary)** - Quick definitions for PoE2 crafting terminology.
