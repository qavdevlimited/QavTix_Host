import { usePagination } from "@/custom-hooks/PaginationHook"
import { cn } from "@/lib/utils"
import PaginationControls from "../tools/PaginationControl"
import { Icon } from "@iconify/react"
import EventInfo from "../../event/EventInfo"
import { useState } from "react"
import Link from "next/link"
import { mockUpcomingEvents } from "@/components-data/demo-data"
import { draftStatusConfig } from "../resources/status-config"



export default function DraftedEventsTable() {
    const [deletingId, setDeletingId] = useState<string | null>(null)
    const pagination = usePagination(mockUpcomingEvents, 5)

    const handleDelete = async (eventId: string) => {
        
    }

    return (
        <div className="w-full space-y-4 mt-5">
            {/* Desktop Table */}
            <div className="hidden md:block border border-brand-neutral-2 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-brand-neutral-3 border-b border-brand-neutral-3">
                            <tr>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Status</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Event Name</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Date & Time</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Location</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Tickets Sold</th>
                                <th className="text-center py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Actions</th>
                                <th className="w-12 py-4 px-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-5 bg-white">
                            {pagination.currentItems.map((event) => {
                                const status = draftStatusConfig["unpublished" as keyof typeof draftStatusConfig]
                                const isDeleting = deletingId === event.id
                                
                                return (
                                    <tr 
                                        key={event.id} 
                                        className="hover:bg-brand-neutral-3/70 transition-colors"
                                    >
                                        <td className="py-4 px-5">
                                            <div className="flex items-center gap-1 whitespace-nowrap">
                                                <Icon icon={status.icon} className={cn('w-2 h-2', status.color)} />
                                                <span className={cn('text-xs font-medium', status.color)}>
                                                    {status.label}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-5">
                                            <EventInfo 
                                                variant="desktop"
                                                category={event.category}
                                                image={event.image}
                                                title={event.title}
                                            />
                                        </td>
                                        <td className="py-4 px-5">
                                            <div className="flex flex-col text-xs text-brand-secondary-9">
                                                <span>{event.date} | {event.time}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-5">
                                            <p className="text-[11px] text-brand-secondary-6 max-w-[15em]">
                                                {event.location}
                                            </p>
                                        </td>
                                        <td className="py-4 px-5 text-brand-secondary-9 text-center">
                                            --
                                        </td>
                                        <td className="py-4 px-5 text-center">
                                            <Link 
                                                href={`/dashboard/events/edit/${event.id}`}
                                                className="inline-flex items-center gap-1 text-xs font-semibold text-brand-primary-6 hover:text-brand-primary-7 transition-colors"
                                            >
                                                {event.status as any === 'unpublished' ? 'Publish Again' : 'Continue Editing'}
                                                <Icon icon="lucide:arrow-right" className="w-4 h-4" />
                                            </Link>
                                        </td>
                                        <td className="py-4 px-4">
                                            <button
                                                onClick={() => handleDelete(event.id)}
                                                disabled={isDeleting}
                                                className={cn(
                                                    "p-2 bg-red-50 hover:bg-red-100 rounded-full transition-colors",
                                                    isDeleting && "opacity-50 cursor-not-allowed"
                                                )}
                                            >
                                                {isDeleting ? (
                                                    <Icon icon="eos-icons:three-dots-loading" className="size-4 text-red-600" />
                                                ) : (
                                                    <Icon icon="streamline-ultimate:bin-1" className="size-4 text-red-600" />
                                                )}
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden grid grid-cols-1 gap-3">
                {pagination.currentItems.map((event) => {
                    const status = draftStatusConfig["unpublished" as keyof typeof draftStatusConfig]
                    const isDeleting = deletingId === event.id
                    
                    return (
                        <div 
                            key={event.id} 
                            className="border border-brand-neutral-3 rounded-lg p-4 bg-white"
                        >
                            <div className="space-y-3">
                                {/* First Row - Status, Tickets Sold, Revenue, Delete */}
                                <div className="flex items-center gap-2 flex-wrap justify-between text-xs pb-2 border-b border-brand-neutral-2">
                                    <div className="flex items-center gap-1">
                                        <Icon icon={status.icon} className={cn('w-2 h-2', status.color)} />
                                        <span className={cn('font-medium', status.color)}>
                                            {status.label}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="font-bold">Sold:</span>
                                        <span>{event.ticketsSold}/{event.totalTickets}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="font-bold">Revenue:</span>
                                        <span>₦{(event.revenue / 1000).toFixed(0)}k</span>
                                    </div>
                                    <button
                                        onClick={() => handleDelete(event.id)}
                                        disabled={isDeleting}
                                        className={cn(
                                            "p-2 bg-red-50 hover:bg-red-100 rounded-full transition-colors",
                                            isDeleting && "opacity-50 cursor-not-allowed"
                                        )}
                                    >
                                        {isDeleting ? (
                                            <Icon icon="eos-icons:three-dots-loading" className="w-4 h-4 text-red-600" />
                                        ) : (
                                            <Icon icon="streamline-ultimate:bin-1" className="w-4 h-4 text-red-600" />
                                        )}
                                    </button>
                                </div>

                                {/* Second Row - EventInfo & Date */}
                                <div className="flex items-start justify-between gap-3">
                                    <EventInfo 
                                        variant="mobile"
                                        category={event.category}
                                        image={event.image}
                                        title={event.title}
                                    />
                                    <div className="flex flex-col text-xs text-brand-secondary-9">
                                        <span className="font-bold">Date & Time</span>
                                        <span>{event.time} | {event.date}</span>
                                    </div>
                                </div>

                                {/* Third Row - Location */}
                                <div className="text-[11px] text-brand-secondary-6">
                                    <div className="flex items-start gap-1">
                                        <Icon icon="lucide:map-pin" className="w-3 h-3 mt-0.5 shrink-0" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>

                                {/* Fourth Row - Continue Editing Button */}
                                <div className="pt-1">
                                    <Link 
                                        href={`/dashboard/events/edit/${event.id}`}
                                        className="inline-flex items-center gap-1 text-xs font-semibold text-brand-primary-6 hover:text-brand-primary-7 transition-colors"
                                    >
                                        {event.status as any === 'unpublished' ? 'Publish Again' : 'Continue Editing'}
                                        <Icon icon="lucide:arrow-right" className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <PaginationControls
                endIndex={pagination.endIndex}
                startIndex={pagination.startIndex}
                totalItems={mockUpcomingEvents.length}
                className="justify-center"
                hasNextPage={pagination.hasNextPage}
                hasPreviousPage={pagination.hasPreviousPage}
                onNextPage={pagination.nextPage}
                onPreviousPage={pagination.previousPage}
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
            />
        </div>
    )
}