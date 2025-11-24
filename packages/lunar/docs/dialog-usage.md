# Dialog Component Usage

The Dialog components provide accessible modal dialogs with customizable triggers that can wrap and inherit styles from
child elements.

## Components

- `DialogProvider` - Context provider that manages dialog state
- `Dialog` - The modal dialog element
- `DialogTrigger` - Unstyled trigger button that can wrap any element
- `useDialog` - Hook for accessing dialog context

## Basic Usage

```tsx
import { DialogProvider, Dialog, DialogTrigger } from '@wcm/lunar';

function BasicExample() {
  return (
    <DialogProvider>
      <DialogTrigger>Open Dialog</DialogTrigger>
      <Dialog>
        <h2>Dialog Title</h2>
        <p>This is the dialog content</p>
      </Dialog>
    </DialogProvider>
  );
}
```

## Using with Custom Styled Elements

The `DialogTrigger` component can wrap any element using the `asChild` prop:

```tsx
import { DialogProvider, Dialog, DialogTrigger } from '@wcm/lunar';

function CustomTriggerExample() {
  return (
    <DialogProvider>
      <DialogTrigger asChild>
        <div className="custom-button-styles">Custom Trigger Element</div>
      </DialogTrigger>
      <Dialog>
        <h2>Dialog Title</h2>
        <p>This dialog was opened with a custom styled trigger</p>
      </Dialog>
    </DialogProvider>
  );
}
```

## Using with Existing Button Component

```tsx
import { DialogProvider, Dialog, DialogTrigger, Button } from '@wcm/lunar';

function ButtonTriggerExample() {
  return (
    <DialogProvider>
      <DialogTrigger asChild>
        <Button variant="primary" size="large">
          Open with Styled Button
        </Button>
      </DialogTrigger>
      <Dialog>
        <h2>Dialog Title</h2>
        <p>This dialog was opened using the Button component</p>
      </Dialog>
    </DialogProvider>
  );
}
```

## Programmatic Control

Use the `useDialog` hook to control the dialog programmatically:

```tsx
import { DialogProvider, Dialog, useDialog } from '@wcm/lunar';

function CustomControls() {
  const { isOpen, setIsOpen } = useDialog();

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Custom Open Button</button>
      {isOpen && <button onClick={() => setIsOpen(false)}>Custom Close Button</button>}
    </div>
  );
}

function ProgrammaticExample() {
  return (
    <DialogProvider>
      <CustomControls />
      <Dialog>
        <h2>Programmatically Controlled Dialog</h2>
        <p>This dialog is controlled via the useDialog hook</p>
      </Dialog>
    </DialogProvider>
  );
}
```

## Accessibility Features

The Dialog components include comprehensive accessibility features:

- **ARIA attributes**:
  - `aria-expanded` on triggers
  - `aria-haspopup="dialog"` on triggers
  - `aria-modal="true"` on dialogs

- **Keyboard handling**:
  - `Enter` and `Space` to open dialog from trigger
  - `Escape` to close dialog
  - Focus management between trigger and dialog

- **Screen reader support**:
  - Proper semantic markup with `<dialog>` element
  - State announcements for open/closed states

## API Reference

### DialogTriggerProps

```typescript
interface DialogTriggerProps extends ComponentProps<'button'> {
  /**
   * When true, renders as child element using Slot primitive
   * Allows trigger styles to be applied to any element
   */
  asChild?: boolean;
}
```

### useDialog Hook

```typescript
const { isOpen, setIsOpen, dialogRef } = useDialog();
```

Returns:

- `isOpen: boolean` - Current dialog open state
- `setIsOpen: (open: boolean) => void` - Function to control dialog state
- `dialogRef: RefObject<HTMLDialogElement | null>` - Ref to the dialog element

## Notes

- The `DialogProvider` must wrap all dialog-related components
- Only one dialog per provider is supported
- The `DialogTrigger` with `asChild` prop uses Radix UI's Slot pattern
- Native `<dialog>` element is used for optimal accessibility and browser support
