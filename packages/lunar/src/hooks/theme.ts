import { use } from 'react';

import { ThemeContext } from '../themes/ThemeProvider/ThemeProvider.js';

const useTheme = () => {
  const themeContext = use(ThemeContext);
  if (!themeContext) {
    throw new Error('ThemeProvider is uninitialized');
  }

  return themeContext;
};

export { useTheme };
