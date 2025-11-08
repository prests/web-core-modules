import { createTheme, style } from '@vanilla-extract/css';

import { themeContract } from '../tokens/tokens.css.js';
import {
  COLORS__PEARL,
  COLORS__GOLD,
  COLORS__GREEN,
  COLORS__YELLOW,
  COLORS__RED,
  COLORS__BLUE,
} from '../tokens/primitives/colors.js';
import { SPACING } from '../tokens/primitives/spacing.js';
import { FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT, LETTER_SPACING } from '../tokens/primitives/typography.js';
import { BORDER_RADIUS, BORDER_WIDTH } from '../tokens/primitives/borders.js';
import { BOX_SHADOW } from '../tokens/primitives/shadows.js';

const regalThemeVars = createTheme(themeContract, {
  colors: {
    // ACTION COLORS - Primary uses GOLD (brand), Secondary uses GOLD border, Destructive uses RED
    'action.primary': `light-dark(oklch(${COLORS__GOLD[500]}), oklch(${COLORS__GOLD[50]}))`, // Gold background (same for both)
    'action.primary.hover': `light-dark(color-mix(in oklch, oklch(${COLORS__GOLD[500]}) 90%, transparent), color-mix(in oklch, oklch(${COLORS__GOLD[500]}) 90%, transparent))`, // Same for both
    'action.primary.active': `light-dark(color-mix(in oklch, oklch(${COLORS__GOLD[500]}) 80%, transparent), color-mix(in oklch, oklch(${COLORS__GOLD[500]}) 80%, transparent))`, // Same for both
    'action.primary.disabled': `light-dark(color-mix(in oklch, oklch(${COLORS__GOLD[500]}) 40%, transparent), color-mix(in oklch, oklch(${COLORS__GOLD[500]}) 40%, transparent))`, // Same for both

    'action.secondary': `light-dark(transparent, transparent)`, // Transparent background for both
    'action.secondary.hover': `light-dark(color-mix(in oklch, oklch(${COLORS__GOLD[50]}) 10%, transparent), color-mix(in oklch, oklch(${COLORS__GOLD[900]}) 10%, transparent))`, // Light gold vs dark gold tint
    'action.secondary.active': `light-dark(color-mix(in oklch, oklch(${COLORS__GOLD[100]}) 20%, transparent), color-mix(in oklch, oklch(${COLORS__GOLD[800]}) 20%, transparent))`, // Different gold tints
    'action.secondary.disabled': `light-dark(transparent, transparent)`, // Same for both

    'action.destructive': `light-dark(oklch(${COLORS__RED[500]}), oklch(${COLORS__RED[500]}))`, // Same red for both
    'action.destructive.hover': `light-dark(color-mix(in oklch, oklch(${COLORS__RED[500]}) 90%, transparent), color-mix(in oklch, oklch(${COLORS__RED[500]}) 90%, transparent))`, // Same for both
    'action.destructive.active': `light-dark(color-mix(in oklch, oklch(${COLORS__RED[500]}) 80%, transparent), color-mix(in oklch, oklch(${COLORS__RED[500]}) 80%, transparent))`, // Same for both
    'action.destructive.disabled': `light-dark(color-mix(in oklch, oklch(${COLORS__RED[500]}) 40%, transparent), color-mix(in oklch, oklch(${COLORS__RED[500]}) 40%, transparent))`, // Same for both

    'action.ghost': `light-dark(transparent, transparent)`, // Transparent background for both
    'action.ghost.hover': `light-dark(color-mix(in oklch, oklch(${COLORS__PEARL[100]}) 50%, transparent), color-mix(in oklch, oklch(${COLORS__PEARL[800]}) 50%, transparent))`, // Light vs dark PEARL
    'action.ghost.active': `light-dark(color-mix(in oklch, oklch(${COLORS__PEARL[200]}) 60%, transparent), color-mix(in oklch, oklch(${COLORS__PEARL[700]}) 60%, transparent))`, // Light vs dark PEARL
    'action.ghost.disabled': `light-dark(transparent, transparent)`, // Transparent for both

    // BORDER COLORS - Interactive borders use GOLD
    'border.default': `light-dark(oklch(${COLORS__PEARL[300]}), oklch(${COLORS__PEARL[700]}))`, // Light vs dark neutral border
    'border.subtle': `light-dark(oklch(${COLORS__PEARL[200]}), oklch(${COLORS__PEARL[800]}))`, // Light vs dark subtle border
    'border.strong': `light-dark(oklch(${COLORS__PEARL[400]}), oklch(${COLORS__PEARL[600]}))`, // Light vs dark strong border

    'border.interactive': `light-dark(oklch(${COLORS__GOLD[500]}), oklch(${COLORS__GOLD[400]}))`, // Gold 500 vs lighter gold for dark theme
    'border.interactive.hover': `light-dark(color-mix(in oklch, oklch(${COLORS__GOLD[500]}) 90%, transparent), color-mix(in oklch, oklch(${COLORS__GOLD[400]}) 90%, transparent))`,
    'border.interactive.active': `light-dark(color-mix(in oklch, oklch(${COLORS__GOLD[500]}) 80%, transparent), color-mix(in oklch, oklch(${COLORS__GOLD[400]}) 80%, transparent))`,
    'border.focus': `light-dark(oklch(${COLORS__GOLD[500]}), oklch(${COLORS__GOLD[400]}))`, // Gold focus ring

    'border.success': `light-dark(oklch(${COLORS__GREEN[500]}), oklch(${COLORS__GREEN[400]}))`, // Lighter for dark theme
    'border.warning': `light-dark(oklch(${COLORS__YELLOW[500]}), oklch(${COLORS__YELLOW[400]}))`,
    'border.error': `light-dark(oklch(${COLORS__RED[500]}), oklch(${COLORS__RED[400]}))`,
    'border.info': `light-dark(oklch(${COLORS__BLUE[500]}), oklch(${COLORS__BLUE[400]}))`,

    'border.action.primary': `light-dark(oklch(${COLORS__GOLD[500]}), oklch(${COLORS__GOLD[400]}))`, // Matches primary action
    'border.action.secondary': `light-dark(oklch(${COLORS__GOLD[500]}), oklch(${COLORS__GOLD[400]}))`, // Gold border for secondary
    'border.action.destructive': `light-dark(oklch(${COLORS__RED[500]}), oklch(${COLORS__RED[400]}))`,
    'border.action.disabled': `light-dark(oklch(${COLORS__PEARL[300]}), oklch(${COLORS__PEARL[700]}))`,

    // TEXT COLORS - Primary hierarchy uses PEARL, Interactive uses GOLD
    'text.primary': `light-dark(oklch(${COLORS__PEARL[900]}), oklch(${COLORS__PEARL[50]}))`, // High contrast dark vs light text
    'text.secondary': `light-dark(oklch(${COLORS__PEARL[700]}), oklch(${COLORS__PEARL[200]}))`, // Medium contrast text
    'text.tertiary': `light-dark(oklch(${COLORS__PEARL[600]}), oklch(${COLORS__PEARL[300]}))`, // Low contrast text

    'text.interactive': `light-dark(oklch(${COLORS__GOLD[600]}), oklch(${COLORS__GOLD[400]}))`, // Gold for links - lighter for dark theme
    'text.interactive.hover': `light-dark(color-mix(in oklch, oklch(${COLORS__GOLD[600]}) 90%, transparent), color-mix(in oklch, oklch(${COLORS__GOLD[400]}) 90%, transparent))`,
    'text.interactive.active': `light-dark(color-mix(in oklch, oklch(${COLORS__GOLD[600]}) 80%, transparent), color-mix(in oklch, oklch(${COLORS__GOLD[400]}) 80%, transparent))`,

    'text.success': `light-dark(oklch(${COLORS__GREEN[700]}), oklch(${COLORS__GREEN[300]}))`, // Darker vs lighter for contrast
    'text.warning': `light-dark(oklch(${COLORS__YELLOW[700]}), oklch(${COLORS__YELLOW[300]}))`,
    'text.error': `light-dark(oklch(${COLORS__RED[700]}), oklch(${COLORS__RED[300]}))`,
    'text.info': `light-dark(oklch(${COLORS__BLUE[700]}), oklch(${COLORS__BLUE[300]}))`,

    'text.inverse': `light-dark(oklch(${COLORS__PEARL[50]}), oklch(${COLORS__PEARL[900]}))`, // Light vs dark for inverse backgrounds
    'text.disabled': `light-dark(oklch(${COLORS__PEARL[500]}), oklch(${COLORS__PEARL[500]}))`, // Same muted text for both

    // SURFACE COLORS - Layered hierarchy with PEARL
    'surface.bg.primary': `light-dark(oklch(${COLORS__PEARL[50]}), oklch(${COLORS__PEARL[950]}))`, // Main background - lightest vs darkest
    'surface.bg.secondary': `light-dark(oklch(${COLORS__PEARL[100]}), oklch(${COLORS__PEARL[900]}))`, // Cards, panels
    'surface.bg.tertiary': `light-dark(oklch(${COLORS__PEARL[200]}), oklch(${COLORS__PEARL[800]}))`, // Elevated surfaces

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
    'shadow.interactive': `light-dark(color-mix(in oklch, oklch(${COLORS__GOLD[500]}) 20%, transparent), color-mix(in oklch, oklch(${COLORS__GOLD[800]}) 30%, transparent))`,
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
  fontSize: {
    xs: FONT_SIZE.xs,
    sm: FONT_SIZE.sm,
    base: FONT_SIZE.base,
    lg: FONT_SIZE.lg,
    xl: FONT_SIZE.xl,
    '2xl': FONT_SIZE['2xl'],
    '3xl': FONT_SIZE['3xl'],
    '4xl': FONT_SIZE['4xl'],
    '5xl': FONT_SIZE['5xl'],
    '6xl': FONT_SIZE['6xl'],
    '7xl': FONT_SIZE['7xl'],
    '8xl': FONT_SIZE['8xl'],
    '9xl': FONT_SIZE['9xl'],
  },
  fontWeight: {
    thin: FONT_WEIGHT.thin,
    extralight: FONT_WEIGHT.extralight,
    light: FONT_WEIGHT.light,
    normal: FONT_WEIGHT.normal,
    medium: FONT_WEIGHT.medium,
    semibold: FONT_WEIGHT.semibold,
    bold: FONT_WEIGHT.bold,
    extrabold: FONT_WEIGHT.extrabold,
    black: FONT_WEIGHT.black,
  },
  lineHeight: {
    none: LINE_HEIGHT.none,
    tight: LINE_HEIGHT.tight,
    snug: LINE_HEIGHT.snug,
    normal: LINE_HEIGHT.normal,
    relaxed: LINE_HEIGHT.relaxed,
    loose: LINE_HEIGHT.loose,
    3: LINE_HEIGHT[3],
    4: LINE_HEIGHT[4],
    5: LINE_HEIGHT[5],
    6: LINE_HEIGHT[6],
    7: LINE_HEIGHT[7],
    8: LINE_HEIGHT[8],
    9: LINE_HEIGHT[9],
    10: LINE_HEIGHT[10],
  },
  letterSpacing: {
    tighter: LETTER_SPACING.tighter,
    tight: LETTER_SPACING.tight,
    normal: LETTER_SPACING.normal,
    wide: LETTER_SPACING.wide,
    wider: LETTER_SPACING.wider,
    widest: LETTER_SPACING.widest,
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
});

export const regalTheme = style([regalThemeVars, { colorScheme: 'light dark' }]);
