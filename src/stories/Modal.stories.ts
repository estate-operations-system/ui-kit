import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import EosModal from '../components/modal/Modal.vue'
import EosButton from '../components/button/Button.vue'

const meta: Meta<typeof EosModal> = {
  component: EosModal,
  title: 'Components/Modal',
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls modal visibility'
    },
    title: {
      control: 'text',
      description: 'Modal title text'
    },
    maxWidth: {
      control: 'text',
      description: 'Maximum width of modal (CSS value)'
    }
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { EosModal, EosButton },
    setup() {
      const isOpen = ref(true)
      return { args, isOpen }
    },
    template: `
      <div>
        <EosButton @click="isOpen = true">Open Modal</EosButton>
        <EosModal 
          :open="isOpen"
          @update:open="isOpen = $event"
          :title="args.title"
          :max-width="args.maxWidth"
        >
          <p>This is the modal content. You can put any content here including forms, text, or other components.</p>
        </EosModal>
      </div>
    `
  }),
  args: {
    open: false,
    title: 'Modal Title',
    maxWidth: '760px'
  }
}

export const WithForm: Story = {
  render: (args) => ({
    components: { EosModal, EosButton },
    setup() {
      const isOpen = ref(true)
      return { args, isOpen }
    },
    template: `
      <div>
        <EosButton @click="isOpen = true">Open Form Modal</EosButton>
        <EosModal 
          :open="isOpen"
          @update:open="isOpen = $event"
          :title="args.title"
        >
          <form @submit.prevent>
            <div style="display: flex; flex-direction: column; gap: var(--eos-space-m);">
              <input type="text" placeholder="Enter name" style="padding: var(--eos-space-s); border: 1px solid var(--eos-color-primary-200); border-radius: var(--eos-radius-m);" />
              <textarea placeholder="Enter description" style="padding: var(--eos-space-s); border: 1px solid var(--eos-color-primary-200); border-radius: var(--eos-radius-m); min-height: 100px; resize: vertical;" />
            </div>
          </form>
        </EosModal>
      </div>
    `
  }),
  args: {
    open: false,
    title: 'Create New Item'
  }
}

export const WithFooter: Story = {
  render: (args) => ({
    components: { EosModal, EosButton },
    setup() {
      const isOpen = ref(true)
      return { args, isOpen }
    },
    template: `
      <div>
        <EosButton @click="isOpen = true">Open Modal with Footer</EosButton>
        <EosModal 
          :open="isOpen"
          @update:open="isOpen = $event"
          :title="args.title"
        >
          <p>Modal content with custom footer actions.</p>
          <template #footer>
            <EosButton variant="secondary" @click="isOpen = false">Cancel</EosButton>
            <EosButton @click="isOpen = false">Confirm</EosButton>
          </template>
        </EosModal>
      </div>
    `
  }),
  args: {
    open: false,
    title: 'Confirm Action'
  }
}

export const SmallModal: Story = {
  render: (args) => ({
    components: { EosModal, EosButton },
    setup() {
      const isOpen = ref(true)
      return { args, isOpen }
    },
    template: `
      <div>
        <EosButton @click="isOpen = true">Open Small Modal</EosButton>
        <EosModal 
          :open="isOpen"
          @update:open="isOpen = $event"
          :title="args.title"
          :max-width="args.maxWidth"
        >
          <p>This is a smaller modal window.</p>
        </EosModal>
      </div>
    `
  }),
  args: {
    open: false,
    title: 'Small Modal',
    maxWidth: '400px'
  }
}
