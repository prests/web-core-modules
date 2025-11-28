import { type Meta, type StoryObj } from '@storybook/react-vite';

/**
 * NOTE: This import pattern (@lunar-js/lunar/src/index.js) is not the normal way to import @lunar-js/lunar.
 * This is done specifically for Storybook to promote better React docgen and ensure consistent
 * styling with vanilla-extract. For proper import examples, see the demos in /demos/lunar-react-router.
 */
import { Label, Input } from '@lunar-js/lunar/src/index.js';

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  tags: ['!autodocs', '!dev'],
  args: {
    children: 'Default Label',
  },
};

export const BasicLabel: Story = {
  args: {
    children: 'Basic Label Text',
  },
};

export const LabelWithIcon: Story = {
  render: args => (
    <Label {...args}>
      <span>📧</span>
      <span>Email Address</span>
    </Label>
  ),
};

export const LabelWithInput: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '300px' }}>
      <Label {...args} htmlFor="email-input">
        Email Address
      </Label>
      <Input id="email-input" type="email" placeholder="Enter your email" />
    </div>
  ),
};

export const LabelWithTextarea: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '300px' }}>
      <Label {...args} htmlFor="message-textarea">
        Message
      </Label>
      <textarea
        id="message-textarea"
        placeholder="Enter your message"
        style={{
          padding: '0.5rem',
          borderRadius: '0.375rem',
          border: '1px solid #d1d5db',
          fontFamily: 'inherit',
          fontSize: '14px',
          minHeight: '80px',
        }}
      />
    </div>
  ),
};

export const LabelWithSelect: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '300px' }}>
      <Label {...args} htmlFor="country-select">
        Country
      </Label>
      <select
        id="country-select"
        style={{
          padding: '0.5rem',
          borderRadius: '0.375rem',
          border: '1px solid #d1d5db',
          fontFamily: 'inherit',
          fontSize: '14px',
          backgroundColor: 'white',
        }}
      >
        <option value="">Select a country</option>
        <option value="us">United States</option>
        <option value="ca">Canada</option>
        <option value="uk">United Kingdom</option>
      </select>
    </div>
  ),
};

// Disabled state examples showcasing peer-disabled selectors
export const PeerDisabledInput: Story = {
  name: 'Peer Disabled - Input',
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>Enabled Input</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Input id="enabled-input" placeholder="Enabled" />
          <Label {...args} htmlFor="enabled-input">
            Enabled Label
          </Label>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>Disabled Input</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Input id="disabled-input" disabled placeholder="Disabled" />
          <Label {...args} htmlFor="disabled-input">
            Disabled Label (cursor: not-allowed, opacity: 0.5)
          </Label>
        </div>
      </div>
    </div>
  ),
};

export const PeerDisabledTextarea: Story = {
  name: 'Peer Disabled - Textarea',
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>Enabled Textarea</h4>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
          <textarea
            id="enabled-textarea"
            placeholder="Enabled"
            style={{
              padding: '0.5rem',
              borderRadius: '0.375rem',
              border: '1px solid #d1d5db',
              fontFamily: 'inherit',
              fontSize: '14px',
              minHeight: '60px',
              flex: 1,
            }}
          />
          <Label {...args} htmlFor="enabled-textarea">
            Enabled
          </Label>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>Disabled Textarea</h4>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
          <textarea
            id="disabled-textarea"
            disabled
            placeholder="Disabled"
            style={{
              padding: '0.5rem',
              borderRadius: '0.375rem',
              border: '1px solid #d1d5db',
              fontFamily: 'inherit',
              fontSize: '14px',
              minHeight: '60px',
              flex: 1,
              backgroundColor: '#f9fafb',
            }}
          />
          <Label {...args} htmlFor="disabled-textarea">
            Disabled (affected by peer)
          </Label>
        </div>
      </div>
    </div>
  ),
};

export const PeerDisabledSelect: Story = {
  name: 'Peer Disabled - Select',
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>Enabled Select</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <select
            id="enabled-select"
            style={{
              padding: '0.5rem',
              borderRadius: '0.375rem',
              border: '1px solid #d1d5db',
              fontFamily: 'inherit',
              fontSize: '14px',
              backgroundColor: 'white',
              flex: 1,
            }}
          >
            <option value="">Choose option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </select>
          <Label {...args} htmlFor="enabled-select">
            Enabled
          </Label>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>Disabled Select</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <select
            id="disabled-select"
            disabled
            style={{
              padding: '0.5rem',
              borderRadius: '0.375rem',
              border: '1px solid #d1d5db',
              fontFamily: 'inherit',
              fontSize: '14px',
              backgroundColor: '#f9fafb',
              flex: 1,
            }}
          >
            <option value="">Choose option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </select>
          <Label {...args} htmlFor="disabled-select">
            Disabled (affected by peer)
          </Label>
        </div>
      </div>
    </div>
  ),
};

// Group disabled examples showcasing group data-disabled selectors
export const GroupDisabled: Story = {
  name: 'Group Disabled - data-disabled',
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>Normal Group</h4>
        <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem' }}>
          <Label {...args}>
            <span>✓</span>
            <span>Normal label in enabled group</span>
          </Label>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>Group with data-disabled=&quot;true&quot;</h4>
        <div
          data-disabled="true"
          style={{
            padding: '1rem',
            border: '1px solid #e5e7eb',
            borderRadius: '0.5rem',
            backgroundColor: '#f9fafb',
          }}
        >
          <Label {...args}>
            <span>✗</span>
            <span>Label in disabled group (pointer-events: none, opacity: 0.5)</span>
          </Label>
        </div>
      </div>
    </div>
  ),
};

export const GroupDisabledFieldset: Story = {
  name: 'Group Disabled - Fieldset',
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
        <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>Enabled Fieldset</h4>
        <fieldset
          style={{
            padding: '1rem',
            border: '1px solid #e5e7eb',
            borderRadius: '0.5rem',
            boxSizing: 'border-box',
            width: '100%',
          }}
        >
          <legend>Personal Information</legend>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
            <Label {...args} htmlFor="enabled-name">
              <span>👤</span>
              <span>Name</span>
            </Label>
            <Input id="enabled-name" placeholder="Enter your name" />
          </div>
        </fieldset>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
        <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>Disabled Fieldset with data-disabled</h4>
        <fieldset
          data-disabled="true"
          style={{
            padding: '1rem',
            border: '1px solid #e5e7eb',
            borderRadius: '0.5rem',
            backgroundColor: '#f9fafb',
            boxSizing: 'border-box',
            width: '100%',
          }}
        >
          <legend style={{ opacity: 0.5 }}>Personal Information (Disabled)</legend>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
            <Label {...args} htmlFor="disabled-name">
              <span>👤</span>
              <span>Name (disabled by group)</span>
            </Label>
            <Input id="disabled-name" placeholder="Cannot edit" />
          </div>
        </fieldset>
      </div>
    </div>
  ),
};

// Complex form example showcasing multiple selector scenarios
export const ComplexFormExample: Story = {
  name: 'Complex Form - All Selectors',
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '500px' }}>
      <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>Contact Form - All Label Selector Examples</h3>

      {/* Regular form fields */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Label {...args} htmlFor="contact-name">
          <span>👤</span>
          <span>Full Name</span>
        </Label>
        <Input id="contact-name" placeholder="Enter your full name" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Label {...args} htmlFor="contact-email">
          <span>📧</span>
          <span>Email</span>
        </Label>
        <Input id="contact-email" type="email" placeholder="Enter your email" />
      </div>

      {/* Disabled input with peer-disabled label */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Input id="disabled-phone" disabled placeholder="Phone (disabled)" />
          <Label {...args} htmlFor="disabled-phone">
            <span>📞</span>
            <span>Phone (peer-disabled)</span>
          </Label>
        </div>
      </div>

      {/* Group disabled section */}
      <div
        data-disabled="true"
        style={{
          padding: '1rem',
          border: '1px dashed #d1d5db',
          borderRadius: '0.5rem',
          backgroundColor: '#f9fafb',
        }}
      >
        <h4 style={{ margin: '0 0 1rem 0', fontSize: '16px', fontWeight: 'bold', opacity: 0.7 }}>
          Disabled Section (data-disabled=&quot;true&quot;)
        </h4>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Label {...args}>
            <span>🏢</span>
            <span>Company (group disabled)</span>
          </Label>
          <Input placeholder="Cannot interact" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
          <Label {...args}>
            <span>💼</span>
            <span>Job Title (group disabled)</span>
          </Label>
          <Input placeholder="Cannot interact" />
        </div>
      </div>

      {/* Mixed form elements */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Label {...args} htmlFor="contact-message">
          <span>💬</span>
          <span>Message</span>
        </Label>
        <textarea
          id="contact-message"
          placeholder="Enter your message"
          style={{
            padding: '0.5rem',
            borderRadius: '0.375rem',
            border: '1px solid #d1d5db',
            fontFamily: 'inherit',
            fontSize: '14px',
            minHeight: '100px',
          }}
        />
      </div>
    </div>
  ),
};

// All states showcase
export const AllStates: Story = {
  render: args => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        width: '100%',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>Basic States</h4>

        <div>
          <Label {...args}>Default Label</Label>
        </div>

        <div>
          <Label {...args}>
            <span>🏷️</span>
            <span>Label with Icon</span>
          </Label>
        </div>

        <div>
          <Label {...args} style={{ color: '#ef4444' }}>
            <span>⚠️</span>
            <span>Error Label (custom styling)</span>
          </Label>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>Peer Disabled States</h4>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <input type="text" disabled style={{ padding: '0.25rem' }} />
          <Label {...args}>Peer disabled input</Label>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <select disabled style={{ padding: '0.25rem' }}>
            <option>Disabled</option>
          </select>
          <Label {...args}>Peer disabled select</Label>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
          <textarea disabled style={{ padding: '0.25rem', minHeight: '40px' }} />
          <Label {...args}>Peer disabled textarea</Label>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>Group Disabled States</h4>

        <div data-disabled="true" style={{ padding: '0.5rem', backgroundColor: '#f3f4f6', borderRadius: '0.25rem' }}>
          <Label {...args}>Group disabled label</Label>
        </div>

        <div data-disabled="true" style={{ padding: '0.5rem', backgroundColor: '#f3f4f6', borderRadius: '0.25rem' }}>
          <Label {...args}>
            <span>❌</span>
            <span>Group disabled with icon</span>
          </Label>
        </div>
      </div>
    </div>
  ),
};

const meta = {
  title: 'Components/Primitives/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Label component is built with vanilla-extract and includes comprehensive styling for various states:

- **Basic styling**: flex layout, proper typography, gap spacing
- **Peer disabled states**: Automatically styles labels when adjacent form elements are disabled
- **Group disabled states**: Responds to parent elements with \`data-disabled="true"\`
- **Form integration**: Works seamlessly with inputs, textareas, and select elements

## Selector Cases Covered:

1. **\`:disabled + &\`** - Adjacent disabled form element
2. **\`input:disabled + &\`** - Adjacent disabled input
3. **\`:is(input, select, textarea):disabled + &\`** - Any disabled form element
4. **\`[data-disabled="true"] &\`** - Parent element with data-disabled attribute

The component automatically applies \`cursor: not-allowed\` and \`opacity: 0.5\` for disabled states, and \`pointer-events: none\` with \`opacity: 0.5\` for group disabled states.
        `,
      },
    },
  },
  tags: ['autodocs'],
  args: {
    children: 'Label Text',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The content displayed inside the label (text, icons, or React components)',
    },
    htmlFor: {
      control: 'text',
      description: 'Associates the label with a form element by ID',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the label',
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
