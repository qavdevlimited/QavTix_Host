"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CUSTOMERS_PROFILE } from "@/enums/navigation"
import { inter } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"
import { useRouter } from "next/navigation"

export function CustomerItemAction() {


    const router = useRouter()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" aria-label="toggle menu" className="hover:bg-neutral-3 py-1 px-2! w-fit h-fit">
                    <Icon icon="ph:dots-three-bold" width="256" height="256" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem className="cursor-pointer hover:bg-neutral-4!">
                    <button onClick={() => router.push(CUSTOMERS_PROFILE.href.replace('[customer_id]', '1'))} className="flex items-center gap-2">
                        <Icon icon="hugeicons:face-id" width="24" height="24" />
                        <span className={cn(inter.className, "text-xs")}>View Customer Profile</span>
                    </button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
