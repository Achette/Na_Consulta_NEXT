import { Meta, StoryObj } from '@storybook/react'
import { DepositionCard } from '.'
import { depositionsMock } from '@/mock/depositions/mock'

const meta = {
  title: 'Components/DepositionCard',
  component: DepositionCard,
  tags: ['autodocs'],
} satisfies Meta<typeof DepositionCard>

export default meta

export const Primary: StoryObj<typeof DepositionCard> = {
  args: {
    name: `${depositionsMock[0].name}`,
    imgURL: `${depositionsMock[0].imgURL}`,
    deposition: `${depositionsMock[0].deposition}`,
  },
}
