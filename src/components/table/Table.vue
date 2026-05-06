<template>
  <table class="table">
    <thead class="table__head">
      <tr>
        <th
          v-for="column in columns"
          :key="column.id"
          class="table__cell"
          :style="column.width ? { width: `${column.width}px` } : {}"
        >
          {{ column.name }}
        </th>
      </tr>
    </thead>
    <tbody class="table__body">
      <tr
        v-for="row in rows"
        :key="row.id"
        class="table__row"
        :class="{
          table__row_clickable: clickable
        }"
        @click="handleRowClick(row)"
      >
        <td
          v-for="cell in row.cells"
          :key="cell.id"
          class="table__cell"
          :style="getColumnWidth(cell.id) ? { width: getColumnWidth(cell.id) } : {}"
        >
          <slot
            :name="`cell-${cell.id}`"
            :cell="cell"
            :row="row"
          >
            {{ cell.data }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { TableProps, TableRow } from './types'

const props = withDefaults(defineProps<TableProps>(), {
  clickable: false
})

const emit = defineEmits<{
  rowClick: [row: TableRow]
}>()

const getColumnWidth = (columnId: string): string | undefined => {
  const column = props.columns.find((col) => col.id === columnId)
  return column?.width ? `${column.width}px` : undefined
}

const handleRowClick = (row: TableRow) => {
  if (!props.clickable) return
  emit('rowClick', row)
}
</script>

<style scoped lang="scss">
.table {
  width: 100%;
  border-radius: var(--eos-radius-m);
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
  table-layout: auto;
  color: var(--eos-color-primary-800);

  &__head {
    background-color: var(--eos-color-primary-600);
    color: var(--eos-color-primary-50);
  }

  &__row {
    border-bottom: 1px solid var(--eos-color-primary-200);

    &:last-child {
      border-bottom: none;
    }

    &.table__row_clickable {
      cursor: pointer;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: var(--eos-color-primary-50);
      }
    }
  }

  &__cell {
    padding: var(--eos-space-s);
    text-align: left;
    font-size: var(--eos-font-size-m);
    border-bottom: 1px solid var(--eos-color-primary-200);
  }

  &__row:last-child &__cell,
  &__head &__cell {
    border-bottom: none;
  }
}
</style>
