import { style } from '@vanilla-extract/css';

import { themeContract } from '../../../themes/tokens/tokens.css.js';
import { withBreakpoint, withCustomOutline, withSafeTransition } from '../../../themes/styles/utilities.js';
import { BREAKPOINT__MD } from '../../../constants/theming.js';
import { COLORS__PURE } from '../../../themes/tokens/primitives/colors.js';

const input = style([
  withBreakpoint(BREAKPOINT__MD, {
    fontSize: themeContract.typography.body.sm.medium.fontSize,
  }),
  withCustomOutline(themeContract.colors.shadow.focus),
  withSafeTransition({
    transition: 'color 150ms ease-in-out, box-shadow 150ms ease-in-out',
  }),
  {
    width: '100%',
    minWidth: 0,
    boxSizing: 'border-box',
    borderRadius: themeContract.borderRadius.md,
    border: `${themeContract.borderWidth[1]} solid ${themeContract.colors.input.border.default}`,
    backgroundColor: COLORS__PURE.transparent,
    paddingLeft: themeContract.spacing[3],
    paddingRight: themeContract.spacing[3],
    paddingTop: themeContract.spacing[1],
    paddingBottom: themeContract.spacing[1],
    fontSize: themeContract.typography.body.md.medium.fontSize,
    lineHeight: themeContract.typography.body.md.medium.lineHeight,
    boxShadow: themeContract.boxShadow.sm,
    color: themeContract.colors.text.primary,
    selectors: {
      '&[aria-invalid="true"]': {
        borderColor: themeContract.colors.border.error,
      },
      ...withCustomOutline(themeContract.colors.shadow.destructive, '&[aria-invalid="true"]'),
    },

    '::file-selector-button': {
      display: 'inline-flex',
      border: 0,
      backgroundColor: COLORS__PURE.transparent,
      fontSize: themeContract.typography.body.md.medium.fontSize,
      fontWeight: themeContract.typography.body.md.medium.fontWeight,
      color: themeContract.colors.text.primary,
    },

    '::placeholder': {
      color: themeContract.colors.input.text.placeholder,
    },

    '::selection': {
      backgroundColor: themeContract.colors.action.bg.primary.default,
      color: themeContract.colors.action.color.primary,
    },

    ':disabled': {
      pointerEvents: 'none',
      cursor: 'not-allowed',
      opacity: '0.5',
    },
  },
]);

export { input };
