import { type Meta, type StoryObj } from '@storybook/react-vite';

import {
  Button,
  BUTTON_VARIANT__PRIMARY,
  BUTTON_VARIANT__SECONDARY,
  BUTTON_VARIANT__OUTLINE,
  BUTTON_VARIANT__DESTRUCTIVE,
  BUTTON_VARIANT__GHOST,
  BUTTON_VARIANT__LINK,
  BUTTON_SIZE__SMALL,
  BUTTON_SIZE__MEDIUM,
  BUTTON_SIZE__LARGE,
} from '@wcm/lunar/src/index.js';

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

export const Outline: Story = {
  render: args => <Button {...args} variant={BUTTON_VARIANT__OUTLINE} />,
};

export const Destructive: Story = {
  render: args => <Button {...args} variant={BUTTON_VARIANT__DESTRUCTIVE} />,
};

export const Ghost: Story = {
  render: args => <Button {...args} variant={BUTTON_VARIANT__GHOST} />,
};

export const Link: Story = {
  render: args => <Button {...args} variant={BUTTON_VARIANT__LINK} />,
};

export const Small: Story = {
  render: args => <Button {...args} size={BUTTON_SIZE__SMALL} />,
};

export const Medium: Story = {
  render: args => <Button {...args} size={BUTTON_SIZE__MEDIUM} />,
};

export const Large: Story = {
  render: args => <Button {...args} size={BUTTON_SIZE__LARGE} />,
};

export const AllVariants: Story = {
  render: args => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button {...args} variant={BUTTON_VARIANT__PRIMARY}>
        Primary
      </Button>
      <Button {...args} variant={BUTTON_VARIANT__SECONDARY}>
        Secondary
      </Button>
      <Button {...args} variant={BUTTON_VARIANT__OUTLINE}>
        Outline
      </Button>
      <Button {...args} variant={BUTTON_VARIANT__DESTRUCTIVE}>
        Destructive
      </Button>
      <Button {...args} variant={BUTTON_VARIANT__GHOST}>
        Ghost
      </Button>
      <Button {...args} variant={BUTTON_VARIANT__LINK}>
        Link
      </Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: args => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button {...args} size={BUTTON_SIZE__SMALL}>
        Small
      </Button>
      <Button {...args} size={BUTTON_SIZE__MEDIUM}>
        Medium
      </Button>
      <Button {...args} size={BUTTON_SIZE__LARGE}>
        Large
      </Button>
    </div>
  ),
};

const meta = {
  title: 'Components/Primitives/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    disabled: false,
    children: 'Click me!',
    onClick: () => {
      alert('clicked!');
    },
  },
  argTypes: {
    disabled: { description: 'Disabling a button prevents any "onClick" events from firing.' },
    children: { control: 'text', description: 'The content displayed inside the button (text or React component).' },
    onClick: { description: 'Function called when the button is clicked.' },
  },
} satisfies Meta<typeof Button>;

export default meta;
