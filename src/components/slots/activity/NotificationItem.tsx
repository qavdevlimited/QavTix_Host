'use client'

import { Icon } from '@iconify/react'
import { cn } from '@/lib/utils'

const notificationColors: Record<string, string> = {
  new_sale: 'bg-blue-500',
  payout: 'bg-emerald-500',
  reminder: 'bg-yellow-500',
  check_in: 'bg-green-500',
  low_stock: 'bg-orange-500'
}

interface NotificationItemProps {
  notification: NotificationItem
  onMarkAsRead?: (id: string) => void
}

export default function NotificationItem({ 
  notification,
  onMarkAsRead 
}: NotificationItemProps) {
    const dotColor = notificationColors[notification.type] || 'bg-blue-500'
    const isUnread = notification.status === 'unread'

    return (
        <div 
        className={cn(
            "flex items-start gap-3 py-4 border-b border-neutral-2 last:border-0 px-4 -mx-4 rounded-lg transition-colors cursor-pointer",
            isUnread ? "bg-blue-50/50 hover:bg-blue-50" : "hover:bg-neutral-1"
        )}
        onClick={() => onMarkAsRead?.(notification.id)}
        >
            <div className="flex items-center pt-1">
                {isUnread && (
                <div className={cn("w-2 h-2 rounded-full", dotColor)} />
                )}
            </div>

            <div className="flex-1 min-w-0">
                <p className="text-[11px] text-neutral-7 mb-1">
                    {notification.subtitle}
                </p>

                <p className={cn(
                "text-xs mb-0.5",
                isUnread ? "text-secondary-9 font-medium" : "text-neutral-7 font-normal"
                )}>
                    {notification.title}
                </p>
            </div>

            <div className="flex items-center gap-1 text-xs text-neutral-6 shrink-0">
                <Icon icon="hugeicons:clock-01" className="w-3.5 h-3.5 text-orange-400" />
                <span>{notification.timestamp}</span>
            </div>
        </div>
    )
}

