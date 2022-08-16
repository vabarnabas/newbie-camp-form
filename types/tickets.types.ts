export interface Ticket {
  id: string
  stripeId: string
  displayName: string
  description: string
  price: number
  groupName: string
  isActive: boolean
}
