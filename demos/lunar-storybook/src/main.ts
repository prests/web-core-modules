import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['./**/*.mdx', './**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: './vite.config.ts',
      },
    },
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractValuesFromUnion: true,
      shouldExtractLiteralValuesFromEnum: true,
      savePropValueAsString: true,
      shouldRemoveUndefinedFromOptional: true,
    } as never,
  },
};
export default config;
