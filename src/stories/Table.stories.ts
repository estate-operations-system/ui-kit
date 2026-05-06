import type { Meta, StoryObj } from '@storybook/vue3'
import { Table } from '../components/table'
import { Button, ButtonSize, ButtonVariant } from '../components/button'
import { EosTag as Tag, TagSize } from '../components/tag'
import type { TableColumn, TableRow } from '../components/table/types'

const meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A reusable table component with support for clickable rows. ' +
          'When a row is clicked in a clickable table, it emits a "rowClick" event with the row data. ' +
          'Features a dark header and row borders for clear data separation. ' +
          'Use named slots to customize cell content.'
      }
    }
  },
  argTypes: {
    columns: {
      description: 'Array of column definitions with id, name, and width'
    },
    rows: {
      description: 'Array of row data with cells containing id and data'
    },
    clickable: {
      control: 'boolean',
      description: 'Enable clickable rows which emit rowClick events'
    }
  },
  args: {
    clickable: false
  }
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const defaultColumns: TableColumn[] = [
  { id: 'name', name: 'Имя', width: 150 },
  { id: 'email', name: 'Email' },
  { id: 'status', name: 'Статус' },
  { id: 'tag', name: 'Тег' }
]

const defaultRows: TableRow[] = [
  {
    id: '1',
    cells: [
      { id: 'name', data: 'Иван Петров' },
      { id: 'email', data: 'ivan@example.com' },
      { id: 'status', data: 'Активный' },
      { id: 'tag', data: 'Primary' }
    ]
  },
  {
    id: '2',
    cells: [
      { id: 'name', data: 'Мария Сидорова' },
      { id: 'email', data: 'maria@example.com' },
      { id: 'status', data: 'Активный' },
      { id: 'tag', data: 'Success' }
    ]
  },
  {
    id: '3',
    cells: [
      { id: 'name', data: 'Алексей Иванов' },
      { id: 'email', data: 'alex@example.com' },
      { id: 'status', data: 'Неактивный' },
      { id: 'tag', data: 'Error' }
    ]
  }
]

export const Default: Story = {
  args: {
    columns: defaultColumns,
    rows: defaultRows
  },
  render: (args) => ({
    components: { Table },
    setup() {
      return { args }
    },
    template: '<Table v-bind="args" />'
  })
}

export const Clickable: Story = {
  args: {
    columns: defaultColumns,
    rows: defaultRows,
    clickable: true
  },
  render: (args) => ({
    components: { Table },
    setup() {
      const handleRowClick = (row: TableRow) => {
        window.alert(`Row clicked: ${JSON.stringify(row)}`)
      }
      return { args, handleRowClick }
    },
    template: '<Table v-bind="args" @rowClick="handleRowClick" />'
  })
}

export const WithSlots: Story = {
  args: {
    columns: defaultColumns,
    rows: defaultRows,
    clickable: true
  },
  render: (args) => ({
    components: { Table, Button, Tag },
    setup() {
      const handleRowClick = (row: TableRow) => {
        window.alert(`Row clicked: ${JSON.stringify(row)}`)
      }
      const getTagColor = (tagName: string) => {
        const colorMap: Record<string, string> = {
          Primary: '#ad6952',
          Success: '#10b981',
          Error: '#dc2626',
          Warning: '#f59e0b'
        }
        return colorMap[tagName] || '#ad6952'
      }
      return { args, ButtonSize, ButtonVariant, TagSize, handleRowClick, getTagColor }
    },
    template: `
      <Table v-bind="args" @rowClick="handleRowClick">
        <template #cell-status="{ cell }">
          <Button 
            :size="ButtonSize.Small" 
            :variant="cell.data === 'Активный' ? ButtonVariant.Primary : ButtonVariant.Secondary"
            disabled
          >
            {{ cell.data }}
          </Button>
        </template>
        <template #cell-tag="{ cell }">
          <Tag :size="TagSize.Medium" :color="getTagColor(cell.data)">
            {{ cell.data }}
          </Tag>
        </template>
      </Table>
    `
  })
}
