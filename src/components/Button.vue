<template>
  <button 
    :class="[
      'btn',
      `btn-${variant}`,
      `btn-${size}`,
      { 'btn-disabled': disabled },
      { 'btn-full-width': fullWidth }
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">

withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  fullWidth?: boolean
}>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  fullWidth: false
})
</script>

<style scoped>
.btn {
  font-family: var(--eos-font-family);
  font-weight: var(--eos-font-weight-medium);
  border: none;
  border-radius: var(--eos-radius-m);
  cursor: pointer;
  transition: all var(--eos-transition-fast);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--eos-space-s);
  text-decoration: none;
}

/* Variants */
.btn-primary {
  background-color: var(--eos-color-primary);
  color: white;
}

.btn-primary:hover:not(.btn-disabled) {
  background-color: var(--eos-color-primary-dark);
  box-shadow: var(--eos-shadow-m);
}

.btn-primary:active:not(.btn-disabled) {
  transform: scale(0.98);
}

.btn-secondary {
  background-color: var(--eos-color-secondary);
  color: white;
}

.btn-secondary:hover:not(.btn-disabled) {
  background-color: var(--eos-color-secondary-dark);
  box-shadow: var(--eos-shadow-m);
}

.btn-success {
  background-color: var(--eos-color-success);
  color: white;
}

.btn-success:hover:not(.btn-disabled) {
  background-color: #128a3d;
  box-shadow: var(--eos-shadow-m);
}

.btn-error {
  background-color: var(--eos-color-error);
  color: white;
}

.btn-error:hover:not(.btn-disabled) {
  background-color: #b91c1c;
  box-shadow: var(--eos-shadow-m);
}

.btn-warning {
  background-color: var(--eos-color-warning);
  color: white;
}

.btn-warning:hover:not(.btn-disabled) {
  background-color: #d97706;
  box-shadow: var(--eos-shadow-m);
}

/* Sizes */
.btn-sm {
  padding: var(--eos-space-xs) var(--eos-space-m);
  font-size: var(--eos-font-size-s);
}

.btn-md {
  padding: var(--eos-space-s) var(--eos-space-l);
  font-size: var(--eos-font-size-m);
}

.btn-lg {
  padding: var(--eos-space-m) var(--eos-space-xl);
  font-size: var(--eos-font-size-l);
}

/* Special states */
.btn-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-full-width {
  width: 100%;
}
</style>
