'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import RecentActivityTab from '../slots/activity/ActivityTabContent'
import NotificationsTab from '../slots/activity/NotificationTabContent'
import TopPerformingEventCard from '../slots/top-performing-events/TopPerformingEventItem'
import { mockPerformingEvents } from '@/components-data/demo-data'


type TabType = 'topPerformingEvents' | 'otherTab'

interface TopPerformingEventsSlotPWProps {
    eventsData: TopPerformingEvent[]
}

export default function TopPerformingEventsSlotPW({
    eventsData
}: TopPerformingEventsSlotPWProps) {


    const [activeTab, setActiveTab] = useState<TabType>('topPerformingEvents')

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-2 overflow-hidden w-full">
            <div className="border-b border-neutral-3">
                <div className="flex">
                    <button
                        onClick={() => setActiveTab('topPerformingEvents')}
                        className={cn(
                        "flex-1 px-6 py-4 text-sm md:text-[13px] font-bold transition-colors relative",
                        activeTab === 'topPerformingEvents'
                            ? "text-primary-6"
                            : "text-neutral-6 hover:text-neutral-8"
                        )}
                    >
                        Top Performing Events
                        {activeTab === 'topPerformingEvents' && (
                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Tab Content */}
            <div className="py-4 space-y-3 w-full px-4">
                {
                    activeTab === 'topPerformingEvents' &&
                    mockPerformingEvents.map((event, index) => (
                        <TopPerformingEventCard 
                            key={event.id} 
                            event={event} 
                            rank={index + 1} 
                        />
                    ))
                }
            </div>
        </div>
    )
}
