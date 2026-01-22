import { cn } from "@/lib/utils"
import AnalyticsMetricsCard from "./AnalyticsMetricsCard"
import { salesAnalyticsMetricsConfig } from "./resources/metrics-config"

type MetricsData = typeof salesAnalyticsMetricsConfig[number] & { value: string }

interface MetricsCardsConatinerProps {
    metrics: MetricsData[]
    className?: string
}

export default function AnalyticsMetricsCardsContainer({ metrics, className }: MetricsCardsConatinerProps) {
    return (
        <div className={cn(
            'grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-4 gap-4',
            className
        )}>
            {metrics.map((metric) => (
                <AnalyticsMetricsCard key={metric.id} data={metric} />
            ))}
        </div>
    )
}