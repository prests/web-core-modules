import { createVar } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeContract } from '../../../themes/tokens/tokens.css.js';
import { withCustomOutline, withSafeTransition } from '../../../themes/styles/utilities.js';

const BUTTON_VARIANT__PRIMARY = 'primary';
const BUTTON_VARIANT__SECONDARY = 'secondary';
const BUTTON_VARIANT__OUTLINE = 'outline';
const BUTTON_VARIANT__DESTRUCTIVE = 'destructive';
const BUTTON_VARIANT__GHOST = 'ghost';
const BUTTON_VARIANT__LINK = 'link';

const BUTTON_SIZE__LARGE = 'large';
const BUTTON_SIZE__MEDIUM = 'medium';
const BUTTON_SIZE__SMALL = 'small';

const internalFontSize = createVar();
const internalPadding = createVar();

const buttonVariants = recipe({
  base: [
    withCustomOutline(themeContract.colors.shadow.interactive),
    withSafeTransition({ transition: 'all 0.2s ease-in-out' }),
    {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: themeContract.borderRadius.md,
      fontSize: internalFontSize,
      padding: internalPadding,
      fontWeight: themeContract.typography.body.md.medium.fontWeight,
      gap: '0.5rem',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      border: '0',
      cursor: 'pointer',
      userSelect: 'none',
      position: 'relative',
      textDecoration: 'none',
      ':disabled': {
        cursor: 'not-allowed',
      },
    },
  ],
  variants: {
    variant: {
      [BUTTON_VARIANT__PRIMARY]: {
        backgroundColor: themeContract.colors.action.bg.primary.default,
        color: themeContract.colors.action.color.primary,
        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: themeContract.colors.action.bg.primary.hover,
          },
          '&:hover:not(:focus-visible)': {
            boxShadow: `0 1px 3px ${themeContract.colors.shadow.subtle}`,
          },
          '&:active:not(:disabled)': {
            backgroundColor: themeContract.colors.action.bg.primary.active,
            transform: 'translateY(1px)',
          },
        },
        ':disabled': {
          backgroundColor: themeContract.colors.action.bg.primary.disabled,
          color: themeContract.colors.text.disabled,
        },
      },
      [BUTTON_VARIANT__SECONDARY]: {
        backgroundColor: themeContract.colors.action.bg.secondary.default,
        borderColor: themeContract.colors.border.action.secondary,
        color: themeContract.colors.text.primary,
        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: themeContract.colors.action.bg.secondary.hover,
            boxShadow: `0 1px 3px ${themeContract.colors.shadow.subtle}`,
          },
          '&:active:not(:disabled)': {
            backgroundColor: themeContract.colors.action.bg.secondary.active,
            transform: 'translateY(1px)',
          },
        },
        ':disabled': {
          backgroundColor: themeContract.colors.action.bg.secondary.disabled,
          color: themeContract.colors.text.disabled,
        },
      },
      [BUTTON_VARIANT__OUTLINE]: {
        backgroundColor: themeContract.colors.action.bg.outline.default,
        border: themeContract.borderWidth[1],
        borderStyle: 'solid',
        borderColor: themeContract.colors.border.interactive.default,
        color: themeContract.colors.text.interactive.default,
        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: themeContract.colors.action.bg.outline.hover,
            borderColor: themeContract.colors.border.interactive.hover,
            color: themeContract.colors.text.interactive.hover,
            boxShadow: `0 1px 3px ${themeContract.colors.shadow.subtle}`,
          },
          '&:active:not(:disabled)': {
            backgroundColor: themeContract.colors.action.bg.outline.active,
            borderColor: themeContract.colors.border.interactive.active,
            color: themeContract.colors.text.interactive.active,
            transform: 'translateY(1px)',
          },
        },
        ':disabled': {
          backgroundColor: themeContract.colors.action.bg.outline.disabled,
          borderColor: themeContract.colors.border.action.disabled,
          color: themeContract.colors.action.color.outline.disabled,
        },
      },
      [BUTTON_VARIANT__GHOST]: {
        backgroundColor: themeContract.colors.action.ghost.default,
        borderColor: themeContract.colors.action.ghost.default,
        color: themeContract.colors.text.interactive.default,
        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: themeContract.colors.action.ghost.hover,
            color: themeContract.colors.text.interactive.hover,
          },
          '&:active:not(:disabled)': {
            backgroundColor: themeContract.colors.action.ghost.active,
            color: themeContract.colors.text.interactive.active,
            transform: 'translateY(1px)',
          },
        },
        ':disabled': {
          backgroundColor: themeContract.colors.action.ghost.disabled,
          color: themeContract.colors.text.disabled,
        },
      },
      [BUTTON_VARIANT__LINK]: [
        withSafeTransition({
          transition: 'background-size 400ms',
        }),
        {
          alignSelf: 'center',
          color: themeContract.colors.text.interactive.default,
          background: `none, linear-gradient(to right, ${themeContract.colors.text.interactive.hover}, ${themeContract.colors.text.interactive.hover})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '100% 100%, 0 100%',
          backgroundSize: `100% calc(${internalFontSize} / 4), 0 calc(${internalFontSize} / 4)`,
          borderRadius: themeContract.borderRadius.none,
          textWrap: 'nowrap',
          padding: '0',
          paddingBottom: '0.2em',
          height: 'min-content',
          selectors: {
            '&:hover:not(:disabled)': {
              backgroundSize: `0 calc(${internalFontSize} / 4), 100% calc(${internalFontSize} / 4)`,
              color: themeContract.colors.text.interactive.hover,
            },
            '&:focus:not(:disabled)': {
              backgroundSize: `0 calc(${internalFontSize} / 4), 100% calc(${internalFontSize} / 4)`,
              color: themeContract.colors.text.interactive.hover,
            },
            '&:active:not(:disabled)': {
              backgroundSize: `0 calc(${internalFontSize} / 4), 100% calc(${internalFontSize} / 4)`,
              color: themeContract.colors.text.interactive.active,
            },
          },
          ':disabled': {
            color: themeContract.colors.text.disabled,
            textDecoration: 'none',
          },
          ':focus-visible': {
            boxShadow: 'none',
          },
        },
      ],
      [BUTTON_VARIANT__DESTRUCTIVE]: [
        withCustomOutline(themeContract.colors.shadow.destructive),
        {
          backgroundColor: themeContract.colors.action.destructive.default,
          borderColor: themeContract.colors.border.action.destructive,
          color: themeContract.colors.text.inverse,
          selectors: {
            '&:hover:not(:disabled)': {
              backgroundColor: themeContract.colors.action.destructive.hover,
              boxShadow: `0 1px 3px ${themeContract.colors.shadow.subtle}`,
            },
            '&:active:not(:disabled)': {
              backgroundColor: themeContract.colors.action.destructive.active,
              transform: 'translateY(1px)',
            },
          },
          ':disabled': {
            backgroundColor: themeContract.colors.action.destructive.disabled,
            borderColor: themeContract.colors.border.action.disabled,
            color: themeContract.colors.text.disabled,
          },
        },
      ],
    },
    size: {
      [BUTTON_SIZE__SMALL]: {
        vars: {
          [internalFontSize]: themeContract.typography.body.sm.medium.fontSize,
          [internalPadding]: `${themeContract.spacing[1.5]} ${themeContract.spacing[3]}`,
        },
      },
      [BUTTON_SIZE__MEDIUM]: {
        vars: {
          [internalFontSize]: themeContract.typography.body.md.medium.fontSize,
          [internalPadding]: `${themeContract.spacing[2]} ${themeContract.spacing[4]}`,
        },
      },
      [BUTTON_SIZE__LARGE]: {
        vars: {
          [internalFontSize]: themeContract.typography.body.lg.medium.fontSize,
          [internalPadding]: `${themeContract.spacing[3]} ${themeContract.spacing[6]}`,
        },
      },
    },
  },
  defaultVariants: {
    variant: BUTTON_VARIANT__PRIMARY,
    size: BUTTON_SIZE__MEDIUM,
  },
});

export {
  BUTTON_VARIANT__PRIMARY,
  BUTTON_VARIANT__SECONDARY,
  BUTTON_VARIANT__OUTLINE,
  BUTTON_VARIANT__DESTRUCTIVE,
  BUTTON_VARIANT__GHOST,
  BUTTON_VARIANT__LINK,
  BUTTON_SIZE__LARGE,
  BUTTON_SIZE__MEDIUM,
  BUTTON_SIZE__SMALL,
  buttonVariants,
};
