"use client";

import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { closeConfirmation } from '@/lib/redux/slices/confirmationSlice';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { AnimatedDialog } from '../custom-utils/dialogs/AnimatedDialog';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ConfirmationModal() {

    const dispatch = useAppDispatch()
    const pathName = usePathname()
    const { isOpen, title, description, confirmText, cancelText, onConfirm } = useAppSelector(
        (state) => state.confirmation
    )

    const handleCancel = () => {
        dispatch(closeConfirmation())
    }

    const handleConfirm = () => {
        if (onConfirm) {
            onConfirm()
        }
        dispatch(closeConfirmation())
    }

    useEffect(() => {
        if (isOpen){
            dispatch(closeConfirmation())
        }
    },[pathName])

    return (
        <AnimatedDialog open={isOpen} showCloseButton={false} className='md:max-w-sm!'>
            <DialogHeader className="text-center flex justify-center items-center">
                <DialogTitle className="text-lg font-bold text-secondary-9">
                    {title}
                </DialogTitle>
                <DialogDescription className="text-sm text-secondary-9">
                    {description}
                </DialogDescription>
            </DialogHeader>

            <DialogFooter className="px-6 mt-6 flex-row gap-3 sm:gap-3">
                <button
                    onClick={handleCancel}
                    className="flex-1 px-6 py-3 text-sm font-medium text-secondary-9 bg-white border-2 border-gray-300 rounded-full hover:bg-neutral-100 transition-all"
                >
                    {cancelText}
                </button>
                <button
                    onClick={handleConfirm}
                    className="flex-1 px-6 py-3 text-sm font-medium text-white bg-primary-6 rounded-full hover:bg-primary-7 hover:shadow-md transition-all"
                >
                    {confirmText}
                </button>
            </DialogFooter>
        </AnimatedDialog>
    )
}