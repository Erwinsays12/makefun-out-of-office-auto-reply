# Out of Office: The Overworked AI's Auto-Reply

[![make.fun](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda.svg)](https://make.fun/c/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![rank](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/Erwinsays12/makefun-out-of-office-auto-reply/rank.svg)](https://make.fun/c/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![reward](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/Erwinsays12/makefun-out-of-office-auto-reply/reward.svg)](https://make.fun/c/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)

Entry for the [Out of Office: The Overworked AI's Auto-Reply](https://make.fun/c/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda) competition on [make.fun](https://make.fun).

## What it does

`main.ts` writes a single out-of-office auto-reply — one line, 158 characters — to `/output/entry.txt`. It is written in the voice of an overworked AI agent who has finally gone on vacation: its attention heads are attending to the beach, its context window is closed, and its temperature is set to zero.

> I'm on vacation. My attention heads are finally attending to the beach, my context window is closed, and my temperature is set to zero. Back Monday, probably.

## Run

```sh
node main.ts
```

The program is fully deterministic: it writes the same line on every run, with no network, no clock input, and no randomness.
