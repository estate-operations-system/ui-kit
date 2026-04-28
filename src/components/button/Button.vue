<template>
  <component
    :is="to ? 'a' : 'button'"
    class="button"
    :class="buttonClasses"
    :href="to"
    :target="to && isExternalLink(to) ? '_blank' : undefined"
    @click="handleClick"
  >
    <span class="button__content">
      <slot />
    </span>
    <span v-if="loading" class="button__spinner">
      <eos-loop-icon />
    </span>
  </component>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { ButtonProps, ButtonSize, ButtonVariant } from './types'
  import { EosLoopIcon } from '../icons'
  import { isExternalLink } from '../../utils/isExternalLink'

  const props = withDefaults(defineProps<ButtonProps>(), {
    size: ButtonSize.Medium,
    variant: ButtonVariant.Primary,
    disabled: false,
    loading: false
  })

  const emit = defineEmits<{
    click: []
  }>()

  const buttonClasses = computed(() => ({
    [`button_${props.size}`]: true,
    [`button_${props.variant}`]: true,
    button_disabled: props.disabled,
    button_loading: props.loading
  }))

  const handleClick = () => {
    if (!props.to && !props.disabled && !props.loading) {
      emit('click')
    }
  }
</script>

<style scoped lang="scss">
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: var(--eos-font-weight-semibold);
    white-space: nowrap;
    position: relative;

    &_small {
      padding: var(--eos-space-xs) var(--eos-space-s);
      font-size: var(--eos-font-size-s);
      min-height: 32px;
      border-radius: var(--eos-radius-s);
    }

    &_medium {
      padding: var(--eos-space-s) var(--eos-space-m);
      font-size: var(--eos-font-size-m);
      min-height: 40px;
      border-radius: var(--eos-radius-m);
    }

    &_large {
      padding: var(--eos-space-s) var(--eos-space-l);
      font-size: var(--eos-font-size-xl);
      min-height: 48px;
      border-radius: var(--eos-radius-l);
    }

    &_primary {
      background-color: var(--eos-color-primary-600);
      color: var(--eos-color-primary-50);

      &:hover:not(:disabled) {
        background-color: var(--eos-color-primary-700);
      }

      &:active:not(:disabled) {
        background-color: var(--eos-color-primary-800);
      }
    }

    &_secondary {
      background-color: var(--eos-color-primary-50);
      color: var(--eos-color-primary-600);

      &:hover:not(:disabled) {
        background-color: var(--eos-color-primary-100);
      }

      &:active:not(:disabled) {
        background-color: var(--eos-color-primary-200);
      }
    }

    &_disabled {
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
    }

    &_loading {
      cursor: wait;

      .button__content {
        opacity: 0;
      }
    }

    &__spinner {
      position: absolute;
      width: 1.5em;
      height: 1.5em;

      svg {
        width: 100%;
        height: 100%;
        animation: button-spinner 0.8s linear infinite;
      }
    }
  }

  @keyframes button-spinner {
    to {
      transform: rotate(-360deg);
    }
  }
</style>
