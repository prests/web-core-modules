import { type ComponentProps, type FC } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

import { buttonVariants } from './button.css.js';
import type { ButtonSize, ButtonVariant } from './button.types.js';

interface ButtonProps extends ComponentProps<'button'> {
  /**
   * When true, the button will render as a child component using Radix UI's Slot primitive.
   * This allows the button styles to be applied to any element while maintaining accessibility.
   */
  asChild?: boolean;
  /**
   * The visual style variant of the button.
   */
  variant?: ButtonVariant;
  /**
   * The size of the button, affecting padding and font size.
   */
  size?: ButtonSize;
}

const Button: FC<ButtonProps> = ({ ref, className, size, variant, asChild = false, ...props }) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp ref={ref} data-slot="button" className={clsx(buttonVariants({ variant, size }), className)} {...props} />
  );
};

export type { ButtonProps };
export default Button;
