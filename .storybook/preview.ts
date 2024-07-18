import type { Preview } from '@storybook/vue3'
import '@/styles/app.scss'
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
