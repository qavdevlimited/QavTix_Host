"use client"

import { mockMetrics4 } from "@/components-data/demo-data"
import MetricCardsContainer1 from "../cards/MetricCardsContainer1"
import { Dispatch, SetStateAction, useState } from "react"
import { EventTypeFilter } from "../custom-utils/TableDataDisplayAreas/filters/EventTypeFilter"
import DataDisplayTableWrapper from "../custom-utils/TableDataDisplayAreas/DataDisplayTableWrapper"
import AttendeeCheckInTable from "../custom-utils/TableDataDisplayAreas/tables/AttendeesCheckInTable"
import { SystemCheckInDataTableFilters } from "../custom-utils/TableDataDisplayAreas/resources/avaliable-filters"
import SystemCheckInScanCodeInputArea from "../custom-utils/scan-code/SystemCheckInScanCodeInputArea"

interface IMetricsDataFilter {
    eventType: string[]
}

export default function CheckInSystemPageContentWrapper(){

    const [metricsDataFilter, setMetricsDataFilter] =  useState<IMetricsDataFilter>({
        eventType: []
    })

    const { tabList:tabListData, filterOptions } = SystemCheckInDataTableFilters;
    const [filters, setFilters] = useState<Partial<FilterValues>>({
        ticketType: [],
    })

    const [activeTab, setActiveTab] = useState<typeof SystemCheckInDataTableFilters.tabList[number]["value"]>("scan-code")

    return (
        <main className="pb-10">
            <div className="mb-5 mt-10 lg:mt-0">
                <EventTypeFilter onChange={(v) => setMetricsDataFilter(prev => ({...prev, eventType: v}))} />
            </div>
            
            <div>
                <MetricCardsContainer1 metrics={mockMetrics4} />
            </div>


            <div className="mt-10">
                <DataDisplayTableWrapper 
                    tabs={tabListData}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab as Dispatch<SetStateAction<string>>}
                    filters={filters}
                    filterOptions={filterOptions}
                    setFilters={setFilters}
                >
                    {
                        activeTab === "attendee-list" ?
                        <AttendeeCheckInTable />
                        :
                        activeTab === "scan-code" ?
                        <SystemCheckInScanCodeInputArea />
                        :
                        null
                    }
                </DataDisplayTableWrapper>
            </div>
        </main>
    )
}