import CheckInSystemPageContentWrapper from "@/components/page-wrappers/CheckInSystemPageContentWrapper";
import { delay } from "@/helper-fns/delay";

export default async function CheckInSystemPage(){

    delay(5000)

    return (
        <CheckInSystemPageContentWrapper />
    )
}