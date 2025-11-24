import { type Meta, type StoryObj } from '@storybook/react-vite';

/**
 * NOTE: This import pattern (@wcm/lunar/src/index.js) is not the normal way to import @wcm/lunar.
 * This is done specifically for Storybook to promote better React docgen and ensure consistent
 * styling with vanilla-extract. For proper import examples, see the demos in /demos/lunar-react-router.
 */
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  Button,
  Text,
  Input,
  Label,
  BUTTON_VARIANT__PRIMARY,
  BUTTON_VARIANT__OUTLINE,
  BUTTON_VARIANT__DESTRUCTIVE,
  DialogClose,
} from '@wcm/lunar/src/index.js';

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: () => (
    <Dialog renderTrigger={() => <DialogTrigger>Open Simple Dialog</DialogTrigger>}>
      <DialogContent>
        <Text as="p">This is a simple dialog with basic content.</Text>
        <DialogClose>Close</DialogClose>
      </DialogContent>
    </Dialog>
  ),
};

export const WithHeaderAndFooter: Story = {
  render: () => (
    <Dialog renderTrigger={() => <DialogTrigger variant={BUTTON_VARIANT__PRIMARY}>Open Styled Dialog</DialogTrigger>}>
      <DialogContent>
        <DialogHeader>
          <Text as="h2" variant="heading" size="sm">
            Dialog Title
          </Text>
          <Text as="p" variant="body" size="sm" color="secondary">
            This dialog demonstrates the new theming and styling implementation
          </Text>
        </DialogHeader>

        <Text as="p">
          This dialog showcases the new responsive design, darkened backdrop, and smooth animations. Try resizing your
          browser to see how it adapts from mobile fullscreen to desktop modal.
        </Text>

        <DialogFooter>
          <DialogClose variant={BUTTON_VARIANT__OUTLINE}>Cancel</DialogClose>
          <Button variant={BUTTON_VARIANT__PRIMARY}>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithContent: Story = {
  render: () => (
    <Dialog renderTrigger={() => <DialogTrigger variant={BUTTON_VARIANT__PRIMARY}>Open Dialog</DialogTrigger>}>
      <DialogContent>
        <DialogHeader>
          <Text as="h2" variant="heading" size="sm">
            Dialog Title
          </Text>
        </DialogHeader>

        <Text as="p">
          This dialog contains structured content. Perfect for forms, confirmations, or detailed information displays.
        </Text>

        <DialogFooter>
          <DialogClose variant={BUTTON_VARIANT__OUTLINE}>Close</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const ConfirmationDialog: Story = {
  render: () => (
    <Dialog renderTrigger={() => <DialogTrigger variant={BUTTON_VARIANT__DESTRUCTIVE}>Delete Item</DialogTrigger>}>
      <DialogContent>
        <DialogHeader>
          <Text as="h2" variant="heading" size="sm">
            Confirm Deletion
          </Text>
        </DialogHeader>

        <Text as="p">Are you sure you want to delete this item? This action cannot be undone.</Text>

        <DialogFooter>
          <DialogClose variant={BUTTON_VARIANT__OUTLINE}>Cancel</DialogClose>
          <Button variant={BUTTON_VARIANT__DESTRUCTIVE}>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const FormDialog: Story = {
  render: () => (
    <Dialog renderTrigger={() => <DialogTrigger variant={BUTTON_VARIANT__PRIMARY}>Create New Project</DialogTrigger>}>
      <DialogContent>
        <DialogHeader>
          <Text as="h2" variant="heading" size="sm">
            Create New Project
          </Text>
        </DialogHeader>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <Label htmlFor="project-name">Project Name</Label>
            <Input id="project-name" type="text" placeholder="Enter project name" />
          </div>
          <div>
            <Label htmlFor="project-description">Description</Label>
            <Input id="project-description" type="text" placeholder="Brief project description" />
          </div>
        </div>

        <DialogFooter>
          <DialogClose variant={BUTTON_VARIANT__OUTLINE}>Cancel</DialogClose>
          <Button variant={BUTTON_VARIANT__PRIMARY}>Create Project</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const LargeContentDialog: Story = {
  render: () => (
    <Dialog renderTrigger={() => <DialogTrigger variant={BUTTON_VARIANT__OUTLINE}>View Details</DialogTrigger>}>
      <DialogContent>
        <DialogHeader>
          <Text as="h2" variant="heading" size="sm">
            Terms and Conditions
          </Text>
        </DialogHeader>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '60vh', overflow: 'auto' }}>
          <Text as="h3" variant="subheading">
            1. Acceptance of Terms
          </Text>
          <Text as="p">
            By accessing and using this service, you accept and agree to be bound by the terms and provision of this
            agreement. If you do not agree to abide by the above, please do not use this service.
          </Text>
          <Text as="h3" variant="subheading">
            2. Use License
          </Text>
          <Text as="p">
            Permission is granted to temporarily download one copy of the materials on our website for personal,
            non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
          </Text>
          <Text as="h3" variant="subheading">
            3. Privacy Policy
          </Text>
          <Text as="p">
            Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your
            information when you use our service. By using our service, you agree to the collection and use of
            information in accordance with our Privacy Policy.
          </Text>
          <Text as="h3" variant="subheading">
            4. Disclaimer
          </Text>
          <Text as="p">
            The materials on our website are provided on an &apos;as is&apos; basis. We make no warranties, expressed or
            implied, and hereby disclaim and negate all other warranties including without limitation, implied
            warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </Text>
        </div>

        <DialogFooter>
          <DialogClose variant={BUTTON_VARIANT__OUTLINE}>Decline</DialogClose>
          <Button variant={BUTTON_VARIANT__PRIMARY}>Accept</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const MultipleDialogs: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Dialog renderTrigger={() => <DialogTrigger variant={BUTTON_VARIANT__PRIMARY}>Info Dialog</DialogTrigger>}>
        <DialogContent>
          <Text as="p">This is an informational dialog with important details.</Text>

          <DialogFooter>
            <DialogClose>Close</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog renderTrigger={() => <DialogTrigger variant={BUTTON_VARIANT__OUTLINE}>Settings Dialog</DialogTrigger>}>
        <DialogContent>
          <DialogHeader>
            <Text as="h2" variant="heading" size="sm">
              Settings
            </Text>
          </DialogHeader>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <Label htmlFor="username">Username</Label>
              <Input id="username" type="text" placeholder="Your username" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" />
            </div>
          </div>

          <DialogFooter>
            <DialogClose variant={BUTTON_VARIANT__OUTLINE}>Cancel</DialogClose>
            <Button variant={BUTTON_VARIANT__PRIMARY}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog renderTrigger={() => <DialogTrigger variant={BUTTON_VARIANT__DESTRUCTIVE}>Warning Dialog</DialogTrigger>}>
        <DialogContent>
          <DialogHeader>
            <Text as="h2" variant="heading" size="sm">
              Warning
            </Text>
          </DialogHeader>

          <Text as="p">This action may have unintended consequences. Please proceed with caution.</Text>

          <DialogFooter>
            <DialogClose variant={BUTTON_VARIANT__OUTLINE}>Cancel</DialogClose>
            <Button variant={BUTTON_VARIANT__DESTRUCTIVE}>Proceed</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
};

const meta = {
  title: 'Components/Composite/Dialog',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Dialog>;

export default meta;
