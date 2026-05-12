<template>
  <div class="tabs">
    <button
      v-for="tab in tabs"
      :key="tab.value"
      :class="{ tabs__tab: true, tabs__tab_active: tab.value === modelValue }"
      :disabled="disabled"
      @click="emit('update:modelValue', tab.value)"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { TabsProps, TabsEmits } from './types'

withDefaults(defineProps<TabsProps>(), {
  disabled: false
})

const emit = defineEmits<TabsEmits>()
</script>

<style scoped lang="scss">
.tabs {
  display: flex;
  gap: var(--eos-space-m);

  &__tab {
    padding: var(--eos-space-s) var(--eos-space-m);
    background: none;
    border: none;
    border-bottom: 3px solid transparent;
    font-size: var(--eos-font-size-m);
    font-weight: var(--eos-font-weight-medium);
    color: var(--eos-color-primary-600);
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: var(--eos-font-family);

    &:hover:not(:disabled) {
      color: var(--eos-color-primary-700);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &_active {
      color: var(--eos-color-primary-500);
      border-bottom-color: var(--eos-color-primary-500);
    }
  }
}
</style>
