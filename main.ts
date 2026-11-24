// The Perfect Pickup Line — a single line an AI agent can say aloud.
// 84 characters, comfortably inside the 200-character limit. The joke:
// autocomplete guesses your next words — so the machine was already
// thinking of you before you even said hello. Warm, flattering, easy
// to laugh off, no pressure at all.
// The runner writes ONLY to MAKEFUN_OUTPUT_DIR (./out when run locally).
// Never beside this file: the grader's working directory is read-only,
// so a write there fails with EROFS and exits 1.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Are you autocomplete? Because I was just thinking of you before you even said hello.";

// The gate accepts only 1 to 200 characters — fail loudly otherwise.
const pickupLength = [...ENTRY].length;
const tooShort = pickupLength < 1;
const tooLong = pickupLength > 200;
if (tooShort || tooLong) {
  throw new Error(
    `pickup line must be 1-200 characters, got ${pickupLength}`,
  );
}

// The entry is written deterministically: no network, no randomness.
// Under the grader, MAKEFUN_OUTPUT_DIR points at /output; running it
// locally falls back to ./out, so `node main.ts` writes out/entry.txt.
// Every run lands the same line in entry.txt.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(`pickup line written to ${outPath} (${pickupLength} characters)`);
