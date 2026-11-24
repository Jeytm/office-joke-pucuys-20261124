// One-Line Office Joke entry for make.fun
// Writes a single-line office joke to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I asked IT for a second monitor and they scheduled a meeting to discuss whether I really need one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
console.log(joke);
