import { cn } from "@/lib/utils"
import { FilterRenderer } from "./filters/FilterRenderer"
import SearchTableInput1 from "./tools/SearchTableInput"
import { DashboardConsumerListFilters, DashboardUpcomingEventsFilters } from "./resources/avaliable-filters"
import { Dispatch, ReactNode, SetStateAction } from "react";
import DataCountIndicator from "./tools/DataCountIndicator";

interface DataDisplayTableWrapperProps {
    tabs: typeof DashboardUpcomingEventsFilters.tabList |
    typeof DashboardConsumerListFilters.tabList;
    activeTab?: string;
    setActiveTab?: Dispatch<SetStateAction<string>>;
    filters: Partial<FilterValues>;
    setFilters: Dispatch<SetStateAction<Partial<FilterValues>>>;
    filterOptions: typeof DashboardUpcomingEventsFilters.filterOptions |
    typeof DashboardConsumerListFilters.filterOptions;
    showSearch?: boolean
    searchPlaceholder?: string
    onTabChange?: (tab: string) => void
    onSearch?: (query: string) => void
    onFilterChange?: (filters: FilterValues) => void
    children: ReactNode
    className?: string
}

export default function DataDisplayTableWrapper({
    tabs,
    filterOptions,
    showSearch = true,
    searchPlaceholder = 'Search...',
    filters,
    activeTab,
    setActiveTab,
    onSearch,
    setFilters,
    children,
    className
}: DataDisplayTableWrapperProps) {
    return (
        <div className={cn(
            'py-8 bg-white rounded-3xl shadow-[0px_5.8px_23.17px_0px_#3326AE14] overflow-hidden',
            className
        )}>
            {/* Tabs */}
            {
                activeTab && setActiveTab &&
                <div className="px-4 w-full border-b border-neutral-3">
                    <div className="flex items-center gap-8 overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.value}
                                onClick={() => setActiveTab(tab.value)}
                                className={cn(
                                    'relative pb-4 px-1 text-sm font-medium transition-colors whitespace-nowrap',
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
            }

            {/* Search & Filters */}
            <div className="px-4 shrink-0">
                {showSearch && (
                    <SearchTableInput1 
                        placeholder={searchPlaceholder}
                        onSearch={onSearch}
                    />
                )}
                {filterOptions.length > 0 && (
                    <div className="flex flex-wrap gap-4 mb-4">
                        {filterOptions.map((filter) => (
                            <FilterRenderer
                                key={filter.value}
                                filterKey={filter.value}
                                filters={filters}
                                icon={filter.icon}
                                setFilters={setFilters}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="w-full overflow-x-auto px-4">
                {children}
            </div>
        </div>
    )
}