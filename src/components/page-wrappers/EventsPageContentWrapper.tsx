"use client"

import CreateEventBtn from "@/lib/features/create-event/CreateEventBtn";
import { space_grotesk } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { MyEventsPageFilters } from "../custom-utils/TableDataDisplayAreas/resources/avaliable-filters";
import DataDisplayTableWrapper from "../custom-utils/TableDataDisplayAreas/DataDisplayTableWrapper";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import MyLiveEventsTable from "../custom-utils/TableDataDisplayAreas/tables/MyLiveEventsTable";
import MetricCardsContainer1 from "../cards/MetricCardsContainer1";
import { myEventsMetricsConfig } from "../cards/resources/metrics-config";
import { buildMetricsFromConfig } from "@/helper-fns/buildMetricsConfig";
import DraftedEventsTable from "../custom-utils/TableDataDisplayAreas/tables/DraftedEventsTable";
import EndedEventsTable from "../custom-utils/TableDataDisplayAreas/tables/EndedEventsTable";
import CancelledEventsTable from "../custom-utils/TableDataDisplayAreas/tables/CancelledEventsTable";
import AllEventsTable from "../custom-utils/TableDataDisplayAreas/tables/AllEventsTable";


function EventsPageContentWrapper() {

    const [filters, setFilters] = useState<Partial<FilterValues>>({})
    const { filterOptions, tabList } = MyEventsPageFilters;
    const [selectedEvents, setSelectedEvents] = useState<string[]>([])
    const [activeTab, setActiveTab] = useState<typeof MyEventsPageFilters.tabList[number]["value"]>("live")

    const apiData = {
        'live-events': 6,
        'draft': 17,
        'ended': 7,
        'sold-out': 55
    }

    useEffect(() => {
        setSelectedEvents([])
    },[activeTab])



    return (
        <main className="pb-12">
            <div className="flex justify-between items-center my-5">
                <h2 className={cn(space_grotesk.className, 'capitalize text-lg text-brand-secondary-8 font-bold')}>Overview</h2>
                <CreateEventBtn />
            </div>

            <div className="mb-8">
                <MetricCardsContainer1 metrics={buildMetricsFromConfig(myEventsMetricsConfig, apiData)} />
            </div>

            <DataDisplayTableWrapper 
                filters={filters}
                setFilters={setFilters}
                tabs={tabList}
                activeTab={activeTab}
                filterOptions={filterOptions}
                showSearch={true}
                setActiveTab={setActiveTab as Dispatch<SetStateAction<string>>}
                searchPlaceholder="Search Ticket by Event name..."
            >
                {
                    activeTab === "all" ?
                    <AllEventsTable selectedEvents={selectedEvents} setSelectedEvents={setSelectedEvents} /> 
                    :
                    activeTab === "live" ?
                    <MyLiveEventsTable selectedEvents={selectedEvents} setSelectedEvents={setSelectedEvents} />
                    : 
                    activeTab === "draft" ?
                    <DraftedEventsTable />
                    :
                    activeTab === "ended" ?
                    <EndedEventsTable selectedEvents={selectedEvents} setSelectedEvents={setSelectedEvents} />
                    :
                    activeTab === "cancelled" ?
                    <CancelledEventsTable selectedEvents={selectedEvents} setSelectedEvents={setSelectedEvents} />
                    :
                    null
                }

            </DataDisplayTableWrapper>
        </main>
    )
}

export default EventsPageContentWrapper;