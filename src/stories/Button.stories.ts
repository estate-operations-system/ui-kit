import type { Meta, StoryObj } from '@storybook/vue3'
import { ButtonSize, ButtonVariant } from '../components/button/types'
import { Button } from '../components/button'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(ButtonSize)
    },
    variant: {
      control: 'select',
      options: Object.values(ButtonVariant)
    },
    disabled: {
      control: 'boolean'
    },
    loading: {
      control: 'boolean'
    },
    icon: {
      control: 'text'
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right']
    }
  },
  args: {
    size: ButtonSize.Small,
    variant: ButtonVariant.Primary,
    disabled: false,
    loading: false,
    iconPosition: 'left'
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: ButtonVariant.Primary
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Основная кнопка</Button>'
  })
}

export const Secondary: Story = {
  args: {
    variant: ButtonVariant.Secondary
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Вторичная кнопка</Button>'
  })
}

export const Sizes: Story = {
  render: () => ({
    components: { Button },
    setup() {
      return { ButtonSize }
    },
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <Button :size="ButtonSize.Small">Small</Button>
        <Button :size="ButtonSize.Medium">Medium</Button>
        <Button :size="ButtonSize.Large">Large</Button>
      </div>
    `
  })
}

export const WithIcon: Story = {
  args: {
    icon: ''
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Найти</Button>'
  })
}

export const IconRight: Story = {
  args: {
    icon: '→',
    iconPosition: 'right'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Далее</Button>'
  })
}

export const Loading: Story = {
  args: {
    loading: true
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Загрузка...</Button>'
  })
}

export const Disabled: Story = {
  args: {
    disabled: true
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Отключено</Button>'
  })
}

export const AllVariants: Story = {
  render: () => ({
    components: { Button },
    setup() {
      return { ButtonSize, ButtonVariant }
    },
    template: `
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
        <Button :variant="ButtonVariant.Primary">Primary</Button>
        <Button :variant="ButtonVariant.Secondary">Secondary</Button>
        
        <Button :variant="ButtonVariant.Primary" disabled>Primary Disabled</Button>
        <Button :variant="ButtonVariant.Secondary" disabled>Secondary Disabled</Button>
        
        <Button :variant="ButtonVariant.Primary" loading>Loading</Button>
        <Button :variant="ButtonVariant.Secondary" loading>Loading</Button>
        
        <Button :variant="ButtonVariant.Primary" icon="">With Icon</Button>
        <Button :variant="ButtonVariant.Secondary" icon="">With Icon</Button>
      </div>
    `
  })
}
