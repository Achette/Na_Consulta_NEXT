import { Meta, StoryObj } from '@storybook/react'
import { SearchHeader } from '.'

const meta = {
  title: 'Components/SearchHeader',
  component: SearchHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof SearchHeader>

export default meta

export const Primary: StoryObj<typeof SearchHeader> = {
  render: () => <SearchHeader />,
}
