import { cn } from "@/lib/utils"
import { analyticsMetricStatCardsConfig2VariantStyles, MetricStatCardConfig } from "./resources/metrics-config"
import { space_grotesk } from "@/lib/fonts"

interface AnalyticsMetricStatCardProps {
    config: MetricStatCardConfig
}

export default function AnalyticsMetricStatCard2({ config }: AnalyticsMetricStatCardProps) {
    const styles = analyticsMetricStatCardsConfig2VariantStyles[config.variant]
    
    return (
        <div className={cn(
            "flex items-center gap-4 w-57.5 max-h-21  px-5 py-4 rounded-xl border-[1.5px] transition-all duration-200 hover:shadow-md",
            styles.container
        )}>
            <div className="flex flex-col">
                <span className={cn("text-xl font-bold", styles.value, space_grotesk.className)}>
                    {config.value}
                </span>
            </div>
            <div className="flex flex-col">
                <span className={cn("text-sm font-semibold", styles.label)}>
                    {config.label}
                </span>
                <span className={cn("text-[11px]", styles.description)}>
                    {config.description}
                </span>
            </div>
        </div>
    )
}