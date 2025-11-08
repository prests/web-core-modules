import { StoryContext } from '@storybook/react-vite';
import { useEffect } from 'react';

interface ColorSchemeByClassNameProps {
  colorScheme: {
    light: string;
    dark: string;
  };
  parentSelector?: string;
}

const DEFAULT_PARENT_SELECTOR = 'html';

const withColorSchemeByClassName = ({
  colorScheme,
  parentSelector = DEFAULT_PARENT_SELECTOR,
}: ColorSchemeByClassNameProps) => {
  const { light, dark } = colorScheme;

  return (storyFn: any, context: StoryContext) => {
    const { value: colorScheme } = context.globals?.backgrounds ?? {};

    useEffect(() => {
      const colorSchemeClassName = colorScheme === 'dark' ? dark : light;

      const parentElement = document.querySelector(parentSelector);
      if (!parentElement) {
        return;
      }

      parentElement.classList.add(colorSchemeClassName);
    }, [colorScheme]);

    return storyFn();
  };
};

export { withColorSchemeByClassName };
