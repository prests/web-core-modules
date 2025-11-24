import { type ComponentProps, type FC } from 'react';
import clsx from 'clsx';
import { input } from './input.css.js';

/**
 * Standard input component with consistent styling and design system integration.
 * Extends native HTML input element with theme-aware styling.
 */
const Input: FC<ComponentProps<'input'>> = ({ className, ...props }) => {
  return <input data-slot="input" className={clsx(input, className)} {...props} />;
};

export default Input;
