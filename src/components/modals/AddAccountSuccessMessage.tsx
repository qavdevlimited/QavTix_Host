import { AnimatedDialog } from "../custom-utils/dialogs/AnimatedDialog";

export default function AddAccountSuccessMessage() {
    return (
        <AnimatedDialog open onOpenChange={() => {}} className="md:max-w-[23em]">
            <div className="font-semibold text-[82px]">🎉</div>
            <h2 className="font-bold text-[#333333] mb-4">Submission Successful!</h2>
            <p className="text-gray-800 text-sm">Your bank account is being verified. <br /> We’ll let you know when it’s done.</p>
        </AnimatedDialog>
    )
}