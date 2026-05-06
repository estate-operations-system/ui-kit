export interface TableColumn {
  /**
   * Unique column identifier
   */
  id: string
  /**
   * Display name for the column header
   */
  name: string
  /**
   * Column width in pixels or percentage
   */
  width?: number
}

export interface TableCell {
  /**
   * Column ID that this cell belongs to
   */
  id: string
  /**
   * Cell data content
   */
  data: string
}

export interface TableRow {
  /**
   * Unique row identifier
   */
  id: string
  /**
   * Array of cells in this row
   */
  cells: TableCell[]
}

export interface TableProps {
  /**
   * Array of column definitions
   */
  columns: TableColumn[]
  /**
   * Array of row data
   */
  rows: TableRow[]
  /**
   * Whether rows are clickable (clickable rows emit rowClick events)
   */
  clickable?: boolean
}

export interface TableEmits {
  /**
   * Emitted when a row is clicked in a clickable table
   */
  rowClick: [row: TableRow]
}
