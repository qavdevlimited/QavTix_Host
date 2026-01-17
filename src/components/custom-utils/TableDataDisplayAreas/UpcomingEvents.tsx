import { DashboardUpcomingEventsFilters, FilterKey } from "./resources/avaliable-filters";
import { useState } from "react";
import { cn } from "@/lib/utils";
import DataCountIndicator from "./DataCountIndicator";
import SearchTableInput1 from "./SearchTableInput";
import { FilterRenderer } from "./filters/FilterRenderer";


export default function UpcomingEvents(){

    const { tabList:tabListData, filterOptions } = DashboardUpcomingEventsFilters;
    const [activeTab,setActiveTab] = useState<string>("upcoming")
    const [filters, setFilters] = useState<FilterValues>({
        categories: [],
        dateRange: null,
        status: null
    })
    

    return (
        <section className="my-10 px-4 py-8 bg-white rounded-3xl shadow drop-shadow">
            <div className="w-full border-b border-neutral-3">
                <div className="flex items-center gap-8">
                    {tabListData.map((tab) => (
                        <button
                            key={tab.value}
                            onClick={() => setActiveTab(tab.value)}
                            className={cn(
                                'relative pb-4 px-1 text-sm font-medium transition-colors',
                                activeTab === tab.value
                                    ? 'text-primary-6'
                                    : 'text-neutral-6 hover:text-neutral-8'
                            )}
                        >
                            <DataCountIndicator count={5} label={tab.label} />
                            
                            {activeTab === tab.value && (
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-6" />
                            )}
                        </button>
                    ))}
                </div>
            </div>



            <div className="">
                <SearchTableInput1 />

                <div className="flex flex-wrap gap-4 mb-8">
                    {filterOptions.map((filter) => (
                        <FilterRenderer
                            key={filter.value}
                            filterKey={filter.value as FilterKey}
                            filters={filters}
                            icon={filter.icon}
                            setFilters={setFilters}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}