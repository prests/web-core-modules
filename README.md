# Web Core Modules

A pnpm workspaces monorepo containing shared packages and modules for web applications.

## Overview

Web Core Modules (WCM) is a collection of reusable packages and demo applications focused on building modern React applications. The monorepo contains a design system, shared configurations, and example implementations.

## Quick Start

1. Ensure you have Node.js 24+ installed:
   ```bash
   nvm use
   ```

2. Install pnpm if you haven't already:
   ```bash
   npm install -g pnpm
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

4. Build all packages:
   ```bash
   pnpm build
   ```

## Project Structure

### Packages
- [`packages/lunar/`](./packages/lunar/README.md) - React component library inspired by Radix UI and ShadCN
- [`packages/boiler-room/`](./packages/boiler-room/README.md) - Shared boilerplate configurations (ESLint, Prettier, TSConfig)

### Demos
- [`demos/lunar-storybook/`](./demos/lunar-storybook/README.md) - Storybook showcase for Lunar components
- [`demos/lunar-react-router/`](./demos/lunar-react-router/README.md) - React Router application using Lunar components

## Development

### Available Scripts

- `pnpm build` - Build all packages
- `pnpm dev:lunar-storybook` - Start Lunar development with Storybook
- `pnpm dev:lunar-react-router` - Start Lunar development with React Router demo
- `pnpm test` - Run tests for all packages
- `pnpm lint` - Lint all packages
- `pnpm lint:fix` - Fix linting issues
- `pnpm typecheck` - Type check all packages
- `pnpm format` - Format code with Prettier

### Adding New Packages

To add a new package:

1. Create a new directory in `packages/` or `demos/`
2. Add a `package.json` with a unique name
3. Run `pnpm install` to link workspace dependencies
4. Add the package to the root `pnpm-workspace.yaml` if needed

## Contributing

This monorepo uses:
- **pnpm** for package management and workspaces
- **TypeScript** for type safety
- **ESLint** and **Prettier** for code quality
- **Vanilla Extract** for CSS-in-JS styling
- **Vite** for building and development
