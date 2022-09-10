import { FormValues } from "../../types/formvalues.types"

export const submit = async (formValues: FormValues, sessionId: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/answers`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName: formValues.fullName,
      formValues: JSON.stringify(formValues),
      createdAt: new Date(Date.now()).toISOString(),
      ticketId: formValues.ticket.id,
      isActive: true,
      sessionId: sessionId,
    }),
  })
  const data = await response.json()
  return data
}
