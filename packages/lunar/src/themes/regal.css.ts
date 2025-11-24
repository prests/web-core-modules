import { createTheme, style } from '@vanilla-extract/css';

import { themeContract } from './tokens/tokens.css.js';
import {
  COLORS__PEARL,
  COLORS__GOLD,
  COLORS__GREEN,
  COLORS__YELLOW,
  COLORS__RED,
  COLORS__BLUE,
  COLORS__PURE,
} from './tokens/primitives/colors.js';
import { SPACING } from './tokens/primitives/spacing.js';
import { BORDER_RADIUS, BORDER_WIDTH } from './tokens/primitives/borders.js';
import { BOX_SHADOW } from './tokens/primitives/shadows.js';
import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT__TIGHT,
  LINE_HEIGHT__RELAXED,
  LETTER_SPACING,
} from './tokens/primitives/typography.js';

const regalThemeVars = createTheme(themeContract, {
  colors: {
    action: {
      bg: {
        primary: {
          default: `light-dark(oklch(${COLORS__GOLD[300]}), oklch(${COLORS__GOLD[300]}))`, // Gold background (same for both)
          hover: `light-dark(oklch(${COLORS__GOLD[300]} / 0.9), oklch(${COLORS__GOLD[300]} / 0.9))`,
          active: `light-dark(oklch(${COLORS__GOLD[300]} / 0.8), oklch(${COLORS__GOLD[300]} / 0.8))`,
          disabled: `light-dark(oklch(${COLORS__GOLD[300]} / 0.4), oklch(${COLORS__GOLD[300]} / 0.4))`,
        },
        secondary: {
          default: `light-dark(oklch(${COLORS__PEARL[400]}), oklch(${COLORS__PEARL[600]}))`, // Gold background (same for both)
          hover: `light-dark(oklch(${COLORS__PEARL[400]} / 0.9), oklch(${COLORS__PEARL[600]} / 0.9))`, // Gold background (same for both)
          active: `light-dark(oklch(${COLORS__PEARL[400]} / 0.8), oklch(${COLORS__PEARL[600]} / 0.8))`, // Gold background (same for both)
          disabled: `light-dark(oklch(${COLORS__PEARL[400]} / 0.4), oklch(${COLORS__PEARL[600]} / 0.4))`,
        },
        outline: {
          default: `light-dark(oklch(${COLORS__PEARL[400]} / 0.0125), oklch(${COLORS__PEARL[700]} / 0.0125))`,
          hover: `light-dark(oklch(${COLORS__PEARL[400]} / 0.3), oklch(${COLORS__PEARL[700]} / 0.3))`,
          active: `light-dark(oklch(${COLORS__PEARL[400]} / 0.05), oklch(${COLORS__PEARL[700]} / 0.05))`,
          disabled: `light-dark(oklch(${COLORS__PEARL[400]} / 0.025), oklch(${COLORS__PEARL[700]} / 0.025))`,
        },
      },
      color: {
        primary: `light-dark(oklch(${COLORS__PEARL[950]}), oklch(${COLORS__PEARL[950]}))`,
        outline: {
          disabled: `light-dark(oklch(${COLORS__PEARL[400]} / 0.4), oklch(${COLORS__PEARL[700]} / 0.4))`,
        },
      },
      destructive: {
        default: `light-dark(oklch(${COLORS__RED[600]}), oklch(${COLORS__RED[400]}))`, // Same red for both
        hover: `light-dark(oklch(${COLORS__RED[600]} / 0.9), oklch(${COLORS__RED[300]} / 0.9))`, // Same red for both
        active: `light-dark(oklch(${COLORS__RED[600]} / 0.8), oklch(${COLORS__RED[300]} / 0.8))`, // Same red for both
        disabled: `light-dark(oklch(${COLORS__RED[600]} / 0.4), oklch(${COLORS__RED[300]} / 0.4))`, // Same red for both
      },
      ghost: {
        default: `light-dark(${COLORS__PURE.transparent}, ${COLORS__PURE.transparent})`, // Transparent background for both
        hover: `light-dark(oklch(${COLORS__GOLD[300]} / 0.5), oklch(${COLORS__GOLD[300]} / 0.5))`, // Transparent background for both
        active: `light-dark(oklch(${COLORS__GOLD[300]} / 0.6), oklch(${COLORS__GOLD[300]} / 0.6))`, // Transparent background for both
        disabled: `light-dark(transparent, transparent)`, // Transparent for both
      },
    },
    border: {
      default: `light-dark(oklch(${COLORS__PEARL[300]}), oklch(${COLORS__PEARL[700]}))`, // Light vs dark neutral border
      subtle: `light-dark(oklch(${COLORS__PEARL[200]}), oklch(${COLORS__PEARL[800]}))`, // Light vs dark subtle border
      strong: `light-dark(oklch(${COLORS__PEARL[400]}), oklch(${COLORS__PEARL[600]}))`, // Light vs dark strong border
      interactive: {
        default: `light-dark(oklch(${COLORS__PEARL[900]} / 0.9), oklch(${COLORS__PEARL[400]}))`, // Gold 500 vs lighter gold for dark theme
        hover: `light-dark(oklch(${COLORS__PEARL[900]}), oklch(${COLORS__PEARL[400]} / 0.9))`, // Gold 500 vs lighter gold for dark theme
        active: `light-dark(oklch(${COLORS__PEARL[900]} / 0.8), oklch(${COLORS__PEARL[400]} / 0.8))`, // Gold 500 vs lighter gold for dark theme
      },
      focus: `light-dark(oklch(${COLORS__PEARL[900]}), oklch(${COLORS__PEARL[400]}))`, // Gold focus ring
      success: `light-dark(oklch(${COLORS__GREEN[500]}), oklch(${COLORS__GREEN[400]}))`, // Lighter for dark theme
      warning: `light-dark(oklch(${COLORS__YELLOW[500]}), oklch(${COLORS__YELLOW[400]}))`,
      error: `light-dark(oklch(${COLORS__RED[500]}), oklch(${COLORS__RED[400]}))`,
      info: `light-dark(oklch(${COLORS__BLUE[500]}), oklch(${COLORS__BLUE[400]}))`,
      action: {
        primary: `light-dark(oklch(${COLORS__GOLD[500]}), oklch(${COLORS__GOLD[400]}))`, // Matches primary action
        secondary: `light-dark(oklch(${COLORS__GOLD[500]}), oklch(${COLORS__GOLD[400]}))`, // Gold border for secondary
        destructive: `light-dark(oklch(${COLORS__RED[500]}), oklch(${COLORS__RED[400]}))`,
        disabled: `light-dark(oklch(${COLORS__GOLD[300]} / 0.4), oklch(${COLORS__GOLD[300]} / 0.4))`,
      },
    },
    text: {
      primary: `light-dark(oklch(${COLORS__PEARL[900]}), oklch(${COLORS__PEARL[50]}))`, // High contrast dark vs light text
      secondary: `light-dark(oklch(${COLORS__PEARL[700]}), oklch(${COLORS__PEARL[200]}))`, // Medium contrast text
      tertiary: `light-dark(oklch(${COLORS__PEARL[600]}), oklch(${COLORS__PEARL[300]}))`, // Low contrast text
      interactive: {
        default: `light-dark(oklch(${COLORS__PEARL[900]} / 0.9), oklch(${COLORS__PEARL[300]}))`, // Gold for links - lighter for dark theme
        hover: `light-dark(oklch(${COLORS__PEARL[900]}), oklch(${COLORS__PEARL[300]} / 0.9))`, // Gold for links - lighter for dark theme
        active: `light-dark(oklch(${COLORS__PEARL[900]} / 0.8), oklch(${COLORS__PEARL[300]} / 0.9))`, // Gold for links - lighter for dark theme
      },
      success: `light-dark(oklch(${COLORS__GREEN[700]}), oklch(${COLORS__GREEN[300]}))`, // Darker vs lighter for contrast
      warning: `light-dark(oklch(${COLORS__YELLOW[700]}), oklch(${COLORS__YELLOW[300]}))`,
      error: `light-dark(oklch(${COLORS__RED[700]}), oklch(${COLORS__RED[300]}))`,
      info: `light-dark(oklch(${COLORS__BLUE[700]}), oklch(${COLORS__BLUE[300]}))`,
      inverse: `light-dark(oklch(${COLORS__PEARL[50]}), oklch(${COLORS__PEARL[950]}))`, // Light vs dark for inverse backgrounds
      disabled: `light-dark(oklch(${COLORS__PEARL[500]}), oklch(${COLORS__PEARL[500]}))`, // Same muted text for both
    },
    surface: {
      bg: {
        primary: `light-dark(oklch(${COLORS__PEARL[50]}), oklch(${COLORS__PEARL[900]}))`, // Main background - lightest vs darkest
        secondary: `light-dark(oklch(${COLORS__PEARL[50]}), oklch(${COLORS__PEARL[800]}))`, // Cards, panels
        tertiary: `light-dark(oklch(${COLORS__PEARL[200]}), oklch(${COLORS__PEARL[700]}))`, // Elevated surfaces
        interactive: {
          default: `light-dark(transparent, transparent)`, // Interactive surface base
          hover: `light-dark(color-mix(in oklch, oklch(${COLORS__GOLD[50]}) 30%, transparent), color-mix(in oklch, oklch(${COLORS__GOLD[800]}) 20%, transparent))`,
          active: `light-dark(color-mix(in oklch, oklch(${COLORS__GOLD[100]}) 40%, transparent), color-mix(in oklch, oklch(${COLORS__GOLD[700]}) 30%, transparent))`,
        },
        success: `light-dark(color-mix(in oklch, oklch(${COLORS__GREEN[50]}) 50%, transparent), color-mix(in oklch, oklch(${COLORS__GREEN[900]}) 30%, transparent))`,
        warning: `light-dark(color-mix(in oklch, oklch(${COLORS__YELLOW[50]}) 50%, transparent), color-mix(in oklch, oklch(${COLORS__YELLOW[900]}) 30%, transparent))`,
        error: `light-dark(color-mix(in oklch, oklch(${COLORS__RED[50]}) 50%, transparent), color-mix(in oklch, oklch(${COLORS__RED[900]}) 30%, transparent))`,
        info: `light-dark(color-mix(in oklch, oklch(${COLORS__BLUE[50]}) 50%, transparent), color-mix(in oklch, oklch(${COLORS__BLUE[900]}) 30%, transparent))`,
        overlay: `light-dark(color-mix(in oklch, oklch(${COLORS__PEARL[900]}) 50%, transparent), color-mix(in oklch, oklch(${COLORS__PEARL[950]}) 80%, transparent))`, // Dark overlay
        disabled: `light-dark(oklch(${COLORS__PEARL[100]}), oklch(${COLORS__PEARL[900]}))`,
        inverse: `light-dark(oklch(${COLORS__PEARL[900]}), oklch(${COLORS__PEARL[50]}))`, // Dark vs light surface
      },
    },
    icon: {
      primary: `light-dark(oklch(${COLORS__PEARL[700]}), oklch(${COLORS__PEARL[200]}))`, // Matches text.secondary
      secondary: `light-dark(oklch(${COLORS__PEARL[600]}), oklch(${COLORS__PEARL[300]}))`, // Matches text.tertiary
      tertiary: `light-dark(oklch(${COLORS__PEARL[500]}), oklch(${COLORS__PEARL[400]}))`, // Subtle icons
      interactive: {
        default: `light-dark(oklch(${COLORS__GOLD[600]}), oklch(${COLORS__GOLD[400]}))`, // Gold for interactive icons
        hover: `light-dark(color-mix(in oklch, oklch(${COLORS__GOLD[600]}) 90%, transparent), color-mix(in oklch, oklch(${COLORS__GOLD[400]}) 90%, transparent))`,
        active: `light-dark(color-mix(in oklch, oklch(${COLORS__GOLD[600]}) 80%, transparent), color-mix(in oklch, oklch(${COLORS__GOLD[400]}) 80%, transparent))`,
      },
      success: `light-dark(oklch(${COLORS__GREEN[600]}), oklch(${COLORS__GREEN[400]}))`,
      warning: `light-dark(oklch(${COLORS__YELLOW[600]}), oklch(${COLORS__YELLOW[400]}))`,
      error: `light-dark(oklch(${COLORS__RED[600]}), oklch(${COLORS__RED[400]}))`,
      info: `light-dark(oklch(${COLORS__BLUE[600]}), oklch(${COLORS__BLUE[400]}))`,
      inverse: `light-dark(oklch(${COLORS__PEARL[200]}), oklch(${COLORS__PEARL[700]}))`, // Light vs dark icons for inverse backgrounds
      disabled: `light-dark(oklch(${COLORS__PEARL[400]}), oklch(${COLORS__PEARL[600]}))`,
    },
    input: {
      bg: {
        default: `light-dark(oklch(${COLORS__PEARL[50]}), oklch(${COLORS__PEARL[900]}))`, // Matches primary vs secondary background
        hover: `light-dark(oklch(${COLORS__PEARL[100]}), oklch(${COLORS__PEARL[800]}))`,
        focus: `light-dark(oklch(${COLORS__PEARL[50]}), oklch(${COLORS__PEARL[900]}))`, // Keep same as default
        disabled: `light-dark(oklch(${COLORS__PEARL[100]}), oklch(${COLORS__PEARL[900]}))`,
        error: `light-dark(color-mix(in oklch, oklch(${COLORS__RED[50]}) 30%, transparent), color-mix(in oklch, oklch(${COLORS__RED[900]}) 20%, transparent))`,
      },
      border: {
        default: `light-dark(oklch(${COLORS__PEARL[300]}), oklch(${COLORS__PEARL[700]}))`,
        hover: `light-dark(oklch(${COLORS__PEARL[400]}), oklch(${COLORS__PEARL[600]}))`,
        focus: `light-dark(oklch(${COLORS__GOLD[500]}), oklch(${COLORS__GOLD[400]}))`, // Gold focus
        error: `light-dark(oklch(${COLORS__RED[500]}), oklch(${COLORS__RED[400]}))`,
        disabled: `light-dark(oklch(${COLORS__PEARL[200]}), oklch(${COLORS__PEARL[800]}))`,
      },
      text: {
        default: `light-dark(oklch(${COLORS__PEARL[900]}), oklch(${COLORS__PEARL[50]}))`, // High contrast
        placeholder: `light-dark(oklch(${COLORS__PEARL[500]}), oklch(${COLORS__PEARL[500]}))`, // Same muted for both
        disabled: `light-dark(oklch(${COLORS__PEARL[400]}), oklch(${COLORS__PEARL[600]}))`,
      },
    },
    shadow: {
      default: `light-dark(color-mix(in oklch, oklch(${COLORS__PEARL[900]}) 15%, transparent), color-mix(in oklch, oklch(${COLORS__PEARL[950]}) 40%, transparent))`,
      subtle: `light-dark(color-mix(in oklch, oklch(${COLORS__PEARL[900]}) 8%, transparent), color-mix(in oklch, oklch(${COLORS__PEARL[950]}) 20%, transparent))`,
      strong: `light-dark(color-mix(in oklch, oklch(${COLORS__PEARL[900]}) 25%, transparent), color-mix(in oklch, oklch(${COLORS__PEARL[950]}) 60%, transparent))`,
      interactive: `light-dark(oklch(${COLORS__GOLD[600]} / 0.4), oklch(${COLORS__GOLD[200]} / 0.4))`, // Same red for both
      destructive: `light-dark(oklch(${COLORS__RED[600]} / 0.4), oklch(${COLORS__RED[400]} / 0.4))`, // Same red for both
      focus: `light-dark(color-mix(in oklch, oklch(${COLORS__GOLD[500]}) 25%, transparent), color-mix(in oklch, oklch(${COLORS__GOLD[700]}) 40%, transparent))`,
      success: `light-dark(color-mix(in oklch, oklch(${COLORS__GREEN[500]}) 20%, transparent), color-mix(in oklch, oklch(${COLORS__GREEN[800]}) 30%, transparent))`,
      warning: `light-dark(color-mix(in oklch, oklch(${COLORS__YELLOW[500]}) 20%, transparent), color-mix(in oklch, oklch(${COLORS__YELLOW[800]}) 30%, transparent))`,
      error: `light-dark(color-mix(in oklch, oklch(${COLORS__RED[500]}) 20%, transparent), color-mix(in oklch, oklch(${COLORS__RED[800]}) 30%, transparent))`,
    },
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
      base: FONT_FAMILY.sans.fallback,
    },
    display: {
      xl: {
        light: {
          fontWeight: FONT_WEIGHT.extralight,
          fontSize: FONT_SIZE['7xl'],
          lineHeight: LINE_HEIGHT__TIGHT['7xl'],
          letterSpacing: LETTER_SPACING.tight,
        },
        medium: {
          fontWeight: FONT_WEIGHT.normal,
          fontSize: FONT_SIZE['7xl'],
          lineHeight: LINE_HEIGHT__TIGHT['7xl'],
          letterSpacing: LETTER_SPACING.tight,
        },
        bold: {
          fontWeight: FONT_WEIGHT.extrabold,
          fontSize: FONT_SIZE['7xl'],
          lineHeight: LINE_HEIGHT__TIGHT['7xl'],
          letterSpacing: LETTER_SPACING.tight,
        },
      },
      lg: {
        light: {
          fontWeight: FONT_WEIGHT.extralight,
          fontSize: FONT_SIZE['6xl'],
          lineHeight: LINE_HEIGHT__TIGHT['6xl'],
          letterSpacing: LETTER_SPACING.tight,
        },
        medium: {
          fontWeight: FONT_WEIGHT.normal,
          fontSize: FONT_SIZE['6xl'],
          lineHeight: LINE_HEIGHT__TIGHT['6xl'],
          letterSpacing: LETTER_SPACING.tight,
        },
        bold: {
          fontWeight: FONT_WEIGHT.extrabold,
          fontSize: FONT_SIZE['6xl'],
          lineHeight: LINE_HEIGHT__TIGHT['6xl'],
          letterSpacing: LETTER_SPACING.tight,
        },
      },
      md: {
        light: {
          fontWeight: FONT_WEIGHT.extralight,
          fontSize: FONT_SIZE['5xl'],
          lineHeight: LINE_HEIGHT__TIGHT['5xl'],
          letterSpacing: LETTER_SPACING.tight,
        },
        medium: {
          fontWeight: FONT_WEIGHT.normal,
          fontSize: FONT_SIZE['5xl'],
          lineHeight: LINE_HEIGHT__TIGHT['5xl'],
          letterSpacing: LETTER_SPACING.tight,
        },
        bold: {
          fontWeight: FONT_WEIGHT.extrabold,
          fontSize: FONT_SIZE['5xl'],
          lineHeight: LINE_HEIGHT__TIGHT['5xl'],
          letterSpacing: LETTER_SPACING.tight,
        },
      },
      sm: {
        light: {
          fontWeight: FONT_WEIGHT.extralight,
          fontSize: FONT_SIZE['4xl'],
          lineHeight: LINE_HEIGHT__TIGHT['4xl'],
          letterSpacing: LETTER_SPACING.tight,
        },
        medium: {
          fontWeight: FONT_WEIGHT.normal,
          fontSize: FONT_SIZE['4xl'],
          lineHeight: LINE_HEIGHT__TIGHT['4xl'],
          letterSpacing: LETTER_SPACING.tight,
        },
        bold: {
          fontWeight: FONT_WEIGHT.extrabold,
          fontSize: FONT_SIZE['4xl'],
          lineHeight: LINE_HEIGHT__TIGHT['4xl'],
          letterSpacing: LETTER_SPACING.tight,
        },
      },
    },
    heading: {
      xl: {
        light: {
          fontWeight: FONT_WEIGHT.light,
          fontSize: FONT_SIZE['3xl'],
          lineHeight: LINE_HEIGHT__TIGHT['3xl'],
          letterSpacing: LETTER_SPACING.normal,
        },
        medium: {
          fontWeight: FONT_WEIGHT.medium,
          fontSize: FONT_SIZE['3xl'],
          lineHeight: LINE_HEIGHT__TIGHT['3xl'],
          letterSpacing: LETTER_SPACING.normal,
        },
        bold: {
          fontWeight: FONT_WEIGHT.bold,
          fontSize: FONT_SIZE['3xl'],
          lineHeight: LINE_HEIGHT__TIGHT['3xl'],
          letterSpacing: LETTER_SPACING.normal,
        },
      },
      lg: {
        light: {
          fontWeight: FONT_WEIGHT.light,
          fontSize: FONT_SIZE['2xl'],
          lineHeight: LINE_HEIGHT__TIGHT['2xl'],
          letterSpacing: LETTER_SPACING.normal,
        },
        medium: {
          fontWeight: FONT_WEIGHT.medium,
          fontSize: FONT_SIZE['2xl'],
          lineHeight: LINE_HEIGHT__TIGHT['2xl'],
          letterSpacing: LETTER_SPACING.normal,
        },
        bold: {
          fontWeight: FONT_WEIGHT.bold,
          fontSize: FONT_SIZE['2xl'],
          lineHeight: LINE_HEIGHT__TIGHT['2xl'],
          letterSpacing: LETTER_SPACING.normal,
        },
      },
      md: {
        light: {
          fontWeight: FONT_WEIGHT.light,
          fontSize: FONT_SIZE.xl,
          lineHeight: LINE_HEIGHT__TIGHT.xl,
          letterSpacing: LETTER_SPACING.normal,
        },
        medium: {
          fontWeight: FONT_WEIGHT.medium,
          fontSize: FONT_SIZE.xl,
          lineHeight: LINE_HEIGHT__TIGHT.xl,
          letterSpacing: LETTER_SPACING.normal,
        },
        bold: {
          fontWeight: FONT_WEIGHT.bold,
          fontSize: FONT_SIZE.xl,
          lineHeight: LINE_HEIGHT__TIGHT.xl,
          letterSpacing: LETTER_SPACING.normal,
        },
      },
      sm: {
        light: {
          fontWeight: FONT_WEIGHT.light,
          fontSize: FONT_SIZE.lg,
          lineHeight: LINE_HEIGHT__TIGHT.lg,
          letterSpacing: LETTER_SPACING.normal,
        },
        medium: {
          fontWeight: FONT_WEIGHT.medium,
          fontSize: FONT_SIZE.lg,
          lineHeight: LINE_HEIGHT__TIGHT.lg,
          letterSpacing: LETTER_SPACING.normal,
        },
        bold: {
          fontWeight: FONT_WEIGHT.bold,
          fontSize: FONT_SIZE.lg,
          lineHeight: LINE_HEIGHT__TIGHT.lg,
          letterSpacing: LETTER_SPACING.normal,
        },
      },
    },
    subheading: {
      xl: {
        light: {
          fontWeight: FONT_WEIGHT.light,
          fontSize: FONT_SIZE.lg,
          lineHeight: LINE_HEIGHT__TIGHT.lg,
          letterSpacing: LETTER_SPACING.wide,
        },
        medium: {
          fontWeight: FONT_WEIGHT.medium,
          fontSize: FONT_SIZE.lg,
          lineHeight: LINE_HEIGHT__TIGHT.lg,
          letterSpacing: LETTER_SPACING.wide,
        },
        bold: {
          fontWeight: FONT_WEIGHT.bold,
          fontSize: FONT_SIZE.lg,
          lineHeight: LINE_HEIGHT__TIGHT.lg,
          letterSpacing: LETTER_SPACING.wide,
        },
      },
      lg: {
        light: {
          fontWeight: FONT_WEIGHT.light,
          fontSize: FONT_SIZE.base,
          lineHeight: LINE_HEIGHT__TIGHT.base,
          letterSpacing: LETTER_SPACING.wide,
        },
        medium: {
          fontWeight: FONT_WEIGHT.medium,
          fontSize: FONT_SIZE.base,
          lineHeight: LINE_HEIGHT__TIGHT.base,
          letterSpacing: LETTER_SPACING.wide,
        },
        bold: {
          fontWeight: FONT_WEIGHT.bold,
          fontSize: FONT_SIZE.base,
          lineHeight: LINE_HEIGHT__TIGHT.base,
          letterSpacing: LETTER_SPACING.wide,
        },
      },
      md: {
        light: {
          fontWeight: FONT_WEIGHT.light,
          fontSize: FONT_SIZE.sm,
          lineHeight: LINE_HEIGHT__RELAXED.sm,
          letterSpacing: LETTER_SPACING.wide,
        },
        medium: {
          fontWeight: FONT_WEIGHT.medium,
          fontSize: FONT_SIZE.sm,
          lineHeight: LINE_HEIGHT__RELAXED.sm,
          letterSpacing: LETTER_SPACING.wide,
        },
        bold: {
          fontWeight: FONT_WEIGHT.bold,
          fontSize: FONT_SIZE.sm,
          lineHeight: LINE_HEIGHT__RELAXED.sm,
          letterSpacing: LETTER_SPACING.wide,
        },
      },
      sm: {
        light: {
          fontWeight: FONT_WEIGHT.light,
          fontSize: FONT_SIZE.xs,
          lineHeight: LINE_HEIGHT__RELAXED.xs,
          letterSpacing: LETTER_SPACING.wider,
        },
        medium: {
          fontWeight: FONT_WEIGHT.medium,
          fontSize: FONT_SIZE.xs,
          lineHeight: LINE_HEIGHT__RELAXED.xs,
          letterSpacing: LETTER_SPACING.wider,
        },
        bold: {
          fontWeight: FONT_WEIGHT.bold,
          fontSize: FONT_SIZE.xs,
          lineHeight: LINE_HEIGHT__RELAXED.xs,
          letterSpacing: LETTER_SPACING.wider,
        },
      },
    },
    body: {
      xl: {
        light: {
          fontWeight: FONT_WEIGHT.light,
          fontSize: FONT_SIZE.lg,
          lineHeight: LINE_HEIGHT__RELAXED.lg,
          letterSpacing: LETTER_SPACING.wide,
        },
        medium: {
          fontWeight: FONT_WEIGHT.normal,
          fontSize: FONT_SIZE.lg,
          lineHeight: LINE_HEIGHT__RELAXED.lg,
          letterSpacing: LETTER_SPACING.wide,
        },
        bold: {
          fontWeight: FONT_WEIGHT.semibold,
          fontSize: FONT_SIZE.lg,
          lineHeight: LINE_HEIGHT__RELAXED.lg,
          letterSpacing: LETTER_SPACING.wide,
        },
      },
      lg: {
        light: {
          fontWeight: FONT_WEIGHT.light,
          fontSize: FONT_SIZE.base,
          lineHeight: LINE_HEIGHT__RELAXED.base,
          letterSpacing: LETTER_SPACING.wide,
        },
        medium: {
          fontWeight: FONT_WEIGHT.normal,
          fontSize: FONT_SIZE.base,
          lineHeight: LINE_HEIGHT__RELAXED.base,
          letterSpacing: LETTER_SPACING.wide,
        },
        bold: {
          fontWeight: FONT_WEIGHT.semibold,
          fontSize: FONT_SIZE.base,
          lineHeight: LINE_HEIGHT__RELAXED.base,
          letterSpacing: LETTER_SPACING.wide,
        },
      },
      md: {
        light: {
          fontWeight: FONT_WEIGHT.light,
          fontSize: FONT_SIZE.sm,
          lineHeight: LINE_HEIGHT__RELAXED.sm,
          letterSpacing: LETTER_SPACING.wider,
        },
        medium: {
          fontWeight: FONT_WEIGHT.normal,
          fontSize: FONT_SIZE.sm,
          lineHeight: LINE_HEIGHT__RELAXED.sm,
          letterSpacing: LETTER_SPACING.wider,
        },
        bold: {
          fontWeight: FONT_WEIGHT.semibold,
          fontSize: FONT_SIZE.sm,
          lineHeight: LINE_HEIGHT__RELAXED.sm,
          letterSpacing: LETTER_SPACING.wider,
        },
      },
      sm: {
        light: {
          fontWeight: FONT_WEIGHT.light,
          fontSize: FONT_SIZE.xs,
          lineHeight: LINE_HEIGHT__RELAXED.xs,
          letterSpacing: LETTER_SPACING.wider,
        },
        medium: {
          fontWeight: FONT_WEIGHT.normal,
          fontSize: FONT_SIZE.xs,
          lineHeight: LINE_HEIGHT__RELAXED.xs,
          letterSpacing: LETTER_SPACING.wider,
        },
        bold: {
          fontWeight: FONT_WEIGHT.semibold,
          fontSize: FONT_SIZE.xs,
          lineHeight: LINE_HEIGHT__RELAXED.xs,
          letterSpacing: LETTER_SPACING.wider,
        },
      },
    },
    caption: {
      xl: {
        light: {
          fontWeight: FONT_WEIGHT.normal,
          fontSize: FONT_SIZE.sm,
          lineHeight: LINE_HEIGHT__RELAXED.sm,
          letterSpacing: LETTER_SPACING.wider,
        },
        medium: {
          fontWeight: FONT_WEIGHT.medium,
          fontSize: FONT_SIZE.sm,
          lineHeight: LINE_HEIGHT__RELAXED.sm,
          letterSpacing: LETTER_SPACING.wider,
        },
        bold: {
          fontWeight: FONT_WEIGHT.semibold,
          fontSize: FONT_SIZE.sm,
          lineHeight: LINE_HEIGHT__RELAXED.sm,
          letterSpacing: LETTER_SPACING.wider,
        },
      },
      lg: {
        light: {
          fontWeight: FONT_WEIGHT.normal,
          fontSize: FONT_SIZE.xs,
          lineHeight: LINE_HEIGHT__RELAXED.xs,
          letterSpacing: LETTER_SPACING.wider,
        },
        medium: {
          fontWeight: FONT_WEIGHT.medium,
          fontSize: FONT_SIZE.xs,
          lineHeight: LINE_HEIGHT__RELAXED.xs,
          letterSpacing: LETTER_SPACING.wider,
        },
        bold: {
          fontWeight: FONT_WEIGHT.semibold,
          fontSize: FONT_SIZE.xs,
          lineHeight: LINE_HEIGHT__RELAXED.xs,
          letterSpacing: LETTER_SPACING.wider,
        },
      },
      md: {
        light: {
          fontWeight: FONT_WEIGHT.normal,
          fontSize: FONT_SIZE['2xs'],
          lineHeight: LINE_HEIGHT__RELAXED['2xs'],
          letterSpacing: LETTER_SPACING.widest,
        },
        medium: {
          fontWeight: FONT_WEIGHT.medium,
          fontSize: FONT_SIZE['2xs'],
          lineHeight: LINE_HEIGHT__RELAXED['2xs'],
          letterSpacing: LETTER_SPACING.widest,
        },
        bold: {
          fontWeight: FONT_WEIGHT.semibold,
          fontSize: FONT_SIZE['2xs'],
          lineHeight: LINE_HEIGHT__RELAXED['2xs'],
          letterSpacing: LETTER_SPACING.widest,
        },
      },
      sm: {
        light: {
          fontWeight: FONT_WEIGHT.normal,
          fontSize: FONT_SIZE['3xs'],
          lineHeight: LINE_HEIGHT__RELAXED['3xs'],
          letterSpacing: LETTER_SPACING.widest,
        },
        medium: {
          fontWeight: FONT_WEIGHT.medium,
          fontSize: FONT_SIZE['3xs'],
          lineHeight: LINE_HEIGHT__RELAXED['3xs'],
          letterSpacing: LETTER_SPACING.widest,
        },
        bold: {
          fontWeight: FONT_WEIGHT.semibold,
          fontSize: FONT_SIZE['3xs'],
          lineHeight: LINE_HEIGHT__RELAXED['3xs'],
          letterSpacing: LETTER_SPACING.widest,
        },
      },
    },
    label: {
      xl: {
        light: {
          fontWeight: FONT_WEIGHT.normal,
          fontSize: FONT_SIZE.sm,
          lineHeight: LINE_HEIGHT__RELAXED.sm,
          letterSpacing: LETTER_SPACING.wider,
        },
        medium: {
          fontWeight: FONT_WEIGHT.medium,
          fontSize: FONT_SIZE.sm,
          lineHeight: LINE_HEIGHT__RELAXED.sm,
          letterSpacing: LETTER_SPACING.wider,
        },
        bold: {
          fontWeight: FONT_WEIGHT.semibold,
          fontSize: FONT_SIZE.sm,
          lineHeight: LINE_HEIGHT__RELAXED.sm,
          letterSpacing: LETTER_SPACING.wider,
        },
      },
      lg: {
        light: {
          fontWeight: FONT_WEIGHT.normal,
          fontSize: FONT_SIZE.xs,
          lineHeight: LINE_HEIGHT__RELAXED.xs,
          letterSpacing: LETTER_SPACING.wider,
        },
        medium: {
          fontWeight: FONT_WEIGHT.medium,
          fontSize: FONT_SIZE.xs,
          lineHeight: LINE_HEIGHT__RELAXED.xs,
          letterSpacing: LETTER_SPACING.wider,
        },
        bold: {
          fontWeight: FONT_WEIGHT.semibold,
          fontSize: FONT_SIZE.xs,
          lineHeight: LINE_HEIGHT__RELAXED.xs,
          letterSpacing: LETTER_SPACING.wider,
        },
      },
      md: {
        light: {
          fontWeight: FONT_WEIGHT.normal,
          fontSize: FONT_SIZE['2xs'],
          lineHeight: LINE_HEIGHT__RELAXED['2xs'],
          letterSpacing: LETTER_SPACING.widest,
        },
        medium: {
          fontWeight: FONT_WEIGHT.medium,
          fontSize: FONT_SIZE['2xs'],
          lineHeight: LINE_HEIGHT__RELAXED['2xs'],
          letterSpacing: LETTER_SPACING.widest,
        },
        bold: {
          fontWeight: FONT_WEIGHT.semibold,
          fontSize: FONT_SIZE['2xs'],
          lineHeight: LINE_HEIGHT__RELAXED['2xs'],
          letterSpacing: LETTER_SPACING.widest,
        },
      },
      sm: {
        light: {
          fontWeight: FONT_WEIGHT.normal,
          fontSize: FONT_SIZE['3xs'],
          lineHeight: LINE_HEIGHT__RELAXED['3xs'],
          letterSpacing: LETTER_SPACING.widest,
        },
        medium: {
          fontWeight: FONT_WEIGHT.medium,
          fontSize: FONT_SIZE['3xs'],
          lineHeight: LINE_HEIGHT__RELAXED['3xs'],
          letterSpacing: LETTER_SPACING.widest,
        },
        bold: {
          fontWeight: FONT_WEIGHT.semibold,
          fontSize: FONT_SIZE['3xs'],
          lineHeight: LINE_HEIGHT__RELAXED['3xs'],
          letterSpacing: LETTER_SPACING.widest,
        },
      },
    },
  },
});

const regalTheme = style([
  regalThemeVars,
  { colorScheme: 'light dark', fontFamily: themeContract.typography.fontFamily.base },
]);

export { regalTheme };
