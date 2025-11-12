import type { ComponentProps, FC } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

import { textVariants } from './text.css.js';
import type { TextColor, TextSize, TextType, TextWeight } from './text.types.js';

interface TextProps extends ComponentProps<'h1'> {
  /**
   * When true, the component will render as a child component using Radix UI's Slot primitive.
   * This allows the text styles to be applied to any element while maintaining accessibility.
   */
  asChild?: boolean;
  /**
   * HTML element to render as.
   */
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p' | 'small';
  variant?: TextType;
  /**
   * Visual size variant - independent of semantic HTML element.
   * Allows for flexible styling while maintaining proper semantic structure.
   */
  size?: TextSize;
  /**
   * Color variant for the text.
   */
  color?: TextColor;
  /**
   * Font weight variant for the text.
   */
  weight?: TextWeight;
}

const Text: FC<TextProps> = ({ ref, className, asChild, as: tag, variant, size, color, weight, ...props }) => {
  const Comp = asChild ? Slot : tag;

  return (
    <Comp
      ref={ref}
      data-slot={tag}
      className={clsx(textVariants({ variant, size, color, weight }), className)}
      {...props}
    />
  );
};

export type { TextProps };
export default Text;
