import SuccessModal from "./SuccessModal";
import PopUpMessageAlertModal from "./PopUpMessageAlert";
import ConfirmationModal from "./ConfirmationModal";

export default function PopUpsRenderer(){
    return (
        <>
            <PopUpMessageAlertModal />
            <SuccessModal />
            <ConfirmationModal />
        </>
    )
}