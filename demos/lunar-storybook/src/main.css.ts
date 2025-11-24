import { style } from '@vanilla-extract/css';

const systemColorScheme = style({
  colorScheme: 'light dark',
});

const lightColorScheme = style({
  colorScheme: 'light',
});

const darkColorScheme = style({
  colorScheme: 'dark',
});

export { systemColorScheme, lightColorScheme, darkColorScheme };
