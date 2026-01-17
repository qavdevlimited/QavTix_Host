'use client'

import { Icon } from '@iconify/react'
import NotificationItem from './NotificationItem'

interface NotificationsTabProps {
  notifications: NotificationItem[]
  onMarkAsRead?: (id: string) => void
  onMarkAllAsRead?: () => void
}

export default function NotificationsTab({ 
  notifications,
  onMarkAsRead,
  onMarkAllAsRead 
}: NotificationsTabProps) {
  const hasUnread = notifications.some(n => n.status === 'unread')

  return (
        <div className="space-y-4 px-4">
            {hasUnread && (
                <div className="flex items-center justify-between">
                    <button
                        onClick={onMarkAllAsRead}
                        className="text-xs text-primary-6 hover:text-primary-7 font-bold transition-colors"
                    >
                        Mark all as read
                    </button>
                </div>
            )}

            <div className="space-y-3">
                {notifications.length > 0 ? (
                    notifications.map((notification) => (
                        <NotificationItem 
                            key={notification.id} 
                            notification={notification}
                            onMarkAsRead={onMarkAsRead}
                        />
                    ))
                    ) : (
                    <div className="py-12 text-center">
                        <Icon icon="hugeicons:notification-02" className="w-12 h-12 text-neutral-4 mx-auto mb-3" />
                        <p className="text-sm text-neutral-6">No notifications</p>
                    </div>
                )}
            </div>

            <button
                className="text-xs flex items-center gap-1 text-primary-6 hover:text-primary-7 font-bold transition-colors"
              >
                <span>View All Notifications</span>
                <Icon icon="humbleicons:arrow-right" width="20" height="20" />
            </button>
        </div>
    )
}
