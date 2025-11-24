import { SPACING as INTERNAL_SPACING } from '../primitives/spacing.js';

const SPACING = {
  0: null,
  px: null,
  0.5: null,
  1: null,
  1.5: null,
  2: null,
  2.5: null,
  3: null,
  3.5: null,
  4: null,
  5: null,
  6: null,
  7: null,
  8: null,
  9: null,
  10: null,
  11: null,
  12: null,
  14: null,
  16: null,
  20: null,
  24: null,
  28: null,
  32: null,
  36: null,
  40: null,
  44: null,
  48: null,
  52: null,
  56: null,
  60: null,
  64: null,
  72: null,
  80: null,
  96: null,
} as const;

const semanticSpacing = {
  // Component spacing
  component: {
    xs: INTERNAL_SPACING[1], // 4px
    sm: INTERNAL_SPACING[2], // 8px
    md: INTERNAL_SPACING[4], // 16px
    lg: INTERNAL_SPACING[6], // 24px
    xl: INTERNAL_SPACING[8], // 32px
    '2xl': INTERNAL_SPACING[12], // 48px
  },

  // Layout spacing
  layout: {
    xs: INTERNAL_SPACING[4], // 16px
    sm: INTERNAL_SPACING[6], // 24px
    md: INTERNAL_SPACING[8], // 32px
    lg: INTERNAL_SPACING[12], // 48px
    xl: INTERNAL_SPACING[16], // 64px
    '2xl': INTERNAL_SPACING[24], // 96px
  },

  // Container spacing
  container: {
    xs: INTERNAL_SPACING[4], // 16px
    sm: INTERNAL_SPACING[6], // 24px
    md: INTERNAL_SPACING[8], // 32px
    lg: INTERNAL_SPACING[12], // 48px
    xl: INTERNAL_SPACING[16], // 64px
  },

  // All primitive spacing for utilities
  ...INTERNAL_SPACING,
} as const;

export { SPACING, semanticSpacing };
