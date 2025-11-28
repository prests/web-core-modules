import { type Meta, type StoryObj } from '@storybook/react-vite';

/**
 * NOTE: This import pattern (@lunar-js/lunar/src/index.js) is not the normal way to import @lunar-js/lunar.
 * This is done specifically for Storybook to promote better React docgen and ensure consistent
 * styling with vanilla-extract. For proper import examples, see the demos in /demos/lunar-react-router.
 */
import { Input, Label } from '@lunar-js/lunar/src/index.js';

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  tags: ['!autodocs', '!dev'],
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithValue: Story = {
  args: {
    value: 'Sample text',
    placeholder: 'Enter text...',
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: 'This is placeholder text',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
    value: 'Cannot edit this',
  },
};

export const Required: Story = {
  args: {
    required: true,
    placeholder: 'Required field',
  },
};

export const WithError: Story = {
  args: {
    'aria-invalid': 'true',
    placeholder: 'Invalid input',
    value: 'This value has an error',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter your email',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Enter a number',
  },
};

export const FileUpload: Story = {
  args: {
    type: 'file',
    accept: 'image/*',
  },
};

export const AllStates: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <div>
        <label htmlFor="default-input" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '14px' }}>
          Default
        </label>
        <Input {...args} id="default-input" placeholder="Default state" />
      </div>
      <div>
        <label htmlFor="value-input" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '14px' }}>
          With Value
        </label>
        <Input {...args} id="value-input" value="Sample text" />
      </div>
      <div>
        <label htmlFor="disabled-input" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '14px' }}>
          Disabled
        </label>
        <Input {...args} id="disabled-input" disabled placeholder="Disabled input" />
      </div>
      <div>
        <label htmlFor="error-input" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '14px' }}>
          Error State
        </label>
        <Input {...args} id="error-input" aria-invalid="true" placeholder="Invalid input" />
      </div>
    </div>
  ),
};

export const InputWithLabel: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '350px' }}>
      {/* Basic Label + Input */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Label htmlFor="basic-input">
          <span>📧</span>
          <span>Email Address</span>
        </Label>
        <Input {...args} id="basic-input" type="email" placeholder="Enter your email address" />
      </div>

      {/* Required field */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Label htmlFor="required-input">
          <span>👤</span>
          <span>Full Name (Required)</span>
          <span style={{ color: '#ef4444' }}>*</span>
        </Label>
        <Input {...args} id="required-input" required placeholder="Enter your full name" />
      </div>

      {/* Disabled state - demonstrates peer-disabled selector */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Label htmlFor="disabled-input">
          <span>🚫</span>
          <span>Disabled Field (Label affected by peer-disabled)</span>
        </Label>
        <Input {...args} id="disabled-input" disabled placeholder="This field is disabled" />
        <p
          style={{
            fontSize: '12px',
            color: '#6b7280',
            margin: '0',
            fontStyle: 'italic',
          }}
        >
          Notice how the Label above has reduced opacity and &quot;not-allowed&quot; cursor when Input is disabled
        </p>
      </div>

      {/* Error state */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Label htmlFor="error-input">
          <span>⚠️</span>
          <span>Email with Error</span>
        </Label>
        <Input
          {...args}
          id="error-input"
          type="email"
          aria-invalid="true"
          value="invalid-email"
          placeholder="Enter valid email"
        />
        <p
          style={{
            fontSize: '12px',
            color: '#ef4444',
            margin: '0',
          }}
        >
          Please enter a valid email address
        </p>
      </div>

      {/* Side-by-side layout demonstrating peer-disabled behavior */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h4 style={{ margin: '0', fontSize: '14px', fontWeight: 'bold' }}>Peer-Disabled Behavior Comparison</h4>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            padding: '1rem',
            border: '1px solid #e5e7eb',
            borderRadius: '0.5rem',
            backgroundColor: '#f9fafb',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Input id="enabled-comparison" placeholder="Enabled" />
            <Label htmlFor="enabled-comparison">Normal</Label>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Input id="disabled-comparison" disabled placeholder="Disabled" />
            <Label htmlFor="disabled-comparison">Affected</Label>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
This story demonstrates the proper usage of Label and Input components together, showcasing:

- **Semantic HTML**: Proper label-input association using \`htmlFor\` and \`id\` attributes
- **Accessible Labels**: Clear, descriptive labels with icons for better UX
- **Peer-disabled behavior**: When an Input is disabled, adjacent Labels automatically get \`cursor: not-allowed\` and reduced opacity
- **Form states**: Required fields, error states, and disabled states
- **Layout patterns**: Both vertical stacking and side-by-side arrangements

The Label component's CSS automatically handles the disabled state styling when form elements are disabled, demonstrating the vanilla-extract selectors in action.
        `,
      },
    },
  },
};

export const InputTypes: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <div>
        <label htmlFor="text-input" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '14px' }}>
          Text
        </label>
        <Input {...args} id="text-input" type="text" placeholder="Enter text" />
      </div>
      <div>
        <label htmlFor="email-input" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '14px' }}>
          Email
        </label>
        <Input {...args} id="email-input" type="email" placeholder="Enter email" />
      </div>
      <div>
        <label htmlFor="password-input" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '14px' }}>
          Password
        </label>
        <Input {...args} id="password-input" type="password" placeholder="Enter password" />
      </div>
      <div>
        <label htmlFor="number-input" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '14px' }}>
          Number
        </label>
        <Input {...args} id="number-input" type="number" placeholder="Enter number" />
      </div>
      <div>
        <label htmlFor="file-input" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '14px' }}>
          File
        </label>
        <Input {...args} id="file-input" type="file" accept="image/*" />
      </div>
    </div>
  ),
};

const meta = {
  title: 'Components/Primitives/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    placeholder: 'Enter text...',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'file'],
      description: 'The type of input field',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed when the input is empty',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
    },
    'aria-invalid': {
      control: 'boolean',
      description: 'Whether the input has validation errors',
    },
    value: {
      control: 'text',
      description: 'The value of the input',
    },
    onChange: {
      description: 'Function called when the input value changes',
    },
    onFocus: {
      description: 'Function called when the input receives focus',
    },
    onBlur: {
      description: 'Function called when the input loses focus',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
