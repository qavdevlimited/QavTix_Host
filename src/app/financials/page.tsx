import FinancialsPageContentWrapper from "@/components/page-wrappers/FinancialsPageContentWrapper";
import { delay } from "@/helper-fns/delay";

export default async function FinancialsPage(){

    await delay(5000)

    return <FinancialsPageContentWrapper />
}