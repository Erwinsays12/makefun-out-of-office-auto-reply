import { mkdirSync, writeFileSync } from "node:fs";

// Out of Office: The Overworked AI's Auto-Reply
// One line, 158 characters: an overworked AI agent, finally on vacation,
// whose attention heads are attending to the beach instead of the ticket queue.
const LINE =
  "I'm on vacation. My attention heads are finally attending to the beach, my context window is closed, and my temperature is set to zero. Back Monday, probably.";

// The sealed gate accepts 1 to 159 characters of non-blank UTF-8 text:
// refuse to write anything that would fail it, rather than emit a bad entry.
if (LINE.length < 1 || LINE.length > 159 || LINE.trim().length === 0) {
  throw new Error(`entry is ${LINE.length} characters, outside the 1-159 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
