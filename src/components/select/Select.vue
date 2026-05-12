<template>
  <div
    ref="wrapperRef"
    class="select"
    :class="{ select_open: isOpen }"
  >
    <div class="select__trigger">
      <span class="select__value p1">
        {{ selectedLabel || placeholder || 'Выберите значение' }}
      </span>
      <ChevronIcon class="select__arrow" />
    </div>

    <div
      v-if="isOpen"
      class="select__dropdown"
      @click.stop
    >
      <div
        v-for="option in options"
        :key="option.value"
        class="select__option"
        :class="{ select__option_selected: option.value === modelValue }"
        @click="selectOption(option)"
      >
        <span class="p1">{{ option.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useEventListener } from '@vueuse/core'
import { SelectProps, SelectEmits } from './types'
import ChevronIcon from '../icons/ChevronIcon.vue'

const props = withDefaults(defineProps<SelectProps>(), {
  placeholder: 'Выберите значение'
})

const emit = defineEmits<SelectEmits>()

const isOpen = ref(false)
const wrapperRef = ref<HTMLElement>()

const selectedLabel = computed(() => {
  const selected = props.options.find((opt) => opt.value === props.modelValue)
  return selected?.label
})

const selectOption = (option: (typeof props.options)[0]) => {
  emit('update:modelValue', option.value)
  isOpen.value = false
}

const handleClickOutside = (event: MouseEvent) => {
  if (!wrapperRef.value) return

  if (!wrapperRef.value.contains(event.target as Node)) {
    isOpen.value = false
  } else if (wrapperRef.value.contains(event.target as Node)) {
    isOpen.value = !isOpen.value
  }
}

useEventListener(document, 'click', handleClickOutside)
</script>

<style scoped lang="scss">
.select {
  position: relative;
  display: inline-block;
  width: auto;
  min-width: 200px;
  background-color: white;
  border: 2px solid var(--eos-color-primary-200);
  border-radius: var(--eos-radius-m);
  cursor: pointer;
  transition: all 0.2s ease;

  &__trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--eos-space-s) var(--eos-space-m);
    min-height: 40px;
    color: var(--eos-color-primary-700);
    gap: var(--eos-space-s);
  }

  &__value {
    flex: 1;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__arrow {
    width: 20px;
    height: 20px;
    color: var(--eos-color-primary-600);
    flex-shrink: 0;
    transition: transform 0.2s ease;
  }

  &_open {
    border-color: var(--eos-color-primary-500);
    box-shadow: 0 0 0 3px var(--eos-color-primary-50);

    .select__arrow {
      transform: rotate(180deg);
    }
  }

  &__dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: var(--eos-space-s);
    background-color: white;
    border: 2px solid var(--eos-color-primary-200);
    border-radius: var(--eos-radius-m);
    box-shadow: 0 4px 6px var(--eos-color-primary-600-alpha-10);
    max-height: 200px;
    overflow-y: auto;
    z-index: 10;
  }

  &__option {
    padding: var(--eos-space-s) var(--eos-space-m);
    color: var(--eos-color-primary-800);
    cursor: pointer;
    transition: background-color 0.15s ease;

    &:hover {
      background-color: var(--eos-color-primary-100);
    }

    &_selected {
      background-color: var(--eos-color-primary-50);
      color: var(--eos-color-primary-700);
      font-weight: var(--eos-font-weight-semibold);
    }
  }
}
</style>
