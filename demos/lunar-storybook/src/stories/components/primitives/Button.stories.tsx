import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Button, BUTTON_VARIANT__PRIMARY, BUTTON_VARIANT__SECONDARY } from '@wcm/lunar/src/index.js';

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  tags: ['!autodocs', '!dev'],
};

export const Primary: Story = {
  argTypes: {
    variant: {
      control: false,
    },
  },
  args: {
    variant: BUTTON_VARIANT__PRIMARY,
  },
  render: args => <Button {...args} />,
};

export const Secondary: Story = {
  render: args => <Button {...args} variant={BUTTON_VARIANT__SECONDARY} />,
};

const meta = {
  title: 'Components/Primitives/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Click me!',
    onClick: () => {
      alert('clicked!');
    },
  },
  argTypes: {
    children: { control: 'text', description: 'The content displayed inside the button (text or React component).' },
    onClick: { description: 'Function called when the button is clicked.' },
  },
} satisfies Meta<typeof Button>;

export default meta;
