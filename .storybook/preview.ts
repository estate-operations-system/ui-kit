import type { Preview } from '@storybook/vue3-vite'
import '../src/styles/reset.css'
import '../src/styles/tokens.css'

const preview: Preview = {
  parameters: {
    layout: 'padded',
    controls: { expanded: true },
  },
}

export default preview
