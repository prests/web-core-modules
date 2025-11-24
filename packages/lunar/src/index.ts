/**
 * Main Package Index
 *
 * This is the primary entry point for the Lunar design system package.
 * Exports all React components, TypeScript types, and JavaScript utilities
 * that consumers need at runtime.
 *
 * Should export:
 * - React components (Button, Text, Card, etc.)
 * - Component prop types
 * - Runtime utilities and helper functions
 * - ThemeProvider and theme-related React functionality
 *
 */

/**
 * Component Exports
 */
export { default as ThemeProvider } from './themes/ThemeProvider/ThemeProvider.js';
export { useTheme } from './hooks/theme.js';

export { default as Button, type ButtonProps } from './components/primitives/Button/Button.js';
export {
  BUTTON_VARIANT__PRIMARY,
  BUTTON_VARIANT__SECONDARY,
  BUTTON_VARIANT__OUTLINE,
  BUTTON_VARIANT__DESTRUCTIVE,
  BUTTON_VARIANT__GHOST,
  BUTTON_VARIANT__LINK,
  BUTTON_SIZE__LARGE,
  BUTTON_SIZE__MEDIUM,
  BUTTON_SIZE__SMALL,
} from './components/primitives/Button/button.css.js';

export { default as Input } from './components/primitives/Input/Input.js';

export { default as Label } from './components/primitives/Label/Label.js';

export { default as Text, type TextProps } from './components/primitives/Typography/Text.js';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from './components/composite/Card/Card.js';
export {
  TEXT_VARIANT__DISPLAY,
  TEXT_VARIANT__HEADING,
  TEXT_VARIANT__SUBHEADING,
  TEXT_VARIANT__BODY,
  TEXT_VARIANT__CAPTION,
  TEXT_VARIANT__LABEL,
  TEXT_SIZE__XL,
  TEXT_SIZE__LG,
  TEXT_SIZE__MD,
  TEXT_SIZE__SM,
  TEXT_COLOR__PRIMARY,
  TEXT_COLOR__SECONDARY,
  TEXT_COLOR__MUTED,
  TEXT_COLOR__DISABLED,
  TEXT_COLOR__INVERSE,
  TEXT_COLOR__INTERACTIVE,
  TEXT_COLOR__SUCCESS,
  TEXT_COLOR__WARNING,
  TEXT_COLOR__DANGER,
  TEXT_COLOR__INFO,
  TEXT_COLOR__BRAND,
  TEXT_COLOR__ACCENT,
  TEXT_WEIGHT__LIGHT,
  TEXT_WEIGHT__MEDIUM,
  TEXT_WEIGHT__BOLD,
} from './components/primitives/Typography/text.css.js';

/**
 * Styling Utility Exports
 */
export { withCustomOutline, withSafeTransition, withBreakpoint } from './themes/styles/utilities.js';

export { BREAKPOINT__SM, BREAKPOINT__MD, BREAKPOINT__LG } from './constants/theming.js';

export {
  COLORS__PURE,
  COLORS__STONE,
  COLORS__RED,
  COLORS__GREEN,
  COLORS__GOLD,
  COLORS__PEARL,
  COLORS__YELLOW,
  COLORS__BLUE,
} from './themes/tokens/primitives/colors.js';

export { SPACING } from './themes/tokens/primitives/spacing.js';
export { BORDER_RADIUS, BORDER_WIDTH } from './themes/tokens/primitives/borders.js';
export { BOX_SHADOW } from './themes/tokens/primitives/shadows.js';
export {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LETTER_SPACING,
  LINE_HEIGHT__TIGHT,
  LINE_HEIGHT__RELAXED,
} from './themes/tokens/primitives/typography.js';
export { COLOR_SCHEME__DARK, COLOR_SCHEME__LIGHT, COLOR_SCHEME__SYSTEM } from './constants/theming.js';
export type { ColorScheme } from './types/theming.js';
