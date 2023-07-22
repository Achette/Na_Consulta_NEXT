import { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta

export const Primary: StoryObj<typeof Button> = {
  args: {
    title: 'Pesquisar',
    variant: 'small',
  },
}

export const Medium: StoryObj<typeof Button> = {
  args: {
    title: 'Pesquisar',
    variant: 'medium',
  },
}

export const Large: StoryObj<typeof Button> = {
  args: {
    title: 'Pesquisar',
    variant: 'large',
  },
}
