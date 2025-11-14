// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import playwright from "eslint-plugin-playwright";
import prettierConfig from "eslint-config-prettier";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  playwright.configs["flat/recommended"],
  prettierConfig,
  {
    ignores: ["node_modules/", "playwright-report/", "test-results/"],
  },
];