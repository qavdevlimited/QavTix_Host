interface ILink {
    readonly href: string,
    label: string,
    icon: string
}

interface INavigationLinks {
    [key: string] : ILink
}

export const NAVIGATION_LINKS : INavigationLinks = {
    DASHBOARD: {
        href: "/dashboard",
        icon: "hugeicons:dashboard-square-01",
        label: "Dashboard"
    },
    MY_EVENTS: {
        href: "/events",
        icon: "hugeicons:calendar-03",
        label: "My Events"
    },
    SALE_AND_ANALYTICS: {
        href: "/sales-analytics",
        icon: "hugeicons:analytics-up",
        label: "Sales & Analytics"
    },
    CUSTOMERS: {
        href: "/customers",
        icon: "hugeicons:user-multiple-02",
        label: "Customers"
    },
    FINANCIALS: {
        href: "/financials",
        icon: "hugeicons:coins-01",
        label: "Financials"
    },
    MARKETING_TOOLS: {
        href: "/marketing-tools",
        icon: "hugeicons:invoice-03",
        label: "Marketing Tools"
    },
    CHECK_IN_SYSTEM: {
        href: "/checkin-system",
        icon: "hugeicons:add-to-list",
        label: "Check-In System"
    },
    SECURITY: {
        href: "/security",
        icon: "hugeicons:security-lock",
        label: "Security"
    }
}


export const CUSTOMERS_PROFILE = {
    href: "/customers/profile/[customer_id]",
    label: "Customer Profile"
}

export const CREATE_EVENT = {
    href: "/events/create",
    label: "Create Event"
}

