import './styles/variables.css'
import './styles/reset.css'
import './styles/tokens.css'

export { default as EosInput } from './components/input/Input.vue'
export { InputType, type InputProps, type InputEmits } from './components/input/types'

export { default as EosButton } from './components/button/Button.vue'
export { ButtonSize, ButtonVariant, type ButtonProps } from './components/button/types'

// Icons (auto-generated from src/icons/*.svg)
export * from './components/icons'
