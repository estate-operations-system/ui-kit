import type { Meta, StoryObj } from '@storybook/vue3'
import { TagSize } from '../components/tag/types'
import { EosTag as Tag } from '../components/tag'

const meta = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(TagSize)
    },
    color: {
      control: 'color'
    }
  },
  args: {
    size: TagSize.Medium,
    color: '#ad6952'
  }
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Colors: Story = {
  render: () => ({
    components: { Tag },
    setup() {
      const colors = [
        { name: 'Primary', hex: '#ad6952' },
        { name: 'Red', hex: '#dc2626' },
        { name: 'Green', hex: '#10b981' },
        { name: 'Yellow', hex: '#f59e0b' }
      ]
      return { colors }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div v-for="item in colors" :key="item.name" style="display: flex; gap: 12px; align-items: center;">
          <span style="width: 80px; font-weight: 500;">{{ item.name }}</span>
          <Tag :color="item.hex">
            {{ item.name }}
          </Tag>
        </div>
      </div>
    `
  })
}

export const Sizes: Story = {
  render: () => ({
    components: { Tag },
    setup() {
      return { TagSize }
    },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <Tag :size="TagSize.Small" color="#ad6952">Small</Tag>
        <Tag :size="TagSize.Medium" color="#ad6952">Medium</Tag>
        <Tag :size="TagSize.Large" color="#ad6952">Large</Tag>
      </div>
    `
  })
}

export const AllVariants: Story = {
  render: () => ({
    components: { Tag },
    setup() {
      const colors = [
        { name: 'Primary', hex: '#ad6952' },
        { name: 'Red', hex: '#dc2626' },
        { name: 'Green', hex: '#10b981' },
        { name: 'Yellow', hex: '#f59e0b' }
      ]
      const sizes = Object.values(TagSize)
      return { colors, sizes }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div v-for="item in colors" :key="item.name" style="display: flex; gap: 12px; align-items: center;">
          <span style="width: 80px; font-weight: 500;">{{ item.name }}</span>
          <Tag v-for="size in sizes" :key="size" :color="item.hex" :size="size">
            {{ size }}
          </Tag>
        </div>
      </div>
    `
  })
}
