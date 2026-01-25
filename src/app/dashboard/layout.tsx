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
            <div className="xl:flex gap-4 mb-10">
                <div className="xl:flex-1">
                    {children}
                </div>

                <aside className="xl:w-76 hidden md:grid md:my-10 grid-cols-2 gap-10 xl:my-0 xl:block space-y-8">
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