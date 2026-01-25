'use client'


import jsQR from 'jsqr'
import { useState, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import { cn } from '@/lib/utils'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import Image from 'next/image'

interface QRScannerDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onScanSuccess: (decodedText: string) => void
    backgroundImage?: string
}

export default function QRScannerDialog({ 
    open, 
    onOpenChange, 
    onScanSuccess,
    backgroundImage = '/images/vectors/qr-code-scanner-area.svg'
}: QRScannerDialogProps) {
    const [isScanning, setIsScanning] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)
    const streamRef = useRef<MediaStream | null>(null)
    const scanIntervalRef = useRef<NodeJS.Timeout | null>(null)

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ 
                video: { facingMode: 'environment' }
            })
            
            if (videoRef.current) {
                videoRef.current.srcObject = stream
                streamRef.current = stream
                setIsScanning(true)
                
                startScanning()
            }
        } catch (error) {
            console.error('Error accessing camera:', error)
            alert('Unable to access camera. Please grant camera permissions.')
        }
    }

    // Stop camera
    const stopCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop())
            streamRef.current = null
        }
        
        if (scanIntervalRef.current) {
            clearInterval(scanIntervalRef.current)
            scanIntervalRef.current = null
        }
        
        setIsScanning(false)
    }

    const startScanning = () => {
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')
        
        scanIntervalRef.current = setInterval(() => {
            if (videoRef.current && context && videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA) {
                canvas.width = videoRef.current.videoWidth
                canvas.height = videoRef.current.videoHeight
                context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height)
                
                const imageData = context.getImageData(0, 0, canvas.width, canvas.height)
                
                const code = jsQR(imageData.data, imageData.width, imageData.height)
                
                if (code) {
                    onScanSuccess(code.data)
                    stopCamera()
                    onOpenChange(false)
                }
            }
        }, 100)
    }

    // Start camera when dialog opens
    useEffect(() => {
        if (open) {
            startCamera()
        } else {
            stopCamera()
        }
        
        return () => stopCamera()
    }, [open])

    return (
        <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
            <DialogPrimitive.Portal>
                <DialogPrimitive.Overlay
                    className={cn(
                        "fixed inset-0 z-50 bg-black/30",
                        "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:duration-300",
                        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:duration-200",
                    )}
                />

                <DialogPrimitive.Content
                    className={cn(
                        "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-full sm:max-w-[23em] min-h-[70vh] rounded-4xl shadow-2xl outline-none overflow-hidden flex flex-col",
                        "w-[90%] max-w-md rounded-3xl overflow-hidden outline-none",
                        "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:duration-300",
                        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:duration-200",
                    )}
                >
                    <DialogPrimitive.DialogTitle className='sr-only'>Scan QR Code</DialogPrimitive.DialogTitle>
                    
                    <DialogPrimitive.Close className="absolute top-4 right-4 z-50 bg-brand-neutral-400 hover:text-white transition-colors">
                        <Icon icon="ri:close-circle-fill" width="32" height="32" />
                    </DialogPrimitive.Close>

                    <div className="relative bg-black/70 p-8 h-full flex flex-col items-center">
                        
                        <div className="relative w-full max-w-[15em] aspect-square rounded-2xl overflow-hidden border-4 border-white/10">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Image 
                                    src={backgroundImage}
                                    width={400}
                                    height={400}
                                    alt="QR Code Background"
                                    className="w-4/5 h-4/5 object-cover opacity-30"
                                />
                            </div>

                            <video
                                ref={videoRef}
                                autoPlay
                                playsInline
                                muted
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="relative w-[75%] h-[75%]">
                                    {isScanning && (
                                        <div 
                                            className="absolute inset-x-0 h-0.5 bg-blue-500 shadow-lg shadow-blue-500/50"
                                            style={{
                                                animation: 'scan 2s ease-in-out infinite',
                                            }}
                                        />
                                    )}
                                    
                                    <style>{`
                                        @keyframes scan {
                                            0%, 100% { top: 0; }
                                            50% { top: calc(100% - 2px); }
                                        }
                                    `}</style>

                                    <svg 
                                        className="absolute inset-0 w-full h-full"
                                        viewBox="0 0 100 100"
                                        fill="none"
                                        preserveAspectRatio="none"
                                    >
                                        {/* Top Left */}
                                        <path 
                                            d="M0 24V12C0 5.37258 5.37258 0 12 0H24" 
                                            stroke="white" 
                                            strokeWidth="6" 
                                            strokeLinecap="round"
                                            vectorEffect="non-scaling-stroke"
                                        />
                                        {/* Top Right */}
                                        <path 
                                            d="M76 0H88C94.6274 0 100 5.37258 100 12V24" 
                                            stroke="white" 
                                            strokeWidth="6" 
                                            strokeLinecap="round"
                                            vectorEffect="non-scaling-stroke"
                                        />
                                        {/* Bottom Right */}
                                        <path 
                                            d="M100 76V88C100 94.6274 94.6274 100 88 100H76" 
                                            stroke="white" 
                                            strokeWidth="6" 
                                            strokeLinecap="round"
                                            vectorEffect="non-scaling-stroke"
                                        />
                                        {/* Bottom Left */}
                                        <path 
                                            d="M24 100H12C5.37258 100 0 94.6274 0 88V76" 
                                            stroke="white" 
                                            strokeWidth="6" 
                                            strokeLinecap="round"
                                            vectorEffect="non-scaling-stroke"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="mt-14 flex items-start gap-3 text-white">
                            <Icon icon="hugeicons:qr-code-01" width="24" height="24" className='text-brand-primary-4 size-16' />
                            <p className="text-sm leading-relaxed">
                                Position your camera so the QR code fits within the frame. 
                                Scanning will start automatically.
                            </p>
                        </div>
                    </div>
                </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
    )
}