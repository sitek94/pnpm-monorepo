import { Button } from '@repo/ui'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['button', 'submit', 'reset'],
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  render: props => <Button {...props}>Primary Button</Button>,
  args: {
    type: 'button',
  },
}

export const Secondary: Story = {
  render: props => <Button {...props}>Secondary Button</Button>,
  args: {
    type: 'button',
    variant: 'secondary',
  },
}

export const Destructive: Story = {
  render: props => <Button {...props}>Destructive Button</Button>,
  args: {
    type: 'button',
    variant: 'destructive',
  },
}
export const Outline: Story = {
  render: props => <Button {...props}>Outline Button</Button>,
  args: {
    type: 'button',
    variant: 'outline',
  },
}

export const Ghost: Story = {
  render: props => <Button {...props}>Ghost Button</Button>,
  args: {
    type: 'button',
    variant: 'ghost',
  },
}
