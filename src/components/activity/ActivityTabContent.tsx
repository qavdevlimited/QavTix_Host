'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import RecentActivityItem from './RecentActivityItem'
import { cn } from '@/lib/utils'
import { Select, SelectContent, SelectItem, SelectTrigger } from '../ui/select'
import { SelectValue } from '@radix-ui/react-select'

interface RecentActivityTabProps {
  activities: ActivityItem[]
}

export default function RecentActivityTab({ activities }: RecentActivityTabProps) {

    const [filterValue,setFilterValue] = useState<string>("")

    const filterTypes = [
        {
            name: "Low Sale",
            value: "low_sale"
        },
        {
            name: "Tickets",
            value: "tcikets"
        }
    ]

    return (
        <div className="space-y-4">
            {/* Filter Button */}
            <div className="flex items-center justify-between">
                <Select 
                    value={filterValue} 
                    onValueChange={(v) => setFilterValue(v)}
                >
                    <SelectTrigger
                        className={cn(
                            "text-neutral-8 font-medium disabled:cursor-not-allowed disabled:opacity-65 w-fit bg-white rounded-lg border-neutral-4 hover:border-neutral-5 focus:border-primary-6",
                        )}
                    >
                        <Icon icon="hugeicons:sliders-horizontal" width="24" height="24" className='shrink-0' />
                        <SelectValue placeholder="Filter" />
                    </SelectTrigger>
                    <SelectContent>
                        {filterTypes.map((v) => (
                            <SelectItem key={v.value} value={v.value}>
                                <span>{v.name}</span>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* Activity List */}
            <div className="space-y-3 px-4">
                {activities.length > 0 ? (
                    activities.map((activity) => (
                    <RecentActivityItem key={activity.id} activity={activity} />
                ))
                ) : (
                    <div className="py-12 text-center">
                        <Icon icon="hugeicons:clock-01" className="w-12 h-12 text-neutral-4 mx-auto mb-3" />
                        <p className="text-sm text-neutral-6">No recent activity</p>
                    </div>
                )}
            </div>
        </div>
    )
}