import { mkdirSync, writeFileSync } from "node:fs";

// One-letter vote: A means coffee, B means tea.
// Coffee wins: it is the drink of action, the one that turns a morning
// into a workday, and the one its fans defend with real passion.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, "A", "utf8");
console.log("wrote entry.txt");
