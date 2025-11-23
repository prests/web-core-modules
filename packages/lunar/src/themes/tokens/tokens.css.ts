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
import { FONT_FAMILY, TYPOGRAPHY_THEME_CONTRACT } from './semantic/typography.js';
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
  typography: {
    fontFamily: FONT_FAMILY,
    display: TYPOGRAPHY_THEME_CONTRACT,
    heading: TYPOGRAPHY_THEME_CONTRACT,
    subheading: TYPOGRAPHY_THEME_CONTRACT,
    body: TYPOGRAPHY_THEME_CONTRACT,
    caption: TYPOGRAPHY_THEME_CONTRACT,
    label: TYPOGRAPHY_THEME_CONTRACT,
  },
  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
  borderWidth: BORDER_WIDTH,
  boxShadow: BOX_SHADOWS,
});

export { themeContract };
