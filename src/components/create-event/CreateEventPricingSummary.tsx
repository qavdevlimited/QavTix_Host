'use client'

import { useFormContext } from 'react-hook-form'
import { Icon } from '@iconify/react'
import { Step3FormData } from '@/schemas/create-event.schema'

export default function CreateEventPricingSummary() {

    const { watch } = useFormContext<Step3FormData>()
    const ticketTypes = watch('ticketTypes') || []

    const totalPotentialRevenue = ticketTypes.reduce((acc, ticket) => {
        const price = Number(ticket.price) || 0
        const qty = Number(ticket.quantity) || 0
        return acc + (price * qty)
    }, 0)

    const platformFee = totalPotentialRevenue * 0.03 // 3% fee
    const yourEarnings = totalPotentialRevenue - platformFee

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN',
            maximumFractionDigits: 0,
        }).format(amount).replace('NGN', '₦')
    }

    return (
        <div className="bg-white rounded-2xl drop-shadow-xs border border-neutral-2 overflow-hidden w-full max-w-md">
            {/* Header */}
            <div className="border-b border-neutral-3">
                <div className="relative inline-block px-6 pt-8 pb-3">
                    <h3 className="text-brand-primary-6 text-sm font-bold">
                        Sample Pricing Summary
                    </h3>
                    <span className="absolute bottom-0 left-6 right-0 h-0.75 bg-brand-primary-6" />
                </div>
            </div>

            <div className="p-5 space-y-4">
                {/* Individual Ticket Rows */}
                {ticketTypes.map((ticket, index) => (
                    <div key={ticket.id || index} className="bg-white rounded-xl shadow-[0px_5.8px_23.17px_0px_#3326AE14] p-4 border border-brand-neutral-2">
                        <p className="text-brand-neutral-7 text-xs mb-2 capitalize">
                            {ticket.ticketType || 'Ticket Type'}:
                        </p>
                        <div className="flex items-center gap-3">
                            <Icon icon="hugeicons:user-id-verification" className="text-brand-primary-4 size-5" />
                            <p className="text-brand-secondary-8 font-medium text-xs">
                                {formatCurrency(Number(ticket.price) || 0)} × {ticket.quantity || 0} = {formatCurrency((Number(ticket.price) || 0) * (Number(ticket.quantity) || 0))}
                            </p>
                        </div>
                    </div>
                ))}

                {/* Final Calculations */}
                <div className="bg-white rounded-xl shadow-[0px_5.8px_23.17px_0px_#3326AE14] p-4 border border-brand-neutral-2 space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Icon icon="hugeicons:note-done" className="text-brand-primary-4 size-5" />
                            <span className="text-brand-neutral-7 text-xs">Total Potential Revenue</span>
                        </div>
                        <span className="text-brand-secondary-8 font-medium text-xs">
                            {formatCurrency(totalPotentialRevenue)}
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Icon icon="hugeicons:note-done" className="text-brand-primary-4 size-5" />
                            <span className="text-brand-neutral-7 text-xs">Platform Fee (3%)</span>
                        </div>
                        <span className="text-brand-secondary-8 font-medium text-xs">
                            {formatCurrency(platformFee)}
                        </span>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2">
                            <Icon icon="hugeicons:note-done" className="text-brand-primary-4 size-5" />
                            <span className="text-brand-neutral-7 text-xs">Your Earnings</span>
                        </div>
                        <span className="text-brand-secondary-8 font-medium text-xs">
                            {formatCurrency(yourEarnings)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}