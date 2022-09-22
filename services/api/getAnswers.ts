export const getAnswers = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/answers`, {})
  const data = await response.json()
  return data
}
