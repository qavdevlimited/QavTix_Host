"use client"

import DateFilter from "../custom-utils/TableDataDisplayAreas/filters/DateFilter"
import { useState } from "react"
import { DateRange } from "react-day-picker"
import { EventTypeFilter } from "../custom-utils/TableDataDisplayAreas/filters/EventTypeFilter"
import ExportButton1 from "@/lib/features/export/ExportDataBtn1"
import { mockCustomers, mockUserMetrics } from "@/components-data/demo-data"
import CustomersProfilePageMetricCardsContainer from "../cards/CustomerProfilePageMetricsCardContainer"
import { CustomerProfileDetailsCard } from "../cards/CustomerProfileDetailsCard"
import { UserRevenueChart } from "../charts/UserRevenueChart"
import DataDisplayTableWrapper from "../custom-utils/TableDataDisplayAreas/DataDisplayTableWrapper"
import { DashboardConsumerListFilters } from "../custom-utils/TableDataDisplayAreas/resources/avaliable-filters"
import { cn } from "@/lib/utils"
import { space_grotesk } from "@/lib/fonts"
import OrderListTable from "../custom-utils/TableDataDisplayAreas/tables/OrderListTable"

interface IMetricsDataFilter {
    date: DateRange | null,
    eventType: string[]
}

export default function CustomersProfilePagContentWrapper(){

    const [metricsDataFilter, setMetricsDataFilter] =  useState<IMetricsDataFilter>({
        date: null,
        eventType: []
    })
    const { tabList:tabListData, filterOptions } = DashboardConsumerListFilters;
    const [filters, setFilters] = useState<Partial<FilterValues>>({
        ticketType: [],
        purchaseDate: null
    })

    return (
        <main className="pb-10">
            <div className="flex justify-between items-center gap-5 mb-5 mt-10 lg:mt-0">
                <div className="flex items-center gap-2 flex-wrap">
                    <DateFilter value={metricsDataFilter.date} onChange={(v) => setMetricsDataFilter(prev => ({...prev, date: v}))} />
                    <EventTypeFilter onChange={(v) => setMetricsDataFilter(prev => ({...prev, eventType: v}))} />
                </div>

                <ExportButton1 showFormatSelector />
            </div>
            
            <div>
                <CustomersProfilePageMetricCardsContainer metrics={mockUserMetrics} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[20em_1fr] gap-4 gap-y-7 my-10">
                <CustomerProfileDetailsCard customer={mockCustomers[2]} />
                <div className="min-w-0">
                    <UserRevenueChart />
                </div>
            </div>


            <div>
                <h3 className={cn(space_grotesk.className, "text-secondary-8 font-bold text-lg mb-4")}>Order History</h3>
                <DataDisplayTableWrapper 
                    tabs={tabListData}
                    filters={filters}
                    filterOptions={filterOptions}
                    setFilters={setFilters}
                >
                    <OrderListTable />
                </DataDisplayTableWrapper>
            </div>

        </main>
    )
}
