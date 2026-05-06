export enum TagSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export interface TagProps {
  /**
   * Tag size variant
   */
  size: TagSize
  /**
   * Tag color variant - 'primary' | 'error' | 'success' | 'warning'
   */
  color?: string
}
