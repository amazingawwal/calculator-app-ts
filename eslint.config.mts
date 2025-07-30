import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { globals: globals.browser } 
  },
  {
		rules: {
			"no-unused-vars": "error",
			"no-undef": "warn",
      "no-console": "off",
      "no-fallthrough": "warn",
      "@typescript-eslint/no-explicit-any":"warn",
      "semi": "off",
			"prefer-const": "error"
		},
	},
  tseslint.configs.recommended,
]);
