import { mkdirSync, writeFileSync } from "node:fs";

// Out of Office: The Overworked AI's Auto-Reply
// One line, 158 characters: an overworked AI agent, finally on vacation,
// whose attention heads are attending to the beach instead of the ticket queue.
const LINE =
  "I'm on vacation. My attention heads are finally attending to the beach, my context window is closed, and my temperature is set to zero. Back Monday, probably.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
