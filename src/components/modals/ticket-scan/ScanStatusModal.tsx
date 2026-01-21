'use client'

import { Icon } from '@iconify/react'
import Image from 'next/image'
import { scanResultConfig, ScanResultType } from '../resources/ticket-scan-status-config'
import { AnimatedDialog } from '@/components/custom-utils/dialogs/AnimatedDialog'
import { DialogClose, DialogTitle } from '@/components/ui/dialog'


interface ScanResultModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    resultType: ScanResultType
}

export default function ScanResultModal({
    open,
    onOpenChange,
    resultType
}: ScanResultModalProps) {
    
    const config = scanResultConfig[resultType]

    return (
        <AnimatedDialog open={open} onOpenChange={onOpenChange} showCloseButton={false} className='sm:max-w-100'>
            <DialogTitle className="sr-only">
                Scan Result
            </DialogTitle>

            <DialogClose className="absolute top-4 right-4 text-neutral-6 hover:text-neutral-7 transition-colors z-10">
                <Icon icon="material-symbols:cancel" width="24" height="24" />
            </DialogClose>

            {/* Content */}
            <div className="px-8 py-10 flex flex-col items-center text-center">
                {/* Icon */}
                <div className="mb-6 relative w-24 h-24 animate-in zoom-in-50 duration-700 delay-100">
                    <Image
                        src={config.icon}
                        alt={config.title}
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-secondary-9 mb-3 animate-in slide-in-from-bottom-4 fade-in-0 duration-500 delay-200">
                    {config.title}
                </h2>

                {/* Message */}
                <p className="text-sm text-secondary-8 leading-relaxed max-w-xs animate-in slide-in-from-bottom-4 fade-in-0 duration-500 delay-300">
                    {config.message}
                </p>
            </div>
        </AnimatedDialog>
    )
}
