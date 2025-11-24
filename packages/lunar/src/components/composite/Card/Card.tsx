import type * as React from 'react';
import clsx from 'clsx';

import { card, cardHeader, cardTitle, cardDescription, cardAction, cardContent, cardFooter } from './card.css.js';

/**
 * Main card container component that provides a styled container with elevation and borders.
 * Serves as the foundation for card-based layouts and content organization.
 */
const Card = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div data-slot="card" className={clsx(card, className)} {...props} />;
};

/**
 * Header section of the card, typically containing the card title and description.
 * Provides consistent spacing and layout for the card's top section.
 */
const CardHeader = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div data-slot="card-header" className={clsx(cardHeader, className)} {...props} />;
};

/**
 * Title component for the card header with appropriate typography styling.
 * Provides semantic structure and consistent text hierarchy.
 */
const CardTitle = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div data-slot="card-title" className={clsx(cardTitle, className)} {...props} />;
};

/**
 * Description component for the card header with muted text styling.
 * Used to provide additional context or subtitle information.
 */
const CardDescription = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div data-slot="card-description" className={clsx(cardDescription, className)} {...props} />;
};

/**
 * Action area component for the card, typically containing buttons or interactive elements.
 * Provides proper spacing and alignment for card actions.
 */
const CardAction = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div data-slot="card-action" className={clsx(cardAction, className)} {...props} />;
};

/**
 * Main content area of the card with appropriate padding and spacing.
 * Houses the primary content between the header and footer sections.
 */
const CardContent = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div data-slot="card-content" className={clsx(cardContent, className)} {...props} />;
};

/**
 * Footer section of the card, typically used for actions, metadata, or additional information.
 * Provides consistent spacing and styling for the card's bottom section.
 */
const CardFooter = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div data-slot="card-footer" className={clsx(cardFooter, className)} {...props} />;
};

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };
