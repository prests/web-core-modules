import { use } from 'react';

import { DialogContext } from '../components/composite/Dialog/DialogProvider.js';
import { createUnitializedProviderError } from './utils.js';

const useDialog = () => {
  const dialogContext = use(DialogContext);
  if (!dialogContext) {
    throw createUnitializedProviderError('DialogProvider');
  }

  return dialogContext;
};

export { useDialog };
