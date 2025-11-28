# Lunar

A modern React component library inspired by Radix UI and ShadCN, built with TypeScript and Vanilla Extract for
CSS-in-JS styling.

## Overview

Lunar provides a comprehensive set of accessible, customizable React components with a powerful theming system. It
combines the accessibility features of Radix UI with a clean design aesthetic and flexible styling approach.

## Installation

> **Note:** This package is ESM-only and requires a Node.js environment that supports ES modules.

```bash
# Using pnpm (recommended)
pnpm add @lunar-js/lunar

# Using npm
npm install @lunar-js/lunar

# Using yarn
yarn add @lunar-js/lunar
```

## Quick Start

Wrap your application with the `ThemeProvider` and provide a theme:

```tsx
import { ThemeProvider } from '@lunar-js/lunar';
import { regalTheme } from '@lunar-js/lunar/styles.css';

function App() {
  return (
    <ThemeProvider themeClassName={regalTheme}>
      <YourAppContent />
    </ThemeProvider>
  );
}
```
