import { cn } from "@/lib/utils"
import UserMetricCard from "./UserMetricsCard"

interface MetricsCardsConatinerProps {
    metrics: CustomerMetricCardData[]
    className?: string
}

export default function CustomersProfilePageMetricCardsContainer({ metrics, className }: MetricsCardsConatinerProps) {
    return (
        <div className={cn(
            'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4',
            className
        )}>
            {metrics.map((metric) => (
                <UserMetricCard 
                    key={metric.id}
                    label={metric.label}
                    value={metric.value}
                    trendData={metric.trendData}
                    isNegativeGood={metric.isNegativeGood}
                />
            ))}
        </div>
    )
}