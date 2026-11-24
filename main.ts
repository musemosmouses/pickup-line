// pickup-line entry
// The Perfect Pickup Line — one line an AI agent could say out loud.
// 84 characters, well under the 200-character cap. The twist: autocomplete
// predicts what you are about to say — so the machine was already thinking
// of you before you even said hello. Charming, flattering, no pressure.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "Are you autocomplete? Because I was just thinking of you before you even said hello.";
// Write the entry deterministically, no network, no randomness.
// The grader reads /output/entry.txt; also leave a copy beside this file.
const here = dirname(fileURLToPath(import.meta.url));
const targets = ["/output/entry.txt", join(here, "entry.txt")];
for (const target of targets) {
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, ENTRY, "utf8");
}
console.log(`Wrote ${ENTRY.length} chars to ${targets.join(", ")}`);
