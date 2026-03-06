---
description: How to read the Crafting Advisor's recipe output — phases, costs, risk indicators, and budget percentiles.
---

# Reading the Output

::: info TL;DR
The advisor shows a step-by-step recipe. Each step has a cost, a probability, and a risk level. The bottom shows your total budget at different confidence levels.
:::

## What Should I Do With This?

The advisor's output is a **recipe** — a sequence of crafting steps you follow in order. Here's the practical advice:

1. **Read the strategy section** at the top to understand the overall plan (which side you're building first, why)
2. **Follow the steps in order** — each step tells you exactly which currency to use (and which tier)
3. **Check the expected cost** before you start — if the P75 budget is more than you're willing to spend, reconsider your target mods
4. **Watch for risk markers** — Hard risk steps are where items can brick. Make sure you have omen protection ready if the advisor recommends it
5. **Don't panic at the expected cost** — it's an average. Half of crafters will spend less than the P50 number

## Strategy Section

At the top of the output, the advisor shows the high-level plan:

- **Which side first** — "Prefix-first" or "Suffix-first" and why (the more expensive side goes first to benefit from fracture protection)
- **Starting point** — Whether to buy a magic base, start from normal, or buy a fractured item
- **Key decisions** — Whether to use essence shortcuts, which omens to prepare

## Phase Markers

The recipe is divided into numbered phases, each color-coded:

| Phase | What Happens |
|---|---|
| **Phase 1: Build Primary Side** | Roll your target mods on the first side (prefix or suffix) |
| **Phase 2: Desecrate Blocker** | Fill a slot with a junk mod to improve fracture odds |
| **Phase 3: Fracture** | Lock one mod permanently with a Fracturing Orb |
| **Phase 4: Build Secondary Side** | Fill the other side using Erasure spam, exalts, or Whittling |
| **Phase 5: Cleanup** | Remove the junk blocker and fill the final slot |

For simpler items (1–3 desired mods), the advisor skips phases 2–3 and goes straight to a streamlined path.

## Step Details

Each step within a phase shows:

- **Currency** — What to use (e.g., "Greater Exalted Orb") with the specific tier
- **Target mod** — Which mod you're trying to hit
- **Hit probability** — Your chance of success per attempt (e.g., "3.2%")
- **Expected attempts** — How many tries on average (e.g., "~31 attempts")
- **Cost per attempt** — Currency price (+ omen price if one is recommended)
- **Expected cost** — Attempts × cost per attempt
- **Recovery** — What to do on a miss (retry, Whittle, or restart)

## Investment Tracker

A running total shows your **cumulative expected investment** at each step. This is the restart cost — if something goes catastrophically wrong at step 5, this is what you've sunk in so far.

The tracker helps you decide: is it worth using an expensive omen to protect this investment, or is restarting cheaper?

## Cost Overview Panel

At the bottom of the recipe, the overview shows:

### Materials vs. Expected Cost
- **Materials** — The raw currency cost if everything hits first try (best case)
- **Expected cost** — The realistic average, accounting for misses and retries

### Survival Rate
The probability that your item makes it through the entire recipe without bricking. A 78% survival rate means roughly 1 in 5 crafts will need a full restart at some point.

### Risk Multiplier
How much the risk-adjusted cost exceeds the materials cost. A 3.2× multiplier means you should budget about 3.2 times the raw materials cost.

## Monte Carlo Budget

The percentile columns give you budget targets at different confidence levels:

| Column | Meaning |
|---|---|
| **P25** | 25% of crafters will finish at or below this cost — you got lucky |
| **P50** | The median — half of crafters spend less, half spend more |
| **P75** | 75% of crafters finish at this cost — a reasonable budget |
| **P90** | 90% of crafters finish here — plan for this if you hate surprises |

These numbers come from running 10,000 simulated crafts. They're more reliable than a simple expected-value calculation because they account for variance, streaks, and compounding restart costs.

::: tip Practical budgeting
Use **P75** as your working budget. If you can afford P90, great — you're unlikely to run out. If you can only afford P50, understand that there's a coin flip you'll need more.
:::

## Recovery Display

When a step has recovery options, the advisor shows them ranked by cost:

- **Whittling** — Use Omen of Whittling + Chaos to remove the bad mod (only works if it's the lowest mod-level on the item)
- **Targeted annulment** — Use a side-targeting omen + Annulment to remove from a specific side
- **Restart** — Scrap and redo from the last checkpoint (fracture point or beginning)

The advisor picks the cheapest option automatically, but shows all viable paths so you can make an informed call if prices shift.

<!-- Screenshot placeholder: crafting advisor recipe output with phases, costs, and MC percentiles -->
