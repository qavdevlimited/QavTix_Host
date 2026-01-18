"use client"

import { mockMetrics } from "@/components-data/demo-data"
import MetricCardsContainer1 from "../cards/MetricCardsContainer1"
import DateFilter from "../custom-utils/TableDataDisplayAreas/filters/DateFilter"
import { useState } from "react"
import { DateRange } from "react-day-picker"
import { EventTypeFilter } from "../custom-utils/TableDataDisplayAreas/filters/EventTypeFilter"
import ExportButton1 from "@/lib/features/export/ExportDataBtn1"
import CustomersList from "./CustomersList"

interface IMetricsDataFilter {
    date: DateRange | null,
    eventType: string[]
}

export default function CustomersPagePw(){

    const [metricsDataFilter, setMetricsDataFilter] =  useState<IMetricsDataFilter>({
        date: null,
        eventType: []
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
                <MetricCardsContainer1 metrics={mockMetrics} />
            </div>


            <div className="mt-8">
                <CustomersList />
            </div>
        </main>
    )
}