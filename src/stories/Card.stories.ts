import type { Meta, StoryObj } from '@storybook/vue3'
import EosCard from '../components/card/Card.vue'

const meta: Meta<typeof EosCard> = {
  component: EosCard,
  title: 'Components/Card',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['s', 'm', 'l'],
      description: 'Card size - s, m, or l'
    },
    align: {
      control: 'select',
      options: ['left', 'center'],
      description: 'Card alignment - left or center'
    }
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Small: Story = {
  render: (args) => ({
    components: { EosCard },
    setup() {
      return { args }
    },
    template: `
      <EosCard :size="args.size">
        <h4 style="color: #683f31; margin: 0 0 8px 0;">Small Card</h4>
        <p style="color: #8b5441; margin: 0; font-size: 12px;">Padding: var(--eos-space-s)</p>
      </EosCard>
    `
  }),
  args: {
    size: 's'
  }
}

export const Medium: Story = {
  render: (args) => ({
    components: { EosCard },
    setup() {
      return { args }
    },
    template: `
      <EosCard :size="args.size">
        <h4 style="color: #683f31; margin: 0 0 8px 0;">Medium Card</h4>
        <p style="color: #8b5441; margin: 0;">Padding: var(--eos-space-m). Default size.</p>
      </EosCard>
    `
  }),
  args: {
    size: 'm'
  }
}

export const Large: Story = {
  render: (args) => ({
    components: { EosCard },
    setup() {
      return { args }
    },
    template: `
      <EosCard :size="args.size">
        <h4 style="color: #683f31; margin: 0 0 8px 0;">Large Card</h4>
        <p style="color: #8b5441; margin: 0;">Padding: var(--eos-space-l)</p>
      </EosCard>
    `
  }),
  args: {
    size: 'l'
  }
}

export const AllSizes: Story = {
  render: (args) => ({
    components: { EosCard },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <EosCard size="s">
          <p style="color: #8b5441; margin: 0;">Small (var(--eos-space-s))</p>
        </EosCard>
        <EosCard size="m">
          <p style="color: #8b5441; margin: 0;">Medium (var(--eos-space-m))</p>
        </EosCard>
        <EosCard size="l">
          <p style="color: #8b5441; margin: 0;">Large (var(--eos-space-l))</p>
        </EosCard>
      </div>
    `
  }),
  args: {}
}

export const LeftAligned: Story = {
  render: (args) => ({
    components: { EosCard },
    setup() {
      return { args }
    },
    template: `
      <EosCard :size="args.size" align="left">
        <h4 style="color: #683f31; margin: 0 0 8px 0;">Left Aligned Card</h4>
        <p style="color: #8b5441; margin: 0;">Content is aligned to the left</p>
      </EosCard>
    `
  }),
  args: {
    size: 'm'
  }
}
