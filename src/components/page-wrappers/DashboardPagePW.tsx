"use client"

import RevenueGrowthChart from "@/components/charts/RevenueGrowthChart";
import OverviewSection from "@/components/dashboard/OverviewSection";
import { useState } from "react";
import { ChartFilterToggle } from "../dashboard/ChartFilterToggle";

export default function DashboardPagePW(){

    const [chartFilter, setChartFilter] = useState<ChartFilter>("revenue")

    return (
        <main>
            <OverviewSection />

            <div className="mt-16">
                <ChartFilterToggle chartFilter={chartFilter} setChartFilter={setChartFilter} />
                <RevenueGrowthChart />
            </div>
        </main>
    )
}