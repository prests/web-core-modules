import {
  FONT_SIZE as PRIMITIVE_FONT_SIZE,
  FONT_WEIGHT as PRIMITIVE_FONT_WEIGHT,
  LINE_HEIGHT as PRIMITIVE_LINE_HEIGHT,
  LETTER_SPACING as PRIMITIVE_LETTER_SPACING,
  FONT_FAMILY as PRIMITIVE_FONT_FAMILY,
} from '../primitives/typography.js';

const FONT_SIZE = {
  xs: null,
  sm: null,
  base: null,
  lg: null,
  xl: null,
  '2xl': null,
  '3xl': null,
  '4xl': null,
  '5xl': null,
  '6xl': null,
  '7xl': null,
  '8xl': null,
  '9xl': null,
} as const;

const FONT_WEIGHT = {
  thin: null,
  extralight: null,
  light: null,
  normal: null,
  medium: null,
  semibold: null,
  bold: null,
  extrabold: null,
  black: null,
} as const;

const LINE_HEIGHT = {
  none: null,
  tight: null,
  snug: null,
  normal: null,
  relaxed: null,
  loose: null,
  3: null,
  4: null,
  5: null,
  6: null,
  7: null,
  8: null,
  9: null,
  10: null,
} as const;

const LETTER_SPACING = {
  tighter: null,
  tight: null,
  normal: null,
  wide: null,
  wider: null,
  widest: null,
} as const;

export const semanticTypography = {
  // Text roles
  heading: {
    '1': {
      fontSize: PRIMITIVE_FONT_SIZE['4xl'],
      fontWeight: PRIMITIVE_FONT_WEIGHT.bold,
      lineHeight: PRIMITIVE_LINE_HEIGHT.tight,
      letterSpacing: PRIMITIVE_LETTER_SPACING.tight,
    },
    '2': {
      fontSize: PRIMITIVE_FONT_SIZE['3xl'],
      fontWeight: PRIMITIVE_FONT_WEIGHT.bold,
      lineHeight: PRIMITIVE_LINE_HEIGHT.tight,
      letterSpacing: PRIMITIVE_LETTER_SPACING.tight,
    },
    '3': {
      fontSize: PRIMITIVE_FONT_SIZE['2xl'],
      fontWeight: PRIMITIVE_FONT_WEIGHT.semibold,
      lineHeight: PRIMITIVE_LINE_HEIGHT.snug,
      letterSpacing: PRIMITIVE_LETTER_SPACING.normal,
    },
    '4': {
      fontSize: PRIMITIVE_FONT_SIZE.xl,
      fontWeight: PRIMITIVE_FONT_WEIGHT.semibold,
      lineHeight: PRIMITIVE_LINE_HEIGHT.snug,
      letterSpacing: PRIMITIVE_LETTER_SPACING.normal,
    },
    '5': {
      fontSize: PRIMITIVE_FONT_SIZE.lg,
      fontWeight: PRIMITIVE_FONT_WEIGHT.medium,
      lineHeight: PRIMITIVE_LINE_HEIGHT.normal,
      letterSpacing: PRIMITIVE_LETTER_SPACING.normal,
    },
    '6': {
      fontSize: PRIMITIVE_FONT_SIZE.base,
      fontWeight: PRIMITIVE_FONT_WEIGHT.medium,
      lineHeight: PRIMITIVE_LINE_HEIGHT.normal,
      letterSpacing: PRIMITIVE_LETTER_SPACING.normal,
    },
  },

  body: {
    lg: {
      fontSize: PRIMITIVE_FONT_SIZE.lg,
      fontWeight: PRIMITIVE_FONT_WEIGHT.normal,
      lineHeight: PRIMITIVE_LINE_HEIGHT.relaxed,
      letterSpacing: PRIMITIVE_LETTER_SPACING.normal,
    },
    base: {
      fontSize: PRIMITIVE_FONT_SIZE.base,
      fontWeight: PRIMITIVE_FONT_WEIGHT.normal,
      lineHeight: PRIMITIVE_LINE_HEIGHT.normal,
      letterSpacing: PRIMITIVE_LETTER_SPACING.normal,
    },
    sm: {
      fontSize: PRIMITIVE_FONT_SIZE.sm,
      fontWeight: PRIMITIVE_FONT_WEIGHT.normal,
      lineHeight: PRIMITIVE_LINE_HEIGHT.normal,
      letterSpacing: PRIMITIVE_LETTER_SPACING.normal,
    },
  },

  caption: {
    fontSize: PRIMITIVE_FONT_SIZE.xs,
    fontWeight: PRIMITIVE_FONT_WEIGHT.normal,
    lineHeight: PRIMITIVE_LINE_HEIGHT.normal,
    letterSpacing: PRIMITIVE_LETTER_SPACING.wide,
  },

  code: {
    fontSize: PRIMITIVE_FONT_SIZE.sm,
    fontWeight: PRIMITIVE_FONT_WEIGHT.normal,
    lineHeight: PRIMITIVE_LINE_HEIGHT.normal,
    letterSpacing: PRIMITIVE_LETTER_SPACING.normal,
    fontFamily: (PRIMITIVE_FONT_FAMILY.mono as readonly string[]).join(', '),
  },

  // All primitive typography for utilities
  fontSize: PRIMITIVE_FONT_SIZE,
  fontWeight: PRIMITIVE_FONT_WEIGHT,
  lineHeight: PRIMITIVE_LINE_HEIGHT,
  letterSpacing: PRIMITIVE_LETTER_SPACING,
  fontFamily: PRIMITIVE_FONT_FAMILY,
} as const;

export { FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT, LETTER_SPACING };
