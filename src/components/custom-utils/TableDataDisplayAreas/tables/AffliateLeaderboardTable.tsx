import { usePagination } from "@/custom-hooks/PaginationHook"
import { cn } from "@/lib/utils"
import PaginationControls from "../tools/PaginationControl"
import { mockAffiliateLeaderboard } from "@/components-data/demo-data"
import UserInfo from "../../users/UserInfo"

export default function AffiliateLeaderboardTable() {

    const pagination = usePagination(mockAffiliateLeaderboard, 5)

    const getRankBadge = (rank: number) => {
        if (rank === 1) return "🥇"
        if (rank === 2) return "🥈"
        if (rank === 3) return "🥉"
        return rank
    }

    return (
        <div className="w-full space-y-4 mt-5">
            {/* Desktop Table */}
            <div className="hidden md:block border border-neutral-2 rounded-xl overflow-hidden!">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-brand-neutral-3/80 border-b border-neutral-3">
                            <tr>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Rank</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Affiliate</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Clicks</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Tickets Sold</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Revenue</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Commission</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Conv. Rate</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-5 bg-white">
                            {pagination.currentItems.map((affiliate) => {
                                return (
                                    <tr
                                        key={affiliate.id}
                                        className={cn(
                                            "hover:bg-brand-neutral-3/70 transition-colors cursor-pointer",
                                        )}
                                    >
                                        <td className="py-4 px-5">
                                            <span className="text-xl text-center">
                                                {getRankBadge(affiliate.rank)}
                                            </span>
                                        </td>
                                        <td className="py-4 px-5">
                                            <UserInfo user={affiliate.affiliate as any} variant="desktop" />
                                        </td>
                                        <td className="py-4 px-5">
                                            <p className="text-xs text-brand-secondary-9 font-medium whitespace-nowrap">
                                                {affiliate.clicks.toLocaleString()}
                                            </p>
                                        </td>
                                        <td className="py-4 px-5">
                                            <p className="text-xs font-semibold text-brand-secondary-9 whitespace-nowrap">
                                                {affiliate.tickets_sold}
                                            </p>
                                        </td>
                                        <td className="py-4 px-5">
                                            <p className="text-xs font-semibold text-brand-secondary-9 whitespace-nowrap">
                                                ₦{affiliate.revenue.toLocaleString()}
                                            </p>
                                        </td>
                                        <td className="py-4 px-5">
                                            <p className="text-xs font-semibold text-brand-secondary-9 whitespace-nowrap">
                                                ₦{affiliate.commission.toLocaleString()}
                                            </p>
                                        </td>
                                        <td className="py-4 px-5">
                                            <p className="text-xs text-center text-brand-secondary-9 whitespace-nowrap">
                                                {affiliate.conversion_rate}%
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
            <div className="md:hidden grid grid-cols-1 gap-3">
                {pagination.currentItems.map((affiliate) => {
                    return (
                        <div
                            key={affiliate.id}
                            className="border-b border-neutral-5 p-4"
                        >
                            <div className="space-y-3">
                                {/* Top Row - Stats */}
                                <div className="flex justify-between gap-2 items-center text-[11px] pb-3 border-b border-neutral-2">
                                    <div className="flex gap-1 text-brand-secondary-9">
                                        <span className="font-bold">Sold:</span>
                                        <span className="">{affiliate.tickets_sold}</span>
                                    </div>
                                    <div className="flex gap-1 text-brand-secondary-9">
                                        <span className="font-bold">Revenue:</span>
                                        <span className="">₦{affiliate.revenue.toLocaleString()}</span>
                                    </div>
                                    <div className="flex gap-1 text-brand-secondary-9">
                                        <span className="font-bold">Commission:</span>
                                        <span className="">₦{affiliate.commission.toLocaleString()}</span>
                                    </div>
                                </div>

                                {/* Second Row - Badge, User Info, Clicks & Conv Rate */}
                                <div className="flex items-center gap-3">
                                    {/* Rank Badge */}
                                    <div className="text-base shrink-0">
                                        {getRankBadge(affiliate.rank)}
                                    </div>

                                    {/* User Info */}
                                    <UserInfo user={affiliate.affiliate as any}  variant="mobile" />

                                    {/* Clicks & Conv Rate */}
                                    <div className="flex flex-col text-right text-[11px] shrink-0">
                                        <div className="flex gap-1 text-brand-secondary-9">
                                            <span className="font-bold">Clicks:</span>
                                            <span className="">{affiliate.clicks.toLocaleString()}</span>
                                        </div>
                                        <div className="flex gap-1 text-brand-secondary-9">
                                            <span className="font-bold">Conv.Rate:</span>
                                            <span className="">{affiliate.conversion_rate}%</span>
                                        </div>
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
                totalItems={mockAffiliateLeaderboard.length}
                className="justify-center"
                hasNextPage={pagination.hasNextPage}
                hasPreviousPage={pagination.hasPreviousPage}
                onNextPage={pagination.nextPage}
                onPreviousPage={pagination.previousPage}
                currentPage={pagination.currentPage}
                totalPages={pagination.totalItems}
            />
        </div>
    )
}