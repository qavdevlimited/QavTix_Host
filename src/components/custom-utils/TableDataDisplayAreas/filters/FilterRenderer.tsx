'use client'

import { Dispatch, SetStateAction } from 'react'
import { FilterKey } from '../resources/avaliable-filters'
import { filterRegistry } from './filter-registry'

interface FilterRendererProps {
  filterKey: FilterKey
  filters: FilterValues
  setFilters: Dispatch<SetStateAction<FilterValues>>
  className?: string
  icon: string
}

export function FilterRenderer({
  filterKey,
  filters,
  setFilters,
  className,
  icon
}: FilterRendererProps) {
    const entry = filterRegistry[filterKey]
    if (!entry) return null

    const { component: Component, stateKey } = entry

    const value = filters[stateKey]
    const onChange = (newValue: any) => {
        setFilters(prev => ({
        ...prev,
        [stateKey]: newValue
        }))
    }

    return (
        <Component
            value={value}
            onChange={onChange}
            className={className}
            icon={icon}
        />
    )
}