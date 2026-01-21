import Image from "next/image";
import { cn } from "@/lib/utils";

interface EventInfoProps {
  image: string;
  title: string;
  category: string;
  variant?: "desktop" | "mobile";
  className?: string;
}

export default function EventInfo({
  image,
  title,
  category,
  variant = "desktop",
  className,
}: EventInfoProps) {

    const isDesktop = variant === "desktop";

    return (
        <div className={cn("flex gap-2 items-start", !isDesktop && "items-center gap-3", className)}>
            {/* Image Container */}
            <div
                className={cn(
                    "relative overflow-hidden shrink-0 rounded-lg",
                    isDesktop ? "size-12" : "w-10 aspect-square rounded-md"
                )}
            >
                <Image 
                    src={image} 
                    alt={title} 
                    fill 
                    className="object-cover" 
                />
            </div>

            {/* Text Content */}
            <div className={cn("min-w-0", isDesktop ? "flex-1" : "")}>
                <h3
                    className={cn(
                        "font-bold text-secondary-9",
                        isDesktop ? "text-[13px] mb-1" : "text-xs"
                    )}
                    >
                    {title}
                </h3>
                <p
                    className={cn(
                        isDesktop ? "text-[13px] text-neutral-6" : "text-[11px] text-secondary-8"
                    )}
                >
                    {category}
                </p>
            </div>
        </div>
    )
}