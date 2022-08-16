import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Form from "../../components/form"
import FormCard from "../../components/form-card"
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
        title="Jegyek"
      >
        <div className="">
          <p className="mb-3 pl-1 text-lg font-bold">Napi Jegyek</p>
          <div className="grid gap-x-4 gap-y-2 md:grid-cols-2">
            <FormCard
              title="Bevonó Tábor (Hétfő)"
              price={3500}
              description="Belépő a Bevonó Tábor egy éjszakájára a hétfői napon."
            />
            <FormCard
              title="Bevonó Tábor (Kedd)"
              price={3500}
              description="Belépő a Bevonó Tábor egy éjszakájára a keddi napon."
            />
            <FormCard
              title="Bevonó Tábor (Szerda)"
              price={3500}
              description="Belépő a Bevonó Tábor egy éjszakájára a szerdai napon."
            />
          </div>
          <p className="my-3 pl-1 text-lg font-bold">Kétnapos Jegyek</p>
          <div className="grid gap-x-4 gap-y-2 md:grid-cols-2">
            <FormCard
              title="Bevonó Tábor (Hétfő)"
              price={3500}
              description="Belépő a Bevonó Tábor egy éjszakájára a hétfői napon."
            />
            <FormCard
              title="Bevonó Tábor (Kedd)"
              price={3500}
              description="Belépő a Bevonó Tábor egy éjszakájára a keddi napon."
            />
            <FormCard
              title="Bevonó Tábor (Szerda)"
              price={3500}
              description="Belépő a Bevonó Tábor egy éjszakájára a szerdai napon."
            />
          </div>
        </div>
      </Form>
    </Layout>
  )
}

export default Page
