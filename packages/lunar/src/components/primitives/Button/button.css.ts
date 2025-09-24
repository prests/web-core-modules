import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

const buttonVariants = recipe({
  base: [],
  variants: {
    type: {
      primary: {},
      secondary: {},
      outline: {},
      destructive: {},
      ghost: {},
      link: {},
    },
    size: {
      small: {},
      medium: {},
      large: {},
    },
  },
  defaultVariants: {
    type: 'primary',
    size: 'medium',
  },
});

type ButtonVariants = RecipeVariants<typeof buttonVariants>;

export type { ButtonVariants };
export { buttonVariants };
