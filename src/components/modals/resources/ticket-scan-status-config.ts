export type ScanResultType = 'verified' | 'used' | 'failed'

interface ScanResultConfig {
    icon: string
    title: string
    message: string
}

export const scanResultConfig: Record<ScanResultType, ScanResultConfig> = {
    verified: {
        icon: '/images/vectors/scan-verified.svg',
        title: 'Ticket Verified',
        message: 'This ticket is valid and has been successfully confirmed.'
    },
    used: {
        icon: '/images/vectors/scan-used.svg',
        title: 'Ticket Already Used',
        message: 'This ticket has already been scanned and cannot be used again.'
    },
    failed: {
        icon: '/images/vectors/scan-failed.svg',
        title: 'Invalid Ticket',
        message: 'This ticket could not be verified. Please check and try again.'
    }
}