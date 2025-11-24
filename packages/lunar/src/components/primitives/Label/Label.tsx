import { type ComponentProps, type FC } from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import clsx from 'clsx';

import { label } from './label.css.js';

/**
 * Accessible label component built on Radix UI's Label primitive.
 * Provides proper form control labeling with consistent styling.
 */
const Label: FC<ComponentProps<typeof LabelPrimitive.Root>> = ({ className, ...props }) => {
  return <LabelPrimitive.Root data-slot="label" className={clsx(label, className)} {...props} />;
};

export default Label;
