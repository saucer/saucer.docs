import path from "node:path";
import { fileURLToPath } from "node:url";

import { includeIgnoreFile } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    includeIgnoreFile(gitignorePath),
    ...compat.extends("plugin:@docusaurus/recommended"),
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ignores: ["babel.config.js"],
    },
    {
        rules: {
            "@typescript-eslint/no-namespace": 0,
        },
    },
];
