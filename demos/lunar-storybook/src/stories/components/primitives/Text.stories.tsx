import { type Meta, type StoryObj } from '@storybook/react-vite';

import {
  Text,
  TEXT_VARIANT__DISPLAY,
  TEXT_VARIANT__HEADING,
  TEXT_VARIANT__SUBHEADING,
  TEXT_VARIANT__BODY,
  TEXT_VARIANT__CAPTION,
  TEXT_SIZE__XL,
  TEXT_SIZE__LG,
  TEXT_SIZE__MD,
  TEXT_SIZE__SM,
  TEXT_COLOR__PRIMARY,
  TEXT_COLOR__SECONDARY,
  TEXT_COLOR__MUTED,
  TEXT_COLOR__INTERACTIVE,
  TEXT_COLOR__SUCCESS,
  TEXT_COLOR__WARNING,
  TEXT_COLOR__DANGER,
  TEXT_COLOR__INFO,
  TEXT_COLOR__BRAND,
  TEXT_WEIGHT__LIGHT,
  TEXT_WEIGHT__MEDIUM,
  TEXT_WEIGHT__BOLD,
} from '@wcm/lunar/src/index.js';

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  tags: ['!autodocs', '!dev'],
};

export const DisplaySizes: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}>
      <Text {...args} as="h1" variant={TEXT_VARIANT__DISPLAY} size={TEXT_SIZE__XL} weight={TEXT_WEIGHT__BOLD}>
        Display XL - Hero Headlines
      </Text>
      <Text {...args} as="h2" variant={TEXT_VARIANT__DISPLAY} size={TEXT_SIZE__LG} weight={TEXT_WEIGHT__BOLD}>
        Display LG - Large Promotional Text
      </Text>
      <Text {...args} as="h3" variant={TEXT_VARIANT__DISPLAY} size={TEXT_SIZE__MD} weight={TEXT_WEIGHT__MEDIUM}>
        Display MD - Medium Display Text
      </Text>
    </div>
  ),
};

export const HeadingSizes: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '600px' }}>
      <Text {...args} as="h1" variant={TEXT_VARIANT__HEADING} size={TEXT_SIZE__XL} weight={TEXT_WEIGHT__MEDIUM}>
        Heading XL - Large Headings
      </Text>
      <Text {...args} as="h2" variant={TEXT_VARIANT__HEADING} size={TEXT_SIZE__LG} weight={TEXT_WEIGHT__MEDIUM}>
        Heading LG - Medium Headings
      </Text>
      <Text {...args} as="h3" variant={TEXT_VARIANT__HEADING} size={TEXT_SIZE__MD} weight={TEXT_WEIGHT__MEDIUM}>
        Heading MD - Small Headings
      </Text>
      <Text {...args} as="h4" variant={TEXT_VARIANT__HEADING} size={TEXT_SIZE__SM} weight={TEXT_WEIGHT__MEDIUM}>
        Heading SM - Tiny Headings
      </Text>
    </div>
  ),
};

export const BodySizes: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '600px' }}>
      <Text {...args} as="p" variant={TEXT_VARIANT__BODY} size={TEXT_SIZE__LG}>
        Body LG - Large body text for prominent content and important messaging
      </Text>
      <Text {...args} as="p" variant={TEXT_VARIANT__BODY} size={TEXT_SIZE__MD}>
        Body - Default body text for regular content and general reading
      </Text>
      <Text {...args} as="p" variant={TEXT_VARIANT__BODY} size={TEXT_SIZE__SM}>
        Body SM - Small body text for supporting content and detailed information
      </Text>
      <Text {...args} as="span" variant={TEXT_VARIANT__CAPTION} size={TEXT_SIZE__SM} color={TEXT_COLOR__MUTED}>
        Caption - For footnotes, captions, and fine print
      </Text>
    </div>
  ),
};

export const Colors: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '400px' }}>
      <Text {...args} as="p" color={TEXT_COLOR__PRIMARY}>
        Primary text color - main content
      </Text>
      <Text {...args} as="p" color={TEXT_COLOR__SECONDARY}>
        Secondary text color - supporting content
      </Text>
      <Text {...args} as="p" color={TEXT_COLOR__MUTED}>
        Muted text color - less important content
      </Text>
      <Text {...args} as="p" color={TEXT_COLOR__INTERACTIVE}>
        Interactive text color - links and actions
      </Text>
      <Text {...args} as="p" color={TEXT_COLOR__SUCCESS}>
        Success text color - positive messages
      </Text>
      <Text {...args} as="p" color={TEXT_COLOR__WARNING}>
        Warning text color - cautionary messages
      </Text>
      <Text {...args} as="p" color={TEXT_COLOR__DANGER}>
        Danger text color - error messages
      </Text>
      <Text {...args} as="p" color={TEXT_COLOR__INFO}>
        Info text color - informational messages
      </Text>
      <Text {...args} as="p" color={TEXT_COLOR__BRAND}>
        Brand text color - branded content
      </Text>
    </div>
  ),
};

export const Weights: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '400px' }}>
      <Text {...args} as="p" weight={TEXT_WEIGHT__LIGHT}>
        Light weight text - subtle content
      </Text>
      <Text {...args} as="p" weight={TEXT_WEIGHT__MEDIUM}>
        Medium weight text - default content
      </Text>
      <Text {...args} as="p" weight={TEXT_WEIGHT__BOLD}>
        Bold weight text - highly emphasized content
      </Text>
    </div>
  ),
};

export const SemanticVsVisual: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px' }}>
      <section>
        <Text
          {...args}
          as="h2"
          variant={TEXT_VARIANT__HEADING}
          size={TEXT_SIZE__LG}
          weight={TEXT_WEIGHT__MEDIUM}
          style={{ marginBottom: '0.5rem' }}
        >
          Semantic vs Visual Styling Examples
        </Text>

        {/* Large promotional text as semantic paragraph */}
        <Text
          {...args}
          as="p"
          variant={TEXT_VARIANT__DISPLAY}
          size={TEXT_SIZE__MD}
          weight={TEXT_WEIGHT__BOLD}
          color={TEXT_COLOR__BRAND}
          style={{ marginBottom: '1rem' }}
        >
          🎉 Special Offer: 50% Off Today Only!
        </Text>

        {/* Subheading that's smaller but semantically correct */}
        <Text
          {...args}
          as="h3"
          variant={TEXT_VARIANT__SUBHEADING}
          size={TEXT_SIZE__SM}
          weight={TEXT_WEIGHT__MEDIUM}
          color={TEXT_COLOR__SECONDARY}
          style={{ marginBottom: '0.5rem' }}
        >
          Technical Details (small heading for accessibility)
        </Text>

        {/* Body text with emphasis without changing semantics */}
        <Text
          {...args}
          as="p"
          variant={TEXT_VARIANT__BODY}
          size={TEXT_SIZE__MD}
          weight={TEXT_WEIGHT__BOLD}
          color={TEXT_COLOR__INTERACTIVE}
          style={{ marginBottom: '1rem' }}
        >
          This paragraph stands out visually while maintaining proper semantic meaning for screen readers.
        </Text>

        {/* Screen reader friendly but visually de-emphasized */}
        <Text
          {...args}
          as="h1"
          variant={TEXT_VARIANT__HEADING}
          size={TEXT_SIZE__MD}
          weight={TEXT_WEIGHT__MEDIUM}
          color={TEXT_COLOR__MUTED}
        >
          Main Page Title (semantically h1, visually de-emphasized)
        </Text>
      </section>
    </div>
  ),
};

const meta = {
  title: 'Components/Primitives/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    as: 'p' as const,
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The text content to display',
    },
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p', 'small'],
      description: 'The HTML element to render - maintains semantic meaning',
    },
    variant: {
      control: { type: 'select' },
      options: [
        TEXT_VARIANT__DISPLAY,
        TEXT_VARIANT__HEADING,
        TEXT_VARIANT__SUBHEADING,
        TEXT_VARIANT__BODY,
        TEXT_VARIANT__CAPTION,
      ],
      description: 'Text variant that defines the general purpose',
    },
    size: {
      control: { type: 'select' },
      options: [TEXT_SIZE__XL, TEXT_SIZE__LG, TEXT_SIZE__MD, TEXT_SIZE__SM],
      description: 'Visual size variant - independent of semantic element',
    },
    color: {
      control: { type: 'select' },
      options: [
        TEXT_COLOR__PRIMARY,
        TEXT_COLOR__SECONDARY,
        TEXT_COLOR__MUTED,
        TEXT_COLOR__INTERACTIVE,
        TEXT_COLOR__SUCCESS,
        TEXT_COLOR__WARNING,
        TEXT_COLOR__DANGER,
        TEXT_COLOR__INFO,
        TEXT_COLOR__BRAND,
      ],
      description: 'Text color variant',
    },
    weight: {
      control: { type: 'select' },
      options: [TEXT_WEIGHT__LIGHT, TEXT_WEIGHT__MEDIUM, TEXT_WEIGHT__BOLD],
      description: 'Font weight variant',
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
