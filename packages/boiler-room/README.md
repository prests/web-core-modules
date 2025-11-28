# Boiler Room

Shared boilerplate configurations for JavaScript/TypeScript projects, providing consistent ESLint, Prettier, and
TSConfig setups.

## Overview

Boiler Room eliminates the need to repeatedly configure linting, formatting, and TypeScript settings across projects. It
provides opinionated, production-ready configurations that can be easily shared and extended.

## Installation

> **Note:** This package is ESM-only and requires a Node.js environment that supports ES modules.

```bash
# Using pnpm (recommended)
pnpm add -D @lunar-js/boiler-room

# Using npm
npm install --save-dev @lunar-js/boiler-room

# Using yarn
yarn add --dev @lunar-js/boiler-room
```

## Available Configurations

### ESLint Configurations

#### Node.js Projects

```javascript
// eslint.config.js
import { nodeConfig } from '@lunar-js/boiler-room/eslint';

export default nodeConfig;
```

#### React Projects

```javascript
// eslint.config.js
import { reactConfig } from '@lunar-js/boiler-room/eslint';

export default reactConfig;
```

### Extending Configs

```javascript
// eslint.config.js
import { reactConfig } from '@lunar-js/boiler-room/eslint';

export default [
  ...reactConfig,
  {
    rules: {
      // Your custom rules
      'no-console': 'error',
    },
  },
];
```

### Prettier Configuration

```javascript
// prettier.config.js
export { default } from '@lunar-js/boiler-room/prettier';
```

### TypeScript Configurations

#### Base Configuration

```json
// tsconfig.json
{
  "extends": "@lunar-js/boiler-room/tsconfig/base.json",
  "compilerOptions": {
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}
```

#### Browser/React Projects

```json
// tsconfig.json
{
  "extends": "@lunar-js/boiler-room/tsconfig/browser.json",
  "compilerOptions": {
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}
```

#### Node.js Projects

```json
// tsconfig.json
{
  "extends": "@lunar-js/boiler-room/tsconfig/node.json",
  "compilerOptions": {
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}
```

#### CommonJS Output

```json
// tsconfig.cjs.json
{
  "extends": "@lunar-js/boiler-room/tsconfig/cjs.json",
  "compilerOptions": {
    "outDir": "./dist/cjs"
  }
}
```

#### ES Modules Output

```json
// tsconfig.esm.json
{
  "extends": "@lunar-js/boiler-room/tsconfig/esm.json",
  "compilerOptions": {
    "outDir": "./dist/esm"
  }
}
```

### Extending Configs

```json
// tsconfig.json
{
  "extends": "@lunar-js/boiler-room/tsconfig/browser.json",
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/*": ["*"]
    }
  }
}
```

## Development

### Prerequisites

- Node.js 24+
- pnpm

### Setup

```bash
# Install dependencies
pnpm install

# Start development mode
pnpm dev

# Build package
pnpm build

# Run type checking
pnpm typecheck

# Lint code
pnpm lint
```

### Project Structure

```
src/
├── eslint/           # ESLint configurations
├── prettier/         # Prettier configurations
└── tsconfig/         # TypeScript configurations
```
