export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary'
}

export interface ButtonProps {
  /**
   * Button size variant
   */
  size: ButtonSize
  /**
   * Visual variant of the button
   */
  variant: ButtonVariant
  /**
   * Disabled state
   */
  disabled: boolean
  /**
   * Loading state - shows spinner
   */
  loading: boolean
  /**
   * Icon class or name (e.g., 'icon-search', emoji, or HTML)
   */
  icon?: string
  /**
   * Icon position relative to text
   */
  iconPosition: 'left' | 'right'
  /**
   * Show only icon without text content
   */
  iconOnly?: boolean
}
