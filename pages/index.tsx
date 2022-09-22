import type { NextPage } from "next"
import { useRouter } from "next/router"
import { BsDot } from "react-icons/bs"
import Form from "../components/form"
import Layout from "../components/layout"
import { useCurrentStep } from "../hooks/useCurrentStep"

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <Layout>
      <Form
        onSubmit={() => {
          router.push("/1")
        }}
      >
        <div className="">
          <p className="text-2xl font-bold">2022 Bevonó Tábor Jelentkezés</p>
          <p className="mt-5">
            Idén is várunk benneteket sok szeretettel a Bevonó Táborban.
          </p>
          <div className="mt-5">
            <p className="text-sm font-semibold">Fontos Tudnivalók:</p>
            <div className="mt-1 flex flex-col space-y-1 text-sm">
              <p className="px-2 py-0.5">
                · Jelentkezési határidő: 2022. szeptember 30.
              </p>
              <p className="px-2 py-0.5">
                · A tábor időpontja: 2022. október 7-9.
              </p>
              <p className="px-2 py-0.5">
                · A tábor helyszíne: Balatonlelle, Köztársaság u. 65, 8638 (BME
                Ifjúsági Tábor)
              </p>
              <p className="px-2 py-0.5">
                · A fizetés a kérdőív végén, idén először online fizetéssel
                történik, amennyiben ezt nem tudjátok rögtön megtenni, ne
                aggódjatok, hiszen a már leadott válaszokat a böngészőtök
                elmenti.
              </p>
              <p className="rounded-md bg-gray-100 px-2 py-1.5 dark:bg-gray-700">
                · A jelentkezés csak is a fizetés megtörténte után számít
                érvényesnek!
              </p>
            </div>
            <div className="mt-5 text-sm">
              <p className="mb-3 font-semibold">
                Bármilyen kérdés esetén keressétek bátran a szervezőket:
              </p>
              <div className="grid grid-cols-1 gap-y-3 md:grid-cols-2">
                <div className="flex flex-col items-center justify-center space-y-1 text-xs">
                  <p className="text-sm font-medium">Varga Barnabás (PL)</p>
                  <p className="">barnabas.varga@estiem.org</p>
                  <p className="">+36 30 283 9693</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-1 text-xs">
                  <p className="text-sm font-medium">Kántor Fanni (PA)</p>
                  <p className="">fanni.kantor@estiem.org</p>
                  <p className="">+36 20 358 2727</p>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault()
              localStorage.removeItem("formStorage")
              router.reload()
            }}
            className="mt-5 w-full rounded-md py-1 px-3 text-sm text-soft-green outline-none ring-1 ring-soft-green hover:text-soft-green-dark disabled:bg-slate-400"
          >
            Eddig megadott adatok törlése
          </button>
        </div>
      </Form>
    </Layout>
  )
}

export default Home
