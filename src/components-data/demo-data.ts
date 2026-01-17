export const dashboardCards: IDashboardStat[] = [
  {
    icon: "hugeicons:analytics-01",
    iconBg: "bg-[#FA5A7D]",
    cardBg: "bg-[#FFE2E5]",
    number: 1213456,
    label: "Total Revenue",
    change: {
      value: "+23%",
      period: "from last month",
      isPositive: true
    },
    linkText: "View Details →",
    linkHref: "/dashboard/revenue"
  },
  {
    icon: "icon-park-solid:ticket",
    iconBg: "bg-[#FF947A]",
    cardBg: "bg-[#FFF4DE]",
    number: 3456,
    label: "Tickets Sold",
    change: {
      value: "+156",
      period: "this week",
      isPositive: true
    },
    linkText: "View Sales →",
    linkHref: "/dashboard/sales"
  },
  {
    icon: "hugeicons:calendar-check-out-02",
    iconBg: "bg-primary-5",
    cardBg: "bg-[#E6EEFA]",
    number: 12,
    label: "Active Events",
    change: {
      value: "3 this week",
      period: "",
      isPositive: true
    },
    linkText: "Manage Events →",
    linkHref: "/dashboard/events"
  },
  {
    icon: "ph:currency-circle-dollar-bold",
    iconBg: "bg-[#83AD7D]",
    cardBg: "bg-[#EFFFED]",
    number: 12,
    label: "Pending Payouts",
    change: {
      value: "3 this week",
      period: "",
      isPositive: true
    },
    linkText: "Payout History →",
    linkHref: "/dashboard/payouts"
  }
]


export const activities : ActivityItem[] = [
    {
      id: '1',
      type: 'new_sale',
      title: 'Dominic Evans purchased 2 VIP tickets to Five Tour Concert',
      subtitle: 'Revenue Generated: ₦50,000',
      timestamp: '2 mins ago',
      eventId: 'event-123'
    },
    {
      id: '2',
      type: 'check_in',
      title: '45 attendees checked in for DevFest Lekki',
      timestamp: '1 hr ago',
      eventId: 'event-456'
    },
    {
      id: '3',
      type: 'low_stock',
      title: '0 tickets remaining for DevFest Lekki',
      subtitle: 'Ticket Low Stock Alert',
      timestamp: '1 hr ago',
      eventId: 'event-456'
    },
    {
      id: '4',
      type: 'low_stock',
      title: 'Only 12 VIP tickets remaining for Five Tour Concert',
      subtitle: 'Ticket Low Stock Alert',
      timestamp: '2 hrs ago',
      eventId: 'event-123'
    }
  ]

export const notifications : NotificationItem[] = [
    {
      id: '1',
      type: 'new_sale',
      title: '2 tickets sold for Five Tour Concert',
      subtitle: 'New Sale',
      timestamp: '5 mins ago',
      status: 'unread'
    },
    {
      id: '2',
      type: 'payout',
      title: '₦125,000 sent to your account',
      subtitle: 'Payout processed',
      timestamp: '2 hrs ago',
      status: 'unread'
    },
    {
      id: '3',
      type: 'reminder',
      title: 'Tech Conference starts tomorrow',
      subtitle: 'Event reminder',
      timestamp: 'Yesterday',
      status: 'read'
    }
  ]