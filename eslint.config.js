import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Configuration TypeScript
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json"
      }
    }
  },

  // Règles Clean Code
  {
    rules: {
      // Fonctions courtes (chapitre 3)
      "max-lines-per-function": ["error", { max: 200, skipBlankLines: true }],

      // Complexité faible (chapitre 3)
      "complexity": ["error", 5],

      // Peu d'imbrication (chapitre 3)
      "max-depth": ["error", 3],

      // Nommage explicite (chapitre 3)
      "@typescript-eslint/naming-convention": [
        "error",
        { selector: "variable", format: ["camelCase", "UPPER_CASE", "PascalCase"] },
        { selector: "function", format: ["camelCase", "PascalCase"] }
      ],

      // Pas de magic numbers (chapitre 3)
      "no-magic-numbers": ["warn", { ignore: [0, 1, -1] }],

      // Cohésion : max 3 paramètres (chapitre 3)
      "max-params": ["error", 3],

      // Une responsabilité : max 10 statements (chapitre 3)
      "max-statements": ["error", 10],

      // Pas de var (best practices)
      "no-var": "error",

      // Préférer const (best practices)
      "prefer-const": "error",

      // Bonus Code Quality
      "eqeqeq": ["error", "always"],
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/no-explicit-any": "error"
    }
  }
);