"use client";

import { EventCreationData, StepNumber } from '@/types/create-event';
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface EventCreationContextType {
    eventData: Partial<EventCreationData>;
    currentStep: StepNumber;
    completedSteps: StepNumber[];
    updateStep: <K extends keyof EventCreationData>(
        step: K,
        data: EventCreationData[K]
    ) => void;
    setCurrentStep: (step: StepNumber) => void;
    setEventData: React.Dispatch<React.SetStateAction<Partial<EventCreationData>>>;
    markStepComplete: (step: StepNumber) => void;
    resetForm: () => void;
    canNavigateToStep: (step: StepNumber) => boolean;
}

const EventCreationContext = createContext<EventCreationContextType | undefined>(undefined)

export function EventCreationProvider({ children }: { children: ReactNode }) {
    const [eventData, setEventData] = useState<Partial<EventCreationData>>({})
    const [currentStep, setCurrentStep] = useState<StepNumber>(3)
    const [completedSteps, setCompletedSteps] = useState<StepNumber[]>([1,2])

    const updateStep = useCallback(<K extends keyof EventCreationData>(
        step: K,
        data: EventCreationData[K]
    ) => {
        setEventData(prev => ({
            ...prev,
            [step]: data
        }))
    }, [])

    const markStepComplete = useCallback((step: StepNumber) => {
        setCompletedSteps(prev => {
            if (!prev.includes(step)) {
                return [...prev, step].sort()
            }
            return prev;
        })
    }, [])

    const canNavigateToStep = useCallback((targetStep: StepNumber) => {
        // Can always go to step 1
        if (targetStep === 1) return true;
        
        // Can go to next step if current is complete
        // Can go back to any previous step
        return targetStep <= currentStep || completedSteps.includes((targetStep - 1) as StepNumber)
    }, [currentStep, completedSteps])

    const resetForm = useCallback(() => {
        setEventData({})
        setCurrentStep(1)
        setCompletedSteps([])
    }, [])

    return (
        <EventCreationContext.Provider
            value={{
                eventData,
                currentStep,
                completedSteps,
                updateStep,
                setCurrentStep,
                setEventData,
                markStepComplete,
                resetForm,
                canNavigateToStep,
            }}
        >
            {children}
        </EventCreationContext.Provider>
    )
}

export function useEventCreation() {
    const context = useContext(EventCreationContext)
    if (!context) {
        throw new Error('useEventCreation must be used within EventCreationProvider')
    }
    return context;
}
