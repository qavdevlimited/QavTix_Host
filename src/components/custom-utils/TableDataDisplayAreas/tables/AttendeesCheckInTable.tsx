import { Icon } from "@iconify/react"
import { usePagination } from "@/custom-hooks/PaginationHook"
import { mockAttendeesCheckIns } from "@/components-data/demo-data"
import { cn } from "@/lib/utils"
import PaginationControls from "../tools/PaginationControl"
import UserInfo from "../../users/UserInfo"
import EventInfo from "../../event/EventInfo"
import { attendeeCheckInStatusConfig } from "../resources/status-config"


export default function AttendeeCheckInTable() {

    const pagination = usePagination(mockAttendeesCheckIns, 5)

    return (
        <div className="w-full space-y-4">
            {/* Desktop Table */}
            <div className="hidden md:block border border-neutral-2 rounded-xl overflow-hidden!">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-brand-neutral-2 border-b border-neutral-3">
                            <tr>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Attendee</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Ticket ID</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Ticket Type</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Event</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Check-In Time</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-2 bg-white">
                            {pagination.currentItems.map((v) => {
                                const status = attendeeCheckInStatusConfig[v.status as keyof typeof attendeeCheckInStatusConfig]
                                return (
                                    <tr 
                                        key={v.id} 
                                        className={cn(
                                            "hover:bg-brand-neutral-3/70 transition-colors"
                                        )}
                                    >
                                        <td className="py-4 px-5">
                                            <UserInfo user={v.attendee} variant="desktop" className="" />
                                        </td>
                                        <td className="py-4 px-5">
                                            <p className="text-xs text-brand-secondary-6 min-w-37 max-w-37">
                                                {v.ticketId}
                                            </p>
                                        </td>
                                        <td className="py-4 px-4 text-center">
                                            <p className="text-sm font-semibold text-brand-secondary-9 whitespace-nowrap">
                                                {v.ticketType}
                                            </p>
                                        </td>
                                        <td className="py-4 px-5">
                                            <EventInfo {...v.event} />
                                        </td>
                                        <td className="py-4 px-5">
                                            <p className="text-xs text-brand-secondary-8 whitespace-nowrap">
                                                {v.checkInTime}
                                            </p>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-1 whitespace-nowrap">
                                                <Icon icon="mdi:circle" className={cn('w-2 h-2', status.color)} />
                                                <span className={cn('text-xs font-medium capitalize', status.color)}>
                                                    {v.status}
                                                </span>
                                            </div>
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
                {pagination.currentItems.map((attendee) => {
                    const status = attendeeCheckInStatusConfig[attendee.status as keyof typeof attendeeCheckInStatusConfig]
                    
                    return (
                        <div 
                            key={attendee.id} 
                            className="border border-neutral-3 rounded-lg p-4 bg-white"
                        >
                            <div className="space-y-3">
                                {/* Top Row - Ticket ID & Ticket Type */}
                                <div className="flex justify-between items-center text-xs pb-2 border-b border-neutral-2">
                                    <div>
                                        <span className="font-bold text-brand-secondary-8">Ticket ID: </span>
                                        <span className="text-brand-secondary-6">{attendee.ticketId}</span>
                                    </div>
                                    <div>
                                        <span className="font-bold text-brand-secondary-8">Ticket Type: </span>
                                        <span className="text-brand-secondary-9">{attendee.ticketType}</span>
                                    </div>
                                </div>

                                {/* Second Row - User Info & Status */}
                                <div className="flex justify-between items-center gap-3">
                                    <UserInfo user={attendee.attendee} variant="mobile" className="flex-1" />
                                    <div className="flex items-center gap-1 whitespace-nowrap shrink-0">
                                        <Icon icon="mdi:circle" className={cn('w-2 h-2', status.color)} />
                                        <span className={cn('text-xs font-medium capitalize', status.color)}>
                                            {attendee.status}
                                        </span>
                                    </div>
                                </div>

                                {/* Third Row - Event Info & Check-in Time */}
                                <div className="flex justify-between items-start gap-3 pt-2 border-t border-neutral-2">
                                    <EventInfo {...attendee.event} />
                                    <div className="text-right text-xs shrink-0">
                                        <span className="font-bold text-brand-secondary-8 block">Check-In Time:</span>
                                        <span className="text-brand-secondary-9">{attendee.checkInTime}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <PaginationControls
                endIndex={pagination.endIndex}
                startIndex={pagination.startIndex}
                totalItems={mockAttendeesCheckIns.length}
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