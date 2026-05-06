<template>
  <span
    class="tag"
    :class="tagClasses"
    :style="tagStyles"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { TagProps, TagSize } from './types'

const DEFAULT_COLOR = '#ad6952'

const props = withDefaults(defineProps<TagProps>(), {
  size: TagSize.Medium,
  color: DEFAULT_COLOR
})

const tagClasses = computed(() => {
  return [`tag_${props.size}`]
})

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '173, 105, 82'
}

const tagStyles = computed(() => {
  const color = props.color || DEFAULT_COLOR
  const rgb = hexToRgb(color)
  return {
    borderColor: color,
    backgroundColor: `rgba(${rgb}, 0.05)`,
    color: color
  }
})
</script>

<style scoped lang="scss">
.tag {
  display: inline-block;
  font-weight: var(--eos-font-weight-medium);
  white-space: nowrap;
  border: 1px solid;
  border-radius: var(--eos-radius-m);
  height: fit-content;
  width: fit-content;

  @mixin tag-size($padding, $font-size) {
    padding: $padding;
    font-size: $font-size;
  }

  &_small {
    @include tag-size(var(--eos-space-xs) var(--eos-space-s), var(--eos-font-size-xs));
  }

  &_medium {
    @include tag-size(var(--eos-space-s) var(--eos-space-m), var(--eos-font-size-s));
  }

  &_large {
    @include tag-size(var(--eos-space-s) var(--eos-space-m), var(--eos-font-size-m));
  }
}
</style>
