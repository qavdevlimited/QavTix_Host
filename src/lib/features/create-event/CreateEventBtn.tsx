"use client"

import { CREATE_EVENT } from "@/enums/navigation";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";


export default function CreateEventBtn(){

    const router = useRouter()

    return (
        <button
            onClick={() => router.push(CREATE_EVENT.href)}
            className={cn(
                "md:bg-brand-primary-1 text-brand-primary-6 md:p-2 font-bold text-sm mx-1 flex rounded-md md:rounded-sm gap-1 items-center",
                "hover:bg-brand-primary-2 hover:scale-105 transition-all ease-in-out duration-200"
            )}
            aria-label="Create event"
        >
            <span className="size-10 md:size-7 rounded flex justify-center items-center bg-brand-primary-4  text-white">
                <Icon icon="codex:plus" width="21" height="21" className="size-9" />
            </span>
            <span className="hidden md:inline">Create Event</span>
        </button>
    )
}