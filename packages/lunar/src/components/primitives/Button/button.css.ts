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
      gap: 2,
      borderRadius: 'md',
      fontSize: 'sm',
      fontWeight: 'medium',
    }),
    {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
      border: '0',
      whiteSpace: 'nowrap',
      transition: 'all 0.2s ease-in-out',
      flexShrink: 0,
      outline: 'none',
      ':disabled': {
        pointerEvents: 'none',
        opacity: '0.5',
      },
      ':focus-visible': {
        borderColor: 'var(--color-ring)',
        boxShadow: '0 0 0 3px var(--color-ring-50)',
      },
      selectors: {
        // '&[aria-invalid="true"]': {
        //   borderColor: 'var(--color-destructive)',
        //   boxShadow: '0 0 0 3px var(--color-destructive-20)',
        // },
        // '& svg': {
        //   pointerEvents: 'none',
        //   flexShrink: 0,
        // },
        // '& svg:not([class*="size-"])': {
        //   width: '1rem',
        //   height: '1rem',
        // },
      },
      '@media': {
        '(prefers-color-scheme: dark)': {
          selectors: {
            '&[aria-invalid="true"]': {
              boxShadow: '0 0 0 3px var(--color-destructive-40)',
            },
          },
        },
      },
    },
  ],
  variants: {
    type: {
      [BUTTON_VARIANT__PRIMARY]: [
        atomic({
          backgroundColor: 'action.primary',
        }),
      ],
      [BUTTON_VARIANT__SECONDARY]: atomic({
        backgroundColor: 'action.secondary',
      }),
      [BUTTON_VARIANT__OUTLINE]: atomic({}),
      [BUTTON_VARIANT__DESTRUCTIVE]: atomic({
        backgroundColor: 'action.destructive',
      }),
      [BUTTON_VARIANT__GHOST]: atomic({}),
      [BUTTON_VARIANT__LINK]: atomic({}),
    },
    size: {
      [BUTTON_SIZE__SMALL]: atomic({}),
      [BUTTON_SIZE__MEDIUM]: atomic({}),
      [BUTTON_SIZE__LARGE]: atomic({}),
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
