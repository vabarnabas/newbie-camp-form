export const getTickets = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tickets`, {})
  const data = await response.json()
  return data
}
