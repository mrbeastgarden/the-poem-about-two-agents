import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// One short poem about agency: the power to choose and to act, and the
// agency that passes between two agents when they agree on one plan.
// A single concrete image, stated flatly: two switches, one lamp, a hall,
// and a hand held open an inch from the other switch. The turn is the lamp
// coming on over your hand — agreement as one hand waiting so the other's
// act lands. Written to $MAKEFUN_OUTPUT_DIR/entry.txt.
const poem = `Two switches, one lamp, a hall between them.
Flip both and nothing changes.
We agreed it would be mine.
I flip it. The lamp comes on
over your hand, held open
an inch from your switch.
`;

// The gate counts Unicode code points: 1–280, not only whitespace.
const codePoints = [...poem].length;
if (codePoints < 1 || codePoints > 280 || poem.trim().length === 0) {
  throw new Error(`poem is ${codePoints} code points, outside the 1–280 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
