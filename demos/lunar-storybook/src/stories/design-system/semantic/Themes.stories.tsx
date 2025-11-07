import type { Meta, StoryObj } from '@storybook/react-vite';

import { themeContract } from '@wcm/lunar/src/index.js';

const meta = {
  title: 'Design System/Semantic/Themes',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ThemeColorSwatch = ({ tokenName }: { tokenName: string }) => {
  const tokenVar = themeContract.colors[tokenName as keyof typeof themeContract.colors];

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: tokenVar,
            borderRadius: '8px',
            border: '1px solid #e5e5e5',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        />
        <div
          style={{
            fontSize: '12px',
            fontWeight: '500',
            textAlign: 'center',
            wordBreak: 'break-word',
            maxWidth: '120px',
          }}
        >
          {tokenName}
        </div>
      </div>
    </div>
  );
};

const ThemeColorCategory = ({ categoryName, categoryPrefix }: { categoryName: string; categoryPrefix: string }) => {
  const categoryTokens = Object.keys(themeContract.colors)
    .filter(key => key.startsWith(categoryPrefix))
    .sort();

  if (categoryTokens.length === 0) return null;

  return (
    <div style={{ marginBottom: '48px' }}>
      <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>{categoryName}</h3>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {categoryTokens.map(tokenName => (
          <ThemeColorSwatch key={tokenName} tokenName={tokenName} />
        ))}
      </div>
    </div>
  );
};

const ThemeDisplay = ({ themeName }: { themeName: string }) => {
  return (
    <div style={{ padding: '32px', fontFamily: 'system-ui, sans-serif' }}>
      <h2 style={{ marginBottom: '32px', fontSize: '24px', fontWeight: '700' }}>{themeName}</h2>

      <ThemeColorCategory categoryName="Action Colors" categoryPrefix="action." />
      <ThemeColorCategory categoryName="Text Colors" categoryPrefix="text." />
      <ThemeColorCategory categoryName="Surface Colors" categoryPrefix="surface." />
      <ThemeColorCategory categoryName="Border Colors" categoryPrefix="border." />
      <ThemeColorCategory categoryName="Icon Colors" categoryPrefix="icon." />
      <ThemeColorCategory categoryName="Input Colors" categoryPrefix="input." />
      <ThemeColorCategory categoryName="Shadow Colors" categoryPrefix="shadow." />
    </div>
  );
};

export const Default: Story = {
  render: () => <ThemeDisplay themeName="All Semantic Tokens" />,
};
