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

const ThemeColorSwatch = ({ tokenName, tokenVar }: { tokenName: string; tokenVar: string }) => {
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

// Helper function to recursively collect color tokens from nested objects
const collectColorTokens = (
  obj: Record<string, unknown>,
  prefix = '',
  tokens: { name: string; var: string }[] = []
): { name: string; var: string }[] => {
  for (const [key, value] of Object.entries(obj)) {
    const currentPath = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      // This is a token leaf node
      tokens.push({ name: currentPath, var: value });
    } else if (value === null) {
      // Skip null tokens
      tokens.push({ name: currentPath, var: '' });
    } else if (typeof value === 'object') {
      // Recursively traverse nested objects
      collectColorTokens(value as Record<string, unknown>, currentPath, tokens);
    }
  }

  return tokens;
};

const ThemeColorCategory = ({
  categoryName,
  categoryKey,
}: {
  categoryName: string;
  categoryKey: keyof typeof themeContract.colors;
}) => {
  const categoryData = themeContract.colors[categoryKey];

  const categoryTokens = collectColorTokens(categoryData as Record<string, unknown>, categoryKey as string)
    .filter(token => token.var !== '') // Filter out empty tokens
    .sort((a, b) => a.name.localeCompare(b.name));

  if (categoryTokens.length === 0) return null;

  return (
    <div style={{ marginBottom: '48px' }}>
      <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>{categoryName}</h3>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {categoryTokens.map(token => (
          <ThemeColorSwatch key={token.name} tokenName={token.name} tokenVar={token.var} />
        ))}
      </div>
    </div>
  );
};

const ThemeDisplay = ({ themeName }: { themeName: string }) => {
  return (
    <div style={{ padding: '32px', fontFamily: 'system-ui, sans-serif' }}>
      <h2 style={{ marginBottom: '32px', fontSize: '24px', fontWeight: '700' }}>{themeName}</h2>

      <ThemeColorCategory categoryName="Action Colors" categoryKey="action" />
      <ThemeColorCategory categoryName="Text Colors" categoryKey="text" />
      <ThemeColorCategory categoryName="Surface Colors" categoryKey="surface" />
      <ThemeColorCategory categoryName="Border Colors" categoryKey="border" />
      <ThemeColorCategory categoryName="Icon Colors" categoryKey="icon" />
      <ThemeColorCategory categoryName="Input Colors" categoryKey="input" />
      <ThemeColorCategory categoryName="Shadow Colors" categoryKey="shadow" />
    </div>
  );
};

export const Default: Story = {
  render: () => <ThemeDisplay themeName="All Semantic Tokens" />,
};
