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
import { updateForm } from "../../services/updateForm"
import {
  AlcoholOption,
  FoodSensitivity,
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
  } as FormValues)

  useEffect(() => {
    if (Object.keys(formStorage).length !== 0) {
      setFormValues({
        ...formStorage,
        memberStatus: formStorage.memberStatus || "Newbie",
        alcoholOptions: formStorage.alcoholOptions || [],
        foodSensitivities: formStorage.foodSensitivities || [],
        helpOptions: formStorage.helpOptions || [],
      } as FormValues)
    }
  }, [formStorage])

  console.log(formValues.alcoholOptions)

  const handleAlcoholSelection = (id: AlcoholOption) => {
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

  const handleAllergySelection = (id: FoodSensitivity) => {
    formValues.foodSensitivities.includes(id)
      ? updateForm(
          formValues.foodSensitivities.filter((option) => option !== id),
          "foodSensitivities",
          formValues,
          setFormValues
        )
      : updateForm(
          [...formValues.foodSensitivities, id],
          "foodSensitivities",
          formValues,
          setFormValues
        )
  }

  const handleHelpSelection = (id: HelpOption) => {
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

  return (
    <Layout>
      <Form
        onSubmit={() => {
          modifyStorage(formValues)
          router.push("/4")
        }}
        title="Preferenciák"
      >
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
              label="Mit Innál szívesen?"
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
            <FormCheckGroup
              options={["Tej", "Glutén", "Mogyoró", "Tojás"]}
              values={formValues.foodSensitivities}
              label="Van-e bármilyen ételallergiád vagy olyan étel, amit kifejezetten nem szeretsz?"
              onChange={(id) => handleAllergySelection(id as FoodSensitivity)}
              description="Több lehetőséget is választhatsz!"
            />
          )}
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
          {formValues.likeToHelp && (
            <FormCheckGroup
              options={["Csapatépítés", "Állomás", "Főzés", "Szakmai Esemény"]}
              values={formValues.helpOptions}
              label="Mit Innál szívesen?"
              onChange={(id) => handleHelpSelection(id as HelpOption)}
              description="Miben vennél részt?"
            />
          )}
        </div>
      </Form>
    </Layout>
  )
}

export default Page
