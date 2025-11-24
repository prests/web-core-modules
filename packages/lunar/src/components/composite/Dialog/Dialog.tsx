import {
  type ComponentProps,
  type FC,
  type MouseEvent,
  type ReactNode,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';
// TODO: Remove once there's full browser support for Dialog's closedby attribute.
import 'dialog-closedby-polyfill';

import DialogProvider from './DialogProvider.js';
import { useDialog } from '../../../hooks/dialog.js';
import { useMergedRef } from '../../../hooks/refs.js';
import Button, { type ButtonProps } from '../../primitives/Button/Button.js';
import { dialog, dialogContent, dialogFooter, dialogHeader } from './dialog.css.js';

interface DialogProps extends ComponentProps<'dialog'> {
  /**
   * Optional function that renders the trigger element for the dialog.
   * This allows custom trigger components while maintaining dialog functionality.
   */
  renderTrigger?: () => ReactNode;
}

/**
 * Main Dialog component that renders a modal dialog element.
 * Handles dialog state management and provides context for child components.
 */
const Dialog: FC<DialogProps> = ({
  className,
  open = false,
  closedby = 'any',
  renderTrigger,
  ref: forwardedRef,
  ...props
}) => {
  const internalDialogRef = useRef<HTMLDialogElement>(null);
  const mergedRef = useMergedRef(internalDialogRef, forwardedRef);

  return (
    <DialogProvider isOpen={open} dialogRef={internalDialogRef}>
      {renderTrigger?.()}

      <dialog
        ref={mergedRef}
        open={open}
        // eslint-disable-next-line react/no-unknown-property
        closedby={closedby}
        data-slot="dialog"
        className={clsx(dialog, className)}
        aria-modal="true"
        {...props}
      />
    </DialogProvider>
  );
};

/**
 * Button component that triggers the dialog to open.
 * Automatically handles aria attributes and dialog state management.
 */
const DialogTrigger: FC<ButtonProps> = ({ onClick, ...props }) => {
  const { dialogRef, isOpen } = useDialog();

  const [isAriaExpanded, setIsAriaExpanded] = useState(isOpen);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || event.isPropagationStopped()) {
      return;
    }

    setIsAriaExpanded(true);
    dialogRef.current?.showModal();
  };

  const handleClose = useEffectEvent(() => {
    setIsAriaExpanded(false);
  });

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog.addEventListener('close', handleClose);

    return () => {
      dialog.removeEventListener('close', handleClose);
    };
  }, [dialogRef]);

  return (
    <Button
      aria-expanded={isAriaExpanded}
      aria-haspopup="dialog"
      data-slot="dialog-trigger"
      onClick={handleClick}
      {...props}
    />
  );
};

/**
 * Button component that closes the dialog when clicked.
 * Handles dialog close functionality while preserving custom onClick handlers.
 */
const DialogClose: FC<ButtonProps> = ({ onClick, ...props }) => {
  const { dialogRef } = useDialog();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || event.isPropagationStopped()) {
      return;
    }

    dialogRef.current?.close();
  };

  return <Button onClick={handleClick} {...props} />;
};

/**
 * Container component for the main content area of the dialog.
 * Provides semantic structure and consistent styling for dialog content.
 */
const DialogContent: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
  return <div data-slot="dialog-content" className={clsx(dialogContent, className)} {...props} />;
};

/**
 * Header component for the dialog, typically containing the dialog title.
 * Provides consistent spacing and styling for the dialog header area.
 */
const DialogHeader: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
  return <div data-slot="dialog-header" className={clsx(dialogHeader, className)} {...props} />;
};

/**
 * Footer component for the dialog, typically containing action buttons.
 * Provides consistent spacing and styling for the dialog footer area.
 */
const DialogFooter: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
  return <div data-slot="dialog-footer" className={clsx(dialogFooter, className)} {...props} />;
};

export { Dialog, DialogTrigger, DialogClose, DialogContent, DialogHeader, DialogFooter };
