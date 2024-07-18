import type { Meta, StoryFn, StoryObj } from '@storybook/vue3'

import PageButton from './PageButton.vue'
import { PageButtonVariant } from '.'

const meta = {
  title: 'Atoms/Button',
  component: PageButton,
  tags: ['autodocs'],
  args: {
    variant: PageButtonVariant.PRIMARY,
    default: 'Button'
  },
  argTypes: {
    onHandleClick: { action: 'click' },
    default: {
      control: { type: 'text' },
      description: 'Slot content'
    },
    variant: {
      control: { type: 'select' },
      options: Object.values(PageButtonVariant)
    },
    withIcon: { control: { type: 'boolean' } },
    fullWidth: { control: { type: 'boolean' } }
  }
} satisfies Meta<typeof PageButton>

export default meta
type Story = StoryObj<typeof meta>

const Template: StoryFn = (args) => ({
  components: { PageButton },
  setup: () => ({ args }),
  template: `
  <PageButton v-bind="args">{{ args.default }}</PageButton>
    `
})

export const Primary: Story = {
  render: Template
}

export const Secondary: Story = {
  render: Template,
  args: {
    variant: PageButtonVariant.SECONDARY
  }
}

export const Tertiary: Story = {
  render: Template,
  args: {
    variant: PageButtonVariant.TERTIARY
  }
}

export const Quaternary: Story = {
  render: Template,
  args: {
    variant: PageButtonVariant.QUATERNARY
  }
}

export const Quinary: Story = {
  render: Template,
  args: {
    variant: PageButtonVariant.QUINARY
  }
}

export const FullWidth: Story = {
  render: Template,
  args: {
    fullWidth: true
  }
}
