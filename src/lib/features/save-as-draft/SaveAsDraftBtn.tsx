import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

export default function SaveAsDraftBtn(){
    return (
        <button
            className={cn(
                "md:bg-brand-primary-1 text-brand-primary-6 md:p-2 font-bold text-sm mx-1 flex rounded-md md:rounded-sm gap-1 items-center",
                "hover:bg-brand-primary-2 hover:scale-105 transition-all ease-in-out duration-200"
            )}
            aria-label="Save as Draft"
        >
            <span className="size-9 md:size-7 rounded-sm flex justify-center items-center bg-brand-primary-4  text-white">
                <Icon icon="ri:draft-line" width="21" height="21" className="size-4" />
            </span>
            <span className="hidden md:inline">Save as Draft</span>
        </button>
    )
}