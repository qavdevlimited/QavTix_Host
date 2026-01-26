import { Icon } from '@iconify/react'
import Link from 'next/link'
import Image from 'next/image'


interface TopPerformingEventCardProps {
    event: TopPerformingEvent
    rank?: number
}

export default function TopPerformingEventCard({ event, rank }: TopPerformingEventCardProps) {

    const soldPercentage = Math.round((event.ticketsSold / event.totalTickets) * 100)

    return (
        <div  className="shadow-[0px_5.8px_23.17px_0px_#3326AE14] py-2 space-y-1 border-b border-brand-neutral-2 last:border-0 px-3 rounded-lg">
            {/* Header Stats */}
            <div className="flex items-center gap-3 justify-between mb-3 text-[11px] text-brand-neutral-7">
                <div className="flex items-center gap-1">
                    <Icon icon="hugeicons:target-02" width="24" height="24" className='shrink-0 size-4 text-brand-accent-3' />
                    <span>Conversion Rate: <span className="font-medium">{event.conversionRate}%</span></span>
                </div>
                <div className="flex items-center gap-1">
                    <Icon icon="hugeicons:ticket-02" className="size-4 shrink-0 text-brand-accent-3" />
                    <span>Tickets Sold: <span className="font-medium">{event.ticketsSold}/{event.totalTickets}</span></span>
                </div>
            </div>

            {/* Event Info */}
            <div className="flex items-center gap-3 mb-3">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
                    <Image
                        src={event.image || ""}
                        alt={event.title || "Event Image"}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex-1 min-w-0">
                    <Link 
                        href={`/events/${event.id}`}
                        className="block hover:text-brand-primary-6 transition-colors"
                    >
                        <h3 className="text-xs font-semibold text-brand-secondary-9 truncate mb-0.5">
                            {event.title}
                        </h3>
                    </Link>
                    <p className="text-xs text-brand-neutral-7">
                        {event.category}
                    </p>
                </div>
            </div>

            <div className="border-t border-brand-neutral-2">
                <div className="flex items-center justify-between">
                    <span className="text-xs text-brand-neutral-7">Revenue Generated:</span>
                    <span className="text-sm font-medium text-[#5F9F7D]">
                        {event.currency}{event.revenueGenerated.toLocaleString()}
                    </span>
                </div>
            </div>
        </div>
    )
}