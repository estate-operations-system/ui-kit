import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Foundations/Design Tokens',
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const VariablesOverview: Story = {
  render: () => ({
    template: `
      <div class="tokens-root">
        <h2>Цвета</h2>
        <div class="swatches">
          <div class="swatch" style="background: var(--eos-color-primary)"><span>--eos-color-primary</span></div>
          <div class="swatch" style="background: var(--eos-color-primary-dark)"><span>--eos-color-primary-dark</span></div>
          <div class="swatch" style="background: var(--eos-color-primary-light)"><span>--eos-color-primary-light</span></div>
          <div class="swatch" style="background: var(--eos-color-secondary)"><span>--eos-color-secondary</span></div>
          <div class="swatch" style="background: var(--eos-color-bg-secondary); color: var(--eos-color-text)"><span>--eos-color-bg-secondary</span></div>
          <div class="swatch" style="background: var(--eos-color-border); color: var(--eos-color-text)"><span>--eos-color-border</span></div>
        </div>

        <h2>Отступы</h2>
        <div class="spacing-row">
          <div class="space-box" style="width: var(--eos-space-xs)">xs</div>
          <div class="space-box" style="width: var(--eos-space-s)">s</div>
          <div class="space-box" style="width: var(--eos-space-m)">m</div>
          <div class="space-box" style="width: var(--eos-space-l)">l</div>
          <div class="space-box" style="width: var(--eos-space-xl)">xl</div>
          <div class="space-box" style="width: var(--eos-space-2xl)">2xl</div>
        </div>

        <h2>Типографика</h2>
        <p style="font-size: var(--eos-font-size-xs)">--eos-font-size-xs</p>
        <p style="font-size: var(--eos-font-size-s)">--eos-font-size-s</p>
        <p style="font-size: var(--eos-font-size-m)">--eos-font-size-m</p>
        <p style="font-size: var(--eos-font-size-l)">--eos-font-size-l</p>
        <p style="font-size: var(--eos-font-size-xl)">--eos-font-size-xl</p>
      </div>
    `,
    mounted() {
      if (document.getElementById('design-tokens-story-style')) return

      const style = document.createElement('style')
      style.id = 'design-tokens-story-style'
      style.textContent = `
        .tokens-root {
          display: grid;
          gap: var(--eos-space-l);
          color: var(--eos-color-text);
          font-family: var(--eos-font-family);
        }

        .tokens-root h2 {
          margin: 0;
          font-size: var(--eos-font-size-l);
        }

        .swatches {
          display: grid;
          gap: var(--eos-space-s);
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        }

        .swatch {
          display: flex;
          align-items: end;
          min-height: 88px;
          border-radius: var(--eos-radius-m);
          border: 1px solid var(--eos-color-border);
          padding: var(--eos-space-s);
          color: var(--eos-color-bg);
          font-size: var(--eos-font-size-s);
          box-shadow: var(--eos-shadow-xs);
        }

        .spacing-row {
          display: flex;
          align-items: flex-end;
          gap: var(--eos-space-s);
        }

        .space-box {
          height: 24px;
          background: var(--eos-color-primary-light);
          border: 1px solid var(--eos-color-primary);
          border-radius: var(--eos-radius-s);
          color: var(--eos-color-text);
          font-size: var(--eos-font-size-xs);
          line-height: 24px;
          text-align: center;
          white-space: nowrap;
        }
      `

      document.head.appendChild(style)
    },
  }),
}
