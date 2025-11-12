import type { Preview } from '@storybook/react-vite';
import { withThemeByClassName } from '@storybook/addon-themes';

import { regalTheme, themeContract } from '@wcm/lunar/src/index.js';
import { darkColorScheme, lightColorScheme, systemColorScheme } from './main.css.js';
import ColorSchemeWrapper from './components/decorators/ColorSchemeWrapper.js';

const preview: Preview = {
  initialGlobals: {
    backgrounds: { value: 'system' },
  },
  parameters: {
    backgrounds: {
      options: {
        system: { name: 'System Settings (default)', value: themeContract.colors.surface.bg.primary },
        dark: { name: 'Dark', value: themeContract.colors.surface.bg.primary },
        light: { name: 'Light', value: themeContract.colors.surface.bg.primary },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  decorators: [
    ColorSchemeWrapper({
      colorScheme: {
        light: lightColorScheme,
        dark: darkColorScheme,
        system: systemColorScheme,
      },
    }),
    withThemeByClassName({
      themes: {
        regal: regalTheme,
      },
      defaultTheme: 'regal',
    }),
  ],
};

export default preview;
