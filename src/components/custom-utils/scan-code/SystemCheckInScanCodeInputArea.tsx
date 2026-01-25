import { useState } from 'react';
import { Search } from 'lucide-react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import QRScannerDialog from './QRScannerDialog';

export default function SystemCheckInScanCodeInputArea() {

    const [ticketId, setTicketId] = useState('')
    const [isProcessing, setIsProcessing] = useState(false)
    const [showScannerDialog, setShowScannerDialog] = useState(false)

    const handleSearch = () => {
        if (ticketId.trim()) {
            setIsProcessing(true)
            // Simulate API call
            setTimeout(() => {
                setIsProcessing(false)
                // Handle search result here
                console.log('Searching for ticket:', ticketId)
            }, 1500)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    const handleScanSuccess = (decodedText: string) => {
        // Set the scanned value to the ticket ID input
        setTicketId(decodedText)
        
        // Close the scanner dialog
        setShowScannerDialog(false)
        
        // Trigger the processing animation
        setIsProcessing(true)
        
        // Auto-stop after 2 seconds
        setTimeout(() => {
            setIsProcessing(false)
            // Handle the scanned ticket here
            console.log('Scanned ticket:', decodedText)
        }, 2000)
    }

    return (
        <div className="w-full max-w-3xl mx-auto p-4 md:p-6">
            <div 
                className={`
                    relative rounded-2xl p-8 border-[1.5px] border-dashed transition-all duration-500
                    ${isProcessing 
                        ? 'border-brand-primary-6 bg-brand-primary-1/50 shadow-lg shadow-primary-200/50' 
                        : 'border-neutral-300 bg-white'
                    }
                `}
            >
                {/* Processing Animation Overlay */}
                {isProcessing && (
                    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                        <div className="absolute inset-0 border-[1.5px] border-dashed border-brand-primary-6 animate-pulse" />
                        <div 
                            className="absolute inset-0 bg-linear-to-r from-transparent via-primary-2/30 to-transparent"
                            style={{
                                backgroundSize: '200% 100%',
                                animation: 'shimmer 1.5s infinite'
                            }}
                        />
                    </div>
                )}

                <style>{`
                    @keyframes shimmer {
                        0% { background-position: -200% 0; }
                        100% { background-position: 200% 0; }
                    }
                `}</style>

                <div className="relative z-10">
                    {/* Search Input */}
                    <div className="mb-6 max-w-lg mx-auto">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 bg-brand-neutral-400 w-5 h-5" />
                            <input
                                type="text"
                                value={ticketId}
                                onChange={(e) => setTicketId(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Search Ticket ID"
                                disabled={isProcessing}
                                className={`
                                    w-full h-14 pl-12 pr-4 
                                    text-sm bg-brand-neutral-800 placeholder:bg-brand-neutral-400
                                    bg-brand-neutral-100 
                                    border-[1.5px] border-neutral-200
                                    rounded-xl
                                    outline-none
                                    transition-all duration-300
                                    hover:bg-brand-neutral-50 hover:border-neutral-300
                                    focus:bg-white focus:border-brand-primary-5
                                    disabled:opacity-50 disabled:cursor-not-allowed
                                `}
                            />
                        </div>
                    </div>

                    {/* OR Divider */}
                    <div className="relative mb-8">
                        <div className="relative flex justify-center">
                            <span className="px-4 text-sm bg-brand-neutral-500 font-medium">
                                or
                            </span>
                        </div>
                    </div>

                    <div className='flex justify-center items-center flex-col gap-8'>
                        <Image 
                            src="/images/vectors/qr-code.svg"
                            alt="qr-code"
                            width={150}
                            height={150}
                            className={`
                                select-none mx-auto pointer-events-none
                                transition-all duration-500
                                ${isProcessing ? 'scale-105 opacity-70' : 'scale-100 opacity-100'}
                            `}
                        />

                        <button
                            onClick={() => setShowScannerDialog(true)}
                            disabled={isProcessing}
                            className={`
                                px-8 py-3.5 rounded-md font-medium text-sm
                                transition-all duration-300 transform
                                focus:outline-none focus:ring-2 focus:ring-brand-primary-5 focus:ring-offset-2
                                disabled:cursor-not-allowed
                                ${isProcessing 
                                    ? 'bg-brand-primary-4 text-white cursor-wait scale-95' 
                                    : 'bg-brand-primary-6 text-white hover:bg-brand-primary-7 hover:shadow-lg active:scale-95'
                                }
                            `}
                        >
                            {isProcessing ? (
                                <span className="flex items-center gap-2">
                                    <Icon icon="eos-icons:three-dots-loading" width="24" height="24" />
                                    Processing...
                                </span>
                            ) : (
                                'Scan QR Code'
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <QRScannerDialog 
                open={showScannerDialog} 
                onOpenChange={(v) => setShowScannerDialog(v)} 
                onScanSuccess={handleScanSuccess} 
            />
        </div>
    )
}