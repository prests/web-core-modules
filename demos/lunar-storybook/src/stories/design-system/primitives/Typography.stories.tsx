import type { Meta, StoryObj } from '@storybook/react-vite';

/**
 * NOTE: This import pattern (@lunar-js/lunar/src/index.js) is not the normal way to import @lunar-js/lunar.
 * This is done specifically for Storybook to promote better React docgen and ensure consistent
 * styling with vanilla-extract. For proper import examples, see the demos in /demos/lunar-react-router.
 */
import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LETTER_SPACING,
  LINE_HEIGHT__TIGHT,
  LINE_HEIGHT__RELAXED,
} from '@lunar-js/lunar/src/index.js';

const meta = {
  title: 'Design System/Primitives/Typography',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const FontFamilies: Story = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ marginBottom: '32px', fontSize: '32px', fontWeight: '700' }}>Font Families</h1>

      <p style={{ marginBottom: '32px', fontSize: '16px', color: '#666', maxWidth: '800px' }}>
        System-optimized font stacks for sans-serif, serif, and monospace typography. Each stack prioritizes modern
        system fonts with graceful fallbacks.
      </p>

      {/* Overview of all families */}
      <div style={{ display: 'grid', gap: '32px', marginBottom: '48px' }}>
        {Object.entries(FONT_FAMILY).map(([name, fonts]) => {
          const fontArray = Object.values(fonts).filter(value => typeof value === 'string');
          return (
            <div key={name} style={{ padding: '24px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
              <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </h3>
              <div style={{ fontSize: '12px', fontFamily: 'monospace', color: '#888', marginBottom: '16px' }}>
                {fontArray.join(', ')}
              </div>
              <div style={{ fontFamily: fontArray.join(', '), fontSize: '24px', marginBottom: '8px' }}>
                The quick brown fox jumps over the lazy dog
              </div>
              <div style={{ fontFamily: fontArray.join(', '), fontSize: '16px', color: '#666' }}>
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
                <br />
                abcdefghijklmnopqrstuvwxyz
                <br />
                0123456789 !@#$%^&*()
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed examples for each family */}
      <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: '600' }}>Usage Examples</h2>

      <div style={{ display: 'grid', gap: '32px' }}>
        {/* Sans-Serif Example */}
        <div style={{ padding: '24px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Sans-Serif</h3>
          <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
            Perfect for headings, body text, and user interfaces
          </p>
          <div
            style={{
              fontFamily: Object.values(FONT_FAMILY.sans)
                .filter(value => typeof value === 'string')
                .join(', '),
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '16px', fontWeight: '700' }}>Modern Design</div>
            <div style={{ fontSize: '24px', marginBottom: '16px', fontWeight: '500' }}>
              Clean and readable typography
            </div>
            <div style={{ fontSize: '16px', lineHeight: '1.6', color: '#666' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </div>
          </div>
        </div>

        {/* Serif Example */}
        <div style={{ padding: '24px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Serif</h3>
          <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
            Ideal for long-form reading and traditional designs
          </p>
          <div
            style={{
              fontFamily: Object.values(FONT_FAMILY.serif)
                .filter(value => typeof value === 'string')
                .join(', '),
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '16px', fontWeight: '700' }}>Classic Elegance</div>
            <div style={{ fontSize: '24px', marginBottom: '16px', fontWeight: '500' }}>Timeless and sophisticated</div>
            <div style={{ fontSize: '16px', lineHeight: '1.6', color: '#666' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </div>
          </div>
        </div>

        {/* Monospace Example */}
        <div style={{ padding: '24px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Monospace</h3>
          <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
            Perfect for code, data, and technical content
          </p>
          <div
            style={{
              fontFamily: Object.values(FONT_FAMILY.mono)
                .filter(value => typeof value === 'string')
                .join(', '),
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '16px', fontWeight: '700' }}>Code & Data</div>
            <div style={{ fontSize: '24px', marginBottom: '16px', fontWeight: '500' }}>Fixed-width precision</div>
            <div style={{ fontSize: '16px', lineHeight: '1.6', color: '#666' }}>
              const example = &quot;Every character has equal width&quot;;
              <br />
              function demo() &#123;
              <br />
              &nbsp;&nbsp;return &quot;Aligned and readable code&quot;;
              <br />
              &#125;
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

const FontSizeSample = ({ name, size, showPixels = true }: { name: string; size: string; showPixels?: boolean }) => {
  const pixelValue = showPixels ? ` (${(Number.parseInt(size) * 16).toString()}px)` : '';

  return (
    <div style={{ marginBottom: '24px', padding: '16px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
      <div style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '8px' }}>
        {name}
        {pixelValue}
      </div>
      <div style={{ fontSize: '10px', fontFamily: 'monospace', color: '#888', marginBottom: '12px' }}>{size}</div>
      <div style={{ fontSize: size }}>The quick brown fox jumps over the lazy dog</div>
    </div>
  );
};

export const FontSizes: Story = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ marginBottom: '32px', fontSize: '32px', fontWeight: '700' }}>Font Sizes</h1>

      <p style={{ marginBottom: '32px', fontSize: '16px', color: '#666', maxWidth: '800px' }}>
        A comprehensive scale of font sizes from extra small (12px) to extra large (128px). Based on a 16px base with
        consistent scaling ratios for harmonious typography hierarchy.
      </p>

      {/* Complete scale */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: '600' }}>Complete Scale</h2>
        <div style={{ display: 'grid', gap: '16px' }}>
          {Object.entries(FONT_SIZE).map(([name, size]) => (
            <FontSizeSample key={name} name={name} size={size} />
          ))}
        </div>
      </div>

      {/* Categorized examples */}
      <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: '600' }}>Usage Categories</h2>

      <div style={{ display: 'grid', gap: '32px' }}>
        {/* Small Sizes */}
        <div style={{ padding: '24px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Small Sizes</h3>
          <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
            Ideal for captions, metadata, body text, and compact interfaces.
          </p>
          <div style={{ display: 'grid', gap: '12px' }}>
            <div style={{ fontSize: FONT_SIZE.xs, padding: '8px 0' }}>xs - Caption text and metadata</div>
            <div style={{ fontSize: FONT_SIZE.sm, padding: '8px 0' }}>sm - Small body text and labels</div>
            <div style={{ fontSize: FONT_SIZE.base, padding: '8px 0' }}>base - Primary body text (16px baseline)</div>
          </div>
        </div>

        {/* Medium Sizes */}
        <div style={{ padding: '24px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Medium Sizes</h3>
          <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
            Perfect for subheadings, prominent text, and moderate emphasis.
          </p>
          <div style={{ display: 'grid', gap: '12px' }}>
            <div style={{ fontSize: FONT_SIZE.lg, padding: '8px 0' }}>lg - Large body text</div>
            <div style={{ fontSize: FONT_SIZE.xl, padding: '8px 0' }}>xl - Small headings</div>
            <div style={{ fontSize: FONT_SIZE['2xl'], padding: '8px 0' }}>2xl - Medium headings</div>
            <div style={{ fontSize: FONT_SIZE['3xl'], padding: '8px 0' }}>3xl - Large headings</div>
          </div>
        </div>

        {/* Large Sizes */}
        <div style={{ padding: '24px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Large Sizes</h3>
          <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
            Designed for headlines, hero text, and major visual impact.
          </p>
          <div style={{ display: 'grid', gap: '12px' }}>
            <div style={{ fontSize: FONT_SIZE['4xl'], padding: '8px 0', lineHeight: '1.1' }}>4xl - Hero headings</div>
            <div style={{ fontSize: FONT_SIZE['5xl'], padding: '8px 0', lineHeight: '1.1' }}>5xl - Display text</div>
            <div style={{ fontSize: FONT_SIZE['6xl'], padding: '8px 0', lineHeight: '1.1' }}>6xl - Large display</div>
            <div style={{ fontSize: FONT_SIZE['7xl'], padding: '8px 0', lineHeight: '1' }}>7xl - Extra large</div>
            <div style={{ fontSize: FONT_SIZE['8xl'], padding: '8px 0', lineHeight: '1' }}>8xl - Massive</div>
            <div style={{ fontSize: FONT_SIZE['9xl'], padding: '8px 0', lineHeight: '1' }}>9xl - Giant</div>
          </div>
        </div>

        {/* Typography Hierarchy Example */}
        <div style={{ padding: '24px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Hierarchy Example</h3>
          <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
            A typical content hierarchy using different font sizes.
          </p>
          <div>
            <h1 style={{ fontSize: FONT_SIZE['4xl'], fontWeight: '700', marginBottom: '16px', lineHeight: '1.1' }}>
              Main Article Title
            </h1>
            <h2 style={{ fontSize: FONT_SIZE['2xl'], fontWeight: '600', marginBottom: '12px', lineHeight: '1.2' }}>
              Section Heading
            </h2>
            <h3 style={{ fontSize: FONT_SIZE.xl, fontWeight: '500', marginBottom: '8px', lineHeight: '1.3' }}>
              Subsection Heading
            </h3>
            <p style={{ fontSize: FONT_SIZE.base, lineHeight: '1.6', marginBottom: '12px', color: '#333' }}>
              This is the main body text that would contain the bulk of the content. It uses the base font size for
              optimal readability.
            </p>
            <p style={{ fontSize: FONT_SIZE.sm, color: '#666', lineHeight: '1.5' }}>
              This is smaller text that might be used for captions, metadata, or secondary information.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
};

const FontWeightSample = ({ name, weight }: { name: string; weight: string }) => (
  <div style={{ marginBottom: '24px', padding: '16px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
    <div style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '8px' }}>
      {name} ({weight})
    </div>
    <div style={{ fontSize: '10px', fontFamily: 'monospace', color: '#888', marginBottom: '12px' }}>
      font-weight: {weight}
    </div>
    <div style={{ fontWeight: weight, fontSize: '24px' }}>The quick brown fox jumps over the lazy dog</div>
  </div>
);

export const FontWeights: Story = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ marginBottom: '32px', fontSize: '32px', fontWeight: '700' }}>Font Weights</h1>

      <p style={{ marginBottom: '32px', fontSize: '16px', color: '#666', maxWidth: '800px' }}>
        A complete range of font weights from thin (100) to black (900). These numeric values provide precise control
        over text emphasis and hierarchy.
      </p>

      {/* Complete scale */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: '600' }}>Complete Scale</h2>
        <div style={{ display: 'grid', gap: '16px' }}>
          {Object.entries(FONT_WEIGHT).map(([name, weight]) => (
            <FontWeightSample key={name} name={name} weight={weight} />
          ))}
        </div>
      </div>

      {/* Categorized examples */}
      <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: '600' }}>Usage Categories</h2>

      <div style={{ display: 'grid', gap: '32px' }}>
        {/* Light Weights */}
        <div style={{ padding: '24px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Light Weights</h3>
          <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
            Delicate weights for elegant, refined text. Use sparingly and ensure sufficient contrast.
          </p>
          <div style={{ display: 'grid', gap: '12px' }}>
            <div style={{ fontWeight: FONT_WEIGHT.thin, fontSize: '20px' }}>thin (100) - Ultra-light accent text</div>
            <div style={{ fontWeight: FONT_WEIGHT.extralight, fontSize: '20px' }}>
              extralight (200) - Subtle emphasis
            </div>
            <div style={{ fontWeight: FONT_WEIGHT.light, fontSize: '20px' }}>light (300) - Elegant body text</div>
          </div>
        </div>

        {/* Normal Weights */}
        <div style={{ padding: '24px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Normal Weights</h3>
          <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
            Standard weights for body text and everyday use. These provide optimal readability.
          </p>
          <div style={{ display: 'grid', gap: '12px' }}>
            <div style={{ fontWeight: FONT_WEIGHT.normal, fontSize: '20px' }}>normal (400) - Primary body text</div>
            <div style={{ fontWeight: FONT_WEIGHT.medium, fontSize: '20px' }}>
              medium (500) - Subtle emphasis and labels
            </div>
          </div>
        </div>

        {/* Bold Weights */}
        <div style={{ padding: '24px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Bold Weights</h3>
          <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
            Strong weights for headings, emphasis, and call-to-action elements.
          </p>
          <div style={{ display: 'grid', gap: '12px' }}>
            <div style={{ fontWeight: FONT_WEIGHT.semibold, fontSize: '20px' }}>
              semibold (600) - Subheadings and buttons
            </div>
            <div style={{ fontWeight: FONT_WEIGHT.bold, fontSize: '20px' }}>
              bold (700) - Headlines and strong emphasis
            </div>
            <div style={{ fontWeight: FONT_WEIGHT.extrabold, fontSize: '20px' }}>
              extrabold (800) - Display headings
            </div>
            <div style={{ fontWeight: FONT_WEIGHT.black, fontSize: '20px' }}>black (900) - Maximum impact</div>
          </div>
        </div>

        {/* Weight Comparison */}
        <div style={{ padding: '24px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Weight Comparison</h3>
          <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
            Side-by-side comparison showing the progression from light to bold weights.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            <div style={{ padding: '20px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
              <h4 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>Light</h4>
              <div style={{ fontWeight: FONT_WEIGHT.light, fontSize: '18px', marginBottom: '8px' }}>
                Regular paragraph text
              </div>
              <div style={{ fontWeight: FONT_WEIGHT.light, fontSize: '14px', color: '#666' }}>
                Subtle, elegant appearance
              </div>
            </div>

            <div style={{ padding: '20px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
              <h4 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>Medium</h4>
              <div style={{ fontWeight: FONT_WEIGHT.medium, fontSize: '18px', marginBottom: '8px' }}>
                Subheadings & emphasis
              </div>
              <div style={{ fontWeight: FONT_WEIGHT.medium, fontSize: '14px', color: '#666' }}>
                Balanced, readable weight
              </div>
            </div>

            <div style={{ padding: '20px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
              <h4 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>Bold</h4>
              <div style={{ fontWeight: FONT_WEIGHT.bold, fontSize: '18px', marginBottom: '8px' }}>
                Headlines & CTAs
              </div>
              <div style={{ fontWeight: FONT_WEIGHT.bold, fontSize: '14px', color: '#666' }}>Strong visual impact</div>
            </div>
          </div>
        </div>

        {/* Hierarchy Example */}
        <div style={{ padding: '24px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Weight Hierarchy Example</h3>
          <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
            A content example showing appropriate weight usage for different text roles.
          </p>
          <div>
            <h1 style={{ fontWeight: FONT_WEIGHT.bold, fontSize: '32px', marginBottom: '16px' }}>
              Article Title (Bold)
            </h1>
            <h2 style={{ fontWeight: FONT_WEIGHT.semibold, fontSize: '24px', marginBottom: '12px' }}>
              Section Heading (Semibold)
            </h2>
            <h3 style={{ fontWeight: FONT_WEIGHT.medium, fontSize: '18px', marginBottom: '8px' }}>
              Subsection Heading (Medium)
            </h3>
            <p style={{ fontWeight: FONT_WEIGHT.normal, fontSize: '16px', lineHeight: '1.6', marginBottom: '12px' }}>
              This is regular body text using normal weight. It provides excellent readability and is suitable for most
              content.
            </p>
            <p style={{ fontWeight: FONT_WEIGHT.light, fontSize: '14px', color: '#666' }}>
              This is supporting text using light weight for a more subtle appearance.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
};

const LetterSpacingSample = ({ name, spacing }: { name: string; spacing: string }) => (
  <div style={{ marginBottom: '24px', padding: '16px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
    <div style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '8px' }}>
      {name} ({spacing})
    </div>
    <div style={{ fontSize: '10px', fontFamily: 'monospace', color: '#888', marginBottom: '12px' }}>
      letter-spacing: {spacing}
    </div>
    <div style={{ letterSpacing: spacing, fontSize: '20px', marginBottom: '8px' }}>The quick brown fox jumps</div>
    <div style={{ letterSpacing: spacing, fontSize: '14px', color: '#666' }}>UPPERCASE TEXT EXAMPLE</div>
  </div>
);

export const LetterSpacing: Story = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ marginBottom: '32px', fontSize: '32px', fontWeight: '700' }}>Letter Spacing</h1>

      <p style={{ marginBottom: '32px', fontSize: '16px', color: '#666', maxWidth: '800px' }}>
        Letter spacing (tracking) controls the horizontal space between characters. Use tighter spacing for larger text
        and wider spacing for small text or uppercase letters.
      </p>

      <div style={{ display: 'grid', gap: '16px' }}>
        {Object.entries(LETTER_SPACING).map(([name, spacing]) => (
          <LetterSpacingSample key={name} name={name} spacing={spacing} />
        ))}
      </div>
    </div>
  ),
};

const LineHeightSample = ({ name, lineHeight }: { name: string; lineHeight: string }) => (
  <div style={{ marginBottom: '32px', padding: '16px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
    <div style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '8px' }}>
      {name} ({lineHeight})
    </div>
    <div style={{ fontSize: '10px', fontFamily: 'monospace', color: '#888', marginBottom: '12px' }}>
      line-height: {lineHeight}
    </div>
    <div style={{ lineHeight: lineHeight, fontSize: '16px', maxWidth: '500px' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </div>
);

export const LineHeights: Story = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ marginBottom: '32px', fontSize: '32px', fontWeight: '700' }}>Line Heights</h1>

      <p style={{ marginBottom: '32px', fontSize: '16px', color: '#666', maxWidth: '800px' }}>
        Line height controls the vertical space between lines of text. We provide both tight spacing for headlines and
        relaxed spacing for improved readability in body text.
      </p>

      <div style={{ display: 'grid', gap: '32px' }}>
        {/* Tight Line Heights */}
        <div>
          <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: '600' }}>Tight Line Heights</h2>
          <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
            Perfect for headlines and display text where space is at a premium.
          </p>
          <div style={{ display: 'grid', gap: '16px' }}>
            {Object.entries(LINE_HEIGHT__TIGHT).map(([name, lineHeight]) => (
              <LineHeightSample key={`tight-${name}`} name={`${name} (tight)`} lineHeight={lineHeight} />
            ))}
          </div>
        </div>

        {/* Relaxed Line Heights */}
        <div>
          <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: '600' }}>Relaxed Line Heights</h2>
          <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
            Ideal for body text and content that needs enhanced readability.
          </p>
          <div style={{ display: 'grid', gap: '16px' }}>
            {Object.entries(LINE_HEIGHT__RELAXED).map(([name, lineHeight]) => (
              <LineHeightSample key={`relaxed-${name}`} name={`${name} (relaxed)`} lineHeight={lineHeight} />
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
};
