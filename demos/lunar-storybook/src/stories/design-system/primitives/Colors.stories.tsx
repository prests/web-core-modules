import type { Meta, StoryObj } from '@storybook/react-vite';

/**
 * NOTE: This import pattern (@lunar-js/lunar/src/index.js) is not the normal way to import @lunar-js/lunar.
 * This is done specifically for Storybook to promote better React docgen and ensure consistent
 * styling with vanilla-extract. For proper import examples, see the demos in /demos/lunar-react-router.
 */
import {
  COLORS__PURE,
  COLORS__STONE,
  COLORS__RED,
  COLORS__GREEN,
  COLORS__GOLD,
  COLORS__PEARL,
  COLORS__YELLOW,
  COLORS__BLUE,
} from '@lunar-js/lunar/src/index.js';

const meta = {
  title: 'Design System/Primitives/Colors',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ColorSwatch = ({ color, name }: { color: string; name: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: `oklch(${color})`,
        borderRadius: '8px',
        border: '1px solid #e5e5e5',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    />
    <div style={{ fontSize: '12px', fontWeight: '500', textAlign: 'center' }}>{name}</div>
    <div style={{ fontSize: '10px', color: '#666', textAlign: 'center', fontFamily: 'monospace' }}>{color}</div>
  </div>
);

const ColorScale = ({ colors, name }: { colors: Record<string, string>; name: string }) => (
  <div style={{ marginBottom: '48px' }}>
    <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>{name}</h3>
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      {Object.entries(colors).map(([shade, color]) => (
        <ColorSwatch key={shade} color={color} name={shade} />
      ))}
    </div>
  </div>
);

export const AllColors: Story = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ marginBottom: '32px', fontSize: '32px', fontWeight: '700' }}>OKLCH Color Primitives</h1>

      <p style={{ marginBottom: '32px', fontSize: '16px', color: '#666', maxWidth: '800px' }}>
        Rich, vibrant color palettes using the OKLCH color space for perceptual uniformity, predictable lightness, and
        access to colors beyond the sRGB gamut. Each palette features consistent lightness progression and high chroma
        values for enhanced vibrancy.
      </p>

      <ColorScale colors={COLORS__PURE} name="Pure Colors" />
      <ColorScale colors={COLORS__STONE} name="Stone (Beige-Grey)" />
      <ColorScale colors={COLORS__RED} name="Red" />
      <ColorScale colors={COLORS__YELLOW} name="Yellow" />
      <ColorScale colors={COLORS__GREEN} name="Green" />
      <ColorScale colors={COLORS__BLUE} name="Blue" />
      <ColorScale colors={COLORS__GOLD} name="Gold" />
      <ColorScale colors={COLORS__PEARL} name="Pearl" />
    </div>
  ),
};

export const ByCategory: Story = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ marginBottom: '32px', fontSize: '32px', fontWeight: '700' }}>Colors by Category</h1>

      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: '600' }}>Neutrals</h2>
        <ColorScale colors={COLORS__STONE} name="Stone" />
        <ColorScale colors={COLORS__PEARL} name="Pearl" />
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: '600' }}>Warm Colors</h2>
        <ColorScale colors={COLORS__RED} name="Red" />
        <ColorScale colors={COLORS__YELLOW} name="Yellow" />
        <ColorScale colors={COLORS__GOLD} name="Gold" />
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: '600' }}>Cool Colors</h2>
        <ColorScale colors={COLORS__BLUE} name="Blue" />
        <ColorScale colors={COLORS__GREEN} name="Green" />
      </div>
    </div>
  ),
};

export const Primary500: Story = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ marginBottom: '32px', fontSize: '32px', fontWeight: '700' }}>Primary Colors (500 Shade)</h1>
      <p style={{ marginBottom: '32px', fontSize: '16px', color: '#666' }}>
        The primary color from each palette - perfect for brand colors and primary actions.
      </p>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <ColorSwatch color={COLORS__STONE[500]} name="Stone" />
        <ColorSwatch color={COLORS__RED[500]} name="Red" />
        <ColorSwatch color={COLORS__GREEN[500]} name="Green" />
        <ColorSwatch color={COLORS__BLUE[500]} name="Blue" />
        <ColorSwatch color={COLORS__GOLD[500]} name="Gold" />
        <ColorSwatch color={COLORS__PEARL[500]} name="Pearl" />
        <ColorSwatch color={COLORS__YELLOW[500]} name="Yellow" />
      </div>
    </div>
  ),
};
