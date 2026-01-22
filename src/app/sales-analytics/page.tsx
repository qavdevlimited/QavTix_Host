import SalesAnalyticsPageContentWrapper from "@/components/page-wrappers/SalesAnalyticsPageContentWrapper";
import { delay } from "@/helper-fns/delay";

export default async function SalesAndAnalyticsPage(){

    await delay(5000)

    return (
        <SalesAnalyticsPageContentWrapper />
    )
}