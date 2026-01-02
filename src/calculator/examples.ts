import { calc } from './calculator.js';

console.log("\n╔════════════════════════════════════════╗");
console.log("║   EXEMPLES SUPPLÉMENTAIRES             ║");
console.log("╚════════════════════════════════════════╝\n");

// Cas complexes
console.log("=== Expressions complexes ===");
calc("((2 + 3) * (4 + 5)) / 3");
console.log("");

calc("10 + 20 * 3 - 5");
console.log("");

calc("2 ^ 3 ^ 2");
console.log("");

// Cas limites
console.log("\n=== Cas limites ===");
calc("0");
console.log("");

calc("3.14159");
console.log("");

calc("1 + 2 + 3 + 4 + 5");
console.log("");

// Cas d'erreur
console.log("\n=== Cas d'erreur ===");
calc("10 / 0");
console.log("");

calc("abc + 123");
console.log("");

calc("((2 + 3)");
console.log("");
