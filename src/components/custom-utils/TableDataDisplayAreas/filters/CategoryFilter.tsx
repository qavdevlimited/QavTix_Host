'use client'

import { useState } from 'react'
import CategoryItemBtn from './buttons-and-inputs/CategoryItemBtn'
import EventFilterTypeBtn from './buttons-and-inputs/EventFilterTypeBtn'
import { AnimatedDialog } from '../../dialogs/AnimatedDialog'
import FilterButtonsActions1 from './buttons-and-inputs/FilterActionButtons1'

interface Category {
    value: string
    label: string
    count: number
}

interface CategoryFilterProps {
    value?: string[]
    onChange: (value: string[]) => void
    categories?: Category[]
    icon: string
}

const defaultCategories: Category[] = [
    { value: 'all', label: 'All Events', count: 30 },
    { value: 'concerts', label: 'Concerts & Music', count: 30 },
    { value: 'sports', label: 'Sport & Fitness', count: 30 },
    { value: 'arts', label: 'Arts & Theater', count: 30 },
    { value: 'food', label: 'Food & Dining', count: 30 },
    { value: 'festivals', label: 'Festivals', count: 30 },
    { value: 'business', label: 'Business & Networking', count: 30 },
    { value: 'travel', label: 'Travel & Tours', count: 30 },
    { value: 'nightlife', label: 'Nightlife & Parties', count: 30 },
]

export default function CategoryFilter({
    value = [],
    onChange,
    icon,
    categories = defaultCategories,
}: CategoryFilterProps) {
    
    const [isOpen, setIsOpen] = useState(false)
    
    const [selectedCategories, setSelectedCategories] = useState<string[]>(value)

    const handleToggle = (categoryValue: string) => {
        if (categoryValue === 'all') {
            setSelectedCategories([])
            return
        }

        setSelectedCategories((prev) =>
            prev.includes(categoryValue)
                ? prev.filter((v) => v !== categoryValue)
                : [...prev, categoryValue]
        )
    }

    const handleApply = () => {
        onChange(selectedCategories)
        setIsOpen(false)
    }

    const handleClear = () => {
        setSelectedCategories([])
        onChange([])
    }

    const hasActiveFilter = selectedCategories.length > 0
    
    const categoryList = (
        <div className="space-y-2 max-h-[50vh] overflow-y-auto">
            {categories.map((category, index) => {
                const isSelected =
                    category.value === 'all'
                        ? selectedCategories.length === 0
                        : selectedCategories.includes(category.value)

                return (
                    <CategoryItemBtn
                        key={index}
                        category={category}
                        isSelected={isSelected}
                        handleToggle={handleToggle}
                    />
                )
            })}
        </div>
    )

    return (
        <AnimatedDialog 
            onOpenChange={setIsOpen}
            open={isOpen}
            className=''
            title='Category'
            trigger={
                <EventFilterTypeBtn 
                    icon={icon}
                    onClick={() => setIsOpen(true)}
                    displayText="Category"
                    hasActiveFilter={hasActiveFilter}
                />
            }
            >
            <div className="space-y-6">
                {categoryList}
                <FilterButtonsActions1 onApply={handleApply} onClear={handleClear} />
            </div>
        </AnimatedDialog>
    )
}