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

export { default as Text, type TextProps } from './components/primitives/Typography/Text.js';
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

export { regalTheme } from './themes/regal.css.js';
export { themeContract } from './tokens/tokens.css.js';

export {
  COLORS__PURE,
  COLORS__STONE,
  COLORS__RED,
  COLORS__GREEN,
  COLORS__GOLD,
  COLORS__PEARL,
  COLORS__YELLOW,
  COLORS__BLUE,
} from './tokens/primitives/colors.js';

export { SPACING } from './tokens/primitives/spacing.js';
export { BORDER_RADIUS, BORDER_WIDTH } from './tokens/primitives/borders.js';
export { BOX_SHADOW } from './tokens/primitives/shadows.js';
export { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT, LETTER_SPACING } from './tokens/primitives/typography.js';
