import { Meta, StoryObj } from '@storybook/react'

import Home from '.'

const meta = {
  title: 'Default/Page',
  component: Home,
} satisfies Meta<typeof Home>

export default meta
type Story = StoryObj<typeof meta>

export const HomePage: Story = {}
