export type TableDataDisplayFilter = {
  label: string
  icon: string
  value: string
}


export type FilterKey =
  | 'category'
  | 'status'
  | 'ticketType'
  | 'dateRange'
  | 'purchaseDate'
  | 'performance'
  | 'sortBy'


export const ALL_FILTERS = {
  category: {
    value: 'category',
    label: 'Category',
    icon: 'tabler:triangle-square-circle'
  },
  status: {
    value: 'status',
    label: 'Status',
    icon: 'ic:round-radio-button-checked'
  },
  ticketType: {
    value: 'ticketType',
    label: 'Ticket Type',
    icon: 'hugeicons:ticket-02'
  },
  dateRange: {
    value: 'dateRange',
    label: 'Date Range',
    icon: 'solar:calendar-linear'
  },
  purchaseDate: {
    value: 'purchaseDate',
    label: 'Purchase Date',
    icon: 'solar:calendar-linear'
  },
  performance: {
    value: 'performance',
    label: 'Performance',
    icon: 'hugeicons:chart-evaluation'
  },
  sortBy: {
    value: 'sortBy',
    label: 'Sort By',
    icon: 'hugeicons:sliders-horizontal'
  }
} as const satisfies Record<FilterKey, TableDataDisplayFilter>


export type TabListItem = {
  value: string
  label: string
}

export const DashboardUpcomingEventsFilters = {
  filterOptions: [
    ALL_FILTERS.category,
    ALL_FILTERS.status,
    ALL_FILTERS.dateRange,
  ] as const,

  tabList: [
      { value: 'upcoming', label: 'Upcoming Events' }
  ] as const
}


export const DashboardConsumerListFilters = {
  filterOptions: [
    ALL_FILTERS.ticketType,
    ALL_FILTERS.purchaseDate
  ] as const,
  tabList: [] as const
}


export const DashboardEventsFilters = {
  filterOptions: [
    ALL_FILTERS.category,
    ALL_FILTERS.status,
    ALL_FILTERS.performance,
    ALL_FILTERS.sortBy,
    ALL_FILTERS.dateRange
  ] as const,

  tabList: [
    { value: 'all', label: 'All' },
    { value: 'live', label: 'Live' },
    { value: 'draft', label: 'Draft' },
    { value: 'ended', label: 'Ended' },
    { value: 'cancelled', label: 'Cancelled' }
  ] as const
}


export type DashboardFilterConfig =
  | typeof DashboardUpcomingEventsFilters
  | typeof DashboardConsumerListFilters
  | typeof DashboardEventsFilters