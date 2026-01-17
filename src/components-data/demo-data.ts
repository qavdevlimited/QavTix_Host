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


export const mockPerformingEvents: TopPerformingEvent[] = [
  {
      id: '1',
      title: 'Sive Tour',
      category: 'Music Festival',
      image: '/images/demo-images/event-detail-img.png',
      conversionRate: 93,
      ticketsSold: 487,
      totalTickets: 500,
      revenueGenerated: 217500,
      currency: '₦'
  },
  {
      id: '2',
      title: 'Tech Summit 2025',
      category: 'Conference',
      image: '/images/demo-images/event-detail-img.png',
      conversionRate: 87,
      ticketsSold: 350,
      totalTickets: 400,
      revenueGenerated: 185000,
      currency: '₦'
  },
  {
      id: '3',
      title: 'Food & Wine Expo',
      category: 'Food & Dining',
      image: '/images/demo-images/event-detail-img.png',
      conversionRate: 82,
      ticketsSold: 290,
      totalTickets: 350,
      revenueGenerated: 145000,
      currency: '₦'
  }
]


export const mockUpcomingEvents: EventTableData[] = [
    {
        id: '1',
        image: '/images/demo-images/event-detail-img.png',
        status: 'low-sales',
        category: 'Tech Summit',
        host: 'Tech Hub',
        title: 'DevFest Lekki',
        date: 'Nov 14, 2025',
        time: '9:00 am',
        location: '1234 Victoria Island, Opposite Figma Head Office, Lagos, Nigeria',
        price: '₦5,000',
        href: '/events/1',
        attendees: [],
        ticketsSold: 174,
        totalTickets: 500,
        revenue: 635000
    },
    {
        id: '2',
        image: '/images/demo-images/event-detail-img.png',
        status: 'selling-fast',
        category: 'Music Festival',
        host: 'Live Nation',
        title: 'Sive Tour Concert',
        date: 'Nov 15, 2025',
        time: '6:00 pm',
        location: 'Doo & Shima, Elegushi Beach, Ikoyi, Lagos State',
        price: '₦15,000',
        href: '/events/2',
        attendees: [],
        ticketsSold: 254,
        totalTickets: 500,
        revenue: 635000
    },
    {
        id: '3',
        image: '/images/demo-images/event-detail-img.png',
        status: 'starts-soon',
        category: 'Food Festival',
        host: 'Food Lovers',
        title: 'Bole Fest 2025',
        date: 'Nov 17, 2025',
        time: '11:00 am',
        location: "567 O'Brien Crescent, off Airport Road, Umuahia",
        price: '₦3,000',
        href: '/events/3',
        attendees: [],
        ticketsSold: 254,
        totalTickets: 500,
        revenue: 635000
    },
    {
        id: '4',
        image: '/images/demo-images/event-detail-img.png',
        status: 'starts-soon',
        category: 'Sports Event',
        host: 'Gaming Hub',
        title: 'PS5 Gamers Clash',
        date: 'Nov 18, 2025',
        time: '4:00 pm',
        location: "567 O'Brien Crescent, off Airport Road, Umuahia",
        price: '₦2,500',
        href: '/events/4',
        attendees: [],
        ticketsSold: 254,
        totalTickets: 500,
        revenue: 635000
    },
    {
        id: '5',
        image: '/images/demo-images/event-detail-img.png',
        status: 'selling-fast',
        category: 'Cultural Event',
        host: 'Heritage Foundation',
        title: 'Owerri Cultural Day',
        date: 'Nov 19, 2025',
        time: '2:00 pm',
        location: 'Hero Square, New Owerri, Imo State',
        price: '₦1,000',
        href: '/events/5',
        attendees: [],
        ticketsSold: 254,
        totalTickets: 500,
        revenue: 635000
    },
    {
        id: '6',
        image: '/images/demo-images/event-detail-img.png',
        status: 'selling-fast',
        category: 'Kids Event',
        host: 'Fun Zone',
        title: 'Kiddies Funfair Fest',
        date: 'Nov 20, 2025',
        time: '9:00 am',
        location: 'Dreamworld Africana, KM 20 Lekki-Ajah Expressway, Lagos',
        price: '₦5,000',
        href: '/events/6',
        attendees: [],
        ticketsSold: 254,
        totalTickets: 500,
        revenue: 635000
    }
]
