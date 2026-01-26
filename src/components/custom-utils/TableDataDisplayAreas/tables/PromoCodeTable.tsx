import { usePagination } from "@/custom-hooks/PaginationHook"
import { cn } from "@/lib/utils"
import PaginationControls from "../tools/PaginationControl"
import { mockPromoCodes } from "@/components-data/demo-data"
import Image from "next/image"
import { formatDateTime } from "@/helper-fns/date-utils"
import { Icon } from "@iconify/react"
import EventInfo from "../../event/EventInfo"


export default function PromoCodeListTable() {

    const pagination = usePagination(mockPromoCodes, 5)

    return (
        <div className="w-full space-y-4 mt-5">
            {/* Desktop Table */}
            <div className="hidden md:block border border-brand-neutral-2 rounded-xl overflow-hidden!">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-brand-neutral-3/80 border-b border-brand-neutral-3">
                            <tr>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Status</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Promo Code</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Event</th>
                                <th className="text-center py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Usage</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Revenue Impact</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Expiry Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-5 bg-white">
                            {pagination.currentItems.map((promo) => {                                
                                return (
                                    <tr 
                                        key={promo.id} 
                                        className={cn(
                                            "hover:bg-brand-neutral-3/70 transition-colors cursor-pointer",
                                        )}
                                    >
                                        <td className="py-4 px-5">
                                            <div className="flex items-center gap-1 whitespace-nowrap">
                                                <Icon icon="mdi:circle" className={cn('w-2 h-2', promo.status === "ended" ? "text-red-600" : "text-green-600")} />
                                                <span className={cn('text-xs font-medium capitalize', promo.status === "ended" ? "text-red-600" : "text-green-600")}>
                                                    {promo.status}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-5">
                                            <p className="text-xs font-bold text-brand-secondary-9">{promo.promo_code}</p>
                                        </td>
                                        <td className="py-4 px-4">
                                            <EventInfo 
                                                variant="desktop"
                                                category={promo.event.category}
                                                image={promo.event.image}
                                                title={promo.event.title}
                                            />
                                        </td>
                                        <td className="py-4 px-5 text-center">
                                            <p className="text-xs font-semibold text-brand-secondary-9 whitespace-nowrap">
                                                {promo.usage}
                                            </p>
                                        </td>
                                        <td className="py-4 px-5">
                                            <p className="text-xs font-semibold text-red-600 whitespace-nowrap">
                                                ₦{Math.abs(promo.revenue_impact).toLocaleString()}
                                            </p>
                                        </td>
                                        <td className="py-4 px-5">
                                            <p className="text-xs text-brand-secondary-8 whitespace-nowrap">
                                                {formatDateTime(promo.expiry_date)}
                                            </p>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden grid grid-cols-1 gap-3 md:grid-cols-2">
                {pagination.currentItems.map((promo) => {
                        return (
                            <div 
                                key={promo.id} 
                                className="border-b border-neutral-5 p-4"
                            >
                                <div className="space-y-2.5">
                                    <div className="flex flex-wrap gap-x-2 justify-between items-center text-[11px]">
                                        <div className="flex items-center gap-1 whitespace-nowrap">
                                            <Icon icon="mdi:circle" className={cn('w-2 h-2', promo.status === "ended" ? "text-red-600" : "text-green-600")} />
                                            <span className={cn('font-medium capitalize', promo.status === "ended" ? "text-red-600" : "text-green-600")}>
                                                {promo.status}
                                            </span>
                                        </div>
                                        <div className="flex gap-1 items-center text-brand-secondary-9 border-t border-brand-neutral-2">
                                            <span className="font-bold">Revenue Impact:</span>
                                            <span>
                                                ₦{Math.abs(promo.revenue_impact).toLocaleString()}
                                            </span>
                                        </div>
                                        <div className="flex gap-1 items-center text-brand-secondary-9 pt-2 border-t border-brand-neutral-2">
                                            <span className="font-bold">Usage:</span>
                                            <span>
                                                {promo.usage}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2 justify-between">
                                        <EventInfo 
                                            variant="mobile"
                                            category={promo.event.category}
                                            image={promo.event.image}
                                            title={promo.event.title}
                                        />
                                        <div className="flex flex-col justify-center items-center gap-1 text-brand-secondary-9">
                                            <span className="text-xs font-bold">Promo Code: <span className="font-normal">{promo.promo_code}</span></span>
                                        </div>
                                    </div>

                                    <div className="flex text-xs gap-1 text-brand-secondary-8">
                                        <span className="font-bold">Expiry Date:</span>
                                        <span>
                                            {formatDateTime(promo.expiry_date)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>

            <PaginationControls
                endIndex={pagination.endIndex}
                startIndex={pagination.startIndex}
                totalItems={mockPromoCodes.length}
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