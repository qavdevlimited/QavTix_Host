"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Icon } from "@iconify/react/dist/iconify.js"
import Logo from "./Logo"
import { NAVIGATION_LINKS } from "@/enums/navigation"
import AuthUserDetails from "./AuthUserDetails"
import { cn } from "@/lib/utils"

function DesktopSideNav() {
    const pathName = usePathname()
    
    const isActiveRoute = (route: string) => {
        if (!pathName) return false
        if (pathName === "/dashboard") return route === pathName
        const routeSegment = route.split('/')[1]
        const currentSegment = pathName.split('/')[1]
        return currentSegment?.startsWith(routeSegment) ?? false
    }

    return (
        <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-60 flex-col justify-between gap-8 bg-accent-1 p-4 py-6 text-sm font-medium text-primary-dark_slate overflow-y-auto">
            <div>
                <Logo width={120} />
                <ul className="mt-5 flex flex-col gap-4">
                    {Object.values(NAVIGATION_LINKS).map((v) => {
                        const isActive = isActiveRoute(v.href)
                        return (
                            <li key={v.href} className="inline-block">
                                <Link
                                    className={cn(
                                        isActive 
                                            ? "bg-accent-4 text-white font-medium" 
                                            : "hover:bg-accent-3 text-secondary-9 font-normal",
                                        "relative flex items-center gap-2 text-sm pe-3 min-h-12 ps-2 py-2 rounded-md transition-all ease-linear duration-200"
                                    )}
                                    href={v.href}
                                >
                                    <Icon icon={v.icon} width="20" height="20" />
                                    <span>{v.label}</span>
                                    {isActive && (
                                        <Icon 
                                            icon="basil:caret-right-outline" 
                                            width="26" 
                                            height="26" 
                                            className="absolute top-0 bottom-0 my-auto -right-1" 
                                        />
                                    )}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <AuthUserDetails />
        </nav>
    )
}

export default DesktopSideNav