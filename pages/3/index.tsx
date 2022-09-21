import type { NextPage } from "next"
import { useRouter } from "next/router"
import { format } from "path"
import { useEffect, useState } from "react"
import Form from "../../components/form"
import FormCheckGroup from "../../components/form-check"
import FormInput from "../../components/form-input"
import FormRadioGroup from "../../components/form-radio"
import { FormSwitch } from "../../components/form-switch"
import Layout from "../../components/layout"
import { useFormStorage } from "../../providers/form.provider"
import { submitCreate, submitUpdate } from "../../services/api/submit"
import { getEnablers } from "../../services/getEnablers"
import { updateForm } from "../../services/updateForm"
import {
  AlcoholOption,
  FormValues,
  HelpOption,
} from "../../types/formvalues.types"

const Page: NextPage = () => {
  const { formStorage, modifyStorage } = useFormStorage()
  const router = useRouter()
  const [formValues, setFormValues] = useState({
    ...formStorage,
    memberStatus: formStorage.memberStatus || "Newbie",
    alcoholOptions: formStorage.alcoholOptions || [],
    foodSensitivities: formStorage.foodSensitivities || [],
    helpOptions: formStorage.helpOptions || [],
    enablers: formStorage.enablers || [],
  } as FormValues)

  useEffect(() => {
    if (Object.keys(formStorage).length !== 0) {
      setFormValues({
        ...formStorage,
        memberStatus: formStorage.memberStatus || "Newbie",
        alcoholOptions: formStorage.alcoholOptions || [],
        helpOptions: formStorage.helpOptions || [],
      } as FormValues)
    }
  }, [formStorage])

  const handleAlcoholSelection = (id: string) => {
    formValues.alcoholOptions.includes(id)
      ? updateForm(
          formValues.alcoholOptions.filter((option) => option !== id),
          "alcoholOptions",
          formValues,
          setFormValues
        )
      : updateForm(
          [...formValues.alcoholOptions, id],
          "alcoholOptions",
          formValues,
          setFormValues
        )
  }

  const handleHelpSelection = (id: string) => {
    formValues.helpOptions.includes(id)
      ? updateForm(
          formValues.helpOptions.filter((option) => option !== id),
          "helpOptions",
          formValues,
          setFormValues
        )
      : updateForm(
          [...formValues.helpOptions, id],
          "helpOptions",
          formValues,
          setFormValues
        )
  }

  const onSubmit = async () => {
    await modifyStorage({ ...formValues })
    if (!formStorage.answerId) {
      console.log("No answer ID")
      const answer = await submitCreate(formValues)
      console.log(answer.id)
      await updateForm(answer.id, "answerId", formValues, setFormValues)
      await modifyStorage({ ...formValues, answerId: answer.id })
      console.log(formStorage.answerId)
    } else {
      await submitUpdate(formValues, "", formStorage.answerId || "")
    }
    router.push("/4")
  }

  console.log(formValues)

  return (
    <Layout>
      <Form onSubmit={() => onSubmit()} title="Preferenciák">
        <div className="space-y-2">
          <FormSwitch
            onChange={() =>
              updateForm(
                !formValues.alcohol ?? true,
                "alcohol",
                formValues,
                setFormValues
              )
            }
            value={formValues.alcohol}
            title="Szeretnél alkoholt fogyasztani az eseményen?"
          />
          {formValues.alcohol && (
            <FormCheckGroup
              options={["Sör", "Cider", "Vodka", "Bor", "Tequila"]}
              values={formValues.alcoholOptions}
              label="Mit innál szívesen?"
              onChange={(id) => handleAlcoholSelection(id as AlcoholOption)}
              description="Több lehetőséget is választhatsz!"
            />
          )}
          <FormRadioGroup
            options={[
              "Saját magamnak oldanám meg",
              "A táborban felkínált ételeket fogyasztanám",
            ]}
            label="Hogyan szeretnéd az étkezést megoldani?"
            value={formValues.likeToEat}
            onChange={(e) => {
              updateForm(e, "likeToEat", formValues, setFormValues)
            }}
            required
          />
          {formValues.likeToEat ===
            "A táborban felkínált ételeket fogyasztanám" && (
            <FormInput
              type="text"
              onChange={(e) =>
                updateForm(
                  (e.target as HTMLInputElement).value,
                  "foodSensitivities",
                  formValues,
                  setFormValues
                )
              }
              value={formValues.foodSensitivities}
              label="Milyen ételérzékenységeid vannak?"
            />
          )}
          {formValues.memberStatus !== "Newbie" && (
            <FormSwitch
              onChange={() =>
                updateForm(
                  !formValues.likeToHelp ?? true,
                  "likeToHelp",
                  formValues,
                  setFormValues
                )
              }
              value={formValues.likeToHelp}
              title="Szeretnél valahogyan bekapcsolódni a szervezői munkába?"
            />
          )}
          {formValues.likeToHelp && (
            <FormCheckGroup
              options={[
                "Csapatépítés (Alkoholmentes)",
                "Állomás (Nagyvetélkedő)",
                "Főzés",
              ]}
              values={formValues.helpOptions}
              label="Miben vennél részt?"
              onChange={(id) => handleHelpSelection(id as HelpOption)}
              description="Több lehetőséget is választhatsz!"
            />
          )}
        </div>
      </Form>
    </Layout>
  )
}

export default Page
