import './styles/tokens.css'
import './styles/reset.css'
import './styles/typography.css'

export { default as EosInput } from './components/input/Input.vue'
export { InputType, type InputProps, type InputEmits } from './components/input/types'

export { default as EosButton } from './components/button/Button.vue'
export { ButtonSize, ButtonVariant, type ButtonProps } from './components/button/types'

export { default as EosTag } from './components/tag/Tag.vue'
export { TagSize, type TagProps } from './components/tag/types'

export { default as EosSelect } from './components/select/Select.vue'
export type { SelectProps, SelectEmits, SelectOption } from './components/select/types'

export { default as EosTable } from './components/table/Table.vue'
export type {
  TableProps,
  TableColumn,
  TableCell,
  TableRow,
  TableEmits
} from './components/table/types'

export { default as EosTabs } from './components/tabs/Tabs.vue'
export type { TabsProps, TabsEmits, TabItem } from './components/tabs/types'

// Icons (auto-generated from src/icons/*.svg)
export * from './components/icons'

// Utils
export * from './utils'
