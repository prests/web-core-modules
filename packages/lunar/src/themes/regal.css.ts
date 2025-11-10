import { createTheme, style } from '@vanilla-extract/css';

import { themeContract } from '../tokens/tokens.css.js';
import {
  COLORS__PEARL,
  COLORS__GOLD,
  COLORS__GREEN,
  COLORS__YELLOW,
  COLORS__RED,
  COLORS__BLUE,
  COLORS__PURE,
} from '../tokens/primitives/colors.js';
import { SPACING } from '../tokens/primitives/spacing.js';
import { BORDER_RADIUS, BORDER_WIDTH } from '../tokens/primitives/borders.js';
import { BOX_SHADOW } from '../tokens/primitives/shadows.js';

const regalThemeVars = createTheme(themeContract, {
  colors: {
    // ACTION COLORS - Primary uses GOLD (brand), Secondary uses GOLD border, Destructive uses RED
    'action.bg.primary': `light-dark(oklch(${COLORS__GOLD[300]}), oklch(${COLORS__GOLD[300]}))`, // Gold background (same for both)
    'action.color.primary': `light-dark(oklch(${COLORS__PEARL[950]}), oklch(${COLORS__PEARL[950]}))`,
    'action.bg.primary.hover': `light-dark(oklch(${COLORS__GOLD[300]} / 0.9), oklch(${COLORS__GOLD[300]} / 0.9))`,
    'action.bg.primary.active': `light-dark(oklch(${COLORS__GOLD[300]} / 0.8), oklch(${COLORS__GOLD[300]} / 0.8))`,
    'action.bg.primary.disabled': `light-dark(oklch(${COLORS__GOLD[300]} / 0.4), oklch(${COLORS__GOLD[300]} / 0.4))`,

    'action.bg.secondary': `light-dark(oklch(${COLORS__PEARL[400]}), oklch(${COLORS__PEARL[600]}))`, // Gold background (same for both)
    'action.bg.secondary.hover': `light-dark(oklch(${COLORS__PEARL[400]} / 0.9), oklch(${COLORS__PEARL[600]} / 0.9))`, // Gold background (same for both)
    'action.bg.secondary.active': `light-dark(oklch(${COLORS__PEARL[400]} / 0.8), oklch(${COLORS__PEARL[600]} / 0.8))`, // Gold background (same for both)
    'action.bg.secondary.disabled': `light-dark(oklch(${COLORS__PEARL[400]} / 0.4), oklch(${COLORS__PEARL[600]} / 0.4))`,

    'action.bg.outline': `light-dark(oklch(${COLORS__PEARL[400]} / 0.0125), oklch(${COLORS__PEARL[700]} / 0.0125))`,
    'action.bg.outline.hover': `light-dark(oklch(${COLORS__PEARL[400]} / 0.3), oklch(${COLORS__PEARL[700]} / 0.3))`,
    'action.bg.outline.active': `light-dark(oklch(${COLORS__PEARL[400]} / 0.05), oklch(${COLORS__PEARL[700]} / 0.05))`,
    'action.bg.outline.disabled': `light-dark(oklch(${COLORS__PEARL[400]} / 0.025), oklch(${COLORS__PEARL[700]} / 0.025))`,
    'action.color.outline.disabled': `light-dark(oklch(${COLORS__PEARL[400]} / 0.4), oklch(${COLORS__PEARL[700]} / 0.4))`,

    'action.destructive': `light-dark(oklch(${COLORS__RED[600]}), oklch(${COLORS__RED[400]}))`, // Same red for both
    'action.destructive.hover': `light-dark(oklch(${COLORS__RED[600]} / 0.9), oklch(${COLORS__RED[300]} / 0.9))`, // Same red for both
    'action.destructive.active': `light-dark(oklch(${COLORS__RED[600]} / 0.8), oklch(${COLORS__RED[300]} / 0.8))`, // Same red for both
    'action.destructive.disabled': `light-dark(oklch(${COLORS__RED[600]} / 0.4), oklch(${COLORS__RED[300]} / 0.4))`, // Same red for both

    'action.ghost': `light-dark(${COLORS__PURE.transparent}, ${COLORS__PURE.transparent})`, // Transparent background for both
    'action.ghost.hover': `light-dark(oklch(${COLORS__GOLD[300]} / 0.5), oklch(${COLORS__GOLD[300]} / 0.5))`, // Transparent background for both
    'action.ghost.active': `light-dark(oklch(${COLORS__GOLD[300]} / 0.6), oklch(${COLORS__GOLD[300]} / 0.6))`, // Transparent background for both
    'action.ghost.disabled': `light-dark(transparent, transparent)`, // Transparent for both

    // BORDER COLORS - Interactive borders use GOLD
    'border.default': `light-dark(oklch(${COLORS__PEARL[300]}), oklch(${COLORS__PEARL[700]}))`, // Light vs dark neutral border
    'border.subtle': `light-dark(oklch(${COLORS__PEARL[200]}), oklch(${COLORS__PEARL[800]}))`, // Light vs dark subtle border
    'border.strong': `light-dark(oklch(${COLORS__PEARL[400]}), oklch(${COLORS__PEARL[600]}))`, // Light vs dark strong border

    'border.interactive': `light-dark(oklch(${COLORS__PEARL[900]} / 0.9), oklch(${COLORS__PEARL[400]}))`, // Gold 500 vs lighter gold for dark theme
    'border.interactive.hover': `light-dark(oklch(${COLORS__PEARL[900]}), oklch(${COLORS__PEARL[400]} / 0.9))`, // Gold 500 vs lighter gold for dark theme
    'border.interactive.active': `light-dark(oklch(${COLORS__PEARL[900]} / 0.8), oklch(${COLORS__PEARL[400]} / 0.8))`, // Gold 500 vs lighter gold for dark theme
    'border.focus': `light-dark(oklch(${COLORS__PEARL[900]}), oklch(${COLORS__PEARL[400]}))`, // Gold focus ring

    'border.success': `light-dark(oklch(${COLORS__GREEN[500]}), oklch(${COLORS__GREEN[400]}))`, // Lighter for dark theme
    'border.warning': `light-dark(oklch(${COLORS__YELLOW[500]}), oklch(${COLORS__YELLOW[400]}))`,
    'border.error': `light-dark(oklch(${COLORS__RED[500]}), oklch(${COLORS__RED[400]}))`,
    'border.info': `light-dark(oklch(${COLORS__BLUE[500]}), oklch(${COLORS__BLUE[400]}))`,

    'border.action.primary': `light-dark(oklch(${COLORS__GOLD[500]}), oklch(${COLORS__GOLD[400]}))`, // Matches primary action
    'border.action.secondary': `light-dark(oklch(${COLORS__GOLD[500]}), oklch(${COLORS__GOLD[400]}))`, // Gold border for secondary
    'border.action.destructive': `light-dark(oklch(${COLORS__RED[500]}), oklch(${COLORS__RED[400]}))`,
    'border.action.disabled': `light-dark(oklch(${COLORS__GOLD[300]} / 0.4), oklch(${COLORS__GOLD[300]} / 0.4))`,

    // TEXT COLORS - Primary hierarchy uses PEARL, Interactive uses GOLD
    'text.primary': `light-dark(oklch(${COLORS__PEARL[900]}), oklch(${COLORS__PEARL[50]}))`, // High contrast dark vs light text
    'text.secondary': `light-dark(oklch(${COLORS__PEARL[700]}), oklch(${COLORS__PEARL[200]}))`, // Medium contrast text
    'text.tertiary': `light-dark(oklch(${COLORS__PEARL[600]}), oklch(${COLORS__PEARL[300]}))`, // Low contrast text

    'text.interactive': `light-dark(oklch(${COLORS__PEARL[900]} / 0.9), oklch(${COLORS__PEARL[300]}))`, // Gold for links - lighter for dark theme
    'text.interactive.hover': `light-dark(oklch(${COLORS__PEARL[900]}), oklch(${COLORS__PEARL[300]} / 0.9))`, // Gold for links - lighter for dark theme
    'text.interactive.active': `light-dark(oklch(${COLORS__PEARL[900]} / 0.8), oklch(${COLORS__PEARL[300]} / 0.9))`, // Gold for links - lighter for dark theme

    'text.success': `light-dark(oklch(${COLORS__GREEN[700]}), oklch(${COLORS__GREEN[300]}))`, // Darker vs lighter for contrast
    'text.warning': `light-dark(oklch(${COLORS__YELLOW[700]}), oklch(${COLORS__YELLOW[300]}))`,
    'text.error': `light-dark(oklch(${COLORS__RED[700]}), oklch(${COLORS__RED[300]}))`,
    'text.info': `light-dark(oklch(${COLORS__BLUE[700]}), oklch(${COLORS__BLUE[300]}))`,

    'text.inverse': `light-dark(oklch(${COLORS__PEARL[50]}), oklch(${COLORS__PEARL[950]}))`, // Light vs dark for inverse backgrounds
    'text.disabled': `light-dark(oklch(${COLORS__PEARL[500]}), oklch(${COLORS__PEARL[500]}))`, // Same muted text for both

    // SURFACE COLORS - Layered hierarchy with PEARL
    'surface.bg.primary': `light-dark(oklch(${COLORS__PEARL[50]}), oklch(${COLORS__PEARL[900]}))`, // Main background - lightest vs darkest
    'surface.bg.secondary': `light-dark(oklch(${COLORS__PEARL[100]}), oklch(${COLORS__PEARL[800]}))`, // Cards, panels
    'surface.bg.tertiary': `light-dark(oklch(${COLORS__PEARL[200]}), oklch(${COLORS__PEARL[700]}))`, // Elevated surfaces

    'surface.bg.interactive': `light-dark(transparent, transparent)`, // Interactive surface base
    'surface.bg.interactive.hover': `light-dark(color-mix(in oklch, oklch(${COLORS__GOLD[50]}) 30%, transparent), color-mix(in oklch, oklch(${COLORS__GOLD[800]}) 20%, transparent))`,
    'surface.bg.interactive.active': `light-dark(color-mix(in oklch, oklch(${COLORS__GOLD[100]}) 40%, transparent), color-mix(in oklch, oklch(${COLORS__GOLD[700]}) 30%, transparent))`,

    'surface.bg.success': `light-dark(color-mix(in oklch, oklch(${COLORS__GREEN[50]}) 50%, transparent), color-mix(in oklch, oklch(${COLORS__GREEN[900]}) 30%, transparent))`,
    'surface.bg.warning': `light-dark(color-mix(in oklch, oklch(${COLORS__YELLOW[50]}) 50%, transparent), color-mix(in oklch, oklch(${COLORS__YELLOW[900]}) 30%, transparent))`,
    'surface.bg.error': `light-dark(color-mix(in oklch, oklch(${COLORS__RED[50]}) 50%, transparent), color-mix(in oklch, oklch(${COLORS__RED[900]}) 30%, transparent))`,
    'surface.bg.info': `light-dark(color-mix(in oklch, oklch(${COLORS__BLUE[50]}) 50%, transparent), color-mix(in oklch, oklch(${COLORS__BLUE[900]}) 30%, transparent))`,

    'surface.bg.overlay': `light-dark(color-mix(in oklch, oklch(${COLORS__PEARL[900]}) 50%, transparent), color-mix(in oklch, oklch(${COLORS__PEARL[950]}) 80%, transparent))`, // Dark overlay
    'surface.bg.disabled': `light-dark(oklch(${COLORS__PEARL[100]}), oklch(${COLORS__PEARL[900]}))`,
    'surface.bg.inverse': `light-dark(oklch(${COLORS__PEARL[900]}), oklch(${COLORS__PEARL[50]}))`, // Dark vs light surface

    // ICON COLORS - Interactive icons use GOLD
    'icon.primary': `light-dark(oklch(${COLORS__PEARL[700]}), oklch(${COLORS__PEARL[200]}))`, // Matches text.secondary
    'icon.secondary': `light-dark(oklch(${COLORS__PEARL[600]}), oklch(${COLORS__PEARL[300]}))`, // Matches text.tertiary
    'icon.tertiary': `light-dark(oklch(${COLORS__PEARL[500]}), oklch(${COLORS__PEARL[400]}))`, // Subtle icons

    'icon.interactive': `light-dark(oklch(${COLORS__GOLD[600]}), oklch(${COLORS__GOLD[400]}))`, // Gold for interactive icons
    'icon.interactive.hover': `light-dark(color-mix(in oklch, oklch(${COLORS__GOLD[600]}) 90%, transparent), color-mix(in oklch, oklch(${COLORS__GOLD[400]}) 90%, transparent))`,
    'icon.interactive.active': `light-dark(color-mix(in oklch, oklch(${COLORS__GOLD[600]}) 80%, transparent), color-mix(in oklch, oklch(${COLORS__GOLD[400]}) 80%, transparent))`,

    'icon.success': `light-dark(oklch(${COLORS__GREEN[600]}), oklch(${COLORS__GREEN[400]}))`,
    'icon.warning': `light-dark(oklch(${COLORS__YELLOW[600]}), oklch(${COLORS__YELLOW[400]}))`,
    'icon.error': `light-dark(oklch(${COLORS__RED[600]}), oklch(${COLORS__RED[400]}))`,
    'icon.info': `light-dark(oklch(${COLORS__BLUE[600]}), oklch(${COLORS__BLUE[400]}))`,

    'icon.inverse': `light-dark(oklch(${COLORS__PEARL[200]}), oklch(${COLORS__PEARL[700]}))`, // Light vs dark icons for inverse backgrounds
    'icon.disabled': `light-dark(oklch(${COLORS__PEARL[400]}), oklch(${COLORS__PEARL[600]}))`,

    // INPUT COLORS
    'input.bg.default': `light-dark(oklch(${COLORS__PEARL[50]}), oklch(${COLORS__PEARL[900]}))`, // Matches primary vs secondary background
    'input.bg.hover': `light-dark(oklch(${COLORS__PEARL[100]}), oklch(${COLORS__PEARL[800]}))`,
    'input.bg.focus': `light-dark(oklch(${COLORS__PEARL[50]}), oklch(${COLORS__PEARL[900]}))`, // Keep same as default
    'input.bg.disabled': `light-dark(oklch(${COLORS__PEARL[100]}), oklch(${COLORS__PEARL[900]}))`,
    'input.bg.error': `light-dark(color-mix(in oklch, oklch(${COLORS__RED[50]}) 30%, transparent), color-mix(in oklch, oklch(${COLORS__RED[900]}) 20%, transparent))`,

    'input.border.default': `light-dark(oklch(${COLORS__PEARL[300]}), oklch(${COLORS__PEARL[700]}))`,
    'input.border.hover': `light-dark(oklch(${COLORS__PEARL[400]}), oklch(${COLORS__PEARL[600]}))`,
    'input.border.focus': `light-dark(oklch(${COLORS__GOLD[500]}), oklch(${COLORS__GOLD[400]}))`, // Gold focus
    'input.border.error': `light-dark(oklch(${COLORS__RED[500]}), oklch(${COLORS__RED[400]}))`,
    'input.border.disabled': `light-dark(oklch(${COLORS__PEARL[200]}), oklch(${COLORS__PEARL[800]}))`,

    'input.text.default': `light-dark(oklch(${COLORS__PEARL[900]}), oklch(${COLORS__PEARL[50]}))`, // High contrast
    'input.text.placeholder': `light-dark(oklch(${COLORS__PEARL[500]}), oklch(${COLORS__PEARL[500]}))`, // Same muted for both
    'input.text.disabled': `light-dark(oklch(${COLORS__PEARL[400]}), oklch(${COLORS__PEARL[600]}))`,

    // SHADOW COLORS - Context-aware using PEARL
    'shadow.default': `light-dark(color-mix(in oklch, oklch(${COLORS__PEARL[900]}) 15%, transparent), color-mix(in oklch, oklch(${COLORS__PEARL[950]}) 40%, transparent))`,
    'shadow.subtle': `light-dark(color-mix(in oklch, oklch(${COLORS__PEARL[900]}) 8%, transparent), color-mix(in oklch, oklch(${COLORS__PEARL[950]}) 20%, transparent))`,
    'shadow.strong': `light-dark(color-mix(in oklch, oklch(${COLORS__PEARL[900]}) 25%, transparent), color-mix(in oklch, oklch(${COLORS__PEARL[950]}) 60%, transparent))`,
    'shadow.interactive': `light-dark(oklch(${COLORS__GOLD[600]} / 0.4), oklch(${COLORS__GOLD[200]} / 0.4))`, // Same red for both
    'shadow.destructive': `light-dark(oklch(${COLORS__RED[600]} / 0.4), oklch(${COLORS__RED[400]} / 0.4))`, // Same red for both
    'shadow.focus': `light-dark(color-mix(in oklch, oklch(${COLORS__GOLD[500]}) 25%, transparent), color-mix(in oklch, oklch(${COLORS__GOLD[700]}) 40%, transparent))`,
    'shadow.success': `light-dark(color-mix(in oklch, oklch(${COLORS__GREEN[500]}) 20%, transparent), color-mix(in oklch, oklch(${COLORS__GREEN[800]}) 30%, transparent))`,
    'shadow.warning': `light-dark(color-mix(in oklch, oklch(${COLORS__YELLOW[500]}) 20%, transparent), color-mix(in oklch, oklch(${COLORS__YELLOW[800]}) 30%, transparent))`,
    'shadow.error': `light-dark(color-mix(in oklch, oklch(${COLORS__RED[500]}) 20%, transparent), color-mix(in oklch, oklch(${COLORS__RED[800]}) 30%, transparent))`,
  },
  spacing: {
    0: SPACING[0],
    px: SPACING.px,
    0.5: SPACING[0.5],
    1: SPACING[1],
    1.5: SPACING[1.5],
    2: SPACING[2],
    2.5: SPACING[2.5],
    3: SPACING[3],
    3.5: SPACING[3.5],
    4: SPACING[4],
    5: SPACING[5],
    6: SPACING[6],
    7: SPACING[7],
    8: SPACING[8],
    9: SPACING[9],
    10: SPACING[10],
    11: SPACING[11],
    12: SPACING[12],
    14: SPACING[14],
    16: SPACING[16],
    20: SPACING[20],
    24: SPACING[24],
    28: SPACING[28],
    32: SPACING[32],
    36: SPACING[36],
    40: SPACING[40],
    44: SPACING[44],
    48: SPACING[48],
    52: SPACING[52],
    56: SPACING[56],
    60: SPACING[60],
    64: SPACING[64],
    72: SPACING[72],
    80: SPACING[80],
    96: SPACING[96],
  },
  borderRadius: {
    none: BORDER_RADIUS.none,
    sm: BORDER_RADIUS.sm,
    base: BORDER_RADIUS.base,
    md: BORDER_RADIUS.md,
    lg: BORDER_RADIUS.lg,
    xl: BORDER_RADIUS.xl,
    '2xl': BORDER_RADIUS['2xl'],
    '3xl': BORDER_RADIUS['3xl'],
    full: BORDER_RADIUS.full,
  },
  borderWidth: {
    0: BORDER_WIDTH[0],
    1: BORDER_WIDTH[1],
    2: BORDER_WIDTH[2],
    4: BORDER_WIDTH[4],
    8: BORDER_WIDTH[8],
  },
  boxShadow: {
    none: BOX_SHADOW.none,
    sm: BOX_SHADOW.sm,
    base: BOX_SHADOW.base,
    md: BOX_SHADOW.md,
    lg: BOX_SHADOW.lg,
    xl: BOX_SHADOW.xl,
    '2xl': BOX_SHADOW['2xl'],
    inner: BOX_SHADOW.inner,
  },
  typography: {
    fontFamily: {
      base: 'Inter',
    },
    display: {
      xl: {
        light: {
          fontWeight: '300',
          fontSize: '4.5rem', // 72px
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
        },
        medium: {
          fontWeight: '400',
          fontSize: '4.5rem', // 72px
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
        },
        bold: {
          fontWeight: '700',
          fontSize: '4.5rem', // 72px
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
        },
      },
      lg: {
        light: {
          fontWeight: '300',
          fontSize: '3.75rem', // 60px
          lineHeight: '1.15',
          letterSpacing: '-0.015em',
        },
        medium: {
          fontWeight: '400',
          fontSize: '3.75rem', // 60px
          lineHeight: '1.15',
          letterSpacing: '-0.015em',
        },
        bold: {
          fontWeight: '700',
          fontSize: '3.75rem', // 60px
          lineHeight: '1.15',
          letterSpacing: '-0.015em',
        },
      },
      md: {
        light: {
          fontWeight: '300',
          fontSize: '3rem', // 48px
          lineHeight: '1.2',
          letterSpacing: '-0.01em',
        },
        medium: {
          fontWeight: '400',
          fontSize: '3rem', // 48px
          lineHeight: '1.2',
          letterSpacing: '-0.01em',
        },
        bold: {
          fontWeight: '700',
          fontSize: '3rem', // 48px
          lineHeight: '1.2',
          letterSpacing: '-0.01em',
        },
      },
      sm: {
        light: {
          fontWeight: '300',
          fontSize: '2.25rem', // 36px
          lineHeight: '1.25',
          letterSpacing: '-0.005em',
        },
        medium: {
          fontWeight: '400',
          fontSize: '2.25rem', // 36px
          lineHeight: '1.25',
          letterSpacing: '-0.005em',
        },
        bold: {
          fontWeight: '700',
          fontSize: '2.25rem', // 36px
          lineHeight: '1.25',
          letterSpacing: '-0.005em',
        },
      },
    },
    heading: {
      xl: {
        light: {
          fontWeight: '300',
          fontSize: '2rem', // 32px
          lineHeight: '1.3',
          letterSpacing: '0em',
        },
        medium: {
          fontWeight: '500',
          fontSize: '2rem', // 32px
          lineHeight: '1.3',
          letterSpacing: '0em',
        },
        bold: {
          fontWeight: '700',
          fontSize: '2rem', // 32px
          lineHeight: '1.3',
          letterSpacing: '0em',
        },
      },
      lg: {
        light: {
          fontWeight: '300',
          fontSize: '1.75rem', // 28px
          lineHeight: '1.35',
          letterSpacing: '0em',
        },
        medium: {
          fontWeight: '500',
          fontSize: '1.75rem', // 28px
          lineHeight: '1.35',
          letterSpacing: '0em',
        },
        bold: {
          fontWeight: '700',
          fontSize: '1.75rem', // 28px
          lineHeight: '1.35',
          letterSpacing: '0em',
        },
      },
      md: {
        light: {
          fontWeight: '300',
          fontSize: '1.5rem', // 24px
          lineHeight: '1.4',
          letterSpacing: '0em',
        },
        medium: {
          fontWeight: '500',
          fontSize: '1.5rem', // 24px
          lineHeight: '1.4',
          letterSpacing: '0em',
        },
        bold: {
          fontWeight: '700',
          fontSize: '1.5rem', // 24px
          lineHeight: '1.4',
          letterSpacing: '0em',
        },
      },
      sm: {
        light: {
          fontWeight: '300',
          fontSize: '1.25rem', // 20px
          lineHeight: '1.45',
          letterSpacing: '0em',
        },
        medium: {
          fontWeight: '500',
          fontSize: '1.25rem', // 20px
          lineHeight: '1.45',
          letterSpacing: '0em',
        },
        bold: {
          fontWeight: '700',
          fontSize: '1.25rem', // 20px
          lineHeight: '1.45',
          letterSpacing: '0em',
        },
      },
    },
    subheading: {
      xl: {
        light: {
          fontWeight: '300',
          fontSize: '1.125rem', // 18px
          lineHeight: '1.5',
          letterSpacing: '0.005em',
        },
        medium: {
          fontWeight: '500',
          fontSize: '1.125rem', // 18px
          lineHeight: '1.5',
          letterSpacing: '0.005em',
        },
        bold: {
          fontWeight: '700',
          fontSize: '1.125rem', // 18px
          lineHeight: '1.5',
          letterSpacing: '0.005em',
        },
      },
      lg: {
        light: {
          fontWeight: '300',
          fontSize: '1rem', // 16px
          lineHeight: '1.5',
          letterSpacing: '0.005em',
        },
        medium: {
          fontWeight: '500',
          fontSize: '1rem', // 16px
          lineHeight: '1.5',
          letterSpacing: '0.005em',
        },
        bold: {
          fontWeight: '700',
          fontSize: '1rem', // 16px
          lineHeight: '1.5',
          letterSpacing: '0.005em',
        },
      },
      md: {
        light: {
          fontWeight: '300',
          fontSize: '0.875rem', // 14px
          lineHeight: '1.55',
          letterSpacing: '0.01em',
        },
        medium: {
          fontWeight: '500',
          fontSize: '0.875rem', // 14px
          lineHeight: '1.55',
          letterSpacing: '0.01em',
        },
        bold: {
          fontWeight: '700',
          fontSize: '0.875rem', // 14px
          lineHeight: '1.55',
          letterSpacing: '0.01em',
        },
      },
      sm: {
        light: {
          fontWeight: '300',
          fontSize: '0.75rem', // 12px
          lineHeight: '1.6',
          letterSpacing: '0.015em',
        },
        medium: {
          fontWeight: '500',
          fontSize: '0.75rem', // 12px
          lineHeight: '1.6',
          letterSpacing: '0.015em',
        },
        bold: {
          fontWeight: '700',
          fontSize: '0.75rem', // 12px
          lineHeight: '1.6',
          letterSpacing: '0.015em',
        },
      },
    },
    body: {
      xl: {
        light: {
          fontWeight: '300',
          fontSize: '1.125rem', // 18px
          lineHeight: '1.6',
          letterSpacing: '0.005em',
        },
        medium: {
          fontWeight: '400',
          fontSize: '1.125rem', // 18px
          lineHeight: '1.6',
          letterSpacing: '0.005em',
        },
        bold: {
          fontWeight: '600',
          fontSize: '1.125rem', // 18px
          lineHeight: '1.6',
          letterSpacing: '0.005em',
        },
      },
      lg: {
        light: {
          fontWeight: '300',
          fontSize: '1rem', // 16px
          lineHeight: '1.6',
          letterSpacing: '0.005em',
        },
        medium: {
          fontWeight: '400',
          fontSize: '1rem', // 16px
          lineHeight: '1.6',
          letterSpacing: '0.005em',
        },
        bold: {
          fontWeight: '600',
          fontSize: '1rem', // 16px
          lineHeight: '1.6',
          letterSpacing: '0.005em',
        },
      },
      md: {
        light: {
          fontWeight: '300',
          fontSize: '0.875rem', // 14px
          lineHeight: '1.65',
          letterSpacing: '0.01em',
        },
        medium: {
          fontWeight: '400',
          fontSize: '0.875rem', // 14px
          lineHeight: '1.65',
          letterSpacing: '0.01em',
        },
        bold: {
          fontWeight: '600',
          fontSize: '0.875rem', // 14px
          lineHeight: '1.65',
          letterSpacing: '0.01em',
        },
      },
      sm: {
        light: {
          fontWeight: '300',
          fontSize: '0.75rem', // 12px
          lineHeight: '1.65',
          letterSpacing: '0.015em',
        },
        medium: {
          fontWeight: '400',
          fontSize: '0.75rem', // 12px
          lineHeight: '1.65',
          letterSpacing: '0.015em',
        },
        bold: {
          fontWeight: '600',
          fontSize: '0.75rem', // 12px
          lineHeight: '1.65',
          letterSpacing: '0.015em',
        },
      },
    },
    caption: {
      xl: {
        light: {
          fontWeight: '300',
          fontSize: '0.875rem', // 14px
          lineHeight: '1.5',
          letterSpacing: '0.015em',
        },
        medium: {
          fontWeight: '400',
          fontSize: '0.875rem', // 14px
          lineHeight: '1.5',
          letterSpacing: '0.015em',
        },
        bold: {
          fontWeight: '600',
          fontSize: '0.875rem', // 14px
          lineHeight: '1.5',
          letterSpacing: '0.015em',
        },
      },
      lg: {
        light: {
          fontWeight: '300',
          fontSize: '0.75rem', // 12px
          lineHeight: '1.5',
          letterSpacing: '0.02em',
        },
        medium: {
          fontWeight: '400',
          fontSize: '0.75rem', // 12px
          lineHeight: '1.5',
          letterSpacing: '0.02em',
        },
        bold: {
          fontWeight: '600',
          fontSize: '0.75rem', // 12px
          lineHeight: '1.5',
          letterSpacing: '0.02em',
        },
      },
      md: {
        light: {
          fontWeight: '300',
          fontSize: '0.6875rem', // 11px
          lineHeight: '1.45',
          letterSpacing: '0.025em',
        },
        medium: {
          fontWeight: '400',
          fontSize: '0.6875rem', // 11px
          lineHeight: '1.45',
          letterSpacing: '0.025em',
        },
        bold: {
          fontWeight: '600',
          fontSize: '0.6875rem', // 11px
          lineHeight: '1.45',
          letterSpacing: '0.025em',
        },
      },
      sm: {
        light: {
          fontWeight: '300',
          fontSize: '0.625rem', // 10px
          lineHeight: '1.4',
          letterSpacing: '0.03em',
        },
        medium: {
          fontWeight: '400',
          fontSize: '0.625rem', // 10px
          lineHeight: '1.4',
          letterSpacing: '0.03em',
        },
        bold: {
          fontWeight: '600',
          fontSize: '0.625rem', // 10px
          lineHeight: '1.4',
          letterSpacing: '0.03em',
        },
      },
    },
    label: {
      xl: {
        light: {
          fontWeight: '400',
          fontSize: '0.875rem', // 14px
          lineHeight: '1.4',
          letterSpacing: '0.02em',
        },
        medium: {
          fontWeight: '500',
          fontSize: '0.875rem', // 14px
          lineHeight: '1.4',
          letterSpacing: '0.02em',
        },
        bold: {
          fontWeight: '700',
          fontSize: '0.875rem', // 14px
          lineHeight: '1.4',
          letterSpacing: '0.02em',
        },
      },
      lg: {
        light: {
          fontWeight: '400',
          fontSize: '0.75rem', // 12px
          lineHeight: '1.4',
          letterSpacing: '0.025em',
        },
        medium: {
          fontWeight: '500',
          fontSize: '0.75rem', // 12px
          lineHeight: '1.4',
          letterSpacing: '0.025em',
        },
        bold: {
          fontWeight: '700',
          fontSize: '0.75rem', // 12px
          lineHeight: '1.4',
          letterSpacing: '0.025em',
        },
      },
      md: {
        light: {
          fontWeight: '400',
          fontSize: '0.6875rem', // 11px
          lineHeight: '1.35',
          letterSpacing: '0.03em',
        },
        medium: {
          fontWeight: '500',
          fontSize: '0.6875rem', // 11px
          lineHeight: '1.35',
          letterSpacing: '0.03em',
        },
        bold: {
          fontWeight: '700',
          fontSize: '0.6875rem', // 11px
          lineHeight: '1.35',
          letterSpacing: '0.03em',
        },
      },
      sm: {
        light: {
          fontWeight: '400',
          fontSize: '0.625rem', // 10px
          lineHeight: '1.3',
          letterSpacing: '0.035em',
        },
        medium: {
          fontWeight: '500',
          fontSize: '0.625rem', // 10px
          lineHeight: '1.3',
          letterSpacing: '0.035em',
        },
        bold: {
          fontWeight: '700',
          fontSize: '0.625rem', // 10px
          lineHeight: '1.3',
          letterSpacing: '0.035em',
        },
      },
    },
  },
});

export const regalTheme = style([regalThemeVars, { colorScheme: 'light dark' }]);
