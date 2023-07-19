import { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

const meta = {
  title: 'Components/Button',
  component: Button,
} satisfies Meta<typeof Button>

export default meta

export const Padrão: StoryObj<typeof Button> = {
  render: () => <Button />,
}
