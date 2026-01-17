interface IDashboardStat {
    icon: string;              
    iconBg: string; 
    cardBg: string;
    number: number;
    label: string;
    change: {
        value: string;
        period: string; 
        isPositive: boolean; 
    };
    linkText: string;
    linkHref?: string;
}


type ChartFilter = "revenue" | "tickets"