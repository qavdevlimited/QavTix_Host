'use client'

import { Icon } from '@iconify/react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { space_grotesk } from '@/lib/fonts'
import { PricingBreakdown } from './PricingBreakdown'
import ActionButton1 from '../custom-utils/buttons/ActionBtn1'
import { useStepper } from '@/contexts/create-event/StepperProvider'
import { useEffect, useState } from 'react'
import SchedulePublishModal from './SchedulePublishModal'
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'
import { triggerPopupAlert } from '@/lib/redux/slices/popupAlertSlice'
import { NAVIGATION_LINKS } from '@/enums/navigation'
import { openConfirmation, resetConfirmationStatus } from '@/lib/redux/slices/confirmationSlice'
import EventPublishStatusModal from './EventPublishStatusModal'
import ShareEventModal from '../modals/ShareEventModal'

export default function CreateEventReviewStep() {


    const dispatch = useAppDispatch()

    const { isConfirmed, lastConfirmedAction } = useAppSelector((state) => state.confirmation)

    const { goToPreviousStep } = useStepper()
    
    const [openScheduleLaterModal, setOpenScheduleLaterModal] = useState(false)
    const [statusModal, setStatusModal] = useState<{
        isOpen: boolean;
        type: 'SUCCESS' | 'FAILED';
        eventId?: string;
    }>({ isOpen: false, type: 'SUCCESS' })
    
    const [isShareModalOpen, setIsShareModalOpen] = useState(false)

    const sections = [
        "Event Title", "Event Description", "Date & time", "Location", "Featured image",
        "Ticket types & pricing", "Refund policy", "Contact info", "Optional: Additional images, video"
    ]

    const mockTickets = [
        { id: '1', ticketType: 'Regular Admission', price: 5000, quantity: 500 },
        { id: '2', ticketType: 'VIP Pass', price: 25000, quantity: 100 }
    ]

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN',
            maximumFractionDigits: 0,
        }).format(amount).replace('NGN', '₦')
    }

    const handleScheduleSuccess = (v: { date: string, time: string }) => {
        setOpenScheduleLaterModal(false)
        dispatch(triggerPopupAlert({
            id: `schedule-${Date.now()}`,
            type: "schedule_success",
            title: "Event Scheduled Successfully",
            subtitle: "Your post will go live at the selected time.",
            description: "View or manage it in Drafts/Scheduled Events.",
            buttonText: "View Drafts/Scheduled",
            navigateTo: NAVIGATION_LINKS.MY_EVENTS.href
        }))
    }

    const handleConfirmImmediatePublish = () => {
        dispatch(openConfirmation({
            title: "Confirm",
            description: "Are you sure you want to publish this event?",
            actionType: "PUBLISH_EVENT",
        }))
    }

    useEffect(() => {
        if (isConfirmed && lastConfirmedAction === "PUBLISH_EVENT") {
            setStatusModal({
                isOpen: true,
                type: 'SUCCESS',
                eventId: "EVT-2026-NGR"
            })
            
            dispatch(resetConfirmationStatus())
        }
    }, [isConfirmed, lastConfirmedAction, dispatch])

    return (
        <div className="mt-8 md:pb-16">
    <section className="space-y-6 mb-20">
                <h3 className="text-brand-secondary-8 font-bold text-sm md:text-base">Sections Filled</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-5 gap-x-4">
                    {sections.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <div className="size-4.5 shrink-0 rounded bg-brand-primary flex items-center justify-center mt-0.5">
                                <Icon icon="lucide:check" className="text-white size-3.5 stroke-4" />
                            </div>
                            <span className="text-sm text-brand-secondary-7 font-medium leading-tight wrap-break-words">
                                {item}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Preview Card */}
            <section className="space-y-6">
                <h3 className="text-brand-secondary-8 font-bold text-sm md:text-base">Preview</h3>
                <div className="bg-white border border-brand-neutral-3 rounded-[32px] overflow-hidden flex flex-col md:flex-row drop-shadow-xs">
                    
                    <div className="w-full md:w-[30%] h-64 md:h-auto relative">
                        <Image 
                            src="/images/demo-images/event-detail-img.png" 
                            alt="Event Cover" 
                            className="w-full h-full object-cover"
                            fill
                            priority
                        />
                    </div>

                    {/* Content Wrapper*/}
                    <div className="flex-1 p-6 md:p-8 flex flex-col md:flex-row gap-8">
                        
                        {/* Event Summary */}
                        <div className="flex-1 space-y-4 border-r-0 md:border-r border-dashed border-brand-neutral-3 pr-0 md:pr-8">
                            <div>
                                <span className="text-brand-primary-3 text-xs uppercase tracking-widest mb-4 block">Event Summary</span>
                                <h2 className={cn(space_grotesk.className, "text-xl md:text-2xl font-bold text-[#0046AD]")}>5ive Tour Concert</h2>
                                <p className={cn(space_grotesk, "text-brand-secondary-9 font-light text-sm md:text-base")}>Music Festival</p>
                            </div>

                            <div className="flex items-center gap-1 mt-3">
                                <div className="flex items-center gap-0.5">
                                    <Icon icon="hugeicons:calendar-04" className="size-4 shrink-0 text-brand-accent-6" />
                                    <span className="text-brand-secondary-6 text-[11px] flex-1">
                                        March 22, 2026
                                    </span>
                                </div>
                                <hr className="w-px mx-1 h-4 border border-brand-neutral-6" />
                                <div className='flex items-center gap-0.5'>
                                    <Icon icon="hugeicons:clock-01" className="size-4 shrink-0 text-brand-accent-6" />
                                    <span className="text-brand-secondary-7 text-[11px] flex-1">
                                        12PM WAT
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-1">
                                <Icon icon="hugeicons:location-01" className="size-4 shrink-0 text-brand-accent-6" />
                                <p className="flex-1 text-brand-secondary-6 flex items-center gap-1">
                                    <span className="text-[11px]">
                                        1234, Shima Road, Victoria Island, Lagos
                                    </span>
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-[11px] text-brand-secondary-6 capitalize">Ticket Type</p>
                                    <p className="text-xs text-brand-secondary-9">Regular & VIP Pass</p>
                                </div>
                                <div>
                                    <p className="text-[11px] text-brand-secondary-6 capitalize">Affiliate</p>
                                    <p className="text-xs text-brand-secondary-9">Active (10%)</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-[11px] text-brand-secondary-6 capitalize">Settings</p>
                                <div className="flex flex-wrap gap-2">
                                    <p className="text-[11px] text-brand-secondary-9 border-e border-e-brand-neutral-6 pe-2 last-of-type:border-e-0">Regular & VIP Pass</p>
                                    <p className="text-[11px] text-brand-secondary-9 border-e border-e-brand-neutral-6 pe-2 last-of-type:border-e-0">Regular & VIP Pass</p>
                                    <p className="text-[11px] text-brand-secondary-9 border-e border-e-brand-neutral-6 pe-2 last-of-type:border-e-0">Regular & VIP Pass</p>
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:block w-px border-l-[1.5px] border-dashed border-brand-neutral-5" />

                        {/* Pricing Structure */}
                        <div className="flex-1">
                            <span className="text-brand-primary-3 text-[10px] uppercase tracking-widest font-bold mb-4 block">Pricing Structure</span>
                            <PricingBreakdown 
                                ticketTypes={mockTickets}
                                totalPotentialRevenue={5000000}
                                platformFee={150000}
                                yourEarnings={4850000}
                                formatCurrency={formatCurrency}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-md mx-auto md:mx-0 mt-10">
                <button onClick={() => goToPreviousStep()} className='text-sm md:text-base font-semibold gap-1 text-brand-secondary-9 flex justify-center items-center'>
                    <Icon icon="ion:arrow-back-outline" width="20" height="18" />
                    <span>Back</span>
                </button>


                <div className='mt-12 flex gap-4'>
                    <button
                        type="button"
                        onClick={() => setOpenScheduleLaterModal(true)}
                        className="h-12 md:h-14 text-brand-primary-6 bg-white hover:shadow flex items-center gap-2 justify-center px-6 py-3 rounded-[30px] border border-brand-primary-6 font-medium text-xs md:text-sm hover:bg-brand-primary-1 hover:border-brand-primary-7 active:bg-brand-primary-1 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-brand-primary-4 focus:ring-offset-2 transition-all duration-150"
                    >
                        Schedule for Later
                    </button>
                    <ActionButton1 
                        buttonText='Publish Now'
                        iconPosition='right'
                        buttonType='button'
                        action={() => handleConfirmImmediatePublish()}
                        icon="gravity-ui:arrow-right"
                    />
                </div>
            </div>



            {/* [MODALS] */}

            <SchedulePublishModal 
                open={openScheduleLaterModal}
                setOpen={setOpenScheduleLaterModal}
                onSchedule={handleScheduleSuccess}
            />

            <EventPublishStatusModal 
                isOpen={statusModal.isOpen}
                onClose={() => setStatusModal(prev => ({ ...prev, isOpen: false }))}
                type={statusModal.type}
                eventId={statusModal.eventId}
                onShare={() => {
                    setStatusModal(prev => ({ ...prev, isOpen: false }))
                    setIsShareModalOpen(true);
                }}
                onCreateAnother={() => {
                    setStatusModal(prev => ({ ...prev, isOpen: false }))
                }}
            />

            <ShareEventModal 
                isOpen={isShareModalOpen}
                onClose={() => setIsShareModalOpen(false)}
                shareUrl={`https://qavtix.com/events/${statusModal.eventId}`}
            />
        </div>
    )
}