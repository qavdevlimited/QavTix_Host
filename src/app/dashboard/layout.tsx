import SlotSectionLoader from "@/components/loaders/SlotSectionLoader"
import TableLoader from "@/components/loaders/TableLoader"
import { ReactNode, Suspense } from "react"

type LayoutProps = {
  children: ReactNode
  activity: ReactNode,
  performingEvents: ReactNode
  upcomingEvents: ReactNode
}

export default function DashboardLayout({ activity, upcomingEvents,  performingEvents, children }: LayoutProps){
    return (
        <div className="pb-10">
            <div className="md:flex gap-4 mb-10">
                <div className="lg:flex-1">
                    {children}
                </div>

                <aside className="md:w-76 hidden md:block space-y-8">
                    {/* Fallback, Until I find out why loading.tsx is not working as expected in slot folder */}
                    <Suspense fallback={<SlotSectionLoader />}>
                        {activity}  
                    </Suspense>
                    <Suspense fallback={<SlotSectionLoader />}>
                        {performingEvents}   
                    </Suspense>
                </aside>
            </div>  
            <Suspense fallback={<TableLoader />}>
                {upcomingEvents}
            </Suspense>
        </div>
    )
}