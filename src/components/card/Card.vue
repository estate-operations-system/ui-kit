<template>
  <div :class="['card', `card_${size}`, `card_align-${align}`]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { CardProps } from './types'

withDefaults(defineProps<CardProps>(), {
  size: 'l',
  align: 'center'
})
</script>

<style scoped lang="scss">
.card {
  background-color: var(--eos-color-primary-50);
  min-width: 600px;
  display: flex;
  flex-direction: column;

  &_s {
    padding: var(--eos-space-s);
    border-radius: var(--eos-radius-s);
    box-shadow: 0 1px 2px rgba(35, 21, 16, 0.04);
    gap: var(--eos-space-l);
  }

  &_m {
    padding: var(--eos-space-m);
    border-radius: var(--eos-radius-m);
    box-shadow: 0 2px 4px rgba(35, 21, 16, 0.08);
    gap: var(--eos-space-m);
  }

  &_l {
    padding: var(--eos-space-l);
    border-radius: var(--eos-radius-l);
    box-shadow: 0 4px 12px rgba(35, 21, 16, 0.12);
    gap: var(--eos-space-l);
  }

  &_align-left {
    text-align: left;
    align-items: flex-start;
  }

  &_align-center {
    text-align: center;
    align-items: center;
  }
}
</style>
