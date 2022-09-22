import { FormValues } from "../types/formvalues.types"

export const generateCSVData = (formValues: FormValues) => {
  return {
    fullName: formValues.fullName,
    email: formValues.email,
    neptunCode: formValues.neptunCode,
    
  }
}
