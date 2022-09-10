import { Ticket } from "./tickets.types"

export interface FormValues {
  // Page 1
  fullName: string
  email: string
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
  alcoholOptions: string[]
  likeToEat:
    | "Saját magamnak oldanám meg"
    | "A táborban felkínált ételeket fogyasztanám"
  foodSensitivities: string
  likeToHelp: boolean
  helpOptions: string[]

  // Page 4
  ticket: Ticket
}

export type AlcoholOption = "Sör" | "Bor" | "Vodka" | "Cider" | "Tequila"

export type HelpOption = "Csapatépítés" | "Állomás Tartása" | "Főzés"
