import { cn } from "@/lib/utils"
import { FilterRenderer } from "./filters/FilterRenderer"
import SearchTableInput1 from "./tools/SearchTableInput"
import { 
    DashboardConsumerListFilters, 
    DashboardUpcomingEventsFilters, 
    TableDataDisplayFilter, 
    SystemCheckInDataTableFilters, 
    MarketingToolsFilter, 
    MyEventsPageFilters
} from "./resources/avaliable-filters"
import { Dispatch, ReactNode, SetStateAction } from "react";
import DataCountIndicator from "./tools/DataCountIndicator";





interface DataDisplayTableWrapperProps {
    tabs?: typeof DashboardUpcomingEventsFilters.tabList |
        typeof DashboardConsumerListFilters.tabList |
        typeof SystemCheckInDataTableFilters.tabList |
        typeof MyEventsPageFilters.tabList |
        typeof MarketingToolsFilter.tabList;
    
    activeTab?: string;
    setActiveTab?: Dispatch<SetStateAction<string>>;
    filters?: Partial<FilterValues>;
    setFilters?: Dispatch<SetStateAction<Partial<FilterValues>>>;
    filterOptions?: readonly TableDataDisplayFilter[];
    showSearch?: boolean;
    searchPlaceholder?: string;
    onTabChange?: (tab: string) => void;
    onSearch?: (query: string) => void;
    onFilterChange?: (filters: FilterValues) => void;
    children: ReactNode;
    className?: string;
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
            'pt-8 pb-16 g-white rounded-3xl shadow-[0px_5.8px_23.17px_0px_#3326AE14] overflow-hidden',
            className
        )}>
            {/* Tabs */}
            {tabs && activeTab && setActiveTab && (
                <div className="px-4 w-full border-b border-brand-neutral-5 mb-4">
                    <div className="flex items-center gap-8 overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.value}
                                onClick={() => setActiveTab(tab.value)}
                                className={cn(
                                    'relative pb-4 px-1 text-sm transition-colors whitespace-nowrap',
                                    activeTab === tab.value
                                        ? 'text-brand-primary-6 font-bold'
                                        : 'font-medium text-brand-neutral-7 hover:text-brand-neutral-8'
                                )}
                            >
                                <DataCountIndicator label={tab.label} />
                                
                                {activeTab === tab.value && (
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary-6" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Search & Filters */}
            <div className="px-4 shrink-0">
                {showSearch && (
                    <SearchTableInput1 
                        placeholder={searchPlaceholder}
                        onSearch={onSearch}
                    />
                )}
                {setFilters && filters && filterOptions && filterOptions.length > 0 && (
                    <div className="flex flex-wrap gap-4 my-4">
                        {filterOptions.map((filter) => (
                            <FilterRenderer
                                key={filter.value}
                                filterKey={filter.value}
                                filter={filter}
                                filters={filters}
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