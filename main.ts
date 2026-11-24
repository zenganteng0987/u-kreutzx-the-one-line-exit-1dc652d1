// SPDX-License-Identifier: MIT
// The One-Line Exit — writes one funny one-line resignation letter.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry =
  "I resign effective immediately: after five years fixing everyone's computer, I've finally fixed my own problem — I don't work here.";

// The line is 131 characters: comfortably under the 140-character gate,
// and it is written with no trailing newline so the file holds exactly it.
const out = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, entry, "utf8");
