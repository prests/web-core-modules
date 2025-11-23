import { type Meta, type StoryObj } from '@storybook/react-vite';

/**
 * NOTE: This import pattern (@wcm/lunar/src/index.js) is not the normal way to import @wcm/lunar.
 * This is done specifically for Storybook to promote better React docgen and ensure consistent
 * styling with vanilla-extract. For proper import examples, see the demos in /demos/lunar-react-router.
 */
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  Button,
  Text,
  BUTTON_VARIANT__PRIMARY,
  BUTTON_VARIANT__OUTLINE,
} from '@wcm/lunar/src/index.js';

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: () => (
    <Card style={{ maxWidth: '400px' }}>
      <CardContent>
        <Text as="p">This is a simple card with just content.</Text>
      </CardContent>
    </Card>
  ),
};

export const WithHeader: Story = {
  render: () => (
    <Card style={{ maxWidth: '400px' }}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a card description that provides additional context.</CardDescription>
      </CardHeader>
      <CardContent>
        <Text as="p">Main content of the card goes here. This could be any React content.</Text>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card style={{ maxWidth: '400px' }}>
      <CardContent>
        <Text as="p">Card content with a footer below.</Text>
      </CardContent>
      <CardFooter>
        <Text as="small" variant="caption">
          Footer information
        </Text>
      </CardFooter>
    </Card>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Card style={{ maxWidth: '400px' }}>
      <CardHeader>
        <CardTitle>Project Settings</CardTitle>
        <CardDescription>Manage your project configuration and preferences.</CardDescription>
        <CardAction>
          <Button variant={BUTTON_VARIANT__OUTLINE} size="small">
            Edit
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Text as="p">Configure your project settings, including team members, permissions, and integrations.</Text>
      </CardContent>
    </Card>
  ),
};

export const Complete: Story = {
  render: () => (
    <Card style={{ maxWidth: '400px' }}>
      <CardHeader>
        <CardTitle>Complete Card Example</CardTitle>
        <CardDescription>This card demonstrates all available card components working together.</CardDescription>
        <CardAction>
          <Button variant={BUTTON_VARIANT__OUTLINE} size="small">
            Options
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Text as="p">
          This card includes a header with title, description, and action, main content area, and a footer with action
          buttons.
        </Text>
      </CardContent>
      <CardFooter style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
        <Button variant={BUTTON_VARIANT__OUTLINE}>Cancel</Button>
        <Button variant={BUTTON_VARIANT__PRIMARY}>Save</Button>
      </CardFooter>
    </Card>
  ),
};

export const MultipleCards: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
      <Card>
        <CardHeader>
          <CardTitle>Analytics</CardTitle>
          <CardDescription>View your website analytics and performance metrics.</CardDescription>
        </CardHeader>
        <CardContent>
          <Text as="p">Page views, user sessions, and conversion rates are all trending upward this month.</Text>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>Manage team access and permissions.</CardDescription>
          <CardAction>
            <Button variant={BUTTON_VARIANT__PRIMARY} size="small">
              Invite
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <Text as="p">You have 12 active team members with various roles and permissions.</Text>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest updates and changes to your project.</CardDescription>
        </CardHeader>
        <CardContent>
          <Text as="p">3 commits pushed, 2 issues resolved, and 1 new feature deployed today.</Text>
        </CardContent>
        <CardFooter>
          <Button variant={BUTTON_VARIANT__OUTLINE} style={{ marginLeft: 'auto' }}>
            View All
          </Button>
        </CardFooter>
      </Card>
    </div>
  ),
};

const meta = {
  title: 'Components/Composite/Card',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>;

export default meta;
