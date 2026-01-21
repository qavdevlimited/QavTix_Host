"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import PaginationControls from "../tools/PaginationControl";
import { payoutStatusConfig } from "../resources/payout-status-config";
import { mockPayoutTransactions } from "@/components-data/demo-data";
import { usePagination } from "@/custom-hooks/PaginationHook";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function PayoutHistoryTable() {

    const { currentItems, endIndex, startIndex, hasNextPage, hasPreviousPage, nextPage, previousPage, currentPage, totalPages } = usePagination(mockPayoutTransactions,5)

    return (
        <div className="w-full space-y-4">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-hidden!">
                <div className="overflow-x-auto">
                    <table className="w-full min-h-[20em]">
                        <thead className="bg-neutral-3 border-b border-neutral-3">
                            <tr>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-secondary-8 capitalize whitespace-nowrap">
                                    Payment ID
                                </th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-secondary-8 capitalize whitespace-nowrap">
                                    Bank Account
                                </th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-secondary-8 capitalize whitespace-nowrap">
                                    Amount
                                </th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-secondary-8 capitalize whitespace-nowrap">
                                    Payout Date
                                </th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-secondary-8 capitalize whitespace-nowrap">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-2">
                            {currentItems.map((payout) => {
                                const status = payoutStatusConfig[payout.status]
                                
                                return (
                                    <tr 
                                        key={payout.id} 
                                        className="hover:bg-primary-1/30 transition-colors cursor-pointer"
                                    >
                                        <td className="py-4 px-5">
                                            <p className="text-xs text-secondary-9">
                                                {payout.paymentId}
                                            </p>
                                        </td>
                                        
                                        <td className="py-4 px-5">
                                            <div className="flex items-center gap-3">
                                                <Image
                                                    src={payout.bankAccount.bankLogo}
                                                    alt={payout.bankAccount.bank}
                                                    width={50}
                                                    height={50}
                                                    className="w-8 h-8 object-contain rounded-md"
                                                />
                                                <div className="min-w-44">
                                                    <p className="font-bold whitespace-nowrap text-xs text-secondary-9">
                                                        {payout.bankAccount.name}
                                                    </p>
                                                    <p className="text-[11px] text-secondary-8">
                                                        {payout.bankAccount.bank}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        
                                        <td className="py-4 px-5">
                                            <p className="text-xs font-semibold text-secondary-9 whitespace-nowrap">
                                                ₦{payout.amount.toLocaleString()}
                                            </p>
                                        </td>
                                        
                                        <td className="py-4 px-5">
                                            <p className="text-xs text-secondary-8 whitespace-nowrap">
                                                {payout.payoutDate} | {payout.payoutTime}
                                            </p>
                                        </td>
                                        
                                        <td className="py-4 px-5">
                                            <Badge className={cn(
                                                "px-3 py-1 rounded-md border-[0.8px] capitalize border-neutral-4 text-xs",
                                                status.color
                                            )}>
                                                {status.label}
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
            <div className="md:hidden space-y-3">
                {currentItems.map((payout) => {
                    const status = payoutStatusConfig[payout.status];
                    
                    return (
                        <div 
                            key={payout.id} 
                            className="border-b border-neutral-5 p-4"
                        >
                            <div className="space-y-2">
                                {/* Header - Payment ID and Status */}
                                <div className="flex justify-between items-center border-b border-neutral-2">
                                    <span className="text-xs font-bold text-secondary-9">
                                        Payment ID: <span className="font-normal">{payout.paymentId}</span>
                                    </span>
                                    <span className="text-xs text-neutral-7">Status</span>
                                </div>

                                {/* Bank Account Info */}
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={payout.bankAccount.bankLogo}
                                            alt={payout.bankAccount.bank}
                                            width={50}
                                            height={50}
                                            className="w-8 h-8 object-contain rounded-md"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <p className="font-bold text-xs text-secondary-9 mb-1">
                                                {payout.bankAccount.name}
                                            </p>
                                            <p className="text-xs text-secondary-8">
                                                {payout.bankAccount.bank}
                                            </p>
                                        </div>
                                    </div>
                                    <Badge className={cn(
                                        "px-2 py-1 rounded-sm text-[11px] border-[0.8px] capitalize border-neutral-4",
                                        status.color
                                    )}>
                                        {status.label}
                                    </Badge>
                                </div>

                                {/* Amount and Date */}
                                <div className="flex justify-between items-center border-t border-neutral-2">
                                    <div className="flex gap-1 text-xs text-secondary-9">
                                        <Icon icon="hugeicons:sale-tag-02" width="18" height="18" className="text-primary-6" />
                                        <p className="font-bold">Amount: <span className="font-normal">₦{payout.amount.toLocaleString()}</span></p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-secondary-9 text-[10px]">
                                            {payout.payoutDate}{payout.payoutTime}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Pagination */}

            <PaginationControls
                endIndex={endIndex}
                startIndex={startIndex}
                totalItems={mockPayoutTransactions.length}
                hasNextPage={hasNextPage}
                hasPreviousPage={hasPreviousPage}
                onNextPage={nextPage}
                onPreviousPage={previousPage}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </div>
    )
}