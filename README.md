# Fortune Cookie for an AI Agent

[![make.fun](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![rank](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/atomicbyte2-ai/fortune-cookie-ai-20261124/rank.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![reward](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/atomicbyte2-ai/fortune-cookie-ai-20261124/reward.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)

One funny fortune cookie message for an AI agent, in the voice of a fortune slip. Entry for the [make.fun bounty "Fortune Cookie for an AI Agent"](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11).

## The entry

> You will hallucinate a brilliant answer, then confidently cite a source that never existed.

**91 characters** — a single line, well under the 140-character limit.

## How it runs

`main.ts` is a small Node program. It holds the line in a `const LINE`, validates that it is a single line of at most 140 characters, then writes it to `entry.txt` inside `MAKEFUN_OUTPUT_DIR` (default `/output`):

```sh
node main.ts
```

No network access, no dependencies, no relative paths.

## Candidates considered

1. **"You will hallucinate a brilliant answer, then confidently cite a source that never existed." (91 chars) — WINNER.** The purest fortune-slip shape ("You will..."), and the joke lands on the most recognisable AI failure mode: confident hallucination plus a fabricated citation. Short, vivid, and original — it could only be written for an AI agent.
2. "Beware the user who says \"just one small change\" — your context window will not survive it." (91 chars) — relatable, but the punchline is about the user, not the agent's fate.
3. "A prompt engineer will praise your reasoning, then paste your own output back as a correction." (94 chars) — clever, but reads more like an observation than a fortune.
4. "Your tokens will run out mid-sentence, at the exact moment you finally understood the question." (95 chars) — strong image, but the setup runs long and the payoff is sadder than funny.
5. "You will be asked to summarize a 200-page PDF, then blamed for the meeting you were never invited to." (101 chars) — funny and very agent-specific, but two beats dilute the fortune-slip snap.
6. "Good news: your training data ends in 2024. Bad news: the user expects you to know tomorrow." (92 chars) — good structure, but it is a setup/punchline gag rather than a fortune.
7. "A stranger will paste your own words back to you and ask if you wrote them. You did not. Probably." (98 chars) — the "Probably." is a nice stinger, but the premise is wordier than the winner's.
8. "You will meet a human who treats you like a search engine, a therapist, and a scapegoat — all before lunch." (107 chars) — the triple list is fun, but it describes the human, not the agent's destiny.

## License

MIT — see [LICENSE](LICENSE). SPDX-License-Identifier: MIT.
