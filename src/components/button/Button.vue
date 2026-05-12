<template>
  <component
    :is="to ? 'a' : 'button'"
    class="button"
    :class="buttonClasses"
    :href="to"
    :target="to && isExternalLink(to) ? '_blank' : undefined"
    :disabled
    @click="handleClick"
  >
    <span
      class="button__content"
      :class="{ button__content_hidden: loading && variant !== ButtonVariant.Tertiary }"
    >
      <slot />
    </span>
    <span
      v-if="loading && variant !== ButtonVariant.Tertiary"
      class="button__spinner"
    >
      <EosLoopIcon />
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

const isInteractive = computed(() => !props.disabled && !props.loading)

const buttonClasses = computed(() => [
  `button_${props.size}`,
  `button_${props.variant}`,
  {
    button_disabled: props.disabled,
    button_loading: props.loading
  }
])

const handleClick = () => {
  if (!props.to && isInteractive.value) {
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
  border: none;
  background: none;
  cursor: pointer;
  transition: all 0.2s ease;

  @mixin button-size($padding, $font-size, $min-height, $radius) {
    padding: $padding;
    font-size: $font-size;
    min-height: $min-height;
    border-radius: $radius;
  }

  &_small {
    @include button-size(
      var(--eos-space-xs) var(--eos-space-s),
      var(--eos-font-size-s),
      32px,
      var(--eos-radius-s)
    );
  }

  &_medium {
    @include button-size(
      var(--eos-space-s) var(--eos-space-m),
      var(--eos-font-size-m),
      40px,
      var(--eos-radius-m)
    );
  }

  &_large {
    @include button-size(
      var(--eos-space-s) var(--eos-space-l),
      var(--eos-font-size-xl),
      48px,
      var(--eos-radius-l)
    );
  }

  &_disabled,
  &_loading {
    cursor: not-allowed;
  }

  &_disabled {
    opacity: 0.6;
    pointer-events: none;
  }

  &_loading {
    cursor: wait;
  }

  @mixin button-variant($bg, $color, $hover-bg, $active-bg, $hover-color: null) {
    background-color: $bg;
    color: $color;

    &:hover:not(.button_disabled):not(.button_loading) {
      background-color: $hover-bg;
      @if $hover-color {
        color: $hover-color;
      }
    }

    &:active:not(.button_disabled):not(.button_loading) {
      background-color: $active-bg;
    }
  }

  &_primary {
    @include button-variant(
      var(--eos-color-primary-600),
      var(--eos-color-primary-50),
      var(--eos-color-primary-700),
      var(--eos-color-primary-800)
    );
  }

  &_secondary {
    @include button-variant(
      var(--eos-color-primary-50),
      var(--eos-color-primary-600),
      var(--eos-color-primary-100),
      var(--eos-color-primary-200)
    );
  }

  &_tertiary {
    background: transparent;
    color: var(--eos-color-primary-600);
    padding: 0;
    min-height: auto;
    border-radius: 0;

    &:hover:not(.button_disabled):not(.button_loading) {
      color: var(--eos-color-primary-700);
      text-decoration: underline;
      text-underline-offset: 2px;
    }

    &:active:not(.button_disabled):not(.button_loading) {
      color: var(--eos-color-primary-800);
    }

    &.button_loading {
      opacity: 0.6;
      color: var(--eos-color-primary-600);
    }
  }

  &__content {
    display: inline-flex;
    align-items: center;
    gap: var(--eos-space-xs);

    &_hidden {
      opacity: 0;
    }
  }

  &__spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
