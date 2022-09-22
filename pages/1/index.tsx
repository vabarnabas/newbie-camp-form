import type { NextPage } from "next"
import { useRouter } from "next/router"
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
      console.log(formStorage.memberStatus || "Newbie")
    }
  }, [formStorage])

  return (
    <Layout>
      <Form
        onSubmit={() => {
          modifyStorage(formValues)
          router.push("/2")
        }}
        title="Alapvető Információk"
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
            label="Teljes Név"
            required
          />
          <FormInput
            type="email"
            value={formValues.email}
            onChange={(e) =>
              updateForm(
                (e.target as HTMLInputElement).value,
                "email",
                formValues,
                setFormValues
              )
            }
            label="E-mail cím"
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
            label="Neptun Kód"
            required
          />
          <FormInput
            type="text"
            value={formValues.favoriteMeme}
            onChange={(e) =>
              updateForm(
                (e.target as HTMLInputElement).value,
                "favoriteMeme",
                formValues,
                setFormValues
              )
            }
            label="Mi a kedvenc Meme-d?"
            required
          />
          <FormRadioGroup
            options={["Newbie", "Tag", "Alumni"]}
            label="Tagsági Státusz"
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
