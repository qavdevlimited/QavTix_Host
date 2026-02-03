import CustomersProfilePagContentWrapper from "@/components/page-wrappers/CustomerProfilePageContentWrapper";
import { delay } from "@/helper-fns/delay";

export default async function CustomerProfilePage(){

    await delay(5000)

    return (
        <CustomersProfilePagContentWrapper />
    )
}