"use client"

import { DashboardUpcomingEventsFilters } from "../custom-utils/TableDataDisplayAreas/resources/avaliable-filters";
import { useState } from "react";
import UpcomingEventsTable from "../custom-utils/TableDataDisplayAreas/tables/UpcomingEventsTable";
import DataDisplayTableWrapper from "../custom-utils/TableDataDisplayAreas/DataDisplayTableWrapper";
import { space_grotesk } from "@/lib/fonts";
import { cn } from "@/lib/utils";


export default function UpcomingEventsPW(){

    const { tabList:tabListData, filterOptions } = DashboardUpcomingEventsFilters;
    const [activeTab,setActiveTab] = useState<string>("upcoming")
    const [filters, setFilters] = useState<Partial<FilterValues>>({
        categories: [],
        dateRange: null,
        status: null
    })
    

    return (
        <section>
            <DataDisplayTableWrapper 
                activeTab={activeTab}
                tabs={tabListData}
                setActiveTab={setActiveTab}
                filters={filters}
                filterOptions={filterOptions}
                setFilters={setFilters}
            >
                <UpcomingEventsTable />
            </DataDisplayTableWrapper>
        </section>
    )
}