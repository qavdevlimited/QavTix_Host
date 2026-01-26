import { cn } from "@/lib/utils"
import CustomAvatar from "../custom-utils/avatars/CustomAvatar"
import { Button } from "../ui/button"
import { Icon } from "@iconify/react"
import { formatDateTime } from "@/helper-fns/date-utils"

interface CustomerCardProps {
    customer: Customer
    onSendEmail?: () => void
    onSendSMS?: () => void
    className?: string
}

export function CustomerProfileDetailsCard({ customer, onSendEmail, onSendSMS, className }: CustomerCardProps) {
    return (
        <div className={cn('bg-white rounded-2xl h-full border border-brand-neutral-2 p-6', className)}>
            <div className="flex flex-col items-center text-center mb-6">
                <CustomAvatar name={customer.name} profileImg={customer.profileImg} id={customer.id} size="16" />
                
                <h3 className="text-[13px] font-bold text-brand-secondary-9 mb-1">
                    {customer.name}
                </h3>
                <p className="text-[13px] bg-brand-neutral-7">
                    {customer.email}
                </p>
            </div>

            <div className="flex gap-3 mb-6">
                <Button
                    onClick={onSendEmail}
                    className="flex-1 bg-brand-primary-6 hover:bg-brand-primary-7 text-white text-xs rounded-lg h-11 font-medium"
                >
                    <Icon icon="clarity:email-line" width="36" height="36" />
                    Send Email
                </Button>
                <Button
                    onClick={onSendSMS}
                    className="flex-1 bg-brand-primary-4 text-white hover:bg-brand-primary-5 text-xs rounded-lg h-11 font-medium"
                >
                    <Icon icon="tabler:message" width="24" height="24" />
                    Send SMS
                </Button>
            </div>

            {/* Details */}
            <div className="space-y-4">
                <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 rounded-full bg-brand-neutral-2 flex items-center justify-center shrink-0">
                        <Icon icon="lucide:map-pin" width="24" height="24" className="text-[#C8CAD8]" />
                    </div>
                    <div className="flex-1">
                        <p className="text-[13px] font-semibold text-brand-secondary-9 mb-1">Address</p>
                        <p className="text-xs bg-brand-neutral-7 leading-relaxed">
                            {customer.address}
                        </p>
                    </div>
                </div>

                {/* First Purchase */}
                <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-neutral-2 flex items-center justify-center shrink-0">
                        <Icon icon="mdi:calendar" className="w-5 h-5 text-[#C8CAD8]"  />
                    </div>
                    <div className="flex-1">
                        <p className="text-[13px] font-semibold text-brand-secondary-9 mb-1">First Purchase</p>
                        <p className="text-xs bg-brand-neutral-7">
                            {formatDateTime(customer.firstPurchaseDate, "")}
                        </p>
                    </div>
                </div>

                {/* Latest Purchase */}
                <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-neutral-2 flex items-center justify-center shrink-0">
                        <Icon icon="mdi:calendar-check" className="w-5 h-5 text-[#C8CAD8]" />
                    </div>
                    <div className="flex-1">
                        <p className="text-[13px] font-semibold text-brand-secondary-9 mb-1">Latest Purchase</p>
                        <p className="text-xs text-brand-neutral-6">
                             {formatDateTime(customer.lastPurchaseDate, "")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}