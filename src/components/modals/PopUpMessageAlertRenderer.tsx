"use client"

import PopUpMessageAlertModal from "./PopUpMessageAlert";
import { PopUpMessageAlert } from "./resources/PopUpMessageAlertConfig";


const apiAlerts : PopUpMessageAlert[] = [
    {
        id: "api-1",
        type: "payout" as const,
        title: "Payment Failed",
        subtitle: "Unable to process your payment.",
        description: "Please update your payment method to continue using our services.",
        buttonText: "Update Payment",
        buttonAction: () => console.log("Update payment method")
    },
    {
        id: "api-2",
        type: "verification" as const,
        title: "New Feature Available",
        subtitle: "Your documents are being reviewed.",
        description: "You can create draft events, but they won't be listed until verified.",
        buttonText: "Learn More",
        buttonAction: () => console.log("Learn more about feature")
    }
]

function PopUpMessageAlertRenderer() {
    return (
        <PopUpMessageAlertModal open={true} alerts={apiAlerts}  />
    )
}

export default PopUpMessageAlertRenderer