import { globalStyle } from '@vanilla-extract/css';

import { themeContract } from '../tokens/themes/contract.css.js';

globalStyle('html', {
  fontFamily: 'ui-sans-serif, system-ui, sans-serif',
  fontSize: themeContract.fontSize.base,
  lineHeight: themeContract.lineHeight.normal,
});

globalStyle('body', {
  fontFamily: 'inherit',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  color: 'inherit',
  backgroundColor: 'inherit',
});

globalStyle('*:focus-visible', {
  //outline: `2px solid ${themeContract.colors.borderFocus}`,
  outlineOffset: '2px',
});
