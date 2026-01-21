type StatusCodeStatus = "active" | "ended"

interface PromoCode {
  id: number
  status: StatusCodeStatus
  promo_code: string
  event: IEvent
  usage: number
  revenue_impact: number
  expiry_date: string
}


interface AffiliateLeaderboard {
  id: number
  rank: number
  affiliate: Pick<Customer, "email" | "name" | "profileImg">
  clicks: number
  tickets_sold: number
  revenue: number
  commission: number
  conversion_rate: number
}