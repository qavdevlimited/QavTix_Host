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


export const mockMetrics3: MetricCardData[] = [
        {
            id: 'affiliates',
            value: '47',
            label: 'Affiliates',
            description: "Partners driving referrals",
            icon: "famicons:people-outline",
            iconColor: 'text-accent-9',
        },
        {
            id: 'new-month',
            value: '₦154,050',
            label: 'New this month',
            description: 'Recently added affiliates',
            icon: "hugeicons:discount-01",
            iconColor: 'text-accent-5',
        },
        {
            id: 'tickets-sold',
            value: '201',
            label: 'Tickets Sold',
            description: 'Units sold by affiliates',
            icon: "hugeicons:ticket-02",
            iconColor: 'text-primary-4'
        },
        {
            id: 'commission-paid',
            value: '₦154,500',
            label: 'Commission Paid',
            description: 'Total earnings distributed.',
            icon: "hugeicons:dollar-square",
            iconColor: 'text-accent-5',
        },
    ]




export const mockMetrics4: MetricCardData[] = [
    {
        id: 'total-tickets',
        value: '201',
        label: 'Tickets Sold',
        description: 'All tickets issued out',
        icon: "hugeicons:ticket-02",
        iconColor: 'text-primary-4'
    },
    {
        id: 'checked-in',
        value: '123',
        label: 'Checked-In',
        description: 'Successfully admitted',
        icon: "hugeicons:checkmark-badge-03",
        iconColor: 'text-[#359160]',
    },
    {
        id: 'not-arrived',
        value: '78',
        label: 'Not Arrived',
        description: 'Tickets not yet scanned',
        icon: "mingcute:sandglass-line",
        iconColor: 'text-accent-4'
    },
    {
        id: 'issues-duplicates',
        value: '₦154,500',
        label: 'Issues / Duplicates',
        description: 'Failed or repeated scans',
        icon: "octicon:alert-16",
        iconColor: 'text-[#FF0000]',
    },
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
]




// Mock Data
export const mockPromoCodes : PromoCode[] = [
  {
    id: 1,
    status: "active",
    promo_code: "SAVE4X7P",
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
    usage: 12,
    revenue_impact: -335000,
    expiry_date: "2025-12-31T23:59:59"
  },
  {
    id: 2,
    status: "ended",
    promo_code: "DEO25OFF",
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
    usage: 50,
    revenue_impact: -512800,
    expiry_date: "2025-06-15T23:59:59"
  },
  {
    id: 3,
    status: "active",
    promo_code: "LUCKYN9Q",
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
    usage: 38,
    revenue_impact: -278450,
    expiry_date: "2025-08-20T23:59:59"
  },
  {
    id: 4,
    status: "active",
    promo_code: "FLASH50X",
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
    usage: 75,
    revenue_impact: -689900,
    expiry_date: "2025-11-30T23:59:59"
  },
  {
    id: 5,
    status: "ended",
    promo_code: "BONUS777",
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
    usage: 45,
    revenue_impact: -201100,
    expiry_date: "2025-03-10T23:59:59"
  },
  {
    id: 6,
    status: "ended",
    promo_code: "DEAL9Z2K",
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
    usage: 30,
    revenue_impact: -410500,
    expiry_date: "2025-04-25T23:59:59"
  },
  {
    id: 7,
    status: "active",
    promo_code: "EARLY20",
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
    usage: 89,
    revenue_impact: -890000,
    expiry_date: "2025-10-15T23:59:59"
  },
  {
    id: 8,
    status: "active",
    promo_code: "VIPX100",
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
    usage: 22,
    revenue_impact: -445600,
    expiry_date: "2025-09-05T23:59:59"
  }
]


export const mockAffiliateLeaderboard = [
    {
        id: 1,
        rank: 1,
        affiliate: mockCustomers[0],
        clicks: 6200,
        tickets_sold: 340,
        revenue: 1250000,
        commission: 125000,
        conversion_rate: 7.3
    },
    {
        id: 2,
        rank: 2,
        affiliate: mockCustomers[0],
        clicks: 5480,
        tickets_sold: 275,
        revenue: 980000,
        commission: 98000,
        conversion_rate: 7.3
    },
    {
        id: 3,
        rank: 3,
        affiliate: mockCustomers[0],
        clicks: 4950,
        tickets_sold: 198,
        revenue: 820000,
        commission: 62000,
        conversion_rate: 7.3
    },
    {
        id: 4,
        rank: 4,
        affiliate: mockCustomers[0],
        clicks: 4300,
        tickets_sold: 170,
        revenue: 540000,
        commission: 54000,
        conversion_rate: 7.3
    },
    {
        id: 5,
        rank: 5,
        affiliate: mockCustomers[0],
        clicks: 3900,
        tickets_sold: 150,
        revenue: 480000,
        commission: 48000,
        conversion_rate: 7.3
    },
    {
        id: 6,
        rank: 6,
        affiliate: mockCustomers[0],
        clicks: 3500,
        tickets_sold: 135,
        revenue: 420000,
        commission: 42000,
        conversion_rate: 7.3
    },
    {
        id: 7,
        rank: 7,
        affiliate: mockCustomers[0],
        clicks: 3200,
        tickets_sold: 120,
        revenue: 380000,
        commission: 38000,
        conversion_rate: 7.3
    },
    {
        id: 8,
        rank: 8,
        affiliate: mockCustomers[0],
        clicks: 2800,
        tickets_sold: 105,
        revenue: 340000,
        commission: 34000,
        conversion_rate: 7.3
    }
]








// Mock Mail Data
export const mockEmailCampaigns = [
    {
        id: 1,
        campaign: "Early Bird Tickets Announcement",
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
        recipients: 1550,
        sent_date: "2025-11-14T09:00:00",
        open_rate: 48,
        click_rate: 24,
        status: "successful"
    },
    {
        id: 2,
        campaign: "VIP Pass Promotion",
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
        recipients: 5850,
        sent_date: "2025-11-15T11:30:00",
        open_rate: null,
        click_rate: null,
        status: "failed"
    },
    {
        id: 3,
        campaign: "Flash Sale – 24 Hours Only",
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
        recipients: 3200,
        sent_date: "2025-11-17T15:00:00",
        open_rate: 37,
        click_rate: 16,
        status: "successful"
    },
    {
        id: 4,
        campaign: "Sold-Out Soon Alert",
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
        recipients: 934,
        sent_date: "2025-11-18T18:45:00",
        open_rate: 56,
        click_rate: 27,
        status: "successful"
    },
    {
        id: 5,
        campaign: "Holiday Festival Promo",
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
        recipients: 4100,
        sent_date: "2025-11-20T10:00:00",
        open_rate: 67,
        click_rate: 33,
        status: "successful"
    },
    {
        id: 6,
        campaign: "Last-Minute Ticket Deals",
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
        recipients: 2456,
        sent_date: "2025-11-22T14:15:00",
        open_rate: 81,
        click_rate: 39,
        status: "successful"
    },
    {
        id: 7,
        campaign: "Weekend Special Offer",
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
        recipients: 6200,
        sent_date: "2025-11-23T08:30:00",
        open_rate: 42,
        click_rate: 18,
        status: "successful"
    },
    {
        id: 8,
        campaign: "New Year Countdown Event",
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
        recipients: 8900,
        sent_date: "2025-11-25T16:00:00",
        open_rate: null,
        click_rate: null,
        status: "failed"
    }
]



export const mockAttendeesCheckIns = [
  {
    id: 'chk-001',
    attendee: mockCustomers[0],
    ticketId: 'TKT-ORD-2024-001-01',
    ticketType: 'VIP',
    event: mockUpcomingEvents[0],
    checkInTime: '2025-11-15 19:12',
    status: 'checked-in'
  },
  {
    id: 'chk-002',
    attendee: mockCustomers[0],
    ticketId: 'TKT-ORD-2024-001-02',
    ticketType: 'VIP',
    event: mockUpcomingEvents[0],
    checkInTime: '2025-11-15 19:15',
    status: 'checked-in'
  },
  {
    id: 'chk-003',
    attendee: mockCustomers[0],
    ticketId: 'TKT-ORD-2024-002-01',
    ticketType: 'Regular',
    event: mockUpcomingEvents[0],
    checkInTime: '2025-11-14 09:05',
    status: 'checked-in'
  },
  {
    id: 'chk-004',
    attendee: mockCustomers[0],
    ticketId: 'TKT-ORD-2024-003-01',
    ticketType: 'Regular',
    event: mockUpcomingEvents[0],
    checkInTime: null,
    status: 'pending' // order was cancelled
  },
  {
    id: 'chk-005',
    attendee: mockCustomers[0],
    ticketId: 'TKT-ORD-2024-004-01',
    ticketType: 'Regular',
    event: mockUpcomingEvents[0],
    checkInTime: null,
    status: 'pending' // event not yet happened
  },
  {
    id: 'chk-006',
    attendee: mockCustomers[0],
    ticketId: 'TKT-ORD-2024-005-01',
    ticketType: 'VIP',
    event: mockUpcomingEvents[0],
    checkInTime: null,
    status: 'failed'
  },
  {
    id: 'chk-007',
    attendee: mockCustomers[0],
    ticketId: 'TKT-ORD-2024-006-01',
    ticketType: 'Family Pass',
    event: mockUpcomingEvents[0],
    checkInTime: '2025-11-20 09:45',
    status: 'checked-in'
  },
  {
    id: 'chk-008',
    attendee: mockCustomers[0],
    ticketId: 'TKT-ORD-2024-006-02',
    ticketType: 'Family Pass',
    event: mockUpcomingEvents[0],
    checkInTime: '2025-11-20 09:50',
    status: 'checked-in'
  },
  // ... more entries can be added similarly
]




export const mockPayments: Payment[] = [
    {
        id: '1',
        payment_id: 'PMT-2025-1234567',
        purchased_by: {
            id: '1',
            name: 'Dominic Evans',
            email: 'domevans@gmail.com',
            profileImg: '/images/demo-images/avatar.png',
            address: 'Doo & Shima, Elegushi Beach, Ikoyi, Lagos State',
            attended: 13,
            totalSpend: 105000,
            lastPurchaseDate: new Date('2026-01-03'),
            firstPurchaseDate: new Date('2025-11-14'),
            status: 'top-spender'
        },
        event: {
            id: 'EVT001',
            title: 'DevFest Lekki',
            category: 'Tech Summit',
            image: '/images/demo-images/event-detail-img.png'
        },
        purchase_date: '2026-01-03T16:15:00',
        quantity: 1,
        amount: 4500,
        status: 'successful'
    },
    {
        id: '2',
        payment_id: 'PMT-2025-1234567',
        purchased_by: {
            id: '2',
            name: 'Chinedu Okafor',
            email: 'edubrazil042@gmail.com',
            profileImg: '/images/demo-images/avatar.png',
            address: '1234 Victoria Island, Lagos',
            attended: 7,
            totalSpend: 78000,
            lastPurchaseDate: new Date('2025-02-21'),
            firstPurchaseDate: new Date('2025-11-14'),
            status: 'repeat-buyer'
        },
        event: {
            id: 'EVT002',
            title: '5ive Tour Concert',
            category: 'Music Festival',
            image: '/images/demo-images/event-detail-img.png'
        },
        purchase_date: '2025-02-21T08:40:00',
        quantity: 3,
        amount: 15000,
        status: 'successful'
    },
    {
        id: '3',
        payment_id: 'PMT-2025-1234567',
        purchased_by: {
            id: '3',
            name: 'Aisha Mohammed',
            email: 'Aishamona22@yahoo.com',
            profileImg: '/images/demo-images/avatar.png',
            address: '18 Admiralty Way, Lekki Phase 1, Lagos',
            attended: 1,
            totalSpend: 10200,
            lastPurchaseDate: new Date('2026-03-12'),
            firstPurchaseDate: new Date('2025-11-14'),
            status: 'first-timer'
        },
        event: {
            id: 'EVT003',
            title: 'Bole Fest 2025',
            category: 'Food Festival',
            image: '/images/demo-images/event-detail-img.png'
        },
        purchase_date: '2026-03-12T18:55:00',
        quantity: 2,
        amount: 3500,
        status: 'cancelled'
    },
    {
        id: '4',
        payment_id: 'PMT-2025-1234567',
        purchased_by: {
            id: '4',
            name: 'Temitope Adeyemi',
            email: 'temiyemi10@outlook.com',
            profileImg: '/images/demo-images/avatar.png',
            address: '4 Boudillion Road, Ikoyi, Lagos',
            attended: 3,
            totalSpend: 15000,
            lastPurchaseDate: new Date('2025-04-29'),
            firstPurchaseDate: new Date('2025-11-14'),
            status: 'repeat-buyer'
        },
        event: {
            id: 'EVT004',
            title: 'PS5 Gamers Clash',
            category: 'Sports Event',
            image: '/images/demo-images/event-detail-img.png'
        },
        purchase_date: '2025-04-29T11:20:00',
        quantity: 1,
        amount: 2200,
        status: 'successful'
    },
    {
        id: '5',
        payment_id: 'PMT-2025-1234567',
        purchased_by: {
            id: '5',
            name: 'Ibrahim Danladi',
            email: 'ibrahimladi77@gmail.com',
            profileImg: '/images/demo-images/avatar.png',
            address: 'Plot 54 Alausa Extension, Allen Avenue, Ikeja',
            attended: 3,
            totalSpend: 21350,
            lastPurchaseDate: new Date('2026-07-07'),
            firstPurchaseDate: new Date('2025-11-14'),
            status: 'repeat-buyer'
        },
        event: {
            id: 'EVT005',
            title: 'Owerri Cultural Day',
            category: 'Cultural Event',
            image: '/images/demo-images/event-detail-img.png'
        },
        purchase_date: '2026-07-07T14:10:00',
        quantity: 1,
        amount: 5000,
        status: 'successful'
    },
    {
        id: '6',
        payment_id: 'PMT-2025-1234568',
        purchased_by: {
            id: '6',
            name: 'Samuel Oladimeji',
            email: 'sam.oladimeji25@gmail.com',
            profileImg: '/images/demo-images/avatar.png',
            address: 'Doo & Shima, Elegushi Beach, Ikoyi',
            attended: 8,
            totalSpend: 85000,
            lastPurchaseDate: new Date('2025-06-15'),
            firstPurchaseDate: new Date('2025-11-14'),
            status: 'top-spender'
        },
        event: {
            id: 'EVT006',
            title: 'Kiddies Funfair Fest',
            category: 'Kids Event',
            image: '/images/demo-images/event-detail-img.png'
        },
        purchase_date: '2025-06-15T10:30:00',
        quantity: 4,
        amount: 20000,
        status: 'successful'
    },
    {
        id: '7',
        payment_id: 'PMT-2025-1234569',
        purchased_by: {
            id: '1',
            name: 'Dominic Evans',
            email: 'domevans@gmail.com',
            profileImg: '/images/demo-images/avatar.png',
            address: 'Doo & Shima, Elegushi Beach, Ikoyi',
            attended: 13,
            totalSpend: 105000,
            lastPurchaseDate: new Date('2025-08-20'),
            firstPurchaseDate: new Date('2025-11-14'),
            status: 'top-spender'
        },
        event: {
            id: 'EVT007',
            title: 'Lagos Tech Conference',
            category: 'Conference',
            image: '/images/demo-images/event-detail-img.png'
        },
        purchase_date: '2025-08-20T09:00:00',
        quantity: 2,
        amount: 18000,
        status: 'successful'
    },
    {
        id: '8',
        payment_id: 'PMT-2025-1234570',
        purchased_by: {
            id: '3',
            name: 'Aisha Mohammed',
            email: 'Aishamona22@yahoo.com',
            profileImg: '/images/demo-images/avatar.png',
            address: '18 Admiralty Way, Lekki Phase 1, Lagos',
            attended: 1,
            totalSpend: 10200,
            lastPurchaseDate: new Date('2025-09-10'),
            firstPurchaseDate: new Date('2025-11-14'),
            status: 'first-timer'
        },
        event: {
            id: 'EVT008',
            title: 'Afrobeat Night Live',
            category: 'Music Concert',
            image: '/images/demo-images/event-detail-img.png'
        },
        purchase_date: '2025-09-10T19:45:00',
        quantity: 1,
        amount: 8500,
        status: 'cancelled'
    }
]

// TypeScript Interface
export interface Payment {
    id: string
    payment_id: string
    purchased_by: {
        id: string
        name: string
        email: string
        profileImg?: string
        address: string
        attended: number
        totalSpend: number
        lastPurchaseDate: Date
        firstPurchaseDate: Date
        status: string
    }
    event: {
        id: string
        title: string
        category: string
        image: string
    }
    purchase_date: string
    quantity: number
    amount: number
    status: 'successful' | 'cancelled' | 'pending'
}