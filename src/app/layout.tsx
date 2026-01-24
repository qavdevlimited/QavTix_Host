import "./globals.css"
import DesktopHeaderSection from "@/components/layout/DesktopHeaderSection"
import DesktopSideNav from "@/components/layout/DesktopSideNav"
import MobileHeaderSection from "@/components/layout/MobileHeaderSection"
import ConfirmationModal from "@/components/modals/ConfirmationModal"
import SuccessModal from "@/components/modals/SuccessModal"
import { inter } from "@/lib/fonts"
import ReduxStoreProvider from "@/lib/redux/ReduxStoreProvider"
import { Metadata } from "next"
import { ReactNode } from "react"

type LayoutProps = {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Qavtix Host - Under-development'
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <ReduxStoreProvider>
          <div className="flex justify-end min-h-screen bg-gray-100/70">
            {/* Fixed Sidebar - Takes no space in flex layout */}
            <DesktopSideNav />
            
            {/* Main Content Area */}
            <div className="w-full lg:w-[calc(100%-240px)]">
              {/* Scrollable Content */}
              <div className="w-full">
                <MobileHeaderSection />
                <div className="relative w-full lg:pt-28 px-4 md:px-6">
                  {/* Desktop Header - Fixed at top */}
                  <DesktopHeaderSection />
                  {children}
                </div>
              </div>
            </div>
          </div>


          <ConfirmationModal />
          <SuccessModal />
        </ReduxStoreProvider>
      </body>
    </html>
  )
}