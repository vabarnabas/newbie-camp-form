import { FormValues } from "../types/formvalues.types"

export const getEnablers = (formValues: FormValues) => {
  const enablers: string[] = []

  if (formValues.memberStatus === "Newbie") {
    enablers.push("newbie")
  }

  if (formValues.memberStatus === "Tag") {
    enablers.push("member")
  }

  if (formValues.memberStatus === "Alumni") {
    enablers.push("alumni")
  }

  if (formValues.likeToEat === "Saját magamnak oldanám meg") {
    enablers.push("no-food")
  }

  if (formValues.likeToEat === "A táborban felkínált ételeket fogyasztanám") {
    enablers.push("food")
  }

  return enablers
}
