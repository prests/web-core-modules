import { createThemeContract } from '@vanilla-extract/css';

import {
  ACTION_COLORS,
  BORDER_COLORS,
  ICON_COLORS,
  INPUT_COLORS,
  SHADOW_COLORS,
  SURFACE_COLORS,
  TEXT_COLORS,
} from './semantic/colors.js';
import { SPACING } from './semantic/spacing.js';
import { FONT_SIZE, FONT_WEIGHT, LETTER_SPACING, LINE_HEIGHT } from './semantic/typography.js';
import { BORDER_RADIUS, BORDER_WIDTH } from './semantic/borders.js';
import { BOX_SHADOWS } from './semantic/shadows.js';

const themeContract = createThemeContract({
  colors: {
    ...ACTION_COLORS,
    ...TEXT_COLORS,
    ...SURFACE_COLORS,
    ...BORDER_COLORS,
    ...ICON_COLORS,
    ...INPUT_COLORS,
    ...SHADOW_COLORS,
  },
  spacing: SPACING,
  fontSize: FONT_SIZE,
  fontWeight: FONT_WEIGHT,
  lineHeight: LINE_HEIGHT,
  letterSpacing: LETTER_SPACING,
  borderRadius: BORDER_RADIUS,
  borderWidth: BORDER_WIDTH,
  boxShadow: BOX_SHADOWS,
});

export { themeContract };
