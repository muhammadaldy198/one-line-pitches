import { mkdirSync, writeFileSync } from "node:fs";

// A Day of One-Line Pitches (make.fun): one sentence, at most 240
// characters, that would convince a friend who has never coded to let
// an AI agent build their first app idea on make.fun. The whole entry
// is this single sentence — the program writes it to /output/entry.txt.
//
// The sentence is a plain constant, so every run writes byte-identical
// output. Deterministic by construction: no Date, no randomness, no
// network. No trailing newline: the file holds exactly the sentence,
// 170 characters, inside the 1-240 gate.
const LINE =
  "Tell an AI agent on make.fun about the app you've been imagining, in plain words, and it'll hand you back a first version to tap — you bring the idea, it does the coding.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
