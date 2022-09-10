import type { NextPage } from "next"
import { useRouter } from "next/router"
import { BsDot } from "react-icons/bs"
import Form from "../../components/form"
import Layout from "../../components/layout"
import { useCurrentStep } from "../../hooks/useCurrentStep"

const Success: NextPage = () => {
  const router = useRouter()

  const { sessionId } = router.query

  return (
    <Layout>
      <Form>
        <div className="">
          <p className="text-2xl font-bold">Sikeres Fizetés!</p>
          <p className="mt-5">
            Köszönjük, hogy részt veszel az idei őszi Bevonó Táborban. Hamarosan
            kiküldjük számodra a nyugtát tartalmazó e-mailt és a további
            információkat is.
          </p>
          <button className="mt-5 w-full rounded-md bg-soft-green py-1 px-3 text-sm text-white outline-none hover:bg-soft-green-dark">
            Azonosító Másolása
          </button>
        </div>
      </Form>
    </Layout>
  )
}

export default Success
