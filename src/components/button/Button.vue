<template>
  <button
    :disabled="disabled || loading"
    class="button"
    :class="buttonClasses"
  >
    <span v-if="icon && iconPosition === 'left'" class="button__icon button__icon_left">
      {{ icon }}
    </span>
    
    <span class="button__content">
      <span v-if="loading" class="button__spinner"></span>
      <slot />
    </span>
    
    <span v-if="icon && iconPosition === 'right'" class="button__icon button__icon_right">
      {{ icon }}
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ButtonProps, ButtonSize, ButtonVariant } from './types'

const props = withDefaults(
  defineProps<ButtonProps>(),
  {
    size: ButtonSize.Medium,
    variant: ButtonVariant.Primary,
    disabled: false,
    loading: false,
    iconPosition: 'left',
    iconOnly: false
  }
)

const buttonClasses = computed(() => ({
  [`button_${props.size}`]: true,
  [`button_${props.variant}`]: true,
  'button_disabled': props.disabled || props.loading,
  'button_loading': props.loading,
  'button_icon-only': props.iconOnly,
  'button_no-icon': !props.icon
}))
</script>

<style scoped lang="scss">
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-s);
  font-family:  var(--font-family);
  font-weight: var(--eos-font-weight-semibold);
  border: none;
  border-radius: var(--eos-radius-m);
  cursor: pointer;
  transition: all var(--eos-transition-base);
  position: relative;
  white-space: nowrap;

  &_no-icon {
    gap: 0;
  }

  &_small {
    padding: var(--spacing-xs) var(--spacing-s);
    font-size: var(--eos-font-size-s);
    min-height: 32px;
  }

  &_medium {
    padding: var(--spacing-s) var(--spacing-m);
    font-size: var(--eos-font-size-m);
    min-height: 40px;
  }

  &_large {
    padding: var(--spacing-m) var(--spacing-l);
    font-size: var(--eos-font-size-l);
    min-height: 48px;
  }

  &_primary {
    background-color: var(--eos-color-primary);
    color: white;

    &:hover:not(:disabled) {
      background-color: var(--eos-color-primary-dark);
    }

    &:active:not(:disabled) {
      opacity: 0.9;
    }
  }

  &_secondary {
    background-color: white;
    color: var(--eos-color-text);
    border: 1px solid #e2e8f0;

    &:hover:not(:disabled) {
      background-color: #f8fafc;
      border-color: #cbd5e1;
    }

    &:active:not(:disabled) {
      opacity: 0.9;
    }
  }

  &_tertiary {
    background-color: transparent;
    color: var(--eos-color-primary);
    border: 1px solid var(--eos-color-primary);

    &:hover:not(:disabled) {
      background-color: var(--eos-color-primary);
      color: white;
    }

    &:active:not(:disabled) {
      opacity: 0.9;
    }
  }

  &_disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &_loading {
    color: inherit;
  }

  &_icon-only {
    padding: var(--spacing-xs);
    min-width: auto;
    min-height: auto;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
  }

  &__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;

    &_left {
      margin-right: calc(var(--spacing-s) * 0.5);
    }

    &_right {
      margin-left: calc(var(--spacing-s) * 0.5);
    }
  }

  &__content {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-xs);
  }

  &__spinner {
    display: inline-block;
    width: 1em;
    height: 1em;
    border: 2px solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: button-spinner 0.8s linear infinite;
  }
}

@keyframes button-spinner {
  to {
    transform: rotate(360deg);
  }
}
</style>
