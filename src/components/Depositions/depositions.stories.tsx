import { Meta, StoryObj } from '@storybook/react'
import { DepositionSection } from '.'

const meta = {
  title: 'Components/Depositions',
  component: DepositionSection,
  tags: ['autodocs'],
} satisfies Meta<typeof DepositionSection>

export default meta

export const Primary: StoryObj<typeof DepositionSection> = {
  render: () => <DepositionSection />,
}
