import { createTheme } from '@vanilla-extract/css';

import { themeContract } from './contract.css.js';
import { spacing } from '../primitives/spacing.js';
import { fontSize, fontWeight, letterSpacing, lineHeight } from '../primitives/typography.js';
import { borderRadius, borderWidth } from '../primitives/borders.js';
import { boxShadow } from '../primitives/shadows.js';

const darkTheme = createTheme(themeContract, {
  colors: {},

  spacing,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  borderRadius,
  borderWidth,
  boxShadow,
});

export { darkTheme };
