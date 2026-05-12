import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { EosSelect as Select } from '../components/select'
import type { SelectOption } from '../components/select/types'

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text'
    },
    placeholder: {
      control: 'text'
    },
    disabled: {
      control: 'boolean'
    }
  },
  args: {
    placeholder: 'Выберите опцию',
    disabled: false
  }
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const options: SelectOption[] = [
  { label: 'Опция 1', value: 'option1' },
  { label: 'Опция 2', value: 'option2' },
  { label: 'Опция 3', value: 'option3' },
  { label: 'Опция 4', value: 'option4' }
]

export const Default: Story = {
  args: {
    options,
    modelValue: undefined
  },
  render: (args) => ({
    components: { Select },
    setup() {
      const modelValue = ref(undefined)
      return { args, modelValue }
    },
    template:
      '<Select v-model="modelValue" :options="args.options" :placeholder="args.placeholder" :disabled="args.disabled" />'
  })
}

export const WithValue: Story = {
  args: {
    options,
    modelValue: 'option2'
  },
  render: (args) => ({
    components: { Select },
    setup() {
      const modelValue = ref('option2')
      return { args, modelValue }
    },
    template:
      '<Select v-model="modelValue" :options="args.options" :placeholder="args.placeholder" :disabled="args.disabled" />'
  })
}

export const Disabled: Story = {
  args: {
    options,
    modelValue: 'option1',
    disabled: true
  },
  render: (args) => ({
    components: { Select },
    setup() {
      const modelValue = ref('option1')
      return { args, modelValue }
    },
    template:
      '<Select v-model="modelValue" :options="args.options" :placeholder="args.placeholder" :disabled="args.disabled" />'
  })
}

export const WithCustomPlaceholder: Story = {
  args: {
    options,
    placeholder: 'Выберите категорию...'
  },
  render: (args) => ({
    components: { Select },
    setup() {
      const modelValue = ref(undefined)
      return { args, modelValue }
    },
    template:
      '<Select v-model="modelValue" :options="args.options" :placeholder="args.placeholder" :disabled="args.disabled" />'
  })
}
