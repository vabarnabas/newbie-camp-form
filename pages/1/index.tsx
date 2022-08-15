import type { NextPage } from "next"
import { useEffect, useState } from "react"
import Form from "../../components/form"
import FormInput from "../../components/form-input"
import FormRadioGroup from "../../components/form-radio"
import Layout from "../../components/layout"
import { useFormStorage } from "../../providers/form.provider"
import { updateForm } from "../../services/updateForm"
import { FormValues } from "../../types/formvalues.types"

const Page: NextPage = () => {
  const { formStorage, modifyStorage } = useFormStorage()
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
      console.log(formStorage.memberStatus || "Newbie")
    }
  }, [formStorage])

  console.table({ formStorage, formValues })

  return (
    <Layout>
      <Form
        onSubmit={() => {
          modifyStorage(formValues)
        }}
        title="Basic Information"
      >
        <div className="space-y-2">
          <FormInput
            type="text"
            value={formValues.fullName}
            onChange={(e) =>
              updateForm(
                (e.target as HTMLInputElement).value,
                "fullName",
                formValues,
                setFormValues
              )
            }
            label="Full Name"
            required
          />
          <FormInput
            type="text"
            onChange={(e) =>
              updateForm(
                (e.target as HTMLInputElement).value,
                "neptunCode",
                formValues,
                setFormValues
              )
            }
            value={formValues.neptunCode}
            label="Neptun Code"
            required
          />
          <FormRadioGroup
            options={["Newbie", "Member", "Alumni"]}
            label="Member Status"
            value={formValues.memberStatus}
            onChange={(e) => {
              updateForm(e, "memberStatus", formValues, setFormValues)
            }}
            required
          />
        </div>
      </Form>
    </Layout>
  )
}

export default Page
