import type { Meta, StoryObj } from '@storybook/react-vite';

/**
 * NOTE: This import pattern (@wcm/lunar/src/index.js) is not the normal way to import @wcm/lunar.
 * This is done specifically for Storybook to promote better React docgen and ensure consistent
 * styling with vanilla-extract. For proper import examples, see the demos in /demos/lunar-react-router.
 */
import { BORDER_RADIUS, BORDER_WIDTH } from '@wcm/lunar/src/index.js';

const meta = {
  title: 'Design System/Primitives/Borders',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const BorderRadius: Story = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: 'system-ui, sans-serif' }}>
      <h2 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '600' }}>Border Radius</h2>
      {Object.entries(BORDER_RADIUS).map(([token, value]) => {
        const pixelEquivalent =
          value === '0'
            ? '0px'
            : value === '9999px'
              ? 'full (9999px)'
              : `${(Number.parseFloat(value) * 16).toString()}px`;

        return (
          <div key={token} style={{ marginBottom: '24px' }}>
            <div
              style={{
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '8px',
                fontFamily: 'monospace',
              }}
            >
              {token}: {value} ({pixelEquivalent})
            </div>
            <div
              style={{
                width: '120px',
                height: '80px',
                backgroundColor: '#3b82f6',
                borderRadius: value,
                border: '2px solid #1e40af',
              }}
            />
          </div>
        );
      })}
    </div>
  ),
};

export const BorderWidth: Story = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: 'system-ui, sans-serif' }}>
      <h2 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '600' }}>Border Width</h2>
      {Object.entries(BORDER_WIDTH).map(([token, value]) => {
        return (
          <div key={token} style={{ marginBottom: '24px' }}>
            <div
              style={{
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '8px',
                fontFamily: 'monospace',
              }}
            >
              {token}: {value}
            </div>
            <div
              style={{
                width: '120px',
                height: '80px',
                backgroundColor: '#f8fafc',
                borderRadius: '8px',
                border: `${value} solid #3b82f6`,
              }}
            />
          </div>
        );
      })}
    </div>
  ),
};

export const CombinedExample: Story = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px' }}>
        {Object.entries(BORDER_RADIUS)
          .slice(0, 6)
          .map(([radiusToken, radiusValue]) =>
            Object.entries(BORDER_WIDTH)
              .slice(1, 4)
              .map(([widthToken, widthValue]) => (
                <div key={`${radiusToken}-${widthToken}`} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      width: '100px',
                      height: '80px',
                      backgroundColor: '#f1f5f9',
                      borderRadius: radiusValue,
                      border: `${widthValue} solid #3b82f6`,
                      margin: '0 auto 8px',
                    }}
                  />
                  <div style={{ fontSize: '12px', fontFamily: 'monospace', color: '#64748b' }}>
                    radius: {radiusToken}
                    <br />
                    width: {widthToken}
                  </div>
                </div>
              ))
          )}
      </div>
    </div>
  ),
};
