import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { EosTabs as Tabs } from '../components/tabs'
import type { TabItem } from '../components/tabs/types'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text'
    },
    disabled: {
      control: 'boolean'
    }
  },
  args: {
    modelValue: 'tab1',
    disabled: false
  }
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

const defaultTabs: TabItem[] = [
  { label: 'Таб 1', value: 'tab1' },
  { label: 'Таб 2', value: 'tab2' },
  { label: 'Таб 3', value: 'tab3' }
]

/**
 * Default tabs component
 */
export const Default: Story = {
  args: {
    tabs: defaultTabs,
    modelValue: 'tab1'
  },
  render: (args) => ({
    components: { Tabs },
    setup() {
      const modelValue = ref('tab1')
      return { args, modelValue }
    },
    template: '<Tabs v-model="modelValue" :tabs="args.tabs" />'
  })
}

/**
 * Tabs with custom labels
 */
export const CustomLabels: Story = {
  args: {
    tabs: [
      { label: 'Комментарии', value: 'comments' },
      { label: 'Настройки', value: 'settings' },
      { label: 'История', value: 'history' }
    ],
    modelValue: 'comments'
  },
  render: (args) => ({
    components: { Tabs },
    setup() {
      const modelValue = ref('comments')
      return { args, modelValue }
    },
    template: '<Tabs v-model="modelValue" :tabs="args.tabs" />'
  })
}

/**
 * Disabled tabs
 */
export const Disabled: Story = {
  args: {
    tabs: defaultTabs,
    modelValue: 'tab1',
    disabled: true
  },
  render: (args) => ({
    components: { Tabs },
    setup() {
      const modelValue = ref('tab1')
      return { args, modelValue }
    },
    template: '<Tabs v-model="modelValue" :tabs="args.tabs" :disabled="args.disabled" />'
  })
}

/**
 * Two tabs
 */
export const TwoTabs: Story = {
  args: {
    tabs: [
      { label: 'Информация', value: 'info' },
      { label: 'Детали', value: 'details' }
    ],
    modelValue: 'info'
  },
  render: (args) => ({
    components: { Tabs },
    setup() {
      const modelValue = ref('info')
      return { args, modelValue }
    },
    template: '<Tabs v-model="modelValue" :tabs="args.tabs" />'
  })
}
