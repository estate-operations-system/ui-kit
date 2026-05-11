import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Styles/Typography',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Typography utility classes for consistent text styling across the application.'
      }
    }
  }
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Headings: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <h1 class="h1">H1 - Display Heading</h1>
          <p style="color: #666; font-size: 12px; margin-top: 4px;">32px Bold</p>
        </div>
        <div>
          <h2 class="h2">H2 - Large Heading</h2>
          <p style="color: #666; font-size: 12px; margin-top: 4px;">24px Semibold</p>
        </div>
        <div>
          <h3 class="h3">H3 - Medium Heading</h3>
          <p style="color: #666; font-size: 12px; margin-top: 4px;">20px Semibold</p>
        </div>
        <div>
          <h4 class="h4">H4 - Small Heading</h4>
          <p style="color: #666; font-size: 12px; margin-top: 4px;">16px Semibold</p>
        </div>
        <div>
          <h5 class="h5">H5 - Extra Small Heading</h5>
          <p style="color: #666; font-size: 12px; margin-top: 4px;">14px Medium</p>
        </div>
      </div>
    `
  })
}

export const Paragraphs: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <p class="p1">P1 - Large paragraph text with regular weight and normal line height for body content.</p>
          <p style="color: #666; font-size: 12px; margin-top: 4px;">16px Regular</p>
        </div>
        <div>
          <p class="p2">P2 - Medium paragraph text suitable for secondary content and descriptions.</p>
          <p style="color: #666; font-size: 12px; margin-top: 4px;">14px Regular</p>
        </div>
        <div>
          <p class="p3">P3 - Small paragraph text for captions, labels, and fine print information.</p>
          <p style="color: #666; font-size: 12px; margin-top: 4px;">12px Regular</p>
        </div>
      </div>
    `
  })
}

export const AllTypography: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h2 style="margin-bottom: 12px; color: var(--eos-color-primary-600);">Headings</h2>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <div>
              <h1 class="h1">H1 - Display Heading (32px Bold)</h1>
            </div>
            <div>
              <h2 class="h2">H2 - Large Heading (24px Semibold)</h2>
            </div>
            <div>
              <h3 class="h3">H3 - Medium Heading (20px Semibold)</h3>
            </div>
            <div>
              <h4 class="h4">H4 - Small Heading (16px Semibold)</h4>
            </div>
            <div>
              <h5 class="h5">H5 - Extra Small Heading (14px Medium)</h5>
            </div>
          </div>
        </div>
        <div>
          <h2 style="margin-bottom: 12px; color: var(--eos-color-primary-600);">Paragraphs</h2>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <div>
              <p class="p1">P1 - Large paragraph text with regular weight and normal line height for body content.</p>
            </div>
            <div>
              <p class="p2">P2 - Medium paragraph text suitable for secondary content and descriptions.</p>
            </div>
            <div>
              <p class="p3">P3 - Small paragraph text for captions, labels, and fine print information.</p>
            </div>
          </div>
        </div>
      </div>
    `
  })
}

export const TextColors: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <p class="p1 text-primary">Text Primary - Main text color for primary content</p>
        </div>
        <div>
          <p class="p1 text-secondary">Text Secondary - For secondary information and descriptions</p>
        </div>
        <div>
          <p class="p1 text-tertiary">Text Tertiary - For less important supporting text</p>
        </div>
        <div>
          <p class="p1 text-disabled">Text Disabled - For disabled or inactive content</p>
        </div>
        <div>
          <p class="p1 text-error">Text Error - For error states and messages</p>
        </div>
        <div>
          <p class="p1 text-success">Text Success - For success states and messages</p>
        </div>
        <div>
          <p class="p1 text-warning">Text Warning - For warning states and messages</p>
        </div>
      </div>
    `
  })
}

export const CombinedUsage: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <article>
          <h1 class="h1 text-primary">Article Title</h1>
          <p class="p1 text-secondary" style="margin-top: 8px;">Published on May 7, 2026</p>
          <p class="p1 text-primary" style="margin-top: 16px;">This is the main article content with primary text color. It contains the most important information for the reader.</p>
        </article>
        
        <article>
          <h2 class="h2 text-primary">Section Heading</h2>
          <p class="p2 text-secondary" style="margin-top: 8px;">This is secondary text providing additional context about the section below.</p>
          <p class="p3 text-tertiary" style="margin-top: 12px;">Supporting information in smaller text.</p>
        </article>
        
        <div>
          <p class="p2 text-primary">Status Messages:</p>
          <p class="p2 text-success" style="margin-top: 4px;">✓ Operation completed successfully</p>
          <p class="p2 text-warning" style="margin-top: 4px;">⚠ Please review your changes</p>
          <p class="p2 text-error" style="margin-top: 4px;">✕ An error occurred while processing</p>
        </div>
      </div>
    `
  })
}
