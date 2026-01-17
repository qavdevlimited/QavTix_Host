import { ReactNode } from "react"

type LayoutProps = {
  children: ReactNode
  activity: ReactNode
}

export default function DashboardLayout({ activity, children}: LayoutProps){
    return (
        <div className="md:flex gap-4">
            <div className="lg:flex-1">
                {children}
            </div>

            {/* Aside Space (if needed) */}
            <aside className="md:w-76 hidden md:block">
                {activity}  
            </aside>
        </div>
    )
}