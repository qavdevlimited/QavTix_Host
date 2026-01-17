'use client'

import { useState } from "react"
import { DateRange } from "react-day-picker"
import { QuickDateButtons } from "./buttons-and-inputs/QuickDateButtons"
import { EventSearchDateRangePicker } from "./buttons-and-inputs/EventSearchDateRangePicker"
import { AnimatedDialog } from "../../dialogs/AnimatedDialog"
import EventFilterTypeBtn from "./buttons-and-inputs/EventFilterTypeBtn"
import FilterButtonsActions1 from "./buttons-and-inputs/FilterActionButtons1"


interface DateFilterProps {
    value?: DateRange | null
    onChange: (value: DateRange | null) => void,
    icon: string
}

export default function DateFilter({ value, onChange, icon } : DateFilterProps) {

    
    const [isOpen, setIsOpen] = useState(false)
    
    const [dateRange, setDateRange] = useState<DateRange>(
        value || { from: undefined, to: undefined }
    )

    const hasActiveFilter = value && (value?.from || value?.to)

    const handleApply = () => {
        onChange(dateRange.from || dateRange.to ? dateRange : null)
        setIsOpen(false)
    }

    const handleClear = () => {
        setDateRange({ from: undefined, to: undefined })
        onChange(null)
    }

    const handleQuickSelect = (range: DateRange) => {
        setDateRange(range)
    }

    const filterContent = (
        <>
            <QuickDateButtons
                selectedRange={dateRange}
                onSelect={handleQuickSelect}
            />

            <EventSearchDateRangePicker
                value={dateRange}
                onChange={setDateRange}
            />
        </>
    )

    return (
        <AnimatedDialog
            title='Date'
            onOpenChange={setIsOpen}
            open={isOpen}
            trigger={
                <EventFilterTypeBtn
                    onClick={() => setIsOpen(true)}
                    displayText="Date Range" 
                    icon={icon}
                    hasActiveFilter={!!hasActiveFilter}
                />
            }
        >
            <div className="space-y-6">
                {filterContent}
                <FilterButtonsActions1
                    onApply={handleApply}
                    onClear={handleClear}
                />
            </div>
        </AnimatedDialog>
    )
}