"use client"

import { EventCreationProvider } from "@/contexts/create-event/CreateEventProvider"
import { StepperProvider } from "@/contexts/create-event/StepperProvider"
import EventCreationLayout from "../create-event/CreateEventLayout"

export default function CreateEventPageContentWrapper(){
    return (
        <EventCreationProvider>
            <StepperProvider>
                <EventCreationLayout />
            </StepperProvider>
        </EventCreationProvider>
    )
}