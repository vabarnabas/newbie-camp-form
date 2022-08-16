export interface FormValues {
  // Page 1
  fullName: string
  neptunCode: string
  memberStatus: "Newbie" | "Member" | "Alumni"
  // Page 2
  dateOfBirth: number
  placeOfBirth: string
  zipCode: number
  city: string
  address: string
  idNumber: string
  studentIdNumber: string
  // Page 3
  alcohol: boolean

  // Page 4
  ticketId: string
}
