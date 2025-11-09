# Style Utilities

The Lunar design system provides utility functions for common styling patterns, including motion-safe transitions and
custom focus outlines. These utilities return style objects that must be used with vanilla-extract's `style()` function
for zero-runtime performance.

## Overview

These utilities help maintain consistency across the design system while ensuring accessibility best practices are
followed automatically. All utility functions return style objects that can be composed with other styles using
vanilla-extract's array syntax.

## Motion Utilities

### `withSafeTransition`

Creates a motion-safe style object that wraps CSS transitions in a `prefers-reduced-motion: no-preference` media query.
This ensures animations only run when users haven't requested reduced motion.

**Returns**: A style object that must be used with vanilla-extract's `style()` function.

```typescript
import { style } from '@vanilla-extract/css';

import { withSafeTransition } from '@wcm/lunar';

// Simple usage
const fadeTransition = style([
  withSafeTransition({
    transition: 'opacity 0.3s ease-in-out',
  }),
]);

// Combining with other styles
const slideAndFadeCard = style([
  withSafeTransition({
    transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
    transform: 'translateY(0)',
  }),
  {
    padding: '16px',
    borderRadius: '8px',
    ':hover': {
      transform: 'translateY(-2px)',
      opacity: 0.9,
    },
  },
]);
```

## Outline Utilities

### `withCustomOutline`

Creates a custom focus outline style object that follows the design system's outline pattern. This provides consistent
`:focus-visible` styling across components.

**Parameters**:

- `outlineColor` (string): The color for the focus outline (hex, rgb, CSS custom properties, etc.)

**Returns**: A style object that must be used with vanilla-extract's `style()` function.

```typescript
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { withCustomOutline } from '@wcm/lunar';

// Simple usage with hex color
const redOutlineButton = style([
  withCustomOutline('#ff0000'),
  {
    padding: '8px 16px',
    background: 'white',
    border: '1px solid #ccc',
  },
]);

// Usage with theme variables
const primaryButton = style([
  withCustomOutline(themeContract.colors['border.interactive']),
  {
    padding: '12px 24px',
    backgroundColor: themeContract.colors.background.primary,
    color: themeContract.colors.text.primary,
  },
]);

// Usage in recipes
const buttonVariants = recipe({
  base: [
    withCustomOutline(themeContract.colors['shadow.interactive']),
    {
      padding: '12px 24px',
      borderRadius: '6px',
      border: 'none',
      cursor: 'pointer',
    },
  ],
  variants: {
    variant: {
      primary: {
        backgroundColor: 'blue',
        color: 'white',
      },
      secondary: {
        backgroundColor: 'gray',
        color: 'black',
      },
    },
  },
});
```
