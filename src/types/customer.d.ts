type OrderStatus = "cancelled" | "successful" | "failed"

interface CustomerOrder  {
    event: IEvent,
    order_id: string,
    quantity: number,
    amount: number,
    status: OrderStatus
    purchase_date: string // Date String
}


interface Customer {
    id: string
    name: string
    email: string
    profileImg?: string
    address: string
    attended: number
    totalSpend: number
    lastPurchaseDate: Date //Datestring
    firstPurchaseDate: Date //Datestring
    status: 'top-spender' | 'repeat-buyer' | 'first-timer'
}

interface CustomerMetricCardData {
    id: number;
    label: string;
    value: string;
    trendData: number[];
    isNegativeGood: boolean;
}