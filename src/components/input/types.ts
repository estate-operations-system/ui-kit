export enum InputType {
  Text = 'text',
  Email = 'email',
  Password = 'password',
  Tel = 'tel'
}

export interface InputProps {
  /**
   * The input value
   */
  modelValue: string
  /**
   * Input type (text, email, password, etc.)
   */
  type: InputType
  /**
   * Placeholder text
   */
  placeholder: string
  /**
   * Helper text displayed below the input
   */
  helperText?: string
  /**
   * Error message - when set, input shows error state
   */
  error?: string
  /**
   * Disabled state
   */
  disabled: boolean
}

export interface InputEmits {
  /**
   * Emitted when the input value changes (v-model)
   */
  (event: 'update:modelValue', value: string): void
}
