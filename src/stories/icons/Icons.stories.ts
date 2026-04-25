import type { Meta, StoryObj } from '@storybook/vue3'
import EosAccountIcon from '../../components/icons/AccountIcon.vue'

const meta = {
  title: 'Icons/All Icons',
  tags: ['autodocs']
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Account: Story = {
  render: () => ({
    components: { EosAccountIcon },
    template: `
      <div style="display: flex; gap: 2rem; align-items: center;">
        <div>
          <h3>Account Icon</h3>
          <div style="display: flex; gap: 1rem; align-items: center;">
            <EosAccountIcon :size="24" color="#2563eb" />
            <EosAccountIcon :size="32" color="#2563eb" />
            <EosAccountIcon :size="48" color="#2563eb" />
          </div>
        </div>
        <div>
          <p><strong>Component:</strong> EosAccountIcon</p>
          <p><strong>Props:</strong></p>
          <ul>
            <li><code>size</code>: number | string (default: 24)</li>
            <li><code>color</code>: string (default: 'currentColor')</li>
          </ul>
          <p><strong>Usage in code:</strong></p>
          <code style="background: #f5f5f5; padding: 8px; border-radius: 4px; display: block; margin-top: 8px;">
            import { EosAccountIcon } from 'eos-ui-kit'<br>
            &lt;EosAccountIcon :size="24" color="#2563eb" /&gt;
          </code>
        </div>
      </div>
    `
  })
}
