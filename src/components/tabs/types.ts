export interface TabItem {
  /**
   * Label shown in the tab button
   */
  label: string
  /**
   * Value of the tab
   */
  value: string
}

export interface TabsProps {
  /**
   * Active tab value
   */
  modelValue: string
  /**
   * List of tab items
   */
  tabs: TabItem[]
  /**
   * Disabled state
   */
  disabled?: boolean
}

export interface TabsEmits {
  /**
   * Emitted when the active tab changes (v-model)
   */
  (event: 'update:modelValue', value: string): void
}
