// ESLint Flat Config for React + JS + Prettier

import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node, // allows process, __dirname, etc.
      },
    },
    plugins: {
      react: pluginReact,
      prettier: prettierPlugin,
    },
    settings: {
      react: {
        version: 'detect', // auto-detect React version from package.json
      },
    },
    extends: [
      js.configs.recommended, // base ESLint rules
      ...tseslint.configs.recommended, // adds TS linting (safe for JS projects too)
      pluginReact.configs.flat.recommended, // React best practices
    ],
    rules: {
      // 🧹 General
      'no-unused-vars': 'warn',
      'no-undef': 'error',

      // ⚛️ React
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      // 💅 Prettier
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true,
          semi: true,
          trailingComma: 'es5',
          printWidth: 80,
          tabWidth: 2,
        },
      ],
    },
  },
]);
