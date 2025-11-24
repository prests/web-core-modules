import { use } from 'react';

import { ThemeContext } from '../themes/ThemeProvider/ThemeProvider.js';
import { createUnitializedProviderError } from './utils.js';

const useTheme = () => {
  const themeContext = use(ThemeContext);
  if (!themeContext) {
    throw createUnitializedProviderError('ThemeProvider');
  }

  return themeContext;
};

export { useTheme };
