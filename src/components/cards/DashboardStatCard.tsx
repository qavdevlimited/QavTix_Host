import { formatPrice } from "@/helper-fns/formatPrice";
import { space_grotesk } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

export default function DashboardStatCard({ cardData }:{ cardData: IDashboardStat }){
    return (
        <div className={`${cardData.cardBg} group rounded-xl flex flex-col justify-between gap-5 p-5`}>
            <div className={cn(
                "flex justify-center items-center text-white w-9 aspect-square rounded-full",
                cardData.iconBg,
                "group-hover:scale-110 ease-in-out duration-200 transition-all"
            )}>
                <Icon icon={cardData.icon} width={21.6} height={21.6} className="" />
            </div>


            <div>
                <h3 className={`${space_grotesk.className} font-bold text-lg text-brand-secondary-9`}>
                    {cardData.label.includes("Revenue") ? formatPrice(cardData.number,"NG") : cardData.number}
                </h3>
                <p className="text-brand-secondary-8 text-sm font-medium mt-1">{cardData.label}</p>
                <span className="text-xs text-brand-secondary-6">{cardData.change.value}{" "}{cardData.change.period}{" "}</span>
            </div>

            
            <button className="w-fit flex items-center justify-center gap-1 text-brand-primary-6 font-bold text-xs">
                <span>View Details</span>
                <Icon icon="stash:arrow-right" width="22" height="22" />
            </button>
        </div>
    )
}