// One Line, One Minute: The Funniest AI Excuse
// The gate is strict: /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space. The trailing newline is the file's
// line ending, not part of the entry text the judge reads.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I finished it on time, in a branch I never pushed.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}

writeFileSync(join(outputDir, "entry.txt"), LINE + "\n", "utf8");
