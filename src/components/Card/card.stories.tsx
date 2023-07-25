import { Meta, StoryObj } from '@storybook/react'

import { Card } from '.'
import { CalendarCheck } from 'lucide-react'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta

export const Primary: StoryObj<typeof Card> = {
  args: {
    icon: <CalendarCheck size={24} />,
    title: 'Marque Consultas',
    paragraph: 'Escolha o profissional, dia e horário que desejar.',
  },
}
