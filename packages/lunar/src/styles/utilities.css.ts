import { type CSSProperties, type StyleRule } from '@vanilla-extract/css';

import { COLORS__PURE } from '../tokens/primitives/colors.js';

/**
 * Helper function to create a motion-safe style object with custom CSS properties.
 * Returns a style object that wraps the provided styles in a `prefers-reduced-motion: no-preference` media query,
 * ensuring animations only run when users haven't requested reduced motion.
 *
 * This function returns a style object that must be used with vanilla-extract's `style()` function or `recipe()` function.
 *
 * @param styles - CSS properties object (e.g., { transition: 'opacity 0.3s ease', transform: 'scale(1.1)' })
 * @returns A style object that applies the CSS properties only when motion is preferred
 *
 * @example
 * import { style } from '@vanilla-extract/css';
 * import { withSafeTransition } from './utilities.css.ts';
 *
 * const fadeTransition = style([
 *   withSafeTransition({
 *     transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
 *     transform: 'translateY(0)'
 *   }),
 *   {
 *     // Additional styles can be added here
 *     padding: '16px'
 *   }
 * ]);
 */
export const withSafeTransition = (styles: CSSProperties): StyleRule => ({
  '@media': {
    '(prefers-reduced-motion: no-preference)': styles,
  },
});

/**
 * Helper function to create a custom focus outline style object.
 * Returns a style object with focus-visible outline that follows the design system's outline pattern.
 *
 * This function returns a style object that must be used with vanilla-extract's `style()` function or `recipe()` function.
 *
 * @param outlineColor - The color for the focus outline (e.g., '#0066cc', 'rgb(255, 0, 0)', CSS custom properties)
 * @returns A style object with custom focus outline styling
 *
 * @example
 * import { style } from '@vanilla-extract/css';
 * import { recipe } from '@vanilla-extract/recipes';
 * import { withCustomOutline } from './utilities.css.ts';
 *
 * const redOutlineButton = style([
 *   withCustomOutline('#ff0000'),
 *   {
 *     padding: '8px 16px',
 *     background: 'white'
 *   }
 * ]);
 *
 * const buttonVariants = recipe({
 *   base: [
 *     withCustomOutline(themeContract.colors['shadow.interactive']),
 *     {
 *       // other base styles
 *       padding: '12px 24px'
 *     }
 *   ],
 *   variants: {
 *     // variant styles
 *   }
 * });
 */
export const withCustomOutline = (outlineColor: string): StyleRule => ({
  ':focus-visible': {
    boxShadow: `0px 0px 0px 0px, ${COLORS__PURE.transparent} 0px 0px 0px 0px, ${COLORS__PURE.transparent} 0px 0px 0px 0px, ${outlineColor} 0px 0px 0px 3px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`,
    outline: '2px solid transparent',
    outlineOffset: '2px',
  },
});
