import { FormValues } from "../types/formvalues.types"

export const updateForm = (
  value: any,
  key: keyof FormValues,
  formValues: FormValues,
  setFormValues: (formValues: FormValues) => void
) => {
  setFormValues({ ...formValues, [key]: value })
}
