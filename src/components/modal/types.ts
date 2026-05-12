export interface ModalProps {
  open: boolean
  title: string
  maxWidth?: string
}

export interface ModalEmits {
  (e: 'update:open', value: boolean): void
}
