import { style } from '@vanilla-extract/css';

import { themeContract } from '../../../themes/tokens/tokens.css.js';

const label = style({
  display: 'flex',
  alignItems: 'center',
  gap: themeContract.spacing[2],

  fontSize: themeContract.typography.label.lg.medium.fontSize,
  lineHeight: themeContract.typography.label.lg.medium.lineHeight,
  fontWeight: themeContract.typography.label.lg.medium.fontWeight,

  userSelect: 'none',

  selectors: {
    '[data-disabled="true"] &': {
      pointerEvents: 'none',
      opacity: 0.5,
    },

    ':disabled + &': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },

    'input:disabled + &': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },

    ':is(input, select, textarea):disabled + &': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
  },
});

export { label };
