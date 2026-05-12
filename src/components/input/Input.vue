<template>
  <div class="input__wrapper">
    <textarea
      v-if="type === 'textarea'"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="modelValue"
      class="input input_textarea"
      :class="inputClasses"
      @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
    <input
      v-else
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="modelValue"
      class="input"
      :class="inputClasses"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <div
      v-if="error"
      class="input__error"
    >
      {{ error }}
    </div>
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
  padding: var(--eos-space-s) var(--eos-space-m);
  font-size: var(--eos-font-size-m);
  border: 2px solid var(--eos-color-primary-300);
  border-radius: var(--eos-radius-m);
  outline: none;
  color: var(--eos-color-primary-800);
  font-family: var(--eos-font-family);

  &:focus {
    border-color: var(--eos-color-primary-500);
  }

  &::placeholder {
    color: var(--eos-color-primary-200);
  }

  &_textarea {
    resize: vertical;
    min-height: 100px;
  }

  &_error {
    border-color: var(--eos-color-error);
    background-color: var(--eos-color-error-light);
  }

  &_disabled {
    background-color: var(--eos-color-primary-100);
    color: var(--eos-color-primary-600);
    cursor: not-allowed;
    opacity: 0.6;

    &::placeholder {
      color: var(--eos-color-primary-200);
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--eos-space-s);
    font-family: var(--eos-font-family);
  }

  &__error {
    font-size: var(--eos-font-size-s);
    color: var(--eos-color-error);
    line-height: var(--eos-line-height-normal);
  }
}
</style>
