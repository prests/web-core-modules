const FONT_FAMILY = {
  base: null,
};

const TYPOGRAPHY_STYLE_SET = {
  fontWeight: null,
  fontSize: null,
  lineHeight: null,
  letterSpacing: null,
} as const;

const TYPOGRAPHY_THEME_CONTRACT = {
  xl: {
    light: TYPOGRAPHY_STYLE_SET,
    medium: TYPOGRAPHY_STYLE_SET,
    bold: TYPOGRAPHY_STYLE_SET,
  },
  lg: {
    light: TYPOGRAPHY_STYLE_SET,
    medium: TYPOGRAPHY_STYLE_SET,
    bold: TYPOGRAPHY_STYLE_SET,
  },
  md: {
    light: TYPOGRAPHY_STYLE_SET,
    medium: TYPOGRAPHY_STYLE_SET,
    bold: TYPOGRAPHY_STYLE_SET,
  },
  sm: {
    light: TYPOGRAPHY_STYLE_SET,
    medium: TYPOGRAPHY_STYLE_SET,
    bold: TYPOGRAPHY_STYLE_SET,
  },
} as const;

export { FONT_FAMILY, TYPOGRAPHY_THEME_CONTRACT };
