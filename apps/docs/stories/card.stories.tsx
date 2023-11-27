import { Card } from '@repo/ui'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Card.Root> = {
  component: Card.Root,
}

export default meta

type Story = StoryObj<typeof Card>

export const Primary: Story = {
  name: 'card',
  render: () => (
    <Card.Root>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>Card Description</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>Card Content</p>
      </Card.Content>
      <Card.Footer>
        <p>Card Footer</p>
      </Card.Footer>
    </Card.Root>
  ),
}
