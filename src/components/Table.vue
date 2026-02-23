<template>
  <div class="table-wrapper">
    <table class="table">
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.key" :style="{ width: column.width }">
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="index" class="table-row" @click="$emit('rowClick', row)">
          <td v-for="column in columns" :key="column.key">
            <slot :name="`cell-${String(column.key)}`" :row="row">
              {{ row[column.key as keyof typeof row] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="!data || data.length === 0" class="empty-table">
      <p>{{ emptyMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts" generic="T extends Record<string, any>">
interface Column<T> {
  label: string
  key: keyof T
  width?: string
}

withDefaults(defineProps<{
  columns: Column<T>[]
  data: T[]
  emptyMessage?: string
}>(), {
  emptyMessage: 'Нет данных'
})

defineEmits<{
  rowClick: [row: T]
}>()
</script>

<style scoped>
.table-wrapper {
  background-color: var(--eos-color-bg);
  border-radius: var(--eos-radius-l);
  box-shadow: var(--eos-shadow-s);
  overflow: hidden;
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--eos-font-size-m);
}

.table thead {
  background-color: var(--eos-color-bg-tertiary);
  border-bottom: 2px solid var(--eos-color-border);
}

.table th {
  padding: var(--eos-space-m);
  text-align: left;
  font-weight: var(--eos-font-weight-semibold);
  color: var(--eos-color-text);
  user-select: none;
}

.table tbody tr {
  border-bottom: 1px solid var(--eos-color-border);
  transition: background-color var(--eos-transition-fast);
}

.table tbody tr:hover {
  background-color: var(--eos-color-bg-secondary);
}

.table-row {
  cursor: pointer;
}

.table td {
  padding: var(--eos-space-m);
  color: var(--eos-color-text);
}

.empty-table {
  padding: var(--eos-space-2xl);
  text-align: center;
  color: var(--eos-color-text-secondary);
  font-size: var(--eos-font-size-m);
}

@media (max-width: 768px) {
  .table {
    font-size: var(--eos-font-size-s);
  }

  .table th,
  .table td {
    padding: var(--eos-space-s);
  }
}
</style>
