interface PayoutTransaction {
    id: string;
    paymentId: string;
    bankAccount: {
        name: string;
        bank: string;
        bankLogo: string
    }
    amount: number;
    payoutDate: string;
    payoutTime: string;
    status: 'processing' | 'completed' | 'failed' | 'pending';
}
