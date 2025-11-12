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
  defaultVariants: {
    variant: TEXT_VARIANT__BODY,
    size: TEXT_SIZE__MD,
    color: TEXT_COLOR__PRIMARY,
    weight: TEXT_WEIGHT__MEDIUM,
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
    weight: {
      [TEXT_WEIGHT__LIGHT]: {},
      [TEXT_WEIGHT__MEDIUM]: {},
      [TEXT_WEIGHT__BOLD]: {},
    },
    color: {
      // Primary text colors
      [TEXT_COLOR__PRIMARY]: {
        color: themeContract.colors.text.primary,
      },
      [TEXT_COLOR__SECONDARY]: {
        color: themeContract.colors.text.secondary,
      },
      [TEXT_COLOR__MUTED]: {
        color: themeContract.colors.text.tertiary,
      },
      [TEXT_COLOR__DISABLED]: {
        color: themeContract.colors.text.disabled,
      },
      [TEXT_COLOR__INVERSE]: {
        color: themeContract.colors.text.inverse,
      },

      // Interactive colors
      [TEXT_COLOR__INTERACTIVE]: {
        color: themeContract.colors.text.interactive.default,
      },

      // Semantic colors
      [TEXT_COLOR__SUCCESS]: {
        color: themeContract.colors.text.success,
      },
      [TEXT_COLOR__WARNING]: {
        color: themeContract.colors.text.warning,
      },
      [TEXT_COLOR__DANGER]: {
        color: themeContract.colors.text.error,
      },
      [TEXT_COLOR__INFO]: {
        color: themeContract.colors.text.info,
      },

      // Brand colors (using interactive as fallback)
      [TEXT_COLOR__BRAND]: {
        color: themeContract.colors.text.interactive.default,
      },
      [TEXT_COLOR__ACCENT]: {
        color: themeContract.colors.text.interactive.hover,
      },
    },
  },
  compoundVariants: [
    // DISPLAY variants
    {
      variants: {
        variant: TEXT_VARIANT__DISPLAY,
        size: TEXT_SIZE__XL,
        weight: TEXT_WEIGHT__LIGHT,
      },
      style: {
        fontSize: themeContract.typography.display.xl.light.fontSize,
        fontWeight: themeContract.typography.display.xl.light.fontWeight,
        letterSpacing: themeContract.typography.display.xl.light.letterSpacing,
        lineHeight: themeContract.typography.display.xl.light.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__DISPLAY,
        size: TEXT_SIZE__XL,
        weight: TEXT_WEIGHT__MEDIUM,
      },
      style: {
        fontSize: themeContract.typography.display.xl.medium.fontSize,
        fontWeight: themeContract.typography.display.xl.medium.fontWeight,
        letterSpacing: themeContract.typography.display.xl.medium.letterSpacing,
        lineHeight: themeContract.typography.display.xl.medium.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__DISPLAY,
        size: TEXT_SIZE__XL,
        weight: TEXT_WEIGHT__BOLD,
      },
      style: {
        fontSize: themeContract.typography.display.xl.bold.fontSize,
        fontWeight: themeContract.typography.display.xl.bold.fontWeight,
        letterSpacing: themeContract.typography.display.xl.bold.letterSpacing,
        lineHeight: themeContract.typography.display.xl.bold.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__DISPLAY,
        size: TEXT_SIZE__LG,
        weight: TEXT_WEIGHT__LIGHT,
      },
      style: {
        fontSize: themeContract.typography.display.lg.light.fontSize,
        fontWeight: themeContract.typography.display.lg.light.fontWeight,
        letterSpacing: themeContract.typography.display.lg.light.letterSpacing,
        lineHeight: themeContract.typography.display.lg.light.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__DISPLAY,
        size: TEXT_SIZE__LG,
        weight: TEXT_WEIGHT__MEDIUM,
      },
      style: {
        fontSize: themeContract.typography.display.lg.medium.fontSize,
        fontWeight: themeContract.typography.display.lg.medium.fontWeight,
        letterSpacing: themeContract.typography.display.lg.medium.letterSpacing,
        lineHeight: themeContract.typography.display.lg.medium.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__DISPLAY,
        size: TEXT_SIZE__LG,
        weight: TEXT_WEIGHT__BOLD,
      },
      style: {
        fontSize: themeContract.typography.display.lg.bold.fontSize,
        fontWeight: themeContract.typography.display.lg.bold.fontWeight,
        letterSpacing: themeContract.typography.display.lg.bold.letterSpacing,
        lineHeight: themeContract.typography.display.lg.bold.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__DISPLAY,
        size: TEXT_SIZE__MD,
        weight: TEXT_WEIGHT__LIGHT,
      },
      style: {
        fontSize: themeContract.typography.display.md.light.fontSize,
        fontWeight: themeContract.typography.display.md.light.fontWeight,
        letterSpacing: themeContract.typography.display.md.light.letterSpacing,
        lineHeight: themeContract.typography.display.md.light.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__DISPLAY,
        size: TEXT_SIZE__MD,
        weight: TEXT_WEIGHT__MEDIUM,
      },
      style: {
        fontSize: themeContract.typography.display.md.medium.fontSize,
        fontWeight: themeContract.typography.display.md.medium.fontWeight,
        letterSpacing: themeContract.typography.display.md.medium.letterSpacing,
        lineHeight: themeContract.typography.display.md.medium.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__DISPLAY,
        size: TEXT_SIZE__MD,
        weight: TEXT_WEIGHT__BOLD,
      },
      style: {
        fontSize: themeContract.typography.display.md.bold.fontSize,
        fontWeight: themeContract.typography.display.md.bold.fontWeight,
        letterSpacing: themeContract.typography.display.md.bold.letterSpacing,
        lineHeight: themeContract.typography.display.md.bold.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__DISPLAY,
        size: TEXT_SIZE__SM,
        weight: TEXT_WEIGHT__LIGHT,
      },
      style: {
        fontSize: themeContract.typography.display.sm.light.fontSize,
        fontWeight: themeContract.typography.display.sm.light.fontWeight,
        letterSpacing: themeContract.typography.display.sm.light.letterSpacing,
        lineHeight: themeContract.typography.display.sm.light.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__DISPLAY,
        size: TEXT_SIZE__SM,
        weight: TEXT_WEIGHT__MEDIUM,
      },
      style: {
        fontSize: themeContract.typography.display.sm.medium.fontSize,
        fontWeight: themeContract.typography.display.sm.medium.fontWeight,
        letterSpacing: themeContract.typography.display.sm.medium.letterSpacing,
        lineHeight: themeContract.typography.display.sm.medium.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__DISPLAY,
        size: TEXT_SIZE__SM,
        weight: TEXT_WEIGHT__BOLD,
      },
      style: {
        fontSize: themeContract.typography.display.sm.bold.fontSize,
        fontWeight: themeContract.typography.display.sm.bold.fontWeight,
        letterSpacing: themeContract.typography.display.sm.bold.letterSpacing,
        lineHeight: themeContract.typography.display.sm.bold.lineHeight,
      },
    },

    // HEADING variants
    {
      variants: {
        variant: TEXT_VARIANT__HEADING,
        size: TEXT_SIZE__XL,
        weight: TEXT_WEIGHT__LIGHT,
      },
      style: {
        fontSize: themeContract.typography.heading.xl.light.fontSize,
        fontWeight: themeContract.typography.heading.xl.light.fontWeight,
        letterSpacing: themeContract.typography.heading.xl.light.letterSpacing,
        lineHeight: themeContract.typography.heading.xl.light.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__HEADING,
        size: TEXT_SIZE__XL,
        weight: TEXT_WEIGHT__MEDIUM,
      },
      style: {
        fontSize: themeContract.typography.heading.xl.medium.fontSize,
        fontWeight: themeContract.typography.heading.xl.medium.fontWeight,
        letterSpacing: themeContract.typography.heading.xl.medium.letterSpacing,
        lineHeight: themeContract.typography.heading.xl.medium.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__HEADING,
        size: TEXT_SIZE__XL,
        weight: TEXT_WEIGHT__BOLD,
      },
      style: {
        fontSize: themeContract.typography.heading.xl.bold.fontSize,
        fontWeight: themeContract.typography.heading.xl.bold.fontWeight,
        letterSpacing: themeContract.typography.heading.xl.bold.letterSpacing,
        lineHeight: themeContract.typography.heading.xl.bold.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__HEADING,
        size: TEXT_SIZE__LG,
        weight: TEXT_WEIGHT__LIGHT,
      },
      style: {
        fontSize: themeContract.typography.heading.lg.light.fontSize,
        fontWeight: themeContract.typography.heading.lg.light.fontWeight,
        letterSpacing: themeContract.typography.heading.lg.light.letterSpacing,
        lineHeight: themeContract.typography.heading.lg.light.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__HEADING,
        size: TEXT_SIZE__LG,
        weight: TEXT_WEIGHT__MEDIUM,
      },
      style: {
        fontSize: themeContract.typography.heading.lg.medium.fontSize,
        fontWeight: themeContract.typography.heading.lg.medium.fontWeight,
        letterSpacing: themeContract.typography.heading.lg.medium.letterSpacing,
        lineHeight: themeContract.typography.heading.lg.medium.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__HEADING,
        size: TEXT_SIZE__LG,
        weight: TEXT_WEIGHT__BOLD,
      },
      style: {
        fontSize: themeContract.typography.heading.lg.bold.fontSize,
        fontWeight: themeContract.typography.heading.lg.bold.fontWeight,
        letterSpacing: themeContract.typography.heading.lg.bold.letterSpacing,
        lineHeight: themeContract.typography.heading.lg.bold.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__HEADING,
        size: TEXT_SIZE__MD,
        weight: TEXT_WEIGHT__LIGHT,
      },
      style: {
        fontSize: themeContract.typography.heading.md.light.fontSize,
        fontWeight: themeContract.typography.heading.md.light.fontWeight,
        letterSpacing: themeContract.typography.heading.md.light.letterSpacing,
        lineHeight: themeContract.typography.heading.md.light.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__HEADING,
        size: TEXT_SIZE__MD,
        weight: TEXT_WEIGHT__MEDIUM,
      },
      style: {
        fontSize: themeContract.typography.heading.md.medium.fontSize,
        fontWeight: themeContract.typography.heading.md.medium.fontWeight,
        letterSpacing: themeContract.typography.heading.md.medium.letterSpacing,
        lineHeight: themeContract.typography.heading.md.medium.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__HEADING,
        size: TEXT_SIZE__MD,
        weight: TEXT_WEIGHT__BOLD,
      },
      style: {
        fontSize: themeContract.typography.heading.md.bold.fontSize,
        fontWeight: themeContract.typography.heading.md.bold.fontWeight,
        letterSpacing: themeContract.typography.heading.md.bold.letterSpacing,
        lineHeight: themeContract.typography.heading.md.bold.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__HEADING,
        size: TEXT_SIZE__SM,
        weight: TEXT_WEIGHT__LIGHT,
      },
      style: {
        fontSize: themeContract.typography.heading.sm.light.fontSize,
        fontWeight: themeContract.typography.heading.sm.light.fontWeight,
        letterSpacing: themeContract.typography.heading.sm.light.letterSpacing,
        lineHeight: themeContract.typography.heading.sm.light.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__HEADING,
        size: TEXT_SIZE__SM,
        weight: TEXT_WEIGHT__MEDIUM,
      },
      style: {
        fontSize: themeContract.typography.heading.sm.medium.fontSize,
        fontWeight: themeContract.typography.heading.sm.medium.fontWeight,
        letterSpacing: themeContract.typography.heading.sm.medium.letterSpacing,
        lineHeight: themeContract.typography.heading.sm.medium.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__HEADING,
        size: TEXT_SIZE__SM,
        weight: TEXT_WEIGHT__BOLD,
      },
      style: {
        fontSize: themeContract.typography.heading.sm.bold.fontSize,
        fontWeight: themeContract.typography.heading.sm.bold.fontWeight,
        letterSpacing: themeContract.typography.heading.sm.bold.letterSpacing,
        lineHeight: themeContract.typography.heading.sm.bold.lineHeight,
      },
    },

    // SUBHEADING variants
    {
      variants: {
        variant: TEXT_VARIANT__SUBHEADING,
        size: TEXT_SIZE__XL,
        weight: TEXT_WEIGHT__LIGHT,
      },
      style: {
        fontSize: themeContract.typography.subheading.xl.light.fontSize,
        fontWeight: themeContract.typography.subheading.xl.light.fontWeight,
        letterSpacing: themeContract.typography.subheading.xl.light.letterSpacing,
        lineHeight: themeContract.typography.subheading.xl.light.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__SUBHEADING,
        size: TEXT_SIZE__XL,
        weight: TEXT_WEIGHT__MEDIUM,
      },
      style: {
        fontSize: themeContract.typography.subheading.xl.medium.fontSize,
        fontWeight: themeContract.typography.subheading.xl.medium.fontWeight,
        letterSpacing: themeContract.typography.subheading.xl.medium.letterSpacing,
        lineHeight: themeContract.typography.subheading.xl.medium.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__SUBHEADING,
        size: TEXT_SIZE__XL,
        weight: TEXT_WEIGHT__BOLD,
      },
      style: {
        fontSize: themeContract.typography.subheading.xl.bold.fontSize,
        fontWeight: themeContract.typography.subheading.xl.bold.fontWeight,
        letterSpacing: themeContract.typography.subheading.xl.bold.letterSpacing,
        lineHeight: themeContract.typography.subheading.xl.bold.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__SUBHEADING,
        size: TEXT_SIZE__LG,
        weight: TEXT_WEIGHT__LIGHT,
      },
      style: {
        fontSize: themeContract.typography.subheading.lg.light.fontSize,
        fontWeight: themeContract.typography.subheading.lg.light.fontWeight,
        letterSpacing: themeContract.typography.subheading.lg.light.letterSpacing,
        lineHeight: themeContract.typography.subheading.lg.light.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__SUBHEADING,
        size: TEXT_SIZE__LG,
        weight: TEXT_WEIGHT__MEDIUM,
      },
      style: {
        fontSize: themeContract.typography.subheading.lg.medium.fontSize,
        fontWeight: themeContract.typography.subheading.lg.medium.fontWeight,
        letterSpacing: themeContract.typography.subheading.lg.medium.letterSpacing,
        lineHeight: themeContract.typography.subheading.lg.medium.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__SUBHEADING,
        size: TEXT_SIZE__LG,
        weight: TEXT_WEIGHT__BOLD,
      },
      style: {
        fontSize: themeContract.typography.subheading.lg.bold.fontSize,
        fontWeight: themeContract.typography.subheading.lg.bold.fontWeight,
        letterSpacing: themeContract.typography.subheading.lg.bold.letterSpacing,
        lineHeight: themeContract.typography.subheading.lg.bold.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__SUBHEADING,
        size: TEXT_SIZE__MD,
        weight: TEXT_WEIGHT__LIGHT,
      },
      style: {
        fontSize: themeContract.typography.subheading.md.light.fontSize,
        fontWeight: themeContract.typography.subheading.md.light.fontWeight,
        letterSpacing: themeContract.typography.subheading.md.light.letterSpacing,
        lineHeight: themeContract.typography.subheading.md.light.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__SUBHEADING,
        size: TEXT_SIZE__MD,
        weight: TEXT_WEIGHT__MEDIUM,
      },
      style: {
        fontSize: themeContract.typography.subheading.md.medium.fontSize,
        fontWeight: themeContract.typography.subheading.md.medium.fontWeight,
        letterSpacing: themeContract.typography.subheading.md.medium.letterSpacing,
        lineHeight: themeContract.typography.subheading.md.medium.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__SUBHEADING,
        size: TEXT_SIZE__MD,
        weight: TEXT_WEIGHT__BOLD,
      },
      style: {
        fontSize: themeContract.typography.subheading.md.bold.fontSize,
        fontWeight: themeContract.typography.subheading.md.bold.fontWeight,
        letterSpacing: themeContract.typography.subheading.md.bold.letterSpacing,
        lineHeight: themeContract.typography.subheading.md.bold.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__SUBHEADING,
        size: TEXT_SIZE__SM,
        weight: TEXT_WEIGHT__LIGHT,
      },
      style: {
        fontSize: themeContract.typography.subheading.sm.light.fontSize,
        fontWeight: themeContract.typography.subheading.sm.light.fontWeight,
        letterSpacing: themeContract.typography.subheading.sm.light.letterSpacing,
        lineHeight: themeContract.typography.subheading.sm.light.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__SUBHEADING,
        size: TEXT_SIZE__SM,
        weight: TEXT_WEIGHT__MEDIUM,
      },
      style: {
        fontSize: themeContract.typography.subheading.sm.medium.fontSize,
        fontWeight: themeContract.typography.subheading.sm.medium.fontWeight,
        letterSpacing: themeContract.typography.subheading.sm.medium.letterSpacing,
        lineHeight: themeContract.typography.subheading.sm.medium.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__SUBHEADING,
        size: TEXT_SIZE__SM,
        weight: TEXT_WEIGHT__BOLD,
      },
      style: {
        fontSize: themeContract.typography.subheading.sm.bold.fontSize,
        fontWeight: themeContract.typography.subheading.sm.bold.fontWeight,
        letterSpacing: themeContract.typography.subheading.sm.bold.letterSpacing,
        lineHeight: themeContract.typography.subheading.sm.bold.lineHeight,
      },
    },

    // BODY variants
    {
      variants: {
        variant: TEXT_VARIANT__BODY,
        size: TEXT_SIZE__XL,
        weight: TEXT_WEIGHT__LIGHT,
      },
      style: {
        fontSize: themeContract.typography.body.xl.light.fontSize,
        fontWeight: themeContract.typography.body.xl.light.fontWeight,
        letterSpacing: themeContract.typography.body.xl.light.letterSpacing,
        lineHeight: themeContract.typography.body.xl.light.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__BODY,
        size: TEXT_SIZE__XL,
        weight: TEXT_WEIGHT__MEDIUM,
      },
      style: {
        fontSize: themeContract.typography.body.xl.medium.fontSize,
        fontWeight: themeContract.typography.body.xl.medium.fontWeight,
        letterSpacing: themeContract.typography.body.xl.medium.letterSpacing,
        lineHeight: themeContract.typography.body.xl.medium.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__BODY,
        size: TEXT_SIZE__XL,
        weight: TEXT_WEIGHT__BOLD,
      },
      style: {
        fontSize: themeContract.typography.body.xl.bold.fontSize,
        fontWeight: themeContract.typography.body.xl.bold.fontWeight,
        letterSpacing: themeContract.typography.body.xl.bold.letterSpacing,
        lineHeight: themeContract.typography.body.xl.bold.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__BODY,
        size: TEXT_SIZE__LG,
        weight: TEXT_WEIGHT__LIGHT,
      },
      style: {
        fontSize: themeContract.typography.body.lg.light.fontSize,
        fontWeight: themeContract.typography.body.lg.light.fontWeight,
        letterSpacing: themeContract.typography.body.lg.light.letterSpacing,
        lineHeight: themeContract.typography.body.lg.light.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__BODY,
        size: TEXT_SIZE__LG,
        weight: TEXT_WEIGHT__MEDIUM,
      },
      style: {
        fontSize: themeContract.typography.body.lg.medium.fontSize,
        fontWeight: themeContract.typography.body.lg.medium.fontWeight,
        letterSpacing: themeContract.typography.body.lg.medium.letterSpacing,
        lineHeight: themeContract.typography.body.lg.medium.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__BODY,
        size: TEXT_SIZE__LG,
        weight: TEXT_WEIGHT__BOLD,
      },
      style: {
        fontSize: themeContract.typography.body.lg.bold.fontSize,
        fontWeight: themeContract.typography.body.lg.bold.fontWeight,
        letterSpacing: themeContract.typography.body.lg.bold.letterSpacing,
        lineHeight: themeContract.typography.body.lg.bold.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__BODY,
        size: TEXT_SIZE__MD,
        weight: TEXT_WEIGHT__LIGHT,
      },
      style: {
        fontSize: themeContract.typography.body.md.light.fontSize,
        fontWeight: themeContract.typography.body.md.light.fontWeight,
        letterSpacing: themeContract.typography.body.md.light.letterSpacing,
        lineHeight: themeContract.typography.body.md.light.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__BODY,
        size: TEXT_SIZE__MD,
        weight: TEXT_WEIGHT__MEDIUM,
      },
      style: {
        fontSize: themeContract.typography.body.md.medium.fontSize,
        fontWeight: themeContract.typography.body.md.medium.fontWeight,
        letterSpacing: themeContract.typography.body.md.medium.letterSpacing,
        lineHeight: themeContract.typography.body.md.medium.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__BODY,
        size: TEXT_SIZE__MD,
        weight: TEXT_WEIGHT__BOLD,
      },
      style: {
        fontSize: themeContract.typography.body.md.bold.fontSize,
        fontWeight: themeContract.typography.body.md.bold.fontWeight,
        letterSpacing: themeContract.typography.body.md.bold.letterSpacing,
        lineHeight: themeContract.typography.body.md.bold.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__BODY,
        size: TEXT_SIZE__SM,
        weight: TEXT_WEIGHT__LIGHT,
      },
      style: {
        fontSize: themeContract.typography.body.sm.light.fontSize,
        fontWeight: themeContract.typography.body.sm.light.fontWeight,
        letterSpacing: themeContract.typography.body.sm.light.letterSpacing,
        lineHeight: themeContract.typography.body.sm.light.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__BODY,
        size: TEXT_SIZE__SM,
        weight: TEXT_WEIGHT__MEDIUM,
      },
      style: {
        fontSize: themeContract.typography.body.sm.medium.fontSize,
        fontWeight: themeContract.typography.body.sm.medium.fontWeight,
        letterSpacing: themeContract.typography.body.sm.medium.letterSpacing,
        lineHeight: themeContract.typography.body.sm.medium.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__BODY,
        size: TEXT_SIZE__SM,
        weight: TEXT_WEIGHT__BOLD,
      },
      style: {
        fontSize: themeContract.typography.body.sm.bold.fontSize,
        fontWeight: themeContract.typography.body.sm.bold.fontWeight,
        letterSpacing: themeContract.typography.body.sm.bold.letterSpacing,
        lineHeight: themeContract.typography.body.sm.bold.lineHeight,
      },
    },

    // CAPTION variants
    {
      variants: {
        variant: TEXT_VARIANT__CAPTION,
        size: TEXT_SIZE__XL,
        weight: TEXT_WEIGHT__LIGHT,
      },
      style: {
        fontSize: themeContract.typography.caption.xl.light.fontSize,
        fontWeight: themeContract.typography.caption.xl.light.fontWeight,
        letterSpacing: themeContract.typography.caption.xl.light.letterSpacing,
        lineHeight: themeContract.typography.caption.xl.light.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__CAPTION,
        size: TEXT_SIZE__XL,
        weight: TEXT_WEIGHT__MEDIUM,
      },
      style: {
        fontSize: themeContract.typography.caption.xl.medium.fontSize,
        fontWeight: themeContract.typography.caption.xl.medium.fontWeight,
        letterSpacing: themeContract.typography.caption.xl.medium.letterSpacing,
        lineHeight: themeContract.typography.caption.xl.medium.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__CAPTION,
        size: TEXT_SIZE__XL,
        weight: TEXT_WEIGHT__BOLD,
      },
      style: {
        fontSize: themeContract.typography.caption.xl.bold.fontSize,
        fontWeight: themeContract.typography.caption.xl.bold.fontWeight,
        letterSpacing: themeContract.typography.caption.xl.bold.letterSpacing,
        lineHeight: themeContract.typography.caption.xl.bold.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__CAPTION,
        size: TEXT_SIZE__LG,
        weight: TEXT_WEIGHT__LIGHT,
      },
      style: {
        fontSize: themeContract.typography.caption.lg.light.fontSize,
        fontWeight: themeContract.typography.caption.lg.light.fontWeight,
        letterSpacing: themeContract.typography.caption.lg.light.letterSpacing,
        lineHeight: themeContract.typography.caption.lg.light.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__CAPTION,
        size: TEXT_SIZE__LG,
        weight: TEXT_WEIGHT__MEDIUM,
      },
      style: {
        fontSize: themeContract.typography.caption.lg.medium.fontSize,
        fontWeight: themeContract.typography.caption.lg.medium.fontWeight,
        letterSpacing: themeContract.typography.caption.lg.medium.letterSpacing,
        lineHeight: themeContract.typography.caption.lg.medium.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__CAPTION,
        size: TEXT_SIZE__LG,
        weight: TEXT_WEIGHT__BOLD,
      },
      style: {
        fontSize: themeContract.typography.caption.lg.bold.fontSize,
        fontWeight: themeContract.typography.caption.lg.bold.fontWeight,
        letterSpacing: themeContract.typography.caption.lg.bold.letterSpacing,
        lineHeight: themeContract.typography.caption.lg.bold.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__CAPTION,
        size: TEXT_SIZE__MD,
        weight: TEXT_WEIGHT__LIGHT,
      },
      style: {
        fontSize: themeContract.typography.caption.md.light.fontSize,
        fontWeight: themeContract.typography.caption.md.light.fontWeight,
        letterSpacing: themeContract.typography.caption.md.light.letterSpacing,
        lineHeight: themeContract.typography.caption.md.light.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__CAPTION,
        size: TEXT_SIZE__MD,
        weight: TEXT_WEIGHT__MEDIUM,
      },
      style: {
        fontSize: themeContract.typography.caption.md.medium.fontSize,
        fontWeight: themeContract.typography.caption.md.medium.fontWeight,
        letterSpacing: themeContract.typography.caption.md.medium.letterSpacing,
        lineHeight: themeContract.typography.caption.md.medium.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__CAPTION,
        size: TEXT_SIZE__MD,
        weight: TEXT_WEIGHT__BOLD,
      },
      style: {
        fontSize: themeContract.typography.caption.md.bold.fontSize,
        fontWeight: themeContract.typography.caption.md.bold.fontWeight,
        letterSpacing: themeContract.typography.caption.md.bold.letterSpacing,
        lineHeight: themeContract.typography.caption.md.bold.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__CAPTION,
        size: TEXT_SIZE__SM,
        weight: TEXT_WEIGHT__LIGHT,
      },
      style: {
        fontSize: themeContract.typography.caption.sm.light.fontSize,
        fontWeight: themeContract.typography.caption.sm.light.fontWeight,
        letterSpacing: themeContract.typography.caption.sm.light.letterSpacing,
        lineHeight: themeContract.typography.caption.sm.light.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__CAPTION,
        size: TEXT_SIZE__SM,
        weight: TEXT_WEIGHT__MEDIUM,
      },
      style: {
        fontSize: themeContract.typography.caption.sm.medium.fontSize,
        fontWeight: themeContract.typography.caption.sm.medium.fontWeight,
        letterSpacing: themeContract.typography.caption.sm.medium.letterSpacing,
        lineHeight: themeContract.typography.caption.sm.medium.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__CAPTION,
        size: TEXT_SIZE__SM,
        weight: TEXT_WEIGHT__BOLD,
      },
      style: {
        fontSize: themeContract.typography.caption.sm.bold.fontSize,
        fontWeight: themeContract.typography.caption.sm.bold.fontWeight,
        letterSpacing: themeContract.typography.caption.sm.bold.letterSpacing,
        lineHeight: themeContract.typography.caption.sm.bold.lineHeight,
      },
    },

    // LABEL variants
    {
      variants: {
        variant: TEXT_VARIANT__LABEL,
        size: TEXT_SIZE__XL,
        weight: TEXT_WEIGHT__LIGHT,
      },
      style: {
        fontSize: themeContract.typography.label.xl.light.fontSize,
        fontWeight: themeContract.typography.label.xl.light.fontWeight,
        letterSpacing: themeContract.typography.label.xl.light.letterSpacing,
        lineHeight: themeContract.typography.label.xl.light.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__LABEL,
        size: TEXT_SIZE__XL,
        weight: TEXT_WEIGHT__MEDIUM,
      },
      style: {
        fontSize: themeContract.typography.label.xl.medium.fontSize,
        fontWeight: themeContract.typography.label.xl.medium.fontWeight,
        letterSpacing: themeContract.typography.label.xl.medium.letterSpacing,
        lineHeight: themeContract.typography.label.xl.medium.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__LABEL,
        size: TEXT_SIZE__XL,
        weight: TEXT_WEIGHT__BOLD,
      },
      style: {
        fontSize: themeContract.typography.label.xl.bold.fontSize,
        fontWeight: themeContract.typography.label.xl.bold.fontWeight,
        letterSpacing: themeContract.typography.label.xl.bold.letterSpacing,
        lineHeight: themeContract.typography.label.xl.bold.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__LABEL,
        size: TEXT_SIZE__LG,
        weight: TEXT_WEIGHT__LIGHT,
      },
      style: {
        fontSize: themeContract.typography.label.lg.light.fontSize,
        fontWeight: themeContract.typography.label.lg.light.fontWeight,
        letterSpacing: themeContract.typography.label.lg.light.letterSpacing,
        lineHeight: themeContract.typography.label.lg.light.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__LABEL,
        size: TEXT_SIZE__LG,
        weight: TEXT_WEIGHT__MEDIUM,
      },
      style: {
        fontSize: themeContract.typography.label.lg.medium.fontSize,
        fontWeight: themeContract.typography.label.lg.medium.fontWeight,
        letterSpacing: themeContract.typography.label.lg.medium.letterSpacing,
        lineHeight: themeContract.typography.label.lg.medium.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__LABEL,
        size: TEXT_SIZE__LG,
        weight: TEXT_WEIGHT__BOLD,
      },
      style: {
        fontSize: themeContract.typography.label.lg.bold.fontSize,
        fontWeight: themeContract.typography.label.lg.bold.fontWeight,
        letterSpacing: themeContract.typography.label.lg.bold.letterSpacing,
        lineHeight: themeContract.typography.label.lg.bold.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__LABEL,
        size: TEXT_SIZE__MD,
        weight: TEXT_WEIGHT__LIGHT,
      },
      style: {
        fontSize: themeContract.typography.label.md.light.fontSize,
        fontWeight: themeContract.typography.label.md.light.fontWeight,
        letterSpacing: themeContract.typography.label.md.light.letterSpacing,
        lineHeight: themeContract.typography.label.md.light.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__LABEL,
        size: TEXT_SIZE__MD,
        weight: TEXT_WEIGHT__MEDIUM,
      },
      style: {
        fontSize: themeContract.typography.label.md.medium.fontSize,
        fontWeight: themeContract.typography.label.md.medium.fontWeight,
        letterSpacing: themeContract.typography.label.md.medium.letterSpacing,
        lineHeight: themeContract.typography.label.md.medium.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__LABEL,
        size: TEXT_SIZE__MD,
        weight: TEXT_WEIGHT__BOLD,
      },
      style: {
        fontSize: themeContract.typography.label.md.bold.fontSize,
        fontWeight: themeContract.typography.label.md.bold.fontWeight,
        letterSpacing: themeContract.typography.label.md.bold.letterSpacing,
        lineHeight: themeContract.typography.label.md.bold.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__LABEL,
        size: TEXT_SIZE__SM,
        weight: TEXT_WEIGHT__LIGHT,
      },
      style: {
        fontSize: themeContract.typography.label.sm.light.fontSize,
        fontWeight: themeContract.typography.label.sm.light.fontWeight,
        letterSpacing: themeContract.typography.label.sm.light.letterSpacing,
        lineHeight: themeContract.typography.label.sm.light.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__LABEL,
        size: TEXT_SIZE__SM,
        weight: TEXT_WEIGHT__MEDIUM,
      },
      style: {
        fontSize: themeContract.typography.label.sm.medium.fontSize,
        fontWeight: themeContract.typography.label.sm.medium.fontWeight,
        letterSpacing: themeContract.typography.label.sm.medium.letterSpacing,
        lineHeight: themeContract.typography.label.sm.medium.lineHeight,
      },
    },
    {
      variants: {
        variant: TEXT_VARIANT__LABEL,
        size: TEXT_SIZE__SM,
        weight: TEXT_WEIGHT__BOLD,
      },
      style: {
        fontSize: themeContract.typography.label.sm.bold.fontSize,
        fontWeight: themeContract.typography.label.sm.bold.fontWeight,
        letterSpacing: themeContract.typography.label.sm.bold.letterSpacing,
        lineHeight: themeContract.typography.label.sm.bold.lineHeight,
      },
    },
  ],
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
