"use client"

import AddPromoCode from "@/lib/features/promo/AddPromoCode";
import { space_grotesk } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { MarketingToolsFilter } from "../custom-utils/TableDataDisplayAreas/resources/avaliable-filters";
import DataDisplayTableWrapper from "../custom-utils/TableDataDisplayAreas/DataDisplayTableWrapper";
import PromoCodeListTable from "../custom-utils/TableDataDisplayAreas/tables/PromoCodeTable";
import { Dispatch, SetStateAction, useState } from "react";
import AffiliateLeaderboardTable from "../custom-utils/TableDataDisplayAreas/tables/AffliateLeaderboardTable";
import MetricCardsContainer1 from "../cards/MetricCardsContainer1";
import { mockMetrics3 } from "@/components-data/demo-data";
import EmailCampaignListTable from "../custom-utils/TableDataDisplayAreas/tables/EmailCampaignListTable";
import ComposeMailBtn from "@/lib/features/compose-mail/ComposeMailBtn";
import ExportButton1 from "@/lib/features/export/ExportDataBtn1";


export default function MarketingToolsPageContentWrapper(){

    const { tabList:tabListData } = MarketingToolsFilter;
    const [activeTab, setActiveTab] = useState<typeof MarketingToolsFilter.tabList[number]["value"]>("promo-codes")

    return (
        <main className="pt-6 pb-10">
            <div className="flex justify-between items-center gap-5 mb-5 mt-10 lg:mt-0">
                <h2 className={cn(space_grotesk.className, "text-brand-secondary-8 font-bold text-lg mb-4 capitalize")}>{activeTab.replace("-", " ")}</h2>
                {
                    activeTab === "promo-codes" ?
                    <AddPromoCode /> :
                    activeTab === "affiliate-program" ?
                    <ExportButton1 showFormatSelector />
                    :
                    <ComposeMailBtn />
                }
            </div>

            {
                activeTab === "affiliate-program" &&
                <div className="mb-10">
                    <MetricCardsContainer1 metrics={mockMetrics3} />
                </div>
            }

            <section>
                <DataDisplayTableWrapper 
                    tabs={tabListData}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab as Dispatch<SetStateAction<string>>}
                >
                    {
                        activeTab === "promo-codes" ?
                        <PromoCodeListTable /> :
                        activeTab === "affiliate-program" ?
                        <AffiliateLeaderboardTable />
                        :
                        <EmailCampaignListTable />
                    }
                </DataDisplayTableWrapper>
            </section>
        </main>
    )
}