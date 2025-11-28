import { type Meta, type StoryObj } from '@storybook/react-vite';

/**
 * NOTE: This import pattern (@lunar-js/lunar/src/index.js) is not the normal way to import @lunar-js/lunar.
 * This is done specifically for Storybook to promote better React docgen and ensure consistent
 * styling with vanilla-extract. For proper import examples, see the demos in /demos/lunar-react-router.
 */
import {
  Text,
  TEXT_VARIANT__DISPLAY,
  TEXT_VARIANT__HEADING,
  TEXT_VARIANT__SUBHEADING,
  TEXT_VARIANT__BODY,
  TEXT_VARIANT__CAPTION,
  TEXT_VARIANT__LABEL,
  TEXT_SIZE__XL,
  TEXT_SIZE__LG,
  TEXT_SIZE__MD,
  TEXT_SIZE__SM,
  TEXT_COLOR__PRIMARY,
  TEXT_COLOR__SECONDARY,
  TEXT_COLOR__MUTED,
  TEXT_COLOR__DISABLED,
  TEXT_COLOR__INVERSE,
  TEXT_COLOR__INTERACTIVE,
  TEXT_COLOR__SUCCESS,
  TEXT_COLOR__WARNING,
  TEXT_COLOR__DANGER,
  TEXT_COLOR__INFO,
  TEXT_COLOR__BRAND,
  TEXT_COLOR__ACCENT,
  TEXT_WEIGHT__LIGHT,
  TEXT_WEIGHT__MEDIUM,
  TEXT_WEIGHT__BOLD,
} from '@lunar-js/lunar/src/index.js';

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  tags: ['!autodocs', '!dev'],
};

export const DisplaySizes: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
        <Text {...args} as="h1" variant={TEXT_VARIANT__DISPLAY} size={TEXT_SIZE__XL} weight={TEXT_WEIGHT__LIGHT}>
          Display XL Light - Elegant Hero Headlines
        </Text>
        <Text {...args} as="h1" variant={TEXT_VARIANT__DISPLAY} size={TEXT_SIZE__XL} weight={TEXT_WEIGHT__MEDIUM}>
          Display XL Medium - Balanced Hero Headlines
        </Text>
        <Text {...args} as="h1" variant={TEXT_VARIANT__DISPLAY} size={TEXT_SIZE__XL} weight={TEXT_WEIGHT__BOLD}>
          Display XL Bold - Strong Hero Headlines
        </Text>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
        <Text {...args} as="h2" variant={TEXT_VARIANT__DISPLAY} size={TEXT_SIZE__LG} weight={TEXT_WEIGHT__LIGHT}>
          Display LG Light - Subtle Large Promotional Text
        </Text>
        <Text {...args} as="h2" variant={TEXT_VARIANT__DISPLAY} size={TEXT_SIZE__LG} weight={TEXT_WEIGHT__MEDIUM}>
          Display LG Medium - Balanced Large Promotional Text
        </Text>
        <Text {...args} as="h2" variant={TEXT_VARIANT__DISPLAY} size={TEXT_SIZE__LG} weight={TEXT_WEIGHT__BOLD}>
          Display LG Bold - Strong Large Promotional Text
        </Text>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
        <Text {...args} as="h3" variant={TEXT_VARIANT__DISPLAY} size={TEXT_SIZE__MD} weight={TEXT_WEIGHT__LIGHT}>
          Display MD Light - Gentle Medium Display Text
        </Text>
        <Text {...args} as="h3" variant={TEXT_VARIANT__DISPLAY} size={TEXT_SIZE__MD} weight={TEXT_WEIGHT__MEDIUM}>
          Display MD Medium - Balanced Medium Display Text
        </Text>
        <Text {...args} as="h3" variant={TEXT_VARIANT__DISPLAY} size={TEXT_SIZE__MD} weight={TEXT_WEIGHT__BOLD}>
          Display MD Bold - Emphasized Medium Display Text
        </Text>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Text {...args} as="h4" variant={TEXT_VARIANT__DISPLAY} size={TEXT_SIZE__SM} weight={TEXT_WEIGHT__LIGHT}>
          Display SM Light - Delicate Small Display Text
        </Text>
        <Text {...args} as="h4" variant={TEXT_VARIANT__DISPLAY} size={TEXT_SIZE__SM} weight={TEXT_WEIGHT__MEDIUM}>
          Display SM Medium - Standard Small Display Text
        </Text>
        <Text {...args} as="h4" variant={TEXT_VARIANT__DISPLAY} size={TEXT_SIZE__SM} weight={TEXT_WEIGHT__BOLD}>
          Display SM Bold - Strong Small Display Text
        </Text>
      </div>
    </div>
  ),
};

export const HeadingSizes: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '600px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '0.75rem' }}>
        <Text {...args} as="h1" variant={TEXT_VARIANT__HEADING} size={TEXT_SIZE__XL} weight={TEXT_WEIGHT__LIGHT}>
          Heading XL Light - Delicate Large Headings
        </Text>
        <Text {...args} as="h1" variant={TEXT_VARIANT__HEADING} size={TEXT_SIZE__XL} weight={TEXT_WEIGHT__MEDIUM}>
          Heading XL Medium - Standard Large Headings
        </Text>
        <Text {...args} as="h1" variant={TEXT_VARIANT__HEADING} size={TEXT_SIZE__XL} weight={TEXT_WEIGHT__BOLD}>
          Heading XL Bold - Strong Large Headings
        </Text>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '0.75rem' }}>
        <Text {...args} as="h2" variant={TEXT_VARIANT__HEADING} size={TEXT_SIZE__LG} weight={TEXT_WEIGHT__LIGHT}>
          Heading LG Light - Subtle Medium Headings
        </Text>
        <Text {...args} as="h2" variant={TEXT_VARIANT__HEADING} size={TEXT_SIZE__LG} weight={TEXT_WEIGHT__MEDIUM}>
          Heading LG Medium - Balanced Medium Headings
        </Text>
        <Text {...args} as="h2" variant={TEXT_VARIANT__HEADING} size={TEXT_SIZE__LG} weight={TEXT_WEIGHT__BOLD}>
          Heading LG Bold - Emphasized Medium Headings
        </Text>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '0.75rem' }}>
        <Text {...args} as="h3" variant={TEXT_VARIANT__HEADING} size={TEXT_SIZE__MD} weight={TEXT_WEIGHT__LIGHT}>
          Heading MD Light - Gentle Small Headings
        </Text>
        <Text {...args} as="h3" variant={TEXT_VARIANT__HEADING} size={TEXT_SIZE__MD} weight={TEXT_WEIGHT__MEDIUM}>
          Heading MD Medium - Standard Small Headings
        </Text>
        <Text {...args} as="h3" variant={TEXT_VARIANT__HEADING} size={TEXT_SIZE__MD} weight={TEXT_WEIGHT__BOLD}>
          Heading MD Bold - Strong Small Headings
        </Text>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        <Text {...args} as="h4" variant={TEXT_VARIANT__HEADING} size={TEXT_SIZE__SM} weight={TEXT_WEIGHT__LIGHT}>
          Heading SM Light - Delicate Tiny Headings
        </Text>
        <Text {...args} as="h4" variant={TEXT_VARIANT__HEADING} size={TEXT_SIZE__SM} weight={TEXT_WEIGHT__MEDIUM}>
          Heading SM Medium - Standard Tiny Headings
        </Text>
        <Text {...args} as="h4" variant={TEXT_VARIANT__HEADING} size={TEXT_SIZE__SM} weight={TEXT_WEIGHT__BOLD}>
          Heading SM Bold - Strong Tiny Headings
        </Text>
      </div>
    </div>
  ),
};

export const SubheadingSizes: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '600px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '0.5rem' }}>
        <Text {...args} as="h1" variant={TEXT_VARIANT__SUBHEADING} size={TEXT_SIZE__XL} weight={TEXT_WEIGHT__LIGHT}>
          Subheading XL Light - Gentle extra large subheadings for major section divisions
        </Text>
        <Text {...args} as="h1" variant={TEXT_VARIANT__SUBHEADING} size={TEXT_SIZE__XL} weight={TEXT_WEIGHT__MEDIUM}>
          Subheading XL Medium - Balanced extra large subheadings for major section divisions
        </Text>
        <Text {...args} as="h1" variant={TEXT_VARIANT__SUBHEADING} size={TEXT_SIZE__XL} weight={TEXT_WEIGHT__BOLD}>
          Subheading XL Bold - Strong extra large subheadings for major section divisions
        </Text>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '0.5rem' }}>
        <Text {...args} as="h2" variant={TEXT_VARIANT__SUBHEADING} size={TEXT_SIZE__LG} weight={TEXT_WEIGHT__LIGHT}>
          Subheading LG Light - Subtle large subheadings for section divisions
        </Text>
        <Text {...args} as="h2" variant={TEXT_VARIANT__SUBHEADING} size={TEXT_SIZE__LG} weight={TEXT_WEIGHT__MEDIUM}>
          Subheading LG Medium - Standard large subheadings for section divisions
        </Text>
        <Text {...args} as="h2" variant={TEXT_VARIANT__SUBHEADING} size={TEXT_SIZE__LG} weight={TEXT_WEIGHT__BOLD}>
          Subheading LG Bold - Emphasized large subheadings for section divisions
        </Text>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '0.5rem' }}>
        <Text {...args} as="h3" variant={TEXT_VARIANT__SUBHEADING} size={TEXT_SIZE__MD} weight={TEXT_WEIGHT__LIGHT}>
          Subheading MD Light - Delicate medium subheadings for subsections
        </Text>
        <Text {...args} as="h3" variant={TEXT_VARIANT__SUBHEADING} size={TEXT_SIZE__MD} weight={TEXT_WEIGHT__MEDIUM}>
          Subheading MD Medium - Balanced medium subheadings for subsections
        </Text>
        <Text {...args} as="h3" variant={TEXT_VARIANT__SUBHEADING} size={TEXT_SIZE__MD} weight={TEXT_WEIGHT__BOLD}>
          Subheading MD Bold - Strong medium subheadings for subsections
        </Text>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        <Text {...args} as="h4" variant={TEXT_VARIANT__SUBHEADING} size={TEXT_SIZE__SM} weight={TEXT_WEIGHT__LIGHT}>
          Subheading SM Light - Gentle small subheadings for minor divisions
        </Text>
        <Text {...args} as="h4" variant={TEXT_VARIANT__SUBHEADING} size={TEXT_SIZE__SM} weight={TEXT_WEIGHT__MEDIUM}>
          Subheading SM Medium - Standard small subheadings for minor divisions
        </Text>
        <Text {...args} as="h4" variant={TEXT_VARIANT__SUBHEADING} size={TEXT_SIZE__SM} weight={TEXT_WEIGHT__BOLD}>
          Subheading SM Bold - Emphasized small subheadings for minor divisions
        </Text>
      </div>
    </div>
  ),
};

export const BodySizes: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '600px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '0.5rem' }}>
        <Text {...args} as="p" variant={TEXT_VARIANT__BODY} size={TEXT_SIZE__XL} weight={TEXT_WEIGHT__LIGHT}>
          Body XL Light - Gentle extra large body text for prominent content and hero messaging
        </Text>
        <Text {...args} as="p" variant={TEXT_VARIANT__BODY} size={TEXT_SIZE__XL} weight={TEXT_WEIGHT__MEDIUM}>
          Body XL Medium - Standard extra large body text for prominent content and hero messaging
        </Text>
        <Text {...args} as="p" variant={TEXT_VARIANT__BODY} size={TEXT_SIZE__XL} weight={TEXT_WEIGHT__BOLD}>
          Body XL Bold - Strong extra large body text for prominent content and hero messaging
        </Text>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '0.5rem' }}>
        <Text {...args} as="p" variant={TEXT_VARIANT__BODY} size={TEXT_SIZE__LG} weight={TEXT_WEIGHT__LIGHT}>
          Body LG Light - Subtle large body text for important content and featured messaging
        </Text>
        <Text {...args} as="p" variant={TEXT_VARIANT__BODY} size={TEXT_SIZE__LG} weight={TEXT_WEIGHT__MEDIUM}>
          Body LG Medium - Balanced large body text for important content and featured messaging
        </Text>
        <Text {...args} as="p" variant={TEXT_VARIANT__BODY} size={TEXT_SIZE__LG} weight={TEXT_WEIGHT__BOLD}>
          Body LG Bold - Emphasized large body text for important content and featured messaging
        </Text>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '0.5rem' }}>
        <Text {...args} as="p" variant={TEXT_VARIANT__BODY} size={TEXT_SIZE__MD} weight={TEXT_WEIGHT__LIGHT}>
          Body MD Light - Delicate default body text for regular content and general reading
        </Text>
        <Text {...args} as="p" variant={TEXT_VARIANT__BODY} size={TEXT_SIZE__MD} weight={TEXT_WEIGHT__MEDIUM}>
          Body MD Medium - Standard default body text for regular content and general reading
        </Text>
        <Text {...args} as="p" variant={TEXT_VARIANT__BODY} size={TEXT_SIZE__MD} weight={TEXT_WEIGHT__BOLD}>
          Body MD Bold - Strong default body text for regular content and general reading
        </Text>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        <Text {...args} as="p" variant={TEXT_VARIANT__BODY} size={TEXT_SIZE__SM} weight={TEXT_WEIGHT__LIGHT}>
          Body SM Light - Gentle small body text for supporting content and detailed information
        </Text>
        <Text {...args} as="p" variant={TEXT_VARIANT__BODY} size={TEXT_SIZE__SM} weight={TEXT_WEIGHT__MEDIUM}>
          Body SM Medium - Standard small body text for supporting content and detailed information
        </Text>
        <Text {...args} as="p" variant={TEXT_VARIANT__BODY} size={TEXT_SIZE__SM} weight={TEXT_WEIGHT__BOLD}>
          Body SM Bold - Strong small body text for supporting content and detailed information
        </Text>
      </div>
    </div>
  ),
};

export const Captions: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '500px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '0.5rem' }}>
        <Text
          {...args}
          as="span"
          variant={TEXT_VARIANT__CAPTION}
          size={TEXT_SIZE__XL}
          weight={TEXT_WEIGHT__LIGHT}
          color={TEXT_COLOR__MUTED}
        >
          Figure 1 Light: Delicate caption for major media content
        </Text>
        <Text
          {...args}
          as="span"
          variant={TEXT_VARIANT__CAPTION}
          size={TEXT_SIZE__XL}
          weight={TEXT_WEIGHT__MEDIUM}
          color={TEXT_COLOR__MUTED}
        >
          Figure 1 Medium: Standard caption for major media content
        </Text>
        <Text
          {...args}
          as="span"
          variant={TEXT_VARIANT__CAPTION}
          size={TEXT_SIZE__XL}
          weight={TEXT_WEIGHT__BOLD}
          color={TEXT_COLOR__MUTED}
        >
          Figure 1 Bold: Emphasized caption for major media content
        </Text>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '0.5rem' }}>
        <Text
          {...args}
          as="small"
          variant={TEXT_VARIANT__CAPTION}
          size={TEXT_SIZE__LG}
          weight={TEXT_WEIGHT__LIGHT}
          color={TEXT_COLOR__MUTED}
        >
          * Required field light - Please provide accurate information
        </Text>
        <Text
          {...args}
          as="small"
          variant={TEXT_VARIANT__CAPTION}
          size={TEXT_SIZE__LG}
          weight={TEXT_WEIGHT__MEDIUM}
          color={TEXT_COLOR__MUTED}
        >
          * Required field medium - Please provide accurate information
        </Text>
        <Text
          {...args}
          as="small"
          variant={TEXT_VARIANT__CAPTION}
          size={TEXT_SIZE__LG}
          weight={TEXT_WEIGHT__BOLD}
          color={TEXT_COLOR__MUTED}
        >
          * Required field bold - Please provide accurate information
        </Text>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '0.5rem' }}>
        <Text
          {...args}
          as="span"
          variant={TEXT_VARIANT__CAPTION}
          size={TEXT_SIZE__MD}
          weight={TEXT_WEIGHT__LIGHT}
          color={TEXT_COLOR__SECONDARY}
        >
          Last updated light: November 2024
        </Text>
        <Text
          {...args}
          as="span"
          variant={TEXT_VARIANT__CAPTION}
          size={TEXT_SIZE__MD}
          weight={TEXT_WEIGHT__MEDIUM}
          color={TEXT_COLOR__SECONDARY}
        >
          Last updated medium: November 2024
        </Text>
        <Text
          {...args}
          as="span"
          variant={TEXT_VARIANT__CAPTION}
          size={TEXT_SIZE__MD}
          weight={TEXT_WEIGHT__BOLD}
          color={TEXT_COLOR__SECONDARY}
        >
          Last updated bold: November 2024
        </Text>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        <Text
          {...args}
          as="span"
          variant={TEXT_VARIANT__CAPTION}
          size={TEXT_SIZE__SM}
          weight={TEXT_WEIGHT__LIGHT}
          color={TEXT_COLOR__SUCCESS}
        >
          ✓ Data light validated
        </Text>
        <Text
          {...args}
          as="span"
          variant={TEXT_VARIANT__CAPTION}
          size={TEXT_SIZE__SM}
          weight={TEXT_WEIGHT__MEDIUM}
          color={TEXT_COLOR__SUCCESS}
        >
          ✓ Data medium validated
        </Text>
        <Text
          {...args}
          as="span"
          variant={TEXT_VARIANT__CAPTION}
          size={TEXT_SIZE__SM}
          weight={TEXT_WEIGHT__BOLD}
          color={TEXT_COLOR__SUCCESS}
        >
          ✓ Data bold validated
        </Text>
      </div>
    </div>
  ),
};

export const Labels: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '400px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '0.5rem' }}>
        <Text {...args} as="span" variant={TEXT_VARIANT__LABEL} size={TEXT_SIZE__XL} weight={TEXT_WEIGHT__LIGHT}>
          Form Label XL Light - Delicate large labels
        </Text>
        <Text {...args} as="span" variant={TEXT_VARIANT__LABEL} size={TEXT_SIZE__XL} weight={TEXT_WEIGHT__MEDIUM}>
          Form Label XL Medium - Standard large labels
        </Text>
        <Text {...args} as="span" variant={TEXT_VARIANT__LABEL} size={TEXT_SIZE__XL} weight={TEXT_WEIGHT__BOLD}>
          Form Label XL Bold - Strong large labels
        </Text>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '0.5rem' }}>
        <Text {...args} as="span" variant={TEXT_VARIANT__LABEL} size={TEXT_SIZE__LG} weight={TEXT_WEIGHT__LIGHT}>
          Form Label LG Light - Subtle medium labels
        </Text>
        <Text {...args} as="span" variant={TEXT_VARIANT__LABEL} size={TEXT_SIZE__LG} weight={TEXT_WEIGHT__MEDIUM}>
          Form Label LG Medium - Balanced medium labels
        </Text>
        <Text {...args} as="span" variant={TEXT_VARIANT__LABEL} size={TEXT_SIZE__LG} weight={TEXT_WEIGHT__BOLD}>
          Form Label LG Bold - Emphasized medium labels
        </Text>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '0.5rem' }}>
        <Text {...args} as="span" variant={TEXT_VARIANT__LABEL} size={TEXT_SIZE__MD} weight={TEXT_WEIGHT__LIGHT}>
          Form Label MD Light - Gentle standard labels
        </Text>
        <Text {...args} as="span" variant={TEXT_VARIANT__LABEL} size={TEXT_SIZE__MD} weight={TEXT_WEIGHT__MEDIUM}>
          Form Label MD Medium - Standard form labels
        </Text>
        <Text {...args} as="span" variant={TEXT_VARIANT__LABEL} size={TEXT_SIZE__MD} weight={TEXT_WEIGHT__BOLD}>
          Form Label MD Bold - Strong standard labels
        </Text>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        <Text
          {...args}
          as="span"
          variant={TEXT_VARIANT__LABEL}
          size={TEXT_SIZE__SM}
          weight={TEXT_WEIGHT__LIGHT}
          color={TEXT_COLOR__MUTED}
        >
          Field Helper Text Light - Delicate helper text
        </Text>
        <Text {...args} as="span" variant={TEXT_VARIANT__LABEL} size={TEXT_SIZE__SM} weight={TEXT_WEIGHT__MEDIUM}>
          Form Label SM Medium - Standard small labels
        </Text>
        <Text {...args} as="span" variant={TEXT_VARIANT__LABEL} size={TEXT_SIZE__SM} weight={TEXT_WEIGHT__BOLD}>
          Required Field Label * - Strong small labels
        </Text>
      </div>
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
      <Text {...args} as="p" color={TEXT_COLOR__DISABLED}>
        Disabled text color - unavailable content
      </Text>
      <div style={{ backgroundColor: '#1a1a1a', padding: '8px', borderRadius: '4px' }}>
        <Text {...args} as="p" color={TEXT_COLOR__INVERSE}>
          Inverse text color - for dark backgrounds
        </Text>
      </div>
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
      <Text {...args} as="p" color={TEXT_COLOR__ACCENT}>
        Accent text color - highlighted content
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
  },
} satisfies Meta<typeof Text>;

export default meta;
