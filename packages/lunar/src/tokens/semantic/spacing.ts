import { spacing } from '../primitives/spacing.js';

export const semanticSpacing = {
  // Component spacing
  component: {
    xs: spacing[1], // 4px
    sm: spacing[2], // 8px
    md: spacing[4], // 16px
    lg: spacing[6], // 24px
    xl: spacing[8], // 32px
    '2xl': spacing[12], // 48px
  },

  // Layout spacing
  layout: {
    xs: spacing[4], // 16px
    sm: spacing[6], // 24px
    md: spacing[8], // 32px
    lg: spacing[12], // 48px
    xl: spacing[16], // 64px
    '2xl': spacing[24], // 96px
  },

  // Container spacing
  container: {
    xs: spacing[4], // 16px
    sm: spacing[6], // 24px
    md: spacing[8], // 32px
    lg: spacing[12], // 48px
    xl: spacing[16], // 64px
  },

  // All primitive spacing for utilities
  ...spacing,
} as const;
