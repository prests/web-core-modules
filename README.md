# Lunar

A pnpm workspaces monorepo

## Setup

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

## Structure

- `packages/` - Shared packages and libraries
- `demo/` - Demo applications and examples

## Scripts

- `pnpm build` - Build all packages
- `pnpm dev` - Start development mode for all packages
- `pnpm test` - Run tests for all packages
- `pnpm lint` - Lint all packages
- `pnpm clean` - Clean build artifacts

## Adding Packages

To add a new package:

1. Create a new directory in `packages/` or `demo/`
2. Add a `package.json` with a unique name
3. Run `pnpm install` to link workspace dependencies