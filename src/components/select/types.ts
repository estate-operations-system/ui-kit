export interface SelectOption {
  label: string
  value: string | number
}

export interface SelectProps {
  /**
   * Selected value
   */
  modelValue?: string | number
  /**
   * Available options
   */
  options: SelectOption[]
  /**
   * Placeholder text
   */
  placeholder?: string
}

export interface SelectEmits {
  'update:modelValue': [value: string | number]
}
