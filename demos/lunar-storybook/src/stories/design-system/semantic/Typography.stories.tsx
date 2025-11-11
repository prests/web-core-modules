import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT__TIGHT,
  LINE_HEIGHT__RELAXED,
  LETTER_SPACING,
} from '@wcm/lunar/src/tokens/primitives/typography.js';

const meta = {
  title: 'Design System/Semantic/Typography',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ marginBottom: '32px', fontSize: '32px', fontWeight: '700' }}>Typography System</h1>

      <p style={{ marginBottom: '32px', fontSize: '16px', color: '#666', maxWidth: '800px' }}>
        A comprehensive typography system with font families, sizes, weights, line heights, and letter spacing tokens
        for consistent and accessible text styling across your application.
      </p>

      <div style={{ display: 'grid', gap: '32px', marginBottom: '48px' }}>
        <div style={{ padding: '24px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Font Families</h3>
          <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
            System-optimized font stacks for sans-serif, serif, and monospace typography.
          </p>
          <div style={{ display: 'grid', gap: '12px' }}>
            <div
              style={{
                fontFamily: Object.values(FONT_FAMILY.sans)
                  .filter(value => typeof value === 'string')
                  .join(', '),
                fontSize: '16px',
              }}
            >
              Sans-serif for UI and body text
            </div>
            <div
              style={{
                fontFamily: Object.values(FONT_FAMILY.serif)
                  .filter(value => typeof value === 'string')
                  .join(', '),
                fontSize: '16px',
              }}
            >
              Serif for traditional and long-form content
            </div>
            <div
              style={{
                fontFamily: Object.values(FONT_FAMILY.mono)
                  .filter(value => typeof value === 'string')
                  .join(', '),
                fontSize: '16px',
              }}
            >
              Monospace for code and data
            </div>
          </div>
        </div>

        <div style={{ padding: '24px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Font Sizes</h3>
          <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
            Harmonious scale from 12px to 128px with consistent ratios.
          </p>
          <div style={{ display: 'grid', gap: '8px' }}>
            <div style={{ fontSize: FONT_SIZE['4xl'] }}>Headline</div>
            <div style={{ fontSize: FONT_SIZE.xl }}>Subheading</div>
            <div style={{ fontSize: FONT_SIZE.base }}>Body text</div>
            <div style={{ fontSize: FONT_SIZE.sm, color: '#666' }}>Small text</div>
          </div>
        </div>

        <div style={{ padding: '24px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Font Weights</h3>
          <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
            Complete range from thin (100) to black (900) for proper hierarchy.
          </p>
          <div style={{ display: 'grid', gap: '8px' }}>
            <div style={{ fontWeight: FONT_WEIGHT.light, fontSize: '16px' }}>Light weight text</div>
            <div style={{ fontWeight: FONT_WEIGHT.normal, fontSize: '16px' }}>Normal weight text</div>
            <div style={{ fontWeight: FONT_WEIGHT.semibold, fontSize: '16px' }}>Semibold weight text</div>
            <div style={{ fontWeight: FONT_WEIGHT.bold, fontSize: '16px' }}>Bold weight text</div>
          </div>
        </div>
      </div>

      <div style={{ padding: '24px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Explore Primitives</h3>
        <p style={{ fontSize: '14px', color: '#666' }}>
          For detailed examples of each typography primitive, explore the individual stories in the &quot;Typography
          &gt; Primitives&quot; section. Each primitive has dedicated examples showing all available options and use
          cases.
        </p>
      </div>
    </div>
  ),
};

export const TypographyShowcase: Story = {
  render: () => (
    <div
      style={{
        padding: '32px',
        fontFamily: Object.values(FONT_FAMILY.sans)
          .filter(value => typeof value === 'string')
          .join(', '),
      }}
    >
      <h1
        style={{
          fontSize: FONT_SIZE['6xl'],
          fontWeight: FONT_WEIGHT.bold,
          lineHeight: LINE_HEIGHT__TIGHT['6xl'],
          marginBottom: '16px',
        }}
      >
        Typography Showcase
      </h1>

      <h2
        style={{
          fontSize: FONT_SIZE['4xl'],
          fontWeight: FONT_WEIGHT.semibold,
          lineHeight: LINE_HEIGHT__TIGHT['4xl'],
          marginBottom: '12px',
        }}
      >
        Large Heading
      </h2>

      <h3
        style={{
          fontSize: FONT_SIZE['2xl'],
          fontWeight: FONT_WEIGHT.medium,
          lineHeight: LINE_HEIGHT__TIGHT['2xl'],
          marginBottom: '8px',
        }}
      >
        Section Heading
      </h3>

      <p
        style={{
          fontSize: FONT_SIZE.base,
          fontWeight: FONT_WEIGHT.normal,
          lineHeight: LINE_HEIGHT__RELAXED.base,
          letterSpacing: LETTER_SPACING.normal,
          marginBottom: '16px',
          maxWidth: '600px',
        }}
      >
        This is a paragraph of body text demonstrating the default typography settings. It uses the base font size with
        relaxed line height for optimal readability. The text flows naturally and provides a comfortable reading
        experience.
      </p>

      <p
        style={{
          fontSize: FONT_SIZE.sm,
          fontWeight: FONT_WEIGHT.light,
          lineHeight: LINE_HEIGHT__RELAXED.sm,
          letterSpacing: LETTER_SPACING.wide,
          color: '#666',
          marginBottom: '16px',
        }}
      >
        This is smaller text with wide letter spacing, often used for captions or metadata.
      </p>

      <code
        style={{
          fontFamily: Object.values(FONT_FAMILY.mono)
            .filter(value => typeof value === 'string')
            .join(', '),
          fontSize: FONT_SIZE.sm,
          backgroundColor: '#f5f5f5',
          padding: '2px 4px',
          borderRadius: '4px',
        }}
      >
        const example = &quot;monospace font for code&quot;;
      </code>
    </div>
  ),
};
