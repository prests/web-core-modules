import globals from 'globals';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import typescript from 'typescript-eslint';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import type { Linter } from 'eslint';

import { ERROR, OFF } from './constants.js';

const baseNodeESLintConfig = [
  {
    ignores: ['build', 'coverage', 'dist', 'legacy-types', 'node_modules', 'storybook-static', '!.storybook'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  js.configs.recommended,
  prettier,
  eslintPluginUnicorn.configs.recommended,

  /* JavaScript files get basic rules without TypeScript parser */
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'unicorn/no-null': OFF,
      'unicorn/prevent-abbreviations': OFF,
    },
  },

  /* Typescript files get extra Typescirpt rules */
  ...typescript.configs.strictTypeChecked.map(config => ({
    ...config,
    files: ['**/*.ts', '**/*.tsx'],
  })),
  ...typescript.configs.stylisticTypeChecked.map(config => ({
    ...config,
    files: ['**/*.ts', '**/*.tsx'],
  })),
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': [ERROR, { disallowTypeAnnotations: false }],
      '@typescript-eslint/consistent-type-exports': [ERROR, { fixMixedExportsWithInlineTypeSpecifier: false }],
      'func-names': ERROR,
      '@typescript-eslint/no-empty-function': ERROR,
      'unicorn/no-null': OFF,
      'unicorn/prevent-abbreviations': OFF,
    },
  },
] as Linter.Config[];

export { baseNodeESLintConfig };
