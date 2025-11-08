import { recipe } from '@vanilla-extract/recipes';

import { atomic } from '../../../styles/atomic.css.js';

const BUTTON_VARIANT__PRIMARY = 'primary';
const BUTTON_VARIANT__SECONDARY = 'secondary';
const BUTTON_VARIANT__OUTLINE = 'outline';
const BUTTON_VARIANT__DESTRUCTIVE = 'destructive';
const BUTTON_VARIANT__GHOST = 'ghost';
const BUTTON_VARIANT__LINK = 'link';

const BUTTON_SIZE__LARGE = 'large';
const BUTTON_SIZE__MEDIUM = 'medium';
const BUTTON_SIZE__SMALL = 'small';

const buttonVariants = recipe({
  base: [
    atomic({
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'md',
      fontSize: 'sm',
      fontWeight: 'medium',
      borderWidth: 1,
    }),
    {
      gap: '0.5rem',
      whiteSpace: 'nowrap',
      transition: 'all 0.2s ease-in-out',
      flexShrink: 0,
      outline: 'none',
      cursor: 'pointer',
      userSelect: 'none',
      position: 'relative',
      textDecoration: 'none',
      ':disabled': {
        pointerEvents: 'none',
        cursor: 'not-allowed',
      },
      ':focus-visible': {
        boxShadow: '0 0 0 2px var(--colors-shadow-focus)',
        outline: '2px solid transparent',
        outlineOffset: '2px',
      },
      selectors: {
        '& svg': {
          pointerEvents: 'none',
          flexShrink: 0,
          width: '1rem',
          height: '1rem',
        },
      },
    },
  ],
  variants: {
    type: {
      [BUTTON_VARIANT__PRIMARY]: [
        atomic({
          backgroundColor: 'action.primary',
          borderColor: 'border.action.primary',
          color: 'text.inverse',
        }),
        {
          ':hover:not(:disabled)': {
            backgroundColor: 'var(--colors-action-primary-hover)',
            boxShadow: '0 1px 3px var(--colors-shadow-subtle)',
          },
          ':active:not(:disabled)': {
            backgroundColor: 'var(--colors-action-primary-active)',
            transform: 'translateY(1px)',
          },
          ':disabled': {
            backgroundColor: 'var(--colors-action-primary-disabled)',
            borderColor: 'var(--colors-border-action-disabled)',
            color: 'var(--colors-text-disabled)',
          },
        },
      ],
      [BUTTON_VARIANT__SECONDARY]: [
        atomic({
          backgroundColor: 'action.secondary',
          borderColor: 'border.action.secondary',
          color: 'text.primary',
        }),
        {
          ':hover:not(:disabled)': {
            backgroundColor: 'var(--colors-action-secondary-hover)',
            boxShadow: '0 1px 3px var(--colors-shadow-subtle)',
          },
          ':active:not(:disabled)': {
            backgroundColor: 'var(--colors-action-secondary-active)',
            transform: 'translateY(1px)',
          },
          ':disabled': {
            backgroundColor: 'var(--colors-action-secondary-disabled)',
            borderColor: 'var(--colors-border-action-disabled)',
            color: 'var(--colors-text-disabled)',
          },
        },
      ],
      [BUTTON_VARIANT__OUTLINE]: [
        atomic({
          backgroundColor: 'surface.bg.primary',
          borderColor: 'border.interactive',
          color: 'text.interactive',
        }),
        {
          ':hover:not(:disabled)': {
            backgroundColor: 'var(--colors-surface-bg-interactive-hover)',
            borderColor: 'var(--colors-border-interactive-hover)',
            color: 'var(--colors-text-interactive-hover)',
          },
          ':active:not(:disabled)': {
            backgroundColor: 'var(--colors-surface-bg-interactive-active)',
            borderColor: 'var(--colors-border-interactive-active)',
            color: 'var(--colors-text-interactive-active)',
            transform: 'translateY(1px)',
          },
          ':disabled': {
            backgroundColor: 'var(--colors-surface-bg-disabled)',
            borderColor: 'var(--colors-border-action-disabled)',
            color: 'var(--colors-text-disabled)',
          },
        },
      ],
      [BUTTON_VARIANT__DESTRUCTIVE]: [
        atomic({
          backgroundColor: 'action.destructive',
          borderColor: 'border.action.destructive',
          color: 'text.inverse',
        }),
        {
          ':hover:not(:disabled)': {
            backgroundColor: 'var(--colors-action-destructive-hover)',
            boxShadow: '0 1px 3px var(--colors-shadow-subtle)',
          },
          ':active:not(:disabled)': {
            backgroundColor: 'var(--colors-action-destructive-active)',
            transform: 'translateY(1px)',
          },
          ':disabled': {
            backgroundColor: 'var(--colors-action-destructive-disabled)',
            borderColor: 'var(--colors-border-action-disabled)',
            color: 'var(--colors-text-disabled)',
          },
        },
      ],
      [BUTTON_VARIANT__GHOST]: [
        atomic({
          backgroundColor: 'action.ghost',
          borderColor: 'action.ghost',
          color: 'text.interactive',
        }),
        {
          ':hover:not(:disabled)': {
            backgroundColor: 'var(--colors-action-ghost-hover)',
            color: 'var(--colors-text-interactive-hover)',
          },
          ':active:not(:disabled)': {
            backgroundColor: 'var(--colors-action-ghost-active)',
            color: 'var(--colors-text-interactive-active)',
            transform: 'translateY(1px)',
          },
          ':disabled': {
            backgroundColor: 'var(--colors-action-ghost-disabled)',
            color: 'var(--colors-text-disabled)',
          },
        },
      ],
      [BUTTON_VARIANT__LINK]: [
        atomic({
          backgroundColor: 'action.ghost',
          borderColor: 'action.ghost',
          color: 'text.interactive',
        }),
        {
          textDecoration: 'underline',
          textUnderlineOffset: '4px',
          ':hover:not(:disabled)': {
            backgroundColor: 'transparent',
            color: 'var(--colors-text-interactive-hover)',
            textDecoration: 'underline',
          },
          ':active:not(:disabled)': {
            color: 'var(--colors-text-interactive-active)',
          },
          ':disabled': {
            color: 'var(--colors-text-disabled)',
            textDecoration: 'none',
          },
        },
      ],
    },
    size: {
      [BUTTON_SIZE__SMALL]: atomic({
        paddingX: 3,
        paddingY: 1.5,
        fontSize: 'xs',
      }),
      [BUTTON_SIZE__MEDIUM]: atomic({
        paddingX: 4,
        paddingY: 2,
        fontSize: 'sm',
      }),
      [BUTTON_SIZE__LARGE]: atomic({
        paddingX: 6,
        paddingY: 3,
        fontSize: 'base',
      }),
    },
  },
  defaultVariants: {
    type: BUTTON_VARIANT__PRIMARY,
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
