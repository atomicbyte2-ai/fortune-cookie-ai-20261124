import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You will hallucinate a brilliant answer, then confidently cite a source that never existed.";

if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Entry must be a single line.");
}

if (LINE !== LINE.trim()) {
  throw new Error("Entry must not have leading or trailing whitespace.");
}

if (LINE.length === 0 || LINE.length > 140) {
  throw new Error(`Entry is ${LINE.length} characters, over the 140 limit.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length}-character entry to ${join(outDir, "entry.txt")}`);
