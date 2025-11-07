import type { Meta, StoryObj } from '@storybook/react-vite';

import { SPACING } from '@wcm/lunar/src/index.js';

const meta = {
  title: 'Design System/Primitives/Spacing',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllSpacing: Story = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: 'system-ui, sans-serif' }}>
      {Object.entries(SPACING).map(([token, value]) => {
        const pixelEquivalent =
          value === '0' ? '0px' : (value === '1px' ? '1px' : `${(Number.parseFloat(value) * 16).toString()}px`);

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
            <div style={{ display: 'flex', gap: value, alignItems: 'center' }}>
              <div
                style={{
                  width: '60px',
                  height: '40px',
                  backgroundColor: '#3b82f6',
                  borderRadius: '4px',
                }}
              />
              <div
                style={{
                  width: '60px',
                  height: '40px',
                  backgroundColor: '#3b82f6',
                  borderRadius: '4px',
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  ),
};
