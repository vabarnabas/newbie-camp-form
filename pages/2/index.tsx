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
          router.push("/3")
        }}
        title="Személyes Adatok"
        description="Ezekre az információkra a szállásnak van szüksége a becsekkoláshoz, egyéb esetben nem használjuk fel őket."
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
            label="Születési Dátum"
            required
          />
          <FormInput
            type="text"
            onChange={(e) =>
              updateForm(
                (e.target as HTMLInputElement).value,
                "placeOfBirth",
                formValues,
                setFormValues
              )
            }
            value={formValues.placeOfBirth}
            label="Születési Hely"
            required
          />
          <FormInput
            type="text"
            onChange={(e) =>
              updateForm(
                (e.target as HTMLInputElement).value,
                "zipCode",
                formValues,
                setFormValues
              )
            }
            value={formValues.zipCode}
            label="Irányítószám"
            required
          />
          <FormInput
            type="text"
            onChange={(e) =>
              updateForm(
                (e.target as HTMLInputElement).value,
                "city",
                formValues,
                setFormValues
              )
            }
            value={formValues.city}
            label="Város"
            required
          />
          <FormInput
            type="text"
            onChange={(e) =>
              updateForm(
                (e.target as HTMLInputElement).value,
                "address",
                formValues,
                setFormValues
              )
            }
            value={formValues.address}
            label="Cím"
            required
          />
          <FormInput
            type="text"
            onChange={(e) =>
              updateForm(
                (e.target as HTMLInputElement).value,
                "idNumber",
                formValues,
                setFormValues
              )
            }
            value={formValues.idNumber}
            label="Személyi Igazolvány Száma"
            required
          />
          <FormInput
            type="text"
            onChange={(e) =>
              updateForm(
                (e.target as HTMLInputElement).value,
                "studentIdNumber",
                formValues,
                setFormValues
              )
            }
            value={formValues.studentIdNumber}
            label="Diákigazolvány Száma"
            required
          />
        </div>
      </Form>
    </Layout>
  )
}

export default Page
