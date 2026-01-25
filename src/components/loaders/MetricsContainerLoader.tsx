import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

function MetricsContainerLoader() {
    return (
        <div className={cn(
            'mt-8 grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-4 gap-4'
        )}>
            {Array.from({ length: 4 }).map((_,i) => (
                <Skeleton key={i} className="rounded-2xl w-full h-32 overflow-hidden" />
            ))}
        </div>
    )
}

export default MetricsContainerLoader;