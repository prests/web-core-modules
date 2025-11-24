import { style, keyframes } from '@vanilla-extract/css';

import { themeContract } from '../../../themes/tokens/tokens.css.js';
import { withBreakpoint, withSafeTransition } from '../../../themes/styles/utilities.js';
import { BREAKPOINT__SM, BREAKPOINT__MD } from '../../../constants/theming.js';

const fadeIn = keyframes({
  from: {
    opacity: '0',
    transform: 'scale(0.95) translateY(-10px)',
  },
  to: {
    opacity: '1',
    transform: 'scale(1) translateY(0)',
  },
});

const fadeOut = keyframes({
  from: {
    display: 'block',
    opacity: '1',
    transform: 'scale(1) translateY(0)',
  },
  to: {
    display: 'none',
    opacity: '0',
    transform: 'scale(0.95) translateY(-10px)',
  },
});

const fadeInBackdrop = keyframes({
  from: {
    opacity: '0',
  },
  to: {
    opacity: '1',
  },
});

const fadeOutBackdrop = keyframes({
  from: {
    opacity: '1',
  },
  to: {
    opacity: '0',
  },
});

const dialog = style([
  {
    boxSizing: 'border-box',
    padding: themeContract.spacing[4],
    border: 'none',
    backgroundColor: themeContract.colors.surface.bg.primary,
    color: themeContract.colors.text.primary,
    borderRadius: themeContract.borderRadius.lg,
    boxShadow: themeContract.boxShadow.xl,
    width: '100vw',
    height: '100vh',
    maxWidth: '100vw',
    maxHeight: '100vh',

    '::backdrop': {
      filter: 'brightness(0%)',
    },
  },
  withSafeTransition({
    transition: 'display 150ms allow-discrete, overlay 150ms allow-discrete',
    animation: `${fadeOut} 150ms cubic-bezier(0.4, 0, 0.2, 1)`,

    selectors: {
      '&[open]': {
        animation: `${fadeIn} 250ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
      },
      '&[open]::backdrop': {
        animation: `${fadeInBackdrop} 250ms`,
      },
    },

    '::backdrop': {
      transition: 'display 150ms allow-discrete, overlay 150ms allow-discrete',
      animation: `${fadeOutBackdrop} 150ms`,
    },
  }),
  withBreakpoint(BREAKPOINT__MD, {
    width: 'fit-content',
    height: 'fit-content',
    maxWidth: '32rem',
    maxHeight: 'unset',
  }),
]);

const dialogContent = style([
  {
    display: 'flex',
    flexDirection: 'column',
    gap: themeContract.spacing[4],
    minHeight: '100%',
    padding: 0,
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch',
  },
  withBreakpoint(BREAKPOINT__SM, {
    minHeight: 'auto',
    maxHeight: 'calc(100vh - 64px)',
    padding: themeContract.spacing[6],
  }),
]);

const dialogHeader = style([
  {
    display: 'flex',
    flexDirection: 'column',
    gap: themeContract.spacing[2],
    paddingBottom: themeContract.spacing[2],
    borderBottom: `${themeContract.borderWidth[1]} solid ${themeContract.colors.border.subtle}`,
  },
  withBreakpoint(BREAKPOINT__SM, {
    paddingBottom: themeContract.spacing[4],
  }),
]);

const dialogFooter = style([
  {
    display: 'flex',
    flexDirection: 'column-reverse',
    gap: themeContract.spacing[2],
    paddingTop: themeContract.spacing[4],
    marginTop: 'auto',
  },
  withBreakpoint(BREAKPOINT__SM, {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }),
]);

export { dialog, dialogContent, dialogHeader, dialogFooter };
