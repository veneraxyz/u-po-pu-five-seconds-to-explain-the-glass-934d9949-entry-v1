import * as fs from "fs";
import * as path from "path";

const SENTENCE =
  "The glass was reflecting a stranger's face, so I knocked it off the table to break his line of sight — I was protecting this house, not making a mess.";

function validate(sentence: string): void {
  const lines = sentence.split("\n");
  if (lines.length !== 1) {
    throw new Error("sentence must be exactly one line");
  }
  if (sentence.trim().length === 0) {
    throw new Error("sentence must not be blank");
  }
  if (sentence.length > 200) {
    throw new Error("sentence must be at most 200 characters");
  }
  for (const ch of sentence) {
    if (ch.charCodeAt(0) < 0x20 || ch.charCodeAt(0) === 0x7f) {
      throw new Error("sentence must not contain control characters");
    }
  }
}

function main(): void {
  validate(SENTENCE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, "entry.txt");
  fs.writeFileSync(outPath, SENTENCE + "\n", "utf8");
  // Read-back guard: re-read what we wrote and re-validate it.
  const written = fs.readFileSync(outPath, "utf8");
  if (!written.endsWith("\n")) {
    throw new Error("entry.txt must end with a trailing newline");
  }
  validate(written.slice(0, -1));
  console.log("wrote " + outPath);
}

main();
