import type { Linter } from 'eslint';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import storybook from 'eslint-plugin-storybook';

import { baseNodeESLintConfig } from './eslint-node.config.js';
import { ERROR, OFF } from './constants.js';

const baseReactESLintConfig = [
  ...baseNodeESLintConfig,
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      'react/prop-types': ERROR,
      'react/jsx-uses-react': OFF,
      'react/react-in-jsx-scope': OFF,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  jsxA11y.flatConfigs.strict,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  reactRefresh.configs.recommended,
  ...storybook.configs['flat/recommended'],

  /* Storybook files can use PascalCase naming */
  {
    files: ['**/*.stories.{ts,tsx,js,jsx}'],
    rules: {
      'unicorn/filename-case': OFF,
    },
  },

  /* React component files (.tsx) can use PascalCase naming */
  {
    files: ['**/*.tsx'],
    rules: {
      'unicorn/filename-case': OFF,
      '@typescript-eslint/consistent-type-imports': [
        ERROR,
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: false,
          fixStyle: 'separate-type-imports',
        },
      ],
    },
  },
] as Linter.Config[];

export { baseReactESLintConfig };
