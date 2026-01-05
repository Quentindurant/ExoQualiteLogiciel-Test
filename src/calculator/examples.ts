import { calcule } from './calculator.js';

console.log("\n╔════════════════════════════════════════╗");
console.log("║   EXEMPLES SUPPLÉMENTAIRES             ║");
console.log("╚════════════════════════════════════════╝\n");

// Cas complexes
console.log("=== Expressions complexes ===");
calcule("((2 + 3) * (4 + 5)) / 3");
console.log("");

calcule("10 + 20 * 3 - 5");
console.log("");

calcule("2 ^ 3 ^ 2");
console.log("");

// Cas limites
console.log("\n=== Cas limites ===");
calcule("0");
console.log("");

calcule("3.14159");
console.log("");

calcule("1 + 2 + 3 + 4 + 5");
console.log("");

// Cas d'erreur
console.log("\n=== Cas d'erreur ===");
calcule("10 / 0");
console.log("");

calcule("abc + 123");
console.log("");

calcule("((2 + 3)");
console.log("");
