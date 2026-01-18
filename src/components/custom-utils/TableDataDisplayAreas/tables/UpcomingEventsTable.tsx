"use client"

import { mockUpcomingEvents } from "@/components-data/demo-data"
import { Button } from "@/components/ui/button"
import { usePagination } from "@/custom-hooks/PaginationHook"
import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from "next/link"
import PaginationControls from "../tools/PaginationControl"
import { upcomingEventsStatusConfig } from "../resources/status-config"



export default function UpcomingEventsTable() {

    const pagination = usePagination(mockUpcomingEvents, 5)

    return (
        <div className="w-full space-y-4">
            {/* Desktop Table */}
            <div className="hidden md:block border border-neutral-2 overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-neutral-3 border-b border-neutral-3">
                        <tr>
                            <th className="text-left py-4 px-5 text-xs font-semibold text-secondary-8 capitalize">Status</th>
                            <th className="text-left py-4 px-5 text-xs font-semibold text-secondary-8 capitalize">Event Name</th>
                            <th className="text-left py-4 px-5 text-xs font-semibold text-secondary-8 capitalize">Date & Time</th>
                            <th className="text-left py-4 px-5 text-xs font-semibold text-secondary-8 capitalize">Location</th>
                            <th className="text-left py-4 px-5 text-xs font-semibold text-secondary-8 capitalize">Tickets Sold</th>
                            <th className="text-left py-4 px-5 text-xs font-semibold text-secondary-8 capitalize">Revenue</th>
                            <th className="text-left py-4 px-5 text-xs font-semibold text-secondary-8 capitalize">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-2">
                        {pagination.currentItems.map((event) => {
                            const status = upcomingEventsStatusConfig[event.status as keyof typeof upcomingEventsStatusConfig] || upcomingEventsStatusConfig['low-sales']
                            const percentage = Math.round((event.ticketsSold / event.totalTickets) * 100)
                            
                            return (
                                <tr key={event.id} className="hover:bg-neutral-1 transition-colors border-b border-b-neutral-5/90">
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-1">
                                            <Icon icon="mdi:circle" className={cn('w-2 h-2', status.color)} />
                                            <span className={cn('text-xs font-medium whitespace-nowrap', status.color)}>
                                                {status.label}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-3">
                                            <div className="relative w-10 aspect-square rounded-md overflow-hidden shrink-0">
                                                <Image
                                                    src={event.image}
                                                    alt={event.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <p className="font-bold text-xs text-secondary-9">{event.title}</p>
                                                <p className="text-[11px] text-secondary-8">{event.category}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <p className="text-xs text-secondary-8">{event.date} | {event.time}</p>
                                    </td>
                                    <td className="py-4 px-4">
                                        <p className="text-xs text-secondary-6 max-w-50">
                                            {event.location}
                                        </p>
                                    </td>
                                    <td className="py-4 px-4">
                                        <p className="text-xs text-secondary-9">
                                            {event.ticketsSold} of {event.totalTickets} ({percentage}%)
                                        </p>
                                    </td>
                                    <td className="py-4 px-4">
                                        <p className="text-sm font-medium text-secondary-10">
                                            ₦{event.revenue.toLocaleString()}
                                        </p>
                                    </td>
                                    <td className="py-4 px-4">
                                        <Link href={event.href}>
                                            <Button size="icon" variant="ghost" className="size-10 rounded-full bg-primary-1 hover:bg-primary-2">
                                                <span className="bg-primary-4 rounded size-5 flex items-center justify-center text-white">
                                                    <Icon icon="iconamoon:edit-light" width="24" height="24" />
                                                </span>
                                            </Button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-3 grid grid-cols-1 gap-4 md:grid-cols-2 px-4">
                {pagination.currentItems.map((event) => {
                    const status = upcomingEventsStatusConfig[event.status as keyof typeof upcomingEventsStatusConfig] || upcomingEventsStatusConfig['low-sales']
                    const percentage = Math.round((event.ticketsSold / event.totalTickets) * 100)
                    
                    return (
                        <div key={event.id} className="bg-white rounded-xl border-b border-neutral-5 p-4">
                            {/* Status */}
                            <div className="flex items-center gap-1 mb-3">
                                <Icon icon="mdi:circle" className={cn('w-2 h-2', status.color)} />
                                <span className={cn('text-xs font-medium', status.color)}>
                                    {status.label}
                                </span>
                                <span className="text-xs text-neutral-6 ml-auto">
                                    Tickets Sold: {event.ticketsSold} of {event.totalTickets} ({percentage}%)
                                </span>
                            </div>

                            {/* Event Info */}
                            <div className="flex gap-3 mb-3">
                                <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-sm text-secondary-9 mb-1">{event.title}</h3>
                                    <p className="text-xs text-neutral-6 mb-1">{event.category}</p>
                                    <p className="text-xs text-secondary-8">
                                        {event.date} | {event.time}
                                    </p>
                                </div>
                                <Link href={event.href}>
                                    <Button size="icon" variant="ghost" className="w-8 h-8 rounded-full bg-primary-1 hover:bg-primary-2">
                                        <Icon icon="mdi:pencil" className="w-4 h-4 text-primary-6" />
                                    </Button>
                                </Link>
                            </div>

                            {/* Location */}
                            <div className="mb-3">
                                <p className="text-xs text-neutral-7">{event.location}</p>
                            </div>

                            {/* Revenue */}
                            <div className="flex justify-between items-center pt-3 border-t border-neutral-2">
                                <span className="text-xs text-neutral-6">Revenue:</span>
                                <span className="text-sm font-semibold text-secondary-9">
                                    ₦{event.revenue.toLocaleString()}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>


            <PaginationControls
                endIndex={pagination.endIndex}
                startIndex={pagination.startIndex}
                totalItems={mockUpcomingEvents.length}
                hasNextPage={pagination.hasNextPage}
                hasPreviousPage={pagination.hasPreviousPage}
                onNextPage={pagination.nextPage}
                onPreviousPage={pagination.previousPage}
            />
        </div>
    )
}