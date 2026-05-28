---
description: How the Crafting Advisor calculates probabilities, expected costs, and Monte Carlo budget ranges.
---

# Cost Optimizer

::: info TL;DR
The advisor doesn't guess. It runs 10,000 simulated crafts and tells you what to budget for — think of it as a weather forecast for your wallet.
:::

Behind every recipe the advisor generates, there's a probability engine doing the math. This page explains how it works — not because you need to know, but because understanding the numbers helps you make better decisions about whether a craft is worth attempting.

## Weight-Based Probability

Every mod in PoE2 has a **spawn weight** — a number that determines how likely it is to roll relative to other mods in the pool.

```
probability = mod weight ÷ total pool weight
```

A mod with weight 50 in a pool totaling 5,000 has a **1% chance** per attempt. A mod with weight 1,000 in the same pool has a **20% chance**.

::: tip Concrete example
Your T1 prefix has weight 50. The total prefix pool for your item is 5,000 (after applying [min modifier level](/crafting/currency-basics#what-does-min-modifier-level-mean) filtering and mod group exclusions). That's a 1% chance per attempt, so you should expect about **100 tries** on average.
:::

## Expected Attempts and Cost

The expected number of attempts follows a geometric distribution:

```
expected attempts = 1 ÷ probability
```

If you have a 10% chance per try, expect ~10 attempts. If you have a 1% chance, expect ~100.

The expected cost per step is:

```
expected cost = expected attempts × cost per attempt
```

Where "cost per attempt" includes the currency price plus any omen price if one is recommended.

## Currency Tier Optimization

The advisor doesn't just pick the tier with the best odds. It picks the tier with the **lowest expected cost**.

| Tier | Probability | Price | Expected Cost |
|---|---|---|---|
| Normal Exalted | 1.0% | 2c | 200c |
| Greater Exalted | 2.5% | 8c | 320c |
| Perfect Exalted | 5.0% | 25c | 500c |

In this example, Normal wins despite having the worst odds — because it's cheap enough that brute-forcing 100 attempts costs less than 40 Greater attempts or 20 Perfect attempts.

But if Normal costs 10c and Greater costs 12c? Greater wins:

| Tier | Probability | Price | Expected Cost |
|---|---|---|---|
| Normal Exalted | 1.0% | 10c | 1,000c |
| Greater Exalted | 2.5% | 12c | 480c |

The right tier depends entirely on current market prices. The advisor recalculates every time using live data.

## Risk Types

Not all crafting steps carry the same risk. The advisor classifies each step:

### Soft Risk
The step can be retried without losing progress. Example: rolling a Transmute on a Normal base — if it misses, scour and try again. The item itself isn't damaged.

### Hard Risk
The step can **brick** the item. Example: Annulling a mod when you have valuable mods on both sides — there's a chance it removes something you need, and recovery is expensive or impossible.

### Hard with Recovery
The step can go wrong, but there's a recovery path. Example: Exalting and hitting a bad mod, but the bad mod has the lowest mod-level, so Whittling can remove it safely.

The advisor uses risk classification to decide when [omens](/crafting/omens) are worth their cost.

## Survival Probability

The **survival rate** answers: "What are the odds my item makes it through the entire recipe without bricking?"

Each Hard risk step has a failure probability. The survival rate is the product of all success probabilities across the recipe:

```
survival = P(step 1 ok) × P(step 2 ok) × ... × P(step N ok)
```

A recipe with five 90% survival steps has an overall survival of 0.9^5 = **59%**. That means roughly 2 in 5 crafts will brick at some point.

::: warning
A low survival rate doesn't mean the recipe is bad — it means you should budget for restarts. The advisor's expected cost already includes restart probability.
:::

## Monte Carlo Simulation

Expected value is useful, but it doesn't tell you about **variance**. A 1% chance mod takes 100 attempts *on average*, but individual results range from 1 to 500+. The advisor uses Monte Carlo simulation to capture this.

### How It Works

1. The advisor simulates the **entire recipe** — every step, every roll, every recovery decision
2. It runs **10,000 independent simulations**
3. Each simulation tracks the total cost from start to finished item
4. The results are sorted and percentiles are extracted

### Percentile Budgets

| Percentile | Meaning |
|---|---|
| **P25** | 25% of crafters finish at this cost or less — you got lucky |
| **P50** | The median — half spend less, half spend more |
| **P75** | 75% of crafters finish here — a safe budget |
| **P90** | 90% of crafters finish here — plan for this if you want near-certainty |

The gap between P50 and P90 tells you how "swingy" the craft is. A craft where P90 is 2× P50 is fairly predictable. A craft where P90 is 10× P50 has high variance — you might get lucky or you might burn through a lot of currency.

::: tip Practical budgeting
Use **P75** as your working budget. If you can afford P90, you're almost guaranteed to finish. If you can only afford P50, accept that there's a coin flip you'll need more.
:::

## Decision Framework

The advisor uses expected cost comparisons at every decision point:

| Decision | How It Decides |
|---|---|
| **Which currency tier?** | Lowest expected cost (attempts × price) |
| **Use an omen?** | Compare omen cost vs. probability of failure × restart cost |
| **Recovery method?** | Cheapest of: Whittling, targeted annul, or full restart |
| **Exalt tier for Whittling safety?** | Maximize P(hit desired mod) + P(bad but Whittleable mod) |
| **Desecrate reveal choice?** | Lowest mod-level, most common group |
| **Which side first?** | Whichever has higher total build cost goes first |

Every recommendation is the result of this cost comparison — no hunches, no rules of thumb, just math on current prices.

## Why Expected Cost ≠ Materials Cost

The **materials cost** is what you'd spend if every step hit first try. The **expected cost** accounts for misses, retries, and restarts.

The ratio between them is the **risk multiplier**:

```
risk multiplier = expected cost ÷ materials cost
```

A risk multiplier of 3.2× means you should budget about 3.2 times the raw materials. Low-probability crafts have higher multipliers. Crafts with many soft-risk steps have multipliers close to 1×.
