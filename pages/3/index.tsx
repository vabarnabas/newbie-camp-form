import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Form from "../../components/form"
import FormInput from "../../components/form-input"
import FormRadioGroup from "../../components/form-radio"
import { FormSwitch } from "../../components/form-switch"
import Layout from "../../components/layout"
import { useFormStorage } from "../../providers/form.provider"
import { updateForm } from "../../services/updateForm"
import { FormValues } from "../../types/formvalues.types"

const Page: NextPage = () => {
  const { formStorage, modifyStorage } = useFormStorage()
  const router = useRouter()
  const [formValues, setFormValues] = useState({
    ...formStorage,
    memberStatus: formStorage.memberStatus || "Newbie",
  } as FormValues)

  useEffect(() => {
    if (Object.keys(formStorage).length !== 0) {
      setFormValues({
        ...formStorage,
        memberStatus: formStorage.memberStatus || "Newbie",
      } as FormValues)
    }
  }, [formStorage])

  console.log(formValues.alcohol)

  return (
    <Layout>
      <Form
        onSubmit={() => {
          modifyStorage(formValues)
          router.push("/3")
        }}
        title="Stay"
      >
        <div className="space-y-2">
          <FormInput
            type="date"
            value={formValues.dateOfBirth}
            onChange={(e) =>
              updateForm(
                (e.target as HTMLInputElement).value,
                "dateOfBirth",
                formValues,
                setFormValues
              )
            }
            label="Date of Birth"
            required
          />
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
            title="Would you like to drink alcohol?"
          />
        </div>
      </Form>
    </Layout>
  )
}

export default Page
