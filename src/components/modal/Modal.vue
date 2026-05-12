<template>
  <div
    v-if="open"
    class="modal__overlay"
    @click.self="handleClose"
  >
    <div
      class="modal"
      :style="{ maxWidth }"
    >
      <div class="modal__header">
        <h2 class="modal__title">{{ title }}</h2>
        <button
          class="modal__close-btn"
          aria-label="Close modal"
          @click="handleClose"
        >
          <CloseIcon />
        </button>
      </div>
      <div class="modal__content">
        <slot />
      </div>
      <div
        v-if="$slots.footer"
        class="modal__footer"
      >
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CloseIcon from '../icons/CloseIcon.vue'
import type { ModalProps, ModalEmits } from './types'

withDefaults(defineProps<ModalProps>(), {
  maxWidth: '760px'
})

const emit = defineEmits<ModalEmits>()

const handleClose = () => {
  emit('update:open', false)
}
</script>

<style scoped lang="scss">
.modal {
  width: 100%;
  max-width: 760px;
  max-height: 90vh;
  overflow: auto;
  border-radius: var(--eos-radius-l);
  border: 1px solid var(--eos-color-primary-200);
  background: white;
  padding: var(--eos-space-l);
  display: flex;
  flex-direction: column;
  gap: var(--eos-space-m);

  &__overlay {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1000;
    padding: var(--eos-space-m);
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--eos-space-m);
  }

  &__title {
    font-size: var(--eos-font-size-l);
    font-weight: var(--eos-font-weight-semibold);
    margin: 0;
    color: var(--eos-color-primary-700);
  }

  &__close-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: none;
    background: transparent;
    cursor: pointer;
    color: var(--eos-color-primary-600);
    padding: 0;
    border-radius: var(--eos-radius-m);
    transition:
      background-color 0.2s,
      color 0.2s;

    &:hover {
      background-color: var(--eos-color-primary-100);
      color: var(--eos-color-primary-700);
    }

    &:active {
      background-color: var(--eos-color-primary-200);
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: var(--eos-space-m);
  }

  &__footer {
    display: flex;
    gap: var(--eos-space-m);
    justify-content: flex-end;
    border-top: 1px solid var(--eos-color-primary-200);
    padding-top: var(--eos-space-m);
    margin-top: var(--eos-space-m);
  }
}
</style>
