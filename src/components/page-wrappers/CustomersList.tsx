"use client"

import { DashboardConsumerListFilters } from "../custom-utils/TableDataDisplayAreas/resources/avaliable-filters";
import { useState } from "react";
import DataDisplayTableWrapper from "../custom-utils/TableDataDisplayAreas/DataDisplayTableWrapper";
import CustomersTable from "../custom-utils/TableDataDisplayAreas/tables/CustomersTable";
import { space_grotesk } from "@/lib/fonts";
import { cn } from "@/lib/utils";


export default function CustomersList(){

    const { tabList:tabListData, filterOptions } = DashboardConsumerListFilters;
    const [filters, setFilters] = useState<Partial<FilterValues>>({
        ticketType: [],
        purchaseDate: null
    })

    const [selectedCustomers, setSelectedCustomers] = useState<string[]>([])
    

    return (
        <section>
            <h3 className={cn(space_grotesk.className, "text-secondary-8 font-bold text-lg mb-4")}>Customer List</h3>
            <DataDisplayTableWrapper 
                tabs={tabListData}
                filters={filters}
                filterOptions={filterOptions}
                setFilters={setFilters}
            >
                <CustomersTable selectedCustomers={selectedCustomers} setSelectedCustomers={setSelectedCustomers} />
            </DataDisplayTableWrapper>
        </section>
    )
}