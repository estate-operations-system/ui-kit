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
   * Link URL - if provided, renders as a link
   */
  to?: string
}
