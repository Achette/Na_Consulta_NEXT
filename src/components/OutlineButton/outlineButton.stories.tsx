import { Meta, StoryObj } from '@storybook/react'
import { OutlineButton } from '.'

const meta = {
  title: 'Components/OutlineButton',
  component: OutlineButton,
  tags: ['autodocs'],
} satisfies Meta<typeof OutlineButton>

export default meta

export const Primary: StoryObj<typeof OutlineButton> = {
  render: () => <OutlineButton />,
}
