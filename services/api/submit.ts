import { FormValues } from "../../types/formvalues.types"

export const submitCreate = async (
  formValues: FormValues,
  sessionId?: string
) => {
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
      // ticketId: "",
      isActive: false,
      sessionId: sessionId || "",
    }),
  })
  const data = await response.json()
  return data
}

export const submitUpdate = async (
  formValues: FormValues,
  sessionId: string,
  id: string
) => {
  if (id) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/answers/${id}`,
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: formValues.fullName,
          formValues: JSON.stringify(formValues),
          createdAt: new Date(Date.now()).toISOString(),
          ticketId: formValues.ticket?.id || null,
          isActive: formValues.ticket ? true : false,
          sessionId: sessionId,
        }),
      }
    )
    console.log(formValues.ticket ? true : false)

    const data = await response.json()
    return data
  }
}
