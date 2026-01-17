import { Skeleton } from "../ui/skeleton";

export default function TableLoader() {
    return (
        <div className="w-full bg-white rounded-xl border border-neutral-2 overflow-hidden">
            <div className="hidden md:grid md:grid-cols-5 gap-4 bg-neutral-2 p-4 border-b border-neutral-3">
                <Skeleton className="h-4 w-20 bg-neutral-4" />
                <Skeleton className="h-4 w-24 bg-neutral-4" />
                <Skeleton className="h-4 w-16 bg-neutral-4" />
                <Skeleton className="h-4 w-28 bg-neutral-4" />
                <Skeleton className="h-4 w-20 bg-neutral-4" />
            </div>

            <div className="hidden md:block divide-y divide-neutral-2">
                {[...Array(5)].map((_, rowIndex) => (
                    <div key={rowIndex} className="grid grid-cols-5 gap-4 p-4">
                        <Skeleton className="h-4 w-full bg-neutral-3" />
                        <Skeleton className="h-4 w-3/4 bg-primary-2" />
                        <Skeleton className="h-4 w-2/3 bg-accent-2" />
                        <Skeleton className="h-4 w-full bg-neutral-3" />
                        <Skeleton className="h-4 w-1/2 bg-secondary-2" />
                    </div>
                ))}
            </div>

            <div className="md:hidden divide-y divide-neutral-2">
                {[...Array(5)].map((_, cardIndex) => (
                    <div key={cardIndex} className="p-4 space-y-3">
                        <div className="flex items-center justify-between">
                            <Skeleton className="h-5 w-32 bg-neutral-4" />
                            <Skeleton className="h-5 w-16 bg-primary-3 rounded-full" />
                        </div>
                        <div className="space-y-2">
                            <Skeleton className="h-3 w-full bg-neutral-3" />
                            <Skeleton className="h-3 w-4/5 bg-accent-2" />
                            <Skeleton className="h-3 w-3/5 bg-secondary-2" />
                        </div>
                        <div className="flex gap-2 pt-2">
                            <Skeleton className="h-8 w-20 bg-primary-2 rounded-lg" />
                            <Skeleton className="h-8 w-20 bg-neutral-3 rounded-lg" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}