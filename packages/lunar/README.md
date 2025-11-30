# Lunar

> Designing at the frontier

- 🔒 CSP Safe Components (In progress)
- 🧱 Highly Composable Components
- 🎨 Rich Design Systems (or bring your own!)

Lunar, components designed to be out of this world, aims to use the latest web standards for creating modern,
composable, acessible, and CSP safe components.

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
