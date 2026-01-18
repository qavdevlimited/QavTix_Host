import CustomersPagePw from "@/components/page-wrappers/CustomersPagePw";
import { delay } from "@/helper-fns/delay";



export default async function CustomersPage(){

    await delay(5000)

    return (
        <CustomersPagePw />
    )
}