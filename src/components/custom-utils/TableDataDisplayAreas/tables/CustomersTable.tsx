import { Checkbox } from "@/components/ui/checkbox"
import { Icon } from "@iconify/react"
import { customerListStatusConfig } from "../resources/status-config"
import { usePagination } from "@/custom-hooks/PaginationHook"
import { mockCustomers } from "@/components-data/demo-data"
import { Dispatch, SetStateAction, useEffect } from "react"
import { cn } from "@/lib/utils"
import { CustomerItemAction } from "../tools/CustomerItemAction"
import PaginationControls from "../tools/PaginationControl"
import { formatDateTime } from "@/helper-fns/date-utils"
import UserInfo from "../../users/UserInfo"

interface CustomersTableProps {
    setSelectedCustomers: Dispatch<SetStateAction<string[]>>
    selectedCustomers: string[]
}

export default function CustomersTable({ setSelectedCustomers, selectedCustomers }: CustomersTableProps) {


    const pagination = usePagination(mockCustomers, 5)

    const isAllSelected = pagination.currentItems.length > 0 && 
        pagination.currentItems.every(customer => selectedCustomers.includes(customer.id))

    const handleSelectAll = () => {
        if (isAllSelected) {
            setSelectedCustomers([])
        } else {
            const allIds = pagination.currentItems.map(c => c.id)
            setSelectedCustomers(allIds)
        }
    }

    const handleSelectCustomer = (customerId: string) => {
        setSelectedCustomers(prev => {
            if (prev.includes(customerId)) {
                return prev.filter(id => id !== customerId)
            } else {
                return [...prev, customerId]
            }
        })
    }

    useEffect(() => {
        console.log('Selected customers:', selectedCustomers)
    }, [selectedCustomers])

    return (
        <div className="w-full space-y-4">
            {/* Desktop Table */}
            <div className="hidden md:block border border-brand-neutral-2 rounded-xl overflow-hidden!">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-brand-neutral-2 border-b border-brand-neutral-3">
                            <tr>
                                <th className="w-12 py-4 px-4">
                                    <Checkbox
                                        checked={isAllSelected}
                                        onCheckedChange={handleSelectAll}
                                    />
                                </th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Status</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Profile Info</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Address</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Attended</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Total Spend</th>
                                <th className="text-left py-4 px-5 text-sm font-semibold text-brand-secondary-8 capitalize whitespace-nowrap">Last Purchase</th>
                                <th className="w-12 py-4 px-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-2 bg-white">
                            {pagination.currentItems.map((customer) => {
                                const status = customerListStatusConfig[customer.status as keyof typeof customerListStatusConfig]
                                const isSelected = selectedCustomers.includes(customer.id)
                                
                                return (
                                    <tr 
                                        key={customer.id} 
                                        className={cn(
                                            "hover:bg-brand-neutral-3/70 transition-colors",
                                            isSelected && "bg-brand-primary-1 hover:bg-brand-primary-1"
                                        )}
                                        onClick={() => handleSelectCustomer(customer.id)}
                                    >
                                        <td className="py-4 px-4" onClick={(e) => e.stopPropagation()}>
                                            <Checkbox
                                                checked={isSelected}
                                                onCheckedChange={() => handleSelectCustomer(customer.id)}
                                            />
                                        </td>
                                        <td className="py-4 px-5">
                                            <div className="flex items-center gap-1 whitespace-nowrap">
                                                <Icon icon="mdi:circle" className={cn('w-2 h-2', status.color)} />
                                                <span className={cn('text-xs font-medium', status.color)}>
                                                    {status.label}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-5">
                                            <UserInfo user={customer} variant="desktop"  />
                                        </td>
                                        <td className="py-4 px-5">
                                            <p className="text-xs text-brand-secondary-6 min-w-37 max-w-37">
                                                {customer.address}
                                            </p>
                                        </td>
                                        <td className="py-4 px-4 text-center">
                                            <p className="text-sm font-medium text-brand-secondary-9 whitespace-nowrap">
                                                {customer.attended}
                                            </p>
                                        </td>
                                        <td className="py-4 px-5">
                                            <p className="text-xs font-semibold text-brand-secondary-9 whitespace-nowrap">
                                                ₦{customer.totalSpend.toLocaleString()}
                                            </p>
                                        </td>
                                        <td className="py-4 px-5">
                                            <p className="text-xs text-brand-secondary-8 whitespace-nowrap">
                                                {formatDateTime(customer.lastPurchaseDate)}
                                            </p>
                                        </td>
                                        <td className="py-4 px-4" onClick={(e) => e.stopPropagation()}>
                                            <CustomerItemAction />
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                {pagination.currentItems.map((customer) => {
                    const status = customerListStatusConfig[customer.status as keyof typeof customerListStatusConfig]
                    const isSelected = selectedCustomers.includes(customer.id)
                    
                    return (
                       <div 
                            key={customer.id} 
                            className={cn(
                                "border border-brand-neutral-3 rounded-lg p-2",
                                isSelected && "bg-brand-primary-1 border-brand-primary-3"
                            )}
                        >
                            {/* Row 1: Status, Stats, and Actions */}
                            <div className="flex items-center justify-between gap-2 mb-4">
                                <div className="flex flex-wrap items-center gap-2 sm:gap-3 flex-1">
                                    <Checkbox
                                        checked={isSelected}
                                        onCheckedChange={() => handleSelectCustomer(customer.id)}
                                    />

                                    <div className={cn(
                                        "flex items-center gap-1 px-2 py-0.5 rounded-full bg-opacity-10",
                                        status.color
                                    )}>
                                        <Icon icon="mdi:circle" className={cn('w-1.5 h-1.5', status.color)} />
                                        <span className={cn('text-xs font-medium capitalize', status.color)}>
                                            {status.label}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2 text-[11px] text-brand-secondary-9">
                                        <span className="flex items-center gap-1">
                                            <span className="font-bold capitalize">Spent:</span>
                                            ₦{customer.totalSpend.toLocaleString()}
                                        </span>
                                        <span className="flex text-brand-secondary-9 items-center gap-1">
                                            <span className="capitalize font-bold">Attended:</span>
                                            {customer.attended}
                                        </span>
                                    </div>
                                </div>

                                <div className="shrink-0">
                                    <CustomerItemAction />
                                </div>
                            </div>

                            {/* Row 2: User Profile & Last Purchase */}
                            <div className="flex items-start flex-wrap justify-between gap-3 mb-4">
                                <UserInfo 
                                    user={customer} 
                                    variant="mobile" 
                                    className="shrink-0" 
                                />
                                
                                <div className="flex flex-col gap-1 text-[11px] text-brand-secondary-9">
                                    <span className="font-bold mr-1">Last Purchase:</span>
                                    <span>
                                        {formatDateTime(customer.lastPurchaseDate)}
                                    </span>
                                </div>
                            </div>

                            {/* Row 3: Location */}
                            <p className="text-[11px] text-brand-secondary-6">{customer.address}</p> 
                        </div>
                    )
                })}
            </div>

            <PaginationControls
                endIndex={pagination.endIndex}
                startIndex={pagination.startIndex}
                totalItems={mockCustomers.length}
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