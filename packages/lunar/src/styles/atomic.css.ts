import {
  defineProperties,
  createSprinkles,
  createNormalizeValueFn,
  createMapValueFn,
} from '@vanilla-extract/sprinkles';

import { themeContract } from '../tokens/tokens.css.js';

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    // Layout
    display: ['none', 'block', 'inline', 'inline-block', 'flex', 'inline-flex', 'grid', 'inline-grid'],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    justifyContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
    alignItems: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    gap: themeContract.spacing,

    // Positioning
    position: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
    top: themeContract.spacing,
    right: themeContract.spacing,
    bottom: themeContract.spacing,
    left: themeContract.spacing,
    zIndex: {
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
      auto: 'auto',
    },

    // Spacing
    padding: themeContract.spacing,
    paddingTop: themeContract.spacing,
    paddingRight: themeContract.spacing,
    paddingBottom: themeContract.spacing,
    paddingLeft: themeContract.spacing,
    margin: themeContract.spacing,
    marginTop: themeContract.spacing,
    marginRight: themeContract.spacing,
    marginBottom: themeContract.spacing,
    marginLeft: themeContract.spacing,

    // Sizing
    width: {
      auto: 'auto',
      full: '100%',
      screen: '100vw',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
      ...themeContract.spacing,
    },
    height: {
      auto: 'auto',
      full: '100%',
      screen: '100vh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
      ...themeContract.spacing,
    },
    minWidth: {
      0: '0',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
    maxWidth: {
      none: 'none',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
      prose: '65ch',
    },
    minHeight: {
      0: '0',
      full: '100%',
      screen: '100vh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
    maxHeight: {
      none: 'none',
      full: '100%',
      screen: '100vh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },

    // Typography
    fontSize: themeContract.fontSize,
    fontWeight: themeContract.fontWeight,
    lineHeight: themeContract.lineHeight,
    letterSpacing: themeContract.letterSpacing,
    textAlign: ['left', 'center', 'right', 'justify'],
    textTransform: ['none', 'uppercase', 'lowercase', 'capitalize'],
    textDecoration: ['none', 'underline', 'line-through'],

    // Borders
    borderRadius: themeContract.borderRadius,
    borderWidth: themeContract.borderWidth,
    borderTopWidth: themeContract.borderWidth,
    borderRightWidth: themeContract.borderWidth,
    borderBottomWidth: themeContract.borderWidth,
    borderLeftWidth: themeContract.borderWidth,
    borderStyle: ['solid', 'dashed', 'dotted', 'none'],

    // Effects
    boxShadow: themeContract.boxShadow,
    opacity: {
      0: '0',
      5: '0.05',
      10: '0.1',
      20: '0.2',
      25: '0.25',
      30: '0.3',
      40: '0.4',
      50: '0.5',
      60: '0.6',
      70: '0.7',
      75: '0.75',
      80: '0.8',
      90: '0.9',
      95: '0.95',
      100: '1',
    },

    // Overflow
    overflow: ['visible', 'hidden', 'scroll', 'auto'],
    overflowX: ['visible', 'hidden', 'scroll', 'auto'],
    overflowY: ['visible', 'hidden', 'scroll', 'auto'],
  },
  shorthands: {
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    placeItems: ['justifyContent', 'alignItems'],
    size: ['width', 'height'],
  },
});

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    color: themeContract.colors,
    backgroundColor: themeContract.colors,
    borderColor: themeContract.colors,
    borderTopColor: themeContract.colors,
    borderRightColor: themeContract.colors,
    borderBottomColor: themeContract.colors,
    borderLeftColor: themeContract.colors,
    outlineColor: themeContract.colors,
  },
  shorthands: {
    borderXColor: ['borderLeftColor', 'borderRightColor'],
    borderYColor: ['borderTopColor', 'borderBottomColor'],
  },
});

const atomic = createSprinkles(responsiveProperties, colorProperties);

type Utilities = Parameters<typeof atomic>[0];

const normalizeResponsiveValue = createNormalizeValueFn(responsiveProperties);
const mapResponsiveValue = createMapValueFn(responsiveProperties);

export type { Utilities };
export { atomic, normalizeResponsiveValue, mapResponsiveValue };
