import type { Meta, StoryObj } from '@storybook/react-vite';

/**
 * NOTE: This import pattern (@lunar-js/lunar/src/index.js) is not the normal way to import @lunar-js/lunar.
 * This is done specifically for Storybook to promote better React docgen and ensure consistent
 * styling with vanilla-extract. For proper import examples, see the demos in /demos/lunar-react-router.
 */
import { BOX_SHADOW } from '@lunar-js/lunar/src/index.js';

const meta = {
  title: 'Design System/Primitives/Shadows',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllShadows: Story = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: 'system-ui, sans-serif' }}>
      {Object.entries(BOX_SHADOW).map(([token, value]) => (
        <div key={token} style={{ marginBottom: '32px' }}>
          <div
            style={{
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '16px',
              fontFamily: 'monospace',
            }}
          >
            {token}: {value}
          </div>
          <div
            style={{
              width: '200px',
              height: '120px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: value,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              color: '#64748b',
              fontWeight: '500',
            }}
          >
            Shadow: {token}
          </div>
        </div>
      ))}
    </div>
  ),
};
