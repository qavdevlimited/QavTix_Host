"use client";

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { closeSuccessModal } from '@/lib/redux/slices/successModalSlice';
import { DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { AnimatedDialog } from '../custom-utils/dialogs/AnimatedDialog';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { successModalVariantConfig } from './resources/success-modal-variant';
import { Icon } from '@iconify/react';


export default function SuccessModal() {


    const dispatch = useAppDispatch()
    const pathName = usePathname()
    const { isOpen, title, description, variant, autoClose, autoCloseDelay } = useAppSelector(
        (state) => state.successModal
    )

    const config = successModalVariantConfig[variant]

    const handleClose = () => {
        dispatch(closeSuccessModal())
    }

    // Auto close timer
    useEffect(() => {
        if (isOpen && autoClose) {
            const timer = setTimeout(() => {
                dispatch(closeSuccessModal())
            }, autoCloseDelay)

            return () => clearTimeout(timer)
        }
    }, [isOpen, autoClose, autoCloseDelay, dispatch])

    // Close on route change
    useEffect(() => {
        if (isOpen) {
            dispatch(closeSuccessModal())
        }
    }, [pathName])

    return (
        <AnimatedDialog 
            open={isOpen} 
            onOpenChange={handleClose}
            showCloseButton={false}
            className='md:max-w-sm'
        >
            <div className="flex flex-col items-center text-center p-3">
                <div className='text-[85px] mb-2'>
                    {config.icon}
                </div>

                {/* Content */}
                <DialogHeader className="text-center flex justify-center items-center">
                    <DialogTitle className="text-lg font-bold text-brand-secondary-9">
                        {title}
                    </DialogTitle>
                    <DialogDescription className="text-sm text-brand-secondary-6 max-w-sm">
                        {description}
                    </DialogDescription>
                </DialogHeader>
            </div>

            <button className='absolute top-4 right-4 bg-brand-neutral-6' aria-label="close modal">
                <Icon icon="line-md:close-circle-filled" width="24" height="24" className='size-7' />
            </button>
        </AnimatedDialog>
    )
}