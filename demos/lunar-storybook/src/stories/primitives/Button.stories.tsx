import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Button } from '@wcm/lunar';

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const meta = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['fill', 'outline', 'ghost'] },
  },
  args: {
    children: 'Click me!',
    onClick: () => {
      alert('clicked!');
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
