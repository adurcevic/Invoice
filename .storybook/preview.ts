import type { Preview } from '@storybook/vue3'
import '@/styles/global.css'
import 'virtual:svg-icons-register'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
