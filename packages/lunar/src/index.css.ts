/**
 * CSS Styling Index
 *
 * This index file exports CSS-in-JS objects, theme definitions, and styling
 * utilities for use with Vanilla Extract and other CSS-in-JS systems.
 * Consumed via the "./styles.css" package export.
 *
 * Should export:
 * - Theme objects and configurations (regalTheme, themeContract)
 * - Vanilla Extract style recipes and variants
 *
 */

/**
 * Theming Exports
 */

export { themeContract } from './themes/tokens/tokens.css.js';

export { regalTheme } from './themes/regal.css.js';

/**
 * Styling Exports
 */

export { darkColorScheme, lightColorScheme } from './themes/styles/color-scheme.css.js';
