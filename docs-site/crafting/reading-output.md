---
description: How to read the Crafting Advisor's recipe output, including phases, costs, risk indicators, and budget percentiles.
---

# Reading the Output

::: info TL;DR
The advisor shows a step-by-step recipe. Each step has a cost, a probability, and a recovery plan. The summary shows total budget ranges at different confidence levels.
:::

## What Should I Do With This?

The advisor's output is a recipe: a sequence of crafting steps you follow in order.

1. **Read the strategy section** to understand the overall plan.
2. **Follow the steps in order**. Each step tells you exactly which currency or omen to use.
3. **Check the budget percentiles** before you start. If P75 or P90 is more than you can spend, simplify the target.
4. **Watch recovery instructions**. These explain whether to retry, Whittle, annul, fracture, or restart.
5. **Use expected cost carefully**. It is an average, while the percentile rows show variance.

## Strategy Section

At the top of the output, the advisor shows the high-level plan:

- **Which side first** - prefix-first or suffix-first, based on risk and cost.
- **Starting point** - whether to start from a pasted item, a fresh base, or another checkpoint.
- **Key decisions** - essence shortcuts, fracture setup, optional pool use, and omen protection.

## Phase Markers

The recipe is divided into numbered phases.

| Phase | What Happens |
|---|---|
| **Phase 1: Build Primary Side** | Roll target mods on the first side, usually the side with higher risk or cost. |
| **Phase 2: Desecrate Blocker** | Add an unrevealed desecration or blocker slot when it improves the fracture setup. The blocker side does not matter for the real fracture setup; what matters is getting the item to the right mod count. |
| **Phase 3: Fracture** | Use a Fracturing Orb to lock one of the mods. This is typically used to force two T1 mods: roll one T1, get to three mods, add the blocker, fracture for a 1-in-3 hit, then annul back down before continuing. |
| **Phase 4: Build Secondary Side** | Fill the other side using exalts, chaos/erasure loops, essences, or Whittling recovery. |
| **Phase 5: Fill Optional Pool** | Add acceptable optional mods when the goal allows flexible filler. |
| **Phase 6: Cleanup & Fill** | Remove junk mods and fill remaining slots. |

For simpler items, the advisor skips phases that are not needed.

## Step Details

Each step within a phase can show:

- **Currency** - what to use, including tier where relevant.
- **Target mod** - which mod or mod family the step is trying to hit.
- **Hit probability** - chance of success per attempt.
- **Expected attempts** - average number of tries.
- **Cost per attempt** - currency price plus omen price when used.
- **Expected cost** - expected attempts times cost per attempt.
- **Recovery** - what to do on a miss.

## Investment Tracker

The running total shows your cumulative expected investment. This is the amount at risk if the item bricks later.

The advisor uses that value when comparing protection against restarting. If an omen costs more than restarting from the checkpoint, the advisor should prefer the restart path.

## Cost Overview Panel

### Materials vs. Expected Cost

- **Materials** - the raw cost if every step hits first try.
- **Expected cost** - the average cost after misses, retries, and restarts.

### Survival Rate

The probability that your item makes it through the recipe without a full brick.

### Risk Multiplier

How much the risk-adjusted cost exceeds the first-try material cost. A 3.2x multiplier means the average budget is about 3.2 times the raw materials cost.

## Monte Carlo Budget

The percentile columns give budget targets at different confidence levels:

| Column | Meaning |
|---|---|
| **P25** | 25% of simulated crafts finish at or below this cost. |
| **P50** | Median cost. Half finish cheaper, half finish more expensive. |
| **P75** | A practical working budget. |
| **P90** | A conservative budget if you want a high chance of finishing. |

These numbers come from simulated crafts, so they capture variance and restart chains better than a simple expected-value number.

::: tip Practical budgeting
Use **P75** as your working budget. If you can afford P90, you are unlikely to run out. If you can only afford P50, understand that about half of outcomes need more.
:::

## Recovery Display

When a step has recovery options, the advisor ranks them by cost:

- **Whittling** - use Omen of Whittling plus Chaos to remove a bad mod when it is safe.
- **Targeted annulment** - use a side-targeting omen plus Annulment to remove from a specific side.
- **Restart** - scrap and redo from the last checkpoint.

The advisor picks the cheapest viable option automatically, but shows enough detail to let you override the recommendation if market prices or your risk tolerance differ.
