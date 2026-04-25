import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Input from '../components/input/Input.vue'
import { InputType } from '../components/input/types'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A reusable input component with support for error state and disabled state. ' +
          'Built with SCSS for easy customization. ' +
          'Supports text, email, password, and tel input types.'
      }
    }
  },
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'The input value (v-model)'
    },
    type: {
      control: 'select',
      options: Object.values(InputType),
      description: 'Input type attribute (text, email, password, tel)'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when input is empty'
    },
    error: {
      control: 'text',
      description: 'Error message - when set, input shows error state'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input field'
    }
  },
  args: {
    modelValue: '',
    type: InputType.Text,
    placeholder: 'Введите текст',
    disabled: false
  }
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default input in normal state
 */
export const Default: Story = {
  args: {
    placeholder: 'Enter your name'
  }
}

/**
 * Input in error state
 */
export const WithError: Story = {
  args: {
    placeholder: 'Enter valid email',
    error: 'Email is invalid. Please check your input',
    type: InputType.Email,
    modelValue: 'invalid-email'
  }
}

/**
 * Input in disabled state
 */
export const Disabled: Story = {
  args: {
    placeholder: 'This field is disabled',
    disabled: true,
    modelValue: 'Disabled content'
  }
}

/**
 * Password input
 */
export const Password: Story = {
  args: {
    type: InputType.Password,
    placeholder: 'Enter your password'
  }
}
