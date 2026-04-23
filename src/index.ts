import './styles/variables.css'
import './styles/reset.css'
import './styles/tokens.css'

export { default as EosInput } from './components/input/Input.vue'
export { InputType, type InputProps, type InputEmits } from './components/input/types'

export { default as EosButton } from './components/button/Button.vue'
export { ButtonSize, ButtonVariant, type ButtonProps } from './components/button/types'

export { default as EosSelect } from './components/select/Select.vue'

export { default as EosAlert } from './components/alert/Alert.vue'
export { default as EosBadge } from './components/badge/Badge.vue'
export { default as EosBreadcrumb } from './components/breadcrumb/Breadcrumb.vue'
export { default as EosCard } from './components/card/Card.vue'
export { default as EosSpinner } from './components/spinner/Spinner.vue'

// Icons (auto-generated from src/icons/*.svg)
export * from './components/icons'