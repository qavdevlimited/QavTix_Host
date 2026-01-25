import { StepNumber } from "@/types/create-event";
import CreateEventStep1 from "./CreateEventStep1";
import CreateEventStep2 from "./CreateEventStep2";
import CreateEventStep3 from "./CreateEventStep3";
import CreateEventStep4 from "./CreateEventStep4";

export function CreateEventStepContent({ step }: { step: StepNumber }) {
    switch (step) {
        case 1:
            return <CreateEventStep1 />;
        case 2:
            return <CreateEventStep2 />;
        case 3:
            return <CreateEventStep3 />;
        case 3:
            return <CreateEventStep4 />;
        default:
            return "Hello";
    }
}