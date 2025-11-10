import { recipe } from '@vanilla-extract/recipes';

import { themeContract } from '../../../tokens/tokens.css.js';

const TEXT_VARIANT__DISPLAY = 'display';
const TEXT_VARIANT__HEADING = 'heading';
const TEXT_VARIANT__SUBHEADING = 'subheading';
const TEXT_VARIANT__BODY = 'body';
const TEXT_VARIANT__CAPTION = 'caption';
const TEXT_VARIANT__LABEL = 'label';

const TEXT_SIZE__XL = 'xl';
const TEXT_SIZE__LG = 'lg';
const TEXT_SIZE__MD = 'md';
const TEXT_SIZE__SM = 'sm';

// Color variant constants
const TEXT_COLOR__PRIMARY = 'primary';
const TEXT_COLOR__SECONDARY = 'secondary';
const TEXT_COLOR__MUTED = 'muted'; // maps to text.tertiary
const TEXT_COLOR__DISABLED = 'disabled';
const TEXT_COLOR__INVERSE = 'inverse';
const TEXT_COLOR__INTERACTIVE = 'interactive';
const TEXT_COLOR__INTERACTIVE_HOVER = 'interactive-hover';
const TEXT_COLOR__SUCCESS = 'success';
const TEXT_COLOR__WARNING = 'warning';
const TEXT_COLOR__DANGER = 'danger'; // maps to text.error
const TEXT_COLOR__INFO = 'info';
const TEXT_COLOR__BRAND = 'brand'; // maps to text.interactive
const TEXT_COLOR__ACCENT = 'accent'; // maps to text.interactive.hover

const TEXT_WEIGHT__LIGHT = 'light';
const TEXT_WEIGHT__MEDIUM = 'medium';
const TEXT_WEIGHT__BOLD = 'bold';

const textVariants = recipe({
  base: {
    margin: 0,
    padding: 0,
    fontFamily: themeContract.typography.fontFamily.base,
  },
  variants: {
    variant: {
      [TEXT_VARIANT__DISPLAY]: {},
      [TEXT_VARIANT__HEADING]: {},
      [TEXT_VARIANT__SUBHEADING]: {},
      [TEXT_VARIANT__BODY]: {},
      [TEXT_VARIANT__CAPTION]: {},
      [TEXT_VARIANT__LABEL]: {},
    },
    size: {
      [TEXT_SIZE__XL]: {},
      [TEXT_SIZE__LG]: {},
      [TEXT_SIZE__MD]: {},
      [TEXT_SIZE__SM]: {},
    },

    color: {
      // Primary text colors
      [TEXT_COLOR__PRIMARY]: {
        color: themeContract.colors['text.primary'],
      },
      [TEXT_COLOR__SECONDARY]: {
        color: themeContract.colors['text.secondary'],
      },
      [TEXT_COLOR__MUTED]: {
        color: themeContract.colors['text.tertiary'],
      },
      [TEXT_COLOR__DISABLED]: {
        color: themeContract.colors['text.disabled'],
      },
      [TEXT_COLOR__INVERSE]: {
        color: themeContract.colors['text.inverse'],
      },

      // Interactive colors
      [TEXT_COLOR__INTERACTIVE]: {
        color: themeContract.colors['text.interactive'],
      },
      [TEXT_COLOR__INTERACTIVE_HOVER]: {
        color: themeContract.colors['text.interactive.hover'],
      },

      // Semantic colors
      [TEXT_COLOR__SUCCESS]: {
        color: themeContract.colors['text.success'],
      },
      [TEXT_COLOR__WARNING]: {
        color: themeContract.colors['text.warning'],
      },
      [TEXT_COLOR__DANGER]: {
        color: themeContract.colors['text.error'],
      },
      [TEXT_COLOR__INFO]: {
        color: themeContract.colors['text.info'],
      },

      // Brand colors (using interactive as fallback)
      [TEXT_COLOR__BRAND]: {
        color: themeContract.colors['text.interactive'],
      },
      [TEXT_COLOR__ACCENT]: {
        color: themeContract.colors['text.interactive.hover'],
      },
    },
    weight: {
      [TEXT_WEIGHT__LIGHT]: {},
      [TEXT_WEIGHT__MEDIUM]: {},
      [TEXT_WEIGHT__BOLD]: {},
    },
  },
  defaultVariants: {
    variant: TEXT_VARIANT__BODY,
    size: TEXT_SIZE__MD,
    color: TEXT_COLOR__PRIMARY,
    weight: TEXT_WEIGHT__MEDIUM,
  },
});

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
  TEXT_COLOR__INTERACTIVE_HOVER,
  TEXT_COLOR__SUCCESS,
  TEXT_COLOR__WARNING,
  TEXT_COLOR__DANGER,
  TEXT_COLOR__INFO,
  TEXT_COLOR__BRAND,
  TEXT_COLOR__ACCENT,
  TEXT_WEIGHT__LIGHT,
  TEXT_WEIGHT__MEDIUM,
  TEXT_WEIGHT__BOLD,
  textVariants,
};
