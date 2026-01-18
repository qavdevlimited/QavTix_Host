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



export const mockMetrics: MetricCardData[] = [
        {
            id: 'total-customers',
            value: '612',
            label: 'Total customers',
            description: "Everyone you've served.",
            icon: "famicons:people-outline",
            iconColor: 'text-[#359160]',
        },
        {
            id: 'new-month',
            value: '547',
            label: 'New this month',
            description: 'Latest ticket buyers.',
            icon: "famicons:gift-outline",
            iconColor: 'text-accent-5',
        },
        {
            id: 'repeat-buyers',
            value: '17',
            label: 'Repeat Buyers',
            description: 'Customers who returned',
            icon: "uil:repeat",
            iconColor: 'text-accent-9',
        },
        {
            id: 'average-spend',
            value: '₦5,500',
            label: 'Average Spend',
            description: 'Avg. spend per customer.',
            icon: "icon-park-outline:average",
            iconColor: 'text-blue-600',
        }
    ]


export const mockMetrics2: MetricCardData[] = [
        {
            id: 'gross',
            value: '₦1,540,500',
            label: 'Gross',
            description: "Total revenue generated",
            icon: "hugeicons:dollar-square",
            iconColor: 'text-[#359160]',
        },
        {
            id: 'platform-fees',
            value: '₦154,050',
            label: 'Platform Fees',
            description: 'Total Charges deducted',
            icon: "hugeicons:discount-01",
            iconColor: 'text-[#914613]',
        },
        {
            id: 'all-time-payouts',
            value: '17',
            label: 'All-time Payouts',
            description: 'Customers who returned',
            icon: "hugeicons:wallet-done-01",
            iconColor: 'text-accent-5',
        },
        {
            id: 'average-spend',
            value: 'Fri, Jan 9, 2026',
            label: 'Next Payout Date',
            description: 'Scheduled payment date',
            icon: "hugeicons:calendar-03",
            iconColor: 'text-primary-4'
        }
    ]



export const mockCustomers: Customer[] = [
    {
        id: '1',
        name: 'Dominic Evans',
        email: 'danevansyg@gmail.com',
        profileImg: '/images/demo-images/avatar.png',
        address: 'Doo & Shima, Elegushi Beach, Ikoyi, Lagos State',
        attended: 13,
        totalSpend: 105000,
        lastPurchaseDate: new Date('Nov 14, 2025'),
        firstPurchaseDate: new Date('Nov 14, 2025'),
        status: 'top-spender'
    },
    {
        id: '2',
        name: 'Chinedu Okafor',
        email: 'okaforafc42@gmail.com',
        address: '1234 Victoria Island, Opposite Figma Head Office, Lagos, Nigeria',
        attended: 7,
        totalSpend: 78000,
        lastPurchaseDate: new Date('Nov 14, 2025'),
        firstPurchaseDate: new Date('Nov 14, 2025'),
        status: 'repeat-buyer'
    },
    {
        id: '3',
        name: 'Aisha Mohammed',
        email: 'Aishama422@yahoo.com',
        address: '18 Admiralty Way, Lekki Phase 1, Lagos',
        attended: 1,
        totalSpend: 10200,
        lastPurchaseDate: new Date('Nov 14, 2025'),
        firstPurchaseDate: new Date('Nov 14, 2025'),
        status: 'first-timer'
    },
    {
        id: '4',
        name: 'Temitope Adeyemi',
        email: 'temiyemi10@outlook.com',
        address: '4 Boudillion Road, Ikoyi, Lagos',
        attended: 3,
        totalSpend: 15000,
        lastPurchaseDate: new Date('Nov 14, 2025'),
        firstPurchaseDate: new Date('Nov 14, 2025'),
        status: 'repeat-buyer'
    },
    {
        id: '5',
        name: 'Ibrahim Danladi',
        email: 'ibrahimdanl77@gmail.com',
        address: 'Plot 54 Alausa Extension, Allen Avenue, Ikeja, Lagos',
        attended: 3,
        totalSpend: 21350,
        lastPurchaseDate: new Date('Nov 14, 2025'),
        firstPurchaseDate: new Date('Nov 14, 2025'),
        status: 'repeat-buyer'
    },
    {
        id: '6',
        name: 'Samuel Oladimeji',
        email: 'sam.oladimeji25@gmail.com',
        address: 'Doo & Shima, Elegushi Beach, Ikoyi, Lagos State',
        attended: 8,
        totalSpend: 85000,
        lastPurchaseDate: new Date('Nov 14, 2025'),
        firstPurchaseDate: new Date('Nov 14, 2025'),
        status: 'top-spender'
    }
]



export const mockUserMetrics = [
    {
        id: 1,
        label: "Total Spent",
        value: "₦234,500",
        trendData: [210000, 215000, 218000, 225000, 230000, 228000, 232000, 235000, 234500],
        isNegativeGood: false
    },
    {
        id: 2,
        label: "Tickets Bought",
        value: "51",
        trendData: [45, 46, 47, 48, 49, 50, 51, 52, 51],
        isNegativeGood: false
    },
    {
        id: 3,
        label: "Refund Count",
        value: "51",
        trendData: [65, 63, 60, 58, 56, 54, 53, 52, 51],
        isNegativeGood: true
    },
    {
        id: 4,
        label: "Last Order Value",
        value: "₦7,200",
        trendData: [6500, 6600, 6700, 6800, 6900, 7000, 7100, 7150, 7200],
        isNegativeGood: false
    }
]



export const mockCustomerOrders: CustomerOrder[] = [
    {
        event: {
            id: '1',
            image: '/images/demo-images/event-detail-img.png',
            status: 'selling-fast',
            category: 'Music Festival',
            host: 'Live Nation',
            title: 'Sive Tour Concert',
            date: 'Nov 15, 2025',
            location: 'Doo & Shima, Elegushi Beach, Ikoyi, Lagos State',
            price: '₦15,000',
            href: '/events/1',
            attendees: []
        },
        order_id: 'ORD-2024-001',
        quantity: 2,
        amount: 30000,
        status: 'successful',
        purchase_date: 'November 14, 2025'
    },
    {
        event: {
            id: '2',
            image: '/images/demo-images/event-detail-img.png',
            status: 'starts-soon',
            category: 'Tech Summit',
            host: 'Tech Hub',
            title: 'DevFest Lekki',
            date: 'Nov 14, 2025',
            location: '1234 Victoria Island, Opposite Figma Head Office, Lagos, Nigeria',
            price: '₦5,000',
            href: '/events/2',
            attendees: []
        },
        order_id: 'ORD-2024-002',
        quantity: 1,
        amount: 5000,
        status: 'successful',
        purchase_date: 'November 10, 2025'
    },
    {
        event: {
            id: '3',
            image: '/images/demo-images/event-detail-img.png',
            status: 'low-sales',
            category: 'Food Festival',
            host: 'Food Lovers',
            title: 'Bole Fest 2025',
            date: 'Nov 17, 2025',
            location: "567 O'Brien Crescent, off Airport Road, Umuahia",
            price: '₦3,000',
            href: '/events/3',
            attendees: []
        },
        order_id: 'ORD-2024-003',
        quantity: 4,
        amount: 12000,
        status: 'cancelled',
        purchase_date: 'November 12, 2025'
    },
    {
        event: {
            id: '4',
            image: '/images/demo-images/event-detail-img.png',
            status: 'selling-fast',
            category: 'Cultural Event',
            host: 'Heritage Foundation',
            title: 'Owerri Cultural Day',
            date: 'Nov 19, 2025',
            location: 'Hero Square, New Owerri, Imo State',
            price: '₦1,000',
            href: '/events/4',
            attendees: []
        },
        order_id: 'ORD-2024-004',
        quantity: 3,
        amount: 3000,
        status: 'successful',
        purchase_date: 'November 08, 2025'
    },
    {
        event: {
            id: '5',
            image: '/images/demo-images/event-detail-img.png',
            status: 'starts-soon',
            category: 'Sports Event',
            host: 'Gaming Hub',
            title: 'PS5 Gamers Clash',
            date: 'Nov 18, 2025',
            location: "567 O'Brien Crescent, off Airport Road, Umuahia",
            price: '₦2,500',
            href: '/events/5',
            attendees: []
        },
        order_id: 'ORD-2024-005',
        quantity: 2,
        amount: 5000,
        status: 'cancelled',
        purchase_date: 'November 05, 2025'
    },
    {
        event: {
            id: '6',
            image: '/images/demo-images/event-detail-img.png',
            status: 'selling-fast',
            category: 'Kids Event',
            host: 'Fun Zone',
            title: 'Kiddies Funfair Fest',
            date: 'Nov 20, 2025',
            location: 'Dreamworld Africana, KM 20 Lekki-Ajah Expressway, Lagos',
            price: '₦5,000',
            href: '/events/6',
            attendees: []
        },
        order_id: 'ORD-2024-006',
        quantity: 5,
        amount: 25000,
        status: 'successful',
        purchase_date: 'December 11, 2024'
    },
    {
        event: {
            id: '7',
            image: '/images/demo-images/event-detail-img.png',
            status: 'low-sales',
            category: 'Business Event',
            host: 'Startup Lagos',
            title: 'Tech Startup Summit',
            date: 'Dec 05, 2025',
            location: 'Zone Tech Park, Gbagada, Lagos',
            price: '₦10,000',
            href: '/events/7',
            attendees: []
        },
        order_id: 'ORD-2024-007',
        quantity: 1,
        amount: 10000,
        status: 'cancelled',
        purchase_date: 'October 28, 2025'
    },
    {
        event: {
            id: '8',
            image: '/images/demo-images/event-detail-img.png',
            status: 'selling-fast',
            category: 'Concert',
            host: 'Afrobeat Live',
            title: 'Afrobeats Night Lagos',
            date: 'Dec 15, 2025',
            location: 'Eko Hotel & Suites, Victoria Island, Lagos',
            price: '₦20,000',
            href: '/events/8',
            attendees: []
        },
        order_id: 'ORD-2024-008',
        quantity: 2,
        amount: 40000,
        status: 'successful',
        purchase_date: 'November 01, 2025'
    }
]




export const mockPayoutTransactions: PayoutTransaction[] = [
    {
        id: "1",
        paymentId: "PMT-2025-1234567",
        bankAccount: {
            name: "Dominic Evans Onyebuchi",
            bank: "First Bank Nigeria",
            bankLogo: "/images/demo-images/bank-logo.png"
        },
        amount: 357000,
        payoutDate: "Jan 03, 2026",
        payoutTime: "4:12 pm",
        status: "processing"
    },
    {
        id: "2",
        paymentId: "PMT-2025-1234567",
        bankAccount: {
            name: "Buchi Johnson",
            bank: "Moniepoint",
            bankLogo: "/images/demo-images/bank-logo.png"
        },
        amount: 93450,
        payoutDate: "Jan 03, 2026",
        payoutTime: "4:12 pm",
        status: "completed"
    },
    {
        id: "3",
        paymentId: "PMT-2025-1234567",
        bankAccount: {
            name: "Evans Dominic Buchi",
            bank: "Opay",
            bankLogo: "/images/demo-images/bank-logo.png"
        },
        amount: 55000,
        payoutDate: "Jan 03, 2026",
        payoutTime: "4:12 pm",
        status: "completed"
    },
    {
        id: "4",
        paymentId: "PMT-2025-1234567",
        bankAccount: {
            name: "Dominic Evans Onyebuchi",
            bank: "First Bank Nigeria",
            bankLogo: "/images/demo-images/bank-logo.png"
        },
        amount: 78000,
        payoutDate: "Jan 03, 2026",
        payoutTime: "4:12 pm",
        status: "completed"
    },
    {
        id: "5",
        paymentId: "PMT-2025-1234567",
        bankAccount: {
            name: "Buchi Johnson",
            bank: "Moniepoint",
            bankLogo: "/images/demo-images/bank-logo.png"
        },
        amount: 93000,
        payoutDate: "Jan 03, 2026",
        payoutTime: "4:12 pm",
        status: "completed"
    },
    {
        id: "6",
        paymentId: "PMT-2025-1234567",
        bankAccount: {
            name: "Dominic Evans Onyebuchi",
            bank: "First Bank Nigeria",
            bankLogo: "/images/demo-images/bank-logo.png"
        },
        amount: 32000,
        payoutDate: "Jan 03, 2026",
        payoutTime: "4:12 pm",
        status: "completed"
    },
    {
        id: "7",
        paymentId: "PMT-2025-1234567",
        bankAccount: {
            name: "Dominic Evans Onyebuchi",
            bank: "First Bank Nigeria",
            bankLogo: "/images/demo-images/bank-logo.png"
        },
        amount: 11900,
        payoutDate: "Jan 03, 2026",
        payoutTime: "4:12 pm",
        status: "completed"
    },
    {
        id: "8",
        paymentId: "PMT-2025-1234567",
        bankAccount: {
            name: "Evans Dominic Buchi",
            bank: "Opay",
            bankLogo: "/images/demo-images/bank-logo.png"
        },
        amount: 7000,
        payoutDate: "Jan 03, 2026",
        payoutTime: "4:12 pm",
        status: "completed"
    },
    {
        id: "9",
        paymentId: "PMT-2025-1234568",
        bankAccount: {
            name: "Sarah Mitchell",
            bank: "GTBank",
            bankLogo: "/images/demo-images/bank-logo.png"
        },
        amount: 125000,
        payoutDate: "Jan 02, 2026",
        payoutTime: "2:30 pm",
        status: "completed"
    },
    {
        id: "10",
        paymentId: "PMT-2025-1234569",
        bankAccount: {
            name: "Michael Chen",
            bank: "Access Bank",
            bankLogo: "/images/demo-images/bank-logo.png"
        },
        amount: 45000,
        payoutDate: "Jan 02, 2026",
        payoutTime: "11:45 am",
        status: "failed"
    },
    {
        id: "11",
        paymentId: "PMT-2025-1234570",
        bankAccount: {
            name: "Amara Okafor",
            bank: "Zenith Bank",
            bankLogo: "/images/demo-images/bank-logo.png"
        },
        amount: 89500,
        payoutDate: "Jan 01, 2026",
        payoutTime: "5:20 pm",
        status: "completed"
    },
    {
        id: "12",
        paymentId: "PMT-2025-1234571",
        bankAccount: {
            name: "Chidi Okonkwo",
            bank: "UBA",
            bankLogo: "/images/demo-images/bank-logo.png"
        },
        amount: 150000,
        payoutDate: "Jan 01, 2026",
        payoutTime: "1:15 pm",
        status: "pending"
    }
];