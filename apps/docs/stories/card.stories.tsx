import { Card } from '@repo/ui'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Card> = {
  component: Card,
}

export default meta

type Story = StoryObj<typeof Card>

export const Primary: Story = {
  render: props => <Card {...props}>Hello</Card>,
  name: 'Card',
  args: {
    children: 'Some card content',
    title: 'Card Title',
    href: '#some-link',
  },
}
