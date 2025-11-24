import { createContext, type PropsWithChildren, type RefObject } from 'react';

interface DialogContextProps {
  isOpen: boolean;
  dialogRef: RefObject<HTMLDialogElement | null>;
}

const DialogContext = createContext<DialogContextProps | null>(null);

interface DialogProviderProps extends PropsWithChildren {
  isOpen: boolean;
  dialogRef: RefObject<HTMLDialogElement | null>;
}

const DialogProvider = ({ children, isOpen, dialogRef }: DialogProviderProps) => {
  return <DialogContext.Provider value={{ isOpen, dialogRef }}>{children}</DialogContext.Provider>;
};

export type { DialogContextProps };
export default DialogProvider;
export { DialogContext };
