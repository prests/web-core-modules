export const FONT_FAMILY = {
  sans: {
    primary: 'ui-sans-serif',
    system: 'system-ui',
    fallback: 'sans-serif',
    emoji: {
      apple: '"Apple Color Emoji"',
      segoeUI: '"Segoe UI Emoji"',
      segoeSymbol: '"Segoe UI Symbol"',
      noto: '"Noto Color Emoji"',
    },
  },
  serif: {
    primary: 'ui-serif',
    georgia: 'Georgia',
    cambria: 'Cambria',
    timesNewRoman: '"Times New Roman"',
    times: 'Times',
    fallback: 'serif',
  },
  mono: {
    primary: 'ui-monospace',
    sfMono: 'SFMono-Regular',
    menlo: '"Menlo"',
    monaco: '"Monaco"',
    consolas: '"Consolas"',
    liberation: '"Liberation Mono"',
    courierNew: '"Courier New"',
    fallback: 'monospace',
  },
} as const;

export const FONT_SIZE = {
  '3xs': '0.625rem', // 10px
  '2xs': '0.6875rem', // 11px
  xs: '0.9375rem', // 15px
  sm: '1.09375rem', // 17.5px
  base: '1.25rem', // 20px
  lg: '1.40625rem', // 22.5px
  xl: '1.5625rem', // 25px
  '2xl': '1.875rem', // 30px
  '3xl': '2.34375rem', // 37.5px
  '4xl': '2.8125rem', // 45px
  '5xl': '3.75rem', // 60px
  '6xl': '4.6875rem', // 75px
  '7xl': '5.625rem', // 90px
  '8xl': '7.5rem', // 120px
  '9xl': '10rem', // 160px
} as const;

export const FONT_WEIGHT = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
} as const;

export const LINE_HEIGHT = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
  3: '.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
} as const;

export const LINE_HEIGHT__TIGHT = {
  '3xs': '0.75rem', // 12px (10 × 1.14 = 11.4 → 12px)
  '2xs': '0.75rem', // 12px (11 × 1.14 = 12.54 → 12px)
  xs: '1rem', // 16px (15 × 1.14 = 17.1 → 16px)
  sm: '1.25rem', // 20px (17.5 × 1.14 = 19.95 → 20px)
  base: '1.5rem', // 24px (20 × 1.14 = 22.8 → 24px)
  lg: '1.75rem', // 28px (22.5 × 1.14 = 25.65 → 28px)
  xl: '1.75rem', // 28px (25 × 1.14 = 28.5 → 28px)
  '2xl': '2.25rem', // 36px (30 × 1.14 = 34.2 → 36px)
  '3xl': '2.75rem', // 44px (37.5 × 1.14 = 42.75 → 44px)
  '4xl': '3.25rem', // 52px (45 × 1.14 = 51.3 → 52px)
  '5xl': '4.25rem', // 68px (60 × 1.14 = 68.4 → 68px)
  '6xl': '5.5rem', // 88px (75 × 1.14 = 85.5 → 88px)
  '7xl': '6.5rem', // 104px (90 × 1.14 = 102.6 → 104px)
  '8xl': '8.5rem', // 136px (120 × 1.14 = 136.8 → 136px)
  '9xl': '11.5rem', // 184px (160 × 1.14 = 182.4 → 184px)
} as const;

export const LINE_HEIGHT__RELAXED = {
  '3xs': '1rem', // 16px (10 × 1.5 = 15 → 16px)
  '2xs': '1rem', // 16px (11 × 1.5 = 16.5 → 16px)
  xs: '1.5rem', // 24px (15 × 1.5 = 22.5 → 24px)
  sm: '1.75rem', // 28px (17.5 × 1.5 = 26.25 → 28px)
  base: '2rem', // 32px (20 × 1.5 = 30 → 32px)
  lg: '2.25rem', // 36px (22.5 × 1.5 = 33.75 → 36px)
  xl: '2.25rem', // 36px (25 × 1.5 = 37.5 → 36px)
  '2xl': '2.75rem', // 44px (30 × 1.5 = 45 → 44px)
  '3xl': '3.5rem', // 56px (37.5 × 1.5 = 56.25 → 56px)
  '4xl': '4.25rem', // 68px (45 × 1.5 = 67.5 → 68px)
  '5xl': '5.75rem', // 92px (60 × 1.5 = 90 → 92px)
  '6xl': '7rem', // 112px (75 × 1.5 = 112.5 → 112px)
  '7xl': '8.5rem', // 136px (90 × 1.5 = 135 → 136px)
  '8xl': '11.25rem', // 180px (120 × 1.5 = 180 → 180px)
  '9xl': '15rem', // 240px (160 × 1.5 = 240 → 240px)
} as const;

export const LETTER_SPACING = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const;
