<template>
  <div class="input__wrapper">
    <input
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="modelValue"
      class="input"
      :class="inputClasses"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <div v-if="error" class="input__error">{{ error }}</div>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { InputProps, InputType, InputEmits } from './types'

  const props = withDefaults(defineProps<InputProps>(), {
    type: InputType.Text,
    modelValue: '',
    disabled: false,
    placeholder: 'Введите текст'
  })

  const emit = defineEmits<InputEmits>()

  const inputClasses = computed(() => ({
    input_error: props.error,
    input_disabled: props.disabled
  }))
</script>

<style lang="scss" scoped>
  .input {
    padding: var(--spacing-m) var(--spacing-l);
    font-size: var(--font-size-m);
    font-family: var(--font-family);
    border: 2px solid var(--color-border);
    border-radius: var(--border-radius-s);
    outline: none;
    color: var(--color-text);
    transition: all var(--transition-base, 0.2s) ease;

    &:focus {
      border-color: var(--color-primary);
    }

    &::placeholder {
      color: var(--color-text-light);
    }

    &_error {
      border-color: var(--color-error);
      background-color: var(--color-background-error);

      &:focus {
        border-color: var(--color-error);
      }
    }

    &_disabled {
      background-color: var(--color-background-light);
      color: var(--color-text-disabled);
      cursor: not-allowed;
      opacity: 0.6;

      &:focus {
        border-color: var(--color-border);
      }

      &::placeholder {
        color: #bbb;
      }
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-s);
      font-family: var(--font-family);
    }

    &__error {
      font-size: var(--font-size-s);
      color: var(--color-error);
      line-height: var(--line-height-normal);
      margin-top: var(--spacing-xs);
    }
  }
</style>
