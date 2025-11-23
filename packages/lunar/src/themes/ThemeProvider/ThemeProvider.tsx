import { type ReactNode, createContext, useMemo } from 'react';
import clsx from 'clsx';

import { darkColorScheme, lightColorScheme } from '../styles/color-scheme.css.js';
import type { ColorScheme } from '../../types/theming.js';
import { COLOR_SCHEME__DARK, COLOR_SCHEME__LIGHT, COLOR_SCHEME__SYSTEM } from '../../constants/theming.js';

interface ThemeProviderProps {
  children: (themeClassName: string) => ReactNode;
  themeClassName: string;
  colorScheme?: ColorScheme;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ThemeContextProps {}

const ThemeContext = createContext<ThemeContextProps | null>(null);

const ThemeProvider = ({ children, themeClassName, colorScheme = COLOR_SCHEME__SYSTEM }: ThemeProviderProps) => {
  const colorSchemeOverrideClassName = useMemo(() => {
    switch (colorScheme) {
      case COLOR_SCHEME__LIGHT: {
        return lightColorScheme;
      }
      case COLOR_SCHEME__DARK: {
        return darkColorScheme;
      }
      default: {
        return;
      }
    }
  }, [colorScheme]);

  return <ThemeContext value={{}}>{children(clsx(themeClassName, colorSchemeOverrideClassName))}</ThemeContext>;
};

export type { ThemeContextProps };
export default ThemeProvider;
export { ThemeContext };
