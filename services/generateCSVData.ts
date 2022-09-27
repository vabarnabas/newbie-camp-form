import { FormValues } from "../types/formvalues.types"

export const generateCSVData = (data: FormValues[]) => {
  return data.map((formValues) => {
    return {
      fullName: formValues.fullName,
      email: formValues.email,
      neptunCode: formValues.neptunCode,
      address: `${formValues.zipCode} ${formValues.city}, ${formValues.address}`,
      placeOfBirth: formValues.placeOfBirth,
      dateOfBirth: formValues.dateOfBirth,
      idNumber: formValues.idNumber,
      studentIdNumber: formValues.studentIdNumber,
      ticket: formValues.ticket?.displayName,
      nightStay: formValues?.nightStay,
    }
  })
}
