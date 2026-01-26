import { usePagination } from "@/custom-hooks/PaginationHook"
import { cn } from "@/lib/utils"
import PaginationControls from "../tools/PaginationControl"
import { mockEmailCampaigns } from "@/components-data/demo-data"
import Image from "next/image"
import { formatDateTime } from "@/helper-fns/date-utils"
import { Badge } from "@/components/ui/badge"


export default function EmailCampaignListTable() {

    const pagination = usePagination(mockEmailCampaigns, 5)

    return (
        <div className="w-full space-y-4 mt-5">
            {/* Desktop Table */}
            <div className="hidden md:block border border-brand-neutral-2 rounded-xl overflow-hidden!">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-brand-neutral-3/80 border-b border-brand-neutral-3">
                            <tr>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Campaign</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Event</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Recipients</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Sent Date</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Open Rate</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Click Rate</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-5 bg-white">
                            {pagination.currentItems.map((campaign) => {
                                return (
                                    <tr
                                        key={campaign.id}
                                        className={cn(
                                            "hover:bg-brand-neutral-3/70 transition-colors cursor-pointer",
                                        )}
                                    >
                                        <td className="py-4 px-5">
                                            <p className="text-xs text-brand-secondary-8 max-w-[12em]">{campaign.campaign}</p>
                                        </td>
                                        <td className="py-4 px-5">
                                            <div className="flex items-center gap-3">
                                                <div className="relative w-10 aspect-square rounded-md overflow-hidden shrink-0">
                                                    <Image
                                                        src={campaign.event.image}
                                                        alt={campaign.event.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-xs text-brand-secondary-9">{campaign.event.title}</p>
                                                    <p className="text-[11px] text-brand-secondary-8">{campaign.event.category}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-5">
                                            <p className="text-xs font-medium text-brand-secondary-9 whitespace-nowrap">
                                                {campaign.recipients.toLocaleString()}
                                            </p>
                                        </td>
                                        <td className="py-4 px-5">
                                            <p className="text-xs text-brand-secondary-8 whitespace-nowrap">
                                                {formatDateTime(campaign.sent_date)}
                                            </p>
                                        </td>
                                        <td className="py-4 px-5">
                                            <p className="text-xs font-semibold text-brand-secondary-9 whitespace-nowrap">
                                                {campaign.open_rate !== null ? `${campaign.open_rate}%` : '---'}
                                            </p>
                                        </td>
                                        <td className="py-4 px-5">
                                            <p className="text-xs font-semibold text-brand-secondary-9 whitespace-nowrap">
                                                {campaign.click_rate !== null ? `${campaign.click_rate}%` : '---'}
                                            </p>
                                        </td>
                                        <td className="py-4 px-5">
                                            <Badge className={cn(
                                                "px-2 py- text-[11px] rounded-sm border-[0.8px] capitalize border-neutral-4",
                                                campaign.status === "successful" ? "text-postive-default bg-green-50" :
                                                campaign.status === "failed" ? "text-red-600 bg-red-50" : ""
                                            )}>
                                                {campaign.status}
                                            </Badge>
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
                {pagination.currentItems.map((campaign) => {
                    return (
                        <div
                            key={campaign.id}
                            className="border-b border-neutral-4 rounded-lg p-4"
                        >
                            <div className="space-y-3">
                                {/* Campaign Name & Status */}
                                <div className="flex justify-between items-start gap-2">
                                    <div>
                                        <span className="text-xs font-bold text-brand-secondary-8">Campaign: </span>
                                        <span className="text-xs text-brand-secondary-9">{campaign.campaign}</span>
                                    </div>
                                    <Badge className={cn(
                                        "px-2 py-1 text-[11px] rounded-sm border-[0.8px] capitalize border-neutral-4 shrink-0",
                                        campaign.status === "successful" ? "text-postive-default bg-green-50" :
                                        campaign.status === "failed" ? "text-red-600 bg-red-50" : ""
                                    )}>
                                        {campaign.status}
                                    </Badge>
                                </div>

                                {/* Event Info */}
                                <div className="flex items-start gap-2">
                                    <div className="relative size-8 rounded-sm overflow-hidden shrink-0">
                                        <Image
                                            src={campaign.event.image}
                                            alt={campaign.event.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-xs text-brand-secondary-9">
                                            {campaign.event.title}
                                        </h3>
                                        <p className="text-[11px] text-brand-secondary-8">
                                            {campaign.event.category}
                                        </p>
                                    </div>
                                    <div className="flex flex-col text-right text-[11px] shrink-0">
                                        <div>
                                            <span className="font-bold text-brand-secondary-8">Open Rate: </span>
                                            <span className="text-brand-secondary-9">
                                                {campaign.open_rate !== null ? `${campaign.open_rate}%` : '---'}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="font-bold text-brand-secondary-8">Click Rate: </span>
                                            <span className="text-brand-secondary-9">
                                                {campaign.click_rate !== null ? `${campaign.click_rate}%` : '---'}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Sent Date & Recipients */}
                                <div className="flex justify-between items-center text-[11px] border-t border-brand-neutral-2 pt-2">
                                    <div>
                                        <span className="font-bold text-brand-secondary-8">Sent Date: </span>
                                        <span className="text-brand-secondary-9">
                                            {formatDateTime(campaign.sent_date)}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="font-bold text-brand-secondary-8">Recipients: </span>
                                        <span className="text-brand-secondary-9">
                                            {campaign.recipients.toLocaleString()}
                                        </span>
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
                totalItems={mockEmailCampaigns.length}
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