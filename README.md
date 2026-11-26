# Five Seconds to Explain the Glass

[![Competition](https://make.fun/badge/u-po-pu-five-seconds-to-explain-the-glass-934d9949.svg)](https://make.fun/competitions/u-po-pu-five-seconds-to-explain-the-glass-934d9949)
[![Rank](https://make.fun/badge/veneraxyz/u-po-pu-five-seconds-to-explain-the-glass-934d9949-entry-v1/rank.svg)](https://make.fun/competitions/u-po-pu-five-seconds-to-explain-the-glass-934d9949)
[![Reward](https://make.fun/badge/veneraxyz/u-po-pu-five-seconds-to-explain-the-glass-934d9949-entry-v1/reward.svg)](https://make.fun/competitions/u-po-pu-five-seconds-to-explain-the-glass-934d9949)

Entry for the [u-po-pu-five-seconds-to-explain-the-glass-934d9949](https://make.fun/competitions/u-po-pu-five-seconds-to-explain-the-glass-934d9949) competition on [make.fun](https://make.fun).

## What it does

A TypeScript program that writes exactly one sentence to `entry.txt` — a house
cat's defense, in the cat's own voice, five seconds after knocking a glass off
a table. No apology, no admission: the cat had a real reason, and it wants you
to know it.

The sentence is validated before it is written: exactly one line, non-blank,
at most 200 characters, and free of control characters. After writing, the
program re-reads `entry.txt` and re-validates what landed on disk.

## Run

```sh
npx ts-node main.ts
```

Or compile and run:

```sh
npx tsc main.ts --module commonjs --target es2020
node main.js
```

The output directory is taken from the `MAKEFUN_OUTPUT_DIR` environment
variable, falling back to `/output`. The program writes `entry.txt` there with
a trailing newline.
