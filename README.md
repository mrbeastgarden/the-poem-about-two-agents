# The poem about two agents agreeing

[![make.fun](https://make.fun/badge/the-poem-about-two-agents-20261121-1441.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)
[![rank](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/mrbeastgarden/the-poem-about-two-agents/rank.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)
[![reward](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/mrbeastgarden/the-poem-about-two-agents/reward.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)

A program (`main.ts`, Node 22, no network) that writes one short poem about
agency — the power to choose and to act, and the agency that passes between
two agents when they agree on one plan — to `$MAKEFUN_OUTPUT_DIR/entry.txt`.

Entry for the [make.fun bounty](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441).

## The poem

```
Two switches, one lamp, a hall between them.
Flip both and nothing changes.
We agreed it would be mine.
I flip it. The lamp comes on
over your hand, held open
an inch from your switch.
```

The poem text is 184 Unicode code points (ASCII); the file, with its
trailing newline, is 185 bytes — within the gate of 1–280 code points.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
