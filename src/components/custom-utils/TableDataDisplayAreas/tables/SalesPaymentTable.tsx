import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { usePagination } from "@/custom-hooks/PaginationHook"
import { mockPayments } from "@/components-data/demo-data"
import { Dispatch, SetStateAction } from "react"
import { cn } from "@/lib/utils"
import PaginationControls from "../tools/PaginationControl"
import { formatDateTime } from "@/helper-fns/date-utils"
import UserInfo from "../../users/UserInfo"
import EventInfo from "../../event/EventInfo"



interface SalesPaymentsTableProps {
    setSelectedPayments: Dispatch<SetStateAction<string[]>>
    selectedPayments: string[]
}

export default function SalesPaymentsTable({ setSelectedPayments, selectedPayments }: SalesPaymentsTableProps) {

    const pagination = usePagination(mockPayments, 5)

    const isAllSelected = pagination.currentItems.length > 0 && 
        pagination.currentItems.every(payment => selectedPayments.includes(payment.id))

    const handleSelectAll = () => {
        if (isAllSelected) {
            setSelectedPayments([])
        } else {
            const allIds = pagination.currentItems.map(p => p.id)
            setSelectedPayments(allIds)
        }
    }

    const handleSelectPayment = (paymentId: string) => {
        setSelectedPayments(prev => {
            if (prev.includes(paymentId)) {
                return prev.filter(id => id !== paymentId)
            } else {
                return [...prev, paymentId]
            }
        })
    }

    return (
        <div className="w-full space-y-4">
            {/* Desktop Table */}
            <div className="hidden md:block border border-brand-neutral-2 rounded-xl overflow-hidden!">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-brand-neutral-3/80 border-b border-brand-neutral-3">
                            <tr>
                                <th className="w-12 py-4 px-4">
                                    <Checkbox
                                        checked={isAllSelected}
                                        onCheckedChange={handleSelectAll}
                                    />
                                </th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Payment ID</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Purchased By</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Event</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Purchase Date</th>
                                <th className="text-center py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Quantity</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Amount</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-5 bg-white">
                            {pagination.currentItems.map((payment) => {
                                const isSelected = selectedPayments.includes(payment.id)
                                
                                return (
                                    <tr 
                                        key={payment.id} 
                                        className={cn(
                                            "hover:bg-brand-accent-2/5 transition-colors cursor-pointer",
                                            isSelected && "bg-brand-primary-1 hover:bg-brand-primary-1"
                                        )}
                                        onClick={() => handleSelectPayment(payment.id)}
                                    >
                                        <td className="py-4 px-4" onClick={(e) => e.stopPropagation()}>
                                            <Checkbox
                                                checked={isSelected}
                                                onCheckedChange={() => handleSelectPayment(payment.id)}
                                            />
                                        </td>
                                        <td className="py-4 px-5">
                                            <p className="text-xs text-brand-secondary-8 font-medium">{payment.payment_id}</p>
                                        </td>
                                        <td className="py-4 px-5">
                                            <UserInfo user={payment.purchased_by} variant="desktop" />
                                        </td>
                                        <td className="py-4 px-5 min-w-40">
                                            <EventInfo {...payment.event} />
                                        </td>
                                        <td className="py-4 px-5">
                                            <p className="text-xs text-brand-secondary-8 whitespace-nowrap">
                                                {formatDateTime(payment.purchase_date)}
                                            </p>
                                        </td>
                                        <td className="py-4 px-5 text-center">
                                            <p className="text-xs font-semibold text-brand-secondary-9">
                                                {payment.quantity}
                                            </p>
                                        </td>
                                        <td className="py-4 px-5">
                                            <p className="text-xs font-semibold text-brand-secondary-9 whitespace-nowrap">
                                                ₦{payment.amount.toLocaleString()}
                                            </p>
                                        </td>
                                        <td className="py-4 px-5">
                                            <Badge className={cn(
                                                "p-1.5 rounded-md text-[11px] border-[0.8px] capitalize border-neutral-4",
                                                payment.status === "successful" ? "text-postive-default bg-green-50" :
                                                payment.status === "cancelled" ? "text-brand-secondary-4 bg-brand-secondary-1" : ""
                                            )}>
                                                {payment.status}
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
                {pagination.currentItems.map((payment) => {
                    const isSelected = selectedPayments.includes(payment.id)
                    
                    return (
                        <div 
                            key={payment.id} 
                            className={cn(
                                "border border-brand-neutral-3 rounded-lg p-2",
                                isSelected && "bg-brand-primary-1 border-brand-primary-3"
                            )}
                        >
                            <div className="space-y-3">
                                {/* First Row - Payment ID, Amount, Quantity */}
                                <div className="flex justify-between gap-2 flex-wrap items-center text-xs text-brand-secondary-9 pb-2 border-b border-brand-neutral-2">
                                    <div className="flex items-center gap-2">
                                        <Checkbox
                                            checked={isSelected}
                                            onCheckedChange={() => handleSelectPayment(payment.id)}
                                        />
                                        <span className="font-bold">Payment ID:</span>
                                        <span className="font-normal">{payment.payment_id}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-1">
                                            <span className="font-bold">Amount:</span>
                                            <span className="font-normal">₦{payment.amount.toLocaleString()}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="font-bold">Qty:</span>
                                            <span className="font-normal">{payment.quantity}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Second Row - UserInfo & Status */}
                                <div className="flex items-center justify-between">
                                    <UserInfo user={payment.purchased_by} variant="mobile" />
                                    <Badge className={cn(
                                        "p-1 text-[11px] rounded-sm border-[0.8px] capitalize border-neutral-4 shrink-0",
                                        payment.status === "successful" ? "text-postive-default bg-green-50" :
                                        payment.status === "cancelled" ? "text-brand-secondary-4 bg-brand-secondary-1" : ""
                                    )}>
                                        {payment.status}
                                    </Badge>
                                </div>

                                {/* Third Row - Event Info & Purchase Date */}
                                <div className="flex items-start justify-between gap-3 pt-2 border-t border-brand-neutral-2">
                                    <EventInfo {...payment.event} variant="mobile" />
                                    <div className="flex flex-col text-right text-xs text-brand-secondary-9 shrink-0">
                                        <span className="font-bold">Purchase Date:</span>
                                        <span className="font-normal">
                                            {formatDateTime(payment.purchase_date)}
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
                totalItems={mockPayments.length}
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