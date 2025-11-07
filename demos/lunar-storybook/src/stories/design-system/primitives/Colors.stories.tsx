import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  COLORS__PURE,
  COLORS__SLATE,
  COLORS__STONE,
  COLORS__NEUTRAL,
  COLORS__RED,
  COLORS__BROWN,
  COLORS__ORANGE,
  COLORS__AMBER,
  COLORS__YELLOW,
  COLORS__LIME,
  COLORS__GREEN,
  COLORS__EMERALD,
  COLORS__TURQUOISE,
  COLORS__TEAL,
  COLORS__CYAN,
  COLORS__BLUE,
  COLORS__NAVY,
  COLORS__INDIGO,
  COLORS__VIOLET,
  COLORS__LAVENDER,
  COLORS__PURPLE,
  COLORS__FUCHSIA,
  COLORS__PLUM,
  COLORS__PINK,
  COLORS__ROSE,
} from '@wcm/lunar/src/index.js';

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
      <ColorScale colors={COLORS__SLATE} name="Slate (Cool Grey)" />
      <ColorScale colors={COLORS__STONE} name="Stone (Beige-Grey)" />
      <ColorScale colors={COLORS__NEUTRAL} name="Neutral (True Grey)" />
      <ColorScale colors={COLORS__RED} name="Red" />
      <ColorScale colors={COLORS__BROWN} name="Brown (Earthy)" />
      <ColorScale colors={COLORS__ORANGE} name="Orange" />
      <ColorScale colors={COLORS__AMBER} name="Amber (Golden Glow)" />
      <ColorScale colors={COLORS__YELLOW} name="Yellow" />
      <ColorScale colors={COLORS__LIME} name="Lime (Fresh Green-Yellow)" />
      <ColorScale colors={COLORS__GREEN} name="Green (Natural)" />
      <ColorScale colors={COLORS__EMERALD} name="Emerald (Jewel-like)" />
      <ColorScale colors={COLORS__TURQUOISE} name="Turquoise (Blue-Green)" />
      <ColorScale colors={COLORS__TEAL} name="Teal (Cool Accent)" />
      <ColorScale colors={COLORS__CYAN} name="Cyan (Vibrant)" />
      <ColorScale colors={COLORS__BLUE} name="Blue (Primary)" />
      <ColorScale colors={COLORS__NAVY} name="Navy (Dark Blue)" />
      <ColorScale colors={COLORS__INDIGO} name="Indigo (Deep)" />
      <ColorScale colors={COLORS__VIOLET} name="Violet (Rich)" />
      <ColorScale colors={COLORS__LAVENDER} name="Lavender (Soft Purple)" />
      <ColorScale colors={COLORS__PURPLE} name="Purple (Balanced)" />
      <ColorScale colors={COLORS__FUCHSIA} name="Fuchsia (Vibrant)" />
      <ColorScale colors={COLORS__PLUM} name="Plum (Deep Purple-Red)" />
      <ColorScale colors={COLORS__PINK} name="Pink (Vibrant)" />
      <ColorScale colors={COLORS__ROSE} name="Rose (Elegant)" />
    </div>
  ),
};

export const ByCategory: Story = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ marginBottom: '32px', fontSize: '32px', fontWeight: '700' }}>Colors by Category</h1>

      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: '600' }}>Neutrals</h2>
        <ColorScale colors={COLORS__SLATE} name="Slate (Cool)" />
        <ColorScale colors={COLORS__STONE} name="Stone (Beige)" />
        <ColorScale colors={COLORS__NEUTRAL} name="Neutral (True)" />
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: '600' }}>Warm Colors</h2>
        <ColorScale colors={COLORS__RED} name="Red" />
        <ColorScale colors={COLORS__BROWN} name="Brown" />
        <ColorScale colors={COLORS__ORANGE} name="Orange" />
        <ColorScale colors={COLORS__AMBER} name="Amber" />
        <ColorScale colors={COLORS__YELLOW} name="Yellow" />
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: '600' }}>Nature Colors</h2>
        <ColorScale colors={COLORS__LIME} name="Lime" />
        <ColorScale colors={COLORS__GREEN} name="Green" />
        <ColorScale colors={COLORS__EMERALD} name="Emerald" />
        <ColorScale colors={COLORS__TURQUOISE} name="Turquoise" />
        <ColorScale colors={COLORS__TEAL} name="Teal" />
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: '600' }}>Cool Colors</h2>
        <ColorScale colors={COLORS__CYAN} name="Cyan" />
        <ColorScale colors={COLORS__BLUE} name="Blue" />
        <ColorScale colors={COLORS__NAVY} name="Navy" />
        <ColorScale colors={COLORS__INDIGO} name="Indigo" />
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: '600' }}>Purple & Pink</h2>
        <ColorScale colors={COLORS__VIOLET} name="Violet" />
        <ColorScale colors={COLORS__LAVENDER} name="Lavender" />
        <ColorScale colors={COLORS__PURPLE} name="Purple" />
        <ColorScale colors={COLORS__FUCHSIA} name="Fuchsia" />
        <ColorScale colors={COLORS__PLUM} name="Plum" />
        <ColorScale colors={COLORS__PINK} name="Pink" />
        <ColorScale colors={COLORS__ROSE} name="Rose" />
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
        <ColorSwatch color={COLORS__SLATE[500]} name="Slate" />
        <ColorSwatch color={COLORS__STONE[500]} name="Stone" />
        <ColorSwatch color={COLORS__NEUTRAL[500]} name="Neutral" />
        <ColorSwatch color={COLORS__RED[500]} name="Red" />
        <ColorSwatch color={COLORS__BROWN[500]} name="Brown" />
        <ColorSwatch color={COLORS__ORANGE[500]} name="Orange" />
        <ColorSwatch color={COLORS__AMBER[500]} name="Amber" />
        <ColorSwatch color={COLORS__YELLOW[500]} name="Yellow" />
        <ColorSwatch color={COLORS__LIME[500]} name="Lime" />
        <ColorSwatch color={COLORS__GREEN[500]} name="Green" />
        <ColorSwatch color={COLORS__EMERALD[500]} name="Emerald" />
        <ColorSwatch color={COLORS__TURQUOISE[500]} name="Turquoise" />
        <ColorSwatch color={COLORS__TEAL[500]} name="Teal" />
        <ColorSwatch color={COLORS__CYAN[500]} name="Cyan" />
        <ColorSwatch color={COLORS__BLUE[500]} name="Blue" />
        <ColorSwatch color={COLORS__NAVY[500]} name="Navy" />
        <ColorSwatch color={COLORS__INDIGO[500]} name="Indigo" />
        <ColorSwatch color={COLORS__VIOLET[500]} name="Violet" />
        <ColorSwatch color={COLORS__LAVENDER[500]} name="Lavender" />
        <ColorSwatch color={COLORS__PURPLE[500]} name="Purple" />
        <ColorSwatch color={COLORS__FUCHSIA[500]} name="Fuchsia" />
        <ColorSwatch color={COLORS__PLUM[500]} name="Plum" />
        <ColorSwatch color={COLORS__PINK[500]} name="Pink" />
        <ColorSwatch color={COLORS__ROSE[500]} name="Rose" />
      </div>
    </div>
  ),
};
