---
description: What Sift's Crafting Advisor does and how to use it.
---

# Crafting Advisor

::: info TL;DR
The Crafting Advisor finds the cheapest expected path to your desired item — you pick the mods, it does the math.
:::

## What It Does

PoE2 crafting is expensive and random. The Crafting Advisor takes the guesswork out of it by calculating the **optimal strategy** to reach your target item for the lowest expected cost.

You tell it what you want. It tells you how to get there.

Specifically, the advisor:

- Evaluates every crafting currency (Normal, Greater, Perfect tiers) and picks whichever gives the cheapest expected cost
- Compares omen protection costs against restart costs to decide when insurance is worth it
- Uses live market prices from poe.ninja for all currency, omens, and essences
- Runs **10,000 Monte Carlo simulations** to give you realistic budget ranges, not just averages
- Plans the full crafting path from scratch to finished item, including recovery strategies for when things go wrong

## Quick Walkthrough

1. **Select your base item** — choose the item class and base type you're crafting
2. **Pick your desired mods** — use the treeview selector to choose prefixes and suffixes, including which tiers you want
3. **Run the advisor** — it calculates the optimal strategy and displays the full recipe

The output shows a step-by-step recipe with expected costs, probabilities, and budget percentiles at each phase.

## What the Advisor Considers

| Factor | How It's Used |
|---|---|
| **Currency prices** | Live poe.ninja prices for every orb tier, omen, and essence |
| **Mod pool weights** | GGG's spawn weight data — heavier mods are more likely to roll |
| **Min modifier levels** | Greater/Perfect currencies filter out low-level mods, changing the odds |
| **Omen costs** | Protection vs. restart cost comparison at every decision point |
| **Recovery strategies** | What to do when a step fails — Whittle, annul, or start over |
| **Side-first planning** | Complete one side of the item before the other to minimize risk |

## You Don't Need the Math

The advisor handles the probability calculations, tier optimization, and simulation behind the scenes. You can just follow the recipe.

But if you want to understand *why* it recommends what it does — why it picks Greater Chaos over Perfect, why it suggests fracturing after desecrating, or what those percentile numbers actually mean — the deep dive pages below explain everything.

## Deep Dive Pages

- **[Reading the Output](/crafting/reading-output)** — How to interpret the advisor's recipe display
- **[Side-First Strategy](/crafting/side-first-strategy)** — The core planning algorithm: why you build one side at a time
- **[Currency Basics](/crafting/currency-basics)** — How currency tiers and min modifier levels affect your odds
- **[Crafting Path](/crafting/crafting-path)** — Rarity progression from Normal to Rare
- **[Omens](/crafting/omens)** — Every omen type and when the advisor recommends each one
- **[Essences](/crafting/essences)** — Deterministic mod targeting and when it's cheaper than rolling
- **[Desecration & Lich Mods](/crafting/desecration)** — Blocker strategies, Lich-exclusive mods, and the two-pool model
- **[Cost Optimizer](/crafting/cost-optimizer)** — Probability math, Monte Carlo simulation, and percentile budgets
- **[Glossary](/crafting/glossary)** — Quick definitions for PoE2 crafting terminology
