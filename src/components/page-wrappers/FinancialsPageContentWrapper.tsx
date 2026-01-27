"use client"

import { mockMetrics2 } from "@/components-data/demo-data"
import MetricCardsContainer1 from "../cards/MetricCardsContainer1"
import DateFilter from "../custom-utils/TableDataDisplayAreas/filters/DateFilter"
import { useState } from "react"
import { DateRange } from "react-day-picker"
import ExportButton1 from "@/lib/features/export/ExportDataBtn1"
import MainWithdrawalComponent from "../custom-utils/withdrawal/MainWithdrawalComponent"
import PayoutHistoryTable from "../custom-utils/TableDataDisplayAreas/tables/PayoutHistory"
import { space_grotesk } from "@/lib/fonts"
import { cn } from "@/lib/utils"

interface IMetricsDataFilter {
    date: DateRange | null,
}

export default function FinancialsPageContentWrapper(){

    const [metricsDataFilter, setMetricsDataFilter] =  useState<IMetricsDataFilter>({
        date: null
    })

    return (
        <main className="pb-10">
            <div className="flex justify-between items-center gap-5 mb-5 mt-10 lg:mt-0">
                <div className="flex items-center gap-2 flex-wrap">
                    <DateFilter value={metricsDataFilter.date} onChange={(v) => setMetricsDataFilter(prev => ({...prev, date: v}))} />
                </div>

                <ExportButton1 showFormatSelector />
            </div>
            
            <div>
                <MetricCardsContainer1 metrics={mockMetrics2} />
            </div>


            <div className="grid grid-cols-1 md:grid-cols-[22em_1fr] gap-6 mt-10 shadow-[0px_5.8px_23.17px_0px_#3326AE14] bg-white rounded-xl p-4 md:p-5">
                <MainWithdrawalComponent />
                <div className="min-w-0 border-t-[1.5px] md:border-t-0 md:border-l-[1.5px] border-dashed border-brand-neutral-5 pt-6 md:pt-0 md:ps-4">
                    <h3 className={cn(space_grotesk.className, "text-brand-secondary-8 font-bold text-lg mb-4")}>Payment History</h3>
                    <PayoutHistoryTable />
                </div>
            </div>
        </main>
    )
}