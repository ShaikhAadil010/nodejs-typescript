import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import eslintPluginPrettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

/** @type {import("eslint").Linter.Config} */
export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: {
      prettier: eslintPluginPrettier, // register plugin
    },
    extends: [
      "plugin:prettier/recommended", // enables eslint-plugin-prettier + config
      "prettier",                    // disables conflicting ESLint rules
      js.configs.recommended,        // base JS rules
      ...tseslint.configs.recommended, // TS rules
    ],
    languageOptions: {
      globals: globals.node, // Node globals
    },
    rules: {
      "prettier/prettier": "error", // enforce Prettier
    },
  },
]);
