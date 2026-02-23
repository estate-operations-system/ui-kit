<template>
  <div class="input-group">
    <label v-if="label" :for="id" class="input-label">
      {{ label }}
      <span v-if="required" class="required">*</span>
    </label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :class="['input', { 'input-error': error }]"
      v-bind="$attrs"
    />
    <span v-if="error" class="error-message">{{ error }}</span>
    <span v-if="hint && !error" class="hint-message">{{ hint }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

withDefaults(defineProps<{
  label?: string
  placeholder?: string
  type?: string
  disabled?: boolean
  required?: boolean
  error?: string
  hint?: string
}>(), {
  type: 'text',
  disabled: false,
  required: false
})

const id = computed(() => Math.random().toString(36).substr(2, 9))
</script>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  gap: var(--eos-space-s);
}

.input-label {
  font-size: var(--eos-font-size-m);
  font-weight: var(--eos-font-weight-medium);
  color: var(--eos-color-text);
}

.required {
  color: var(--eos-color-error);
}

.input {
  padding: var(--eos-space-s) var(--eos-space-m);
  font-size: var(--eos-font-size-m);
  border: 1px solid var(--eos-color-border);
  border-radius: var(--eos-radius-m);
  transition: all var(--eos-transition-fast);
  font-family: var(--eos-font-family);
}

.input:focus {
  outline: none;
  border-color: var(--eos-color-primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.input:disabled {
  background-color: var(--eos-color-bg-secondary);
  color: var(--eos-color-text-disabled);
  cursor: not-allowed;
}

.input-error {
  border-color: var(--eos-color-error);
  background-color: rgba(220, 38, 38, 0.02);
}

.input-error:focus {
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}

.error-message {
  font-size: var(--eos-font-size-s);
  color: var(--eos-color-error);
  font-weight: var(--eos-font-weight-medium);
}

.hint-message {
  font-size: var(--eos-font-size-s);
  color: var(--eos-color-text-tertiary);
}
</style>
