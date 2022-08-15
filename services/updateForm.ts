import { FormValues } from "../types/formvalues.types"

export const updateForm = (
  value: string,
  key: string,
  formValues: FormValues,
  setFormValues: (formValues: FormValues) => void
) => {
  setFormValues({ ...formValues, [key]: value })
}
