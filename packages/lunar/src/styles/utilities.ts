import { style, type CSSProperties } from '@vanilla-extract/css';

import { COLORS__PURE } from '../tokens/primitives/colors.js';

/**
 * Helper function to create a motion-safe style with custom CSS properties.
 * Automatically wraps the provided styles in a `prefers-reduced-motion: no-preference` media query,
 * ensuring animations only run when users haven't requested reduced motion.
 *
 * @param styles - CSS properties object (e.g., { transition: 'opacity 0.3s ease', transform: 'scale(1.1)' })
 * @returns A vanilla-extract style that applies the CSS properties only when motion is preferred
 *
 * @example
 * const fadeTransition = withSafeTransition({
 *   transition: 'opacity 0.3s ease-in-out'
 * });
 *
 * const slideAndFade = withSafeTransition({
 *   transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
 *   transform: 'translateY(0)'
 * });
 */
export const withSafeTransition = (styles: CSSProperties) =>
  style({
    '@media': {
      '(prefers-reduced-motion: no-preference)': styles,
    },
  });

/**
 * Helper function to create a custom focus outline style.
 * Generates a focus-visible outline with the specified color that follows
 * the design system's outline pattern.
 *
 * @param outlineColor - The color for the focus outline (e.g., '#0066cc', 'rgb(255, 0, 0)', CSS custom properties)
 * @returns A vanilla-extract style with custom focus outline styling
 *
 * @example
 * const redOutline = withCustomOutline('#ff0000');
 * const primaryOutline = withCustomOutline(themeContract.colors['border.interactive']);
 *
 * // Usage in a recipe or style
 * const buttonVariants = recipe({
 *   base: [
 *     withCustomOutline(themeContract.colors['shadow.interactive']),
 *     {
 *        // other styles
 *     },
 *   ]
 * });
 */
export const withCustomOutline = (outlineColor: string) =>
  style({
    ':focus-visible': {
      boxShadow: `0px 0px 0px 0px, ${COLORS__PURE.transparent} 0px 0px 0px 0px, ${COLORS__PURE.transparent} 0px 0px 0px 0px, ${outlineColor} 0px 0px 0px 3px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`,
      outline: '2px solid transparent',
      outlineOffset: '2px',
    },
  });
