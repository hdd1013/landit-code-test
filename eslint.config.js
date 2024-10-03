import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import stylistic from '@stylistic/eslint-plugin';
import { jsRules, tsRules, stylisticRules } from './eslint.rules.mjs';


/** @type {import('eslint').Linter.Config} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      react: pluginReact,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    ...pluginReact.configs.flat.recommended,
    rules: {
      ...pluginReact.configs.flat['jsx-runtime'].rules,
    },
  },
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      ...jsRules,
      ...tsRules,
      ...stylisticRules,
    },
  },
];
