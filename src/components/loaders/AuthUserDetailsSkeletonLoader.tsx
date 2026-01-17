import { Skeleton } from "../ui/skeleton";

export default function AuthUserDetailsSkeletonLoader(){
    return (
        <div className="flex min-w-40 items-center gap-3 justify-between">
            <Skeleton className="w-9 rounded-full h-9 bg-zinc-200" />
            <Skeleton className="flex-1 rounded-lg h-12 bg-zinc-200" />
        </div>
    )
}