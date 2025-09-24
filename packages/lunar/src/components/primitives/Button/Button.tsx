import { type ComponentProps } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

import { type ButtonVariants, buttonVariants } from './button.css.js';
import { parseVariant } from '../../../styles/variants.js';

interface ButtonProperties extends ComponentProps<'button'> {
  asChild?: boolean;
  variant?: ButtonVariants;
}

const Button = ({ className, variant, asChild = false, ...properties }: ButtonProperties) => {
  const { type, size } = parseVariant(variant);

  const Comp = asChild ? Slot : 'button';

  return <Comp data-slot="button" className={clsx(buttonVariants({ type, size }), className)} {...properties} />;
};

export type { ButtonProperties as ButtonProps };
export default Button;
