import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Form from "../../components/form"
import FormCard from "../../components/form-card"
import AnswerCard from "../../components/form-card/answer-card"
import FormRadioGroup from "../../components/form-radio"
import Layout from "../../components/layout"
import Spinner from "../../components/spinner"
import { useFormStorage } from "../../providers/form.provider"
import { getAnswers } from "../../services/api/getAnswers"
import { getTickets } from "../../services/api/getTickets"
import { updateForm } from "../../services/updateForm"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { Answer } from "../../types/answers.types"
import { CSVLink, CSVDownload } from "react-csv"
import { generateCSVData } from "../../services/generateCSVData"

const Page: NextPage = () => {
  const { formStorage, modifyStorage } = useFormStorage()
  const router = useRouter()
  const [answers, setAnswers] = useState<Answer[]>([])
  const [selected, setSelected] = useState<string[]>([])
  const [ref] = useAutoAnimate<HTMLDivElement>()

  useEffect(() => {
    const getData = async () => {
      setAnswers(await getAnswers())
    }

    getData()
  }, [])

  const handleSelection = (id: string) => {
    selected.includes(id)
      ? setSelected(selected.filter((filter) => filter !== id))
      : setSelected([...selected, id])
  }

  return (
    <Layout>
      {answers.length !== 0 ? (
        <Form hide onSubmit={() => {}} title="Jegyek">
          <div ref={ref} className="space-y-3">
            <div className="">
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold">{`${answers.length} Jelentkezés`}</p>
                <CSVLink
                  data={generateCSVData(
                    answers
                      .filter((answer) => answer.isActive === true)
                      .map((answer) => {
                        return JSON.parse(answer.formValues)
                      })
                  )}
                  className="rounded-md bg-soft-green py-1 px-3 text-sm text-white outline-none hover:bg-soft-green-dark disabled:bg-slate-400"
                >
                  Letöltés
                </CSVLink>
              </div>
              <div className="mt-2 flex flex-col">
                {[
                  ...new Map(
                    answers
                      .filter(
                        (answer) =>
                          JSON.parse(answer.formValues).ticket !== undefined
                      )
                      .map((answer) => [
                        JSON.parse(answer.formValues).ticket.displayName,
                        answer,
                      ])
                  ).values(),
                ].map((answer) => (
                  <div className="inline-flex space-x-1">
                    <p className="font-semibold">
                      {`${JSON.parse(answer.formValues).ticket.displayName}:`}
                    </p>
                    <p className="">
                      {`${
                        answers.filter(
                          (subAnswer) =>
                            JSON.parse(subAnswer.formValues)?.ticket
                              ?.displayName ===
                            JSON.parse(answer.formValues).ticket.displayName
                        ).length
                      } db`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {answers.map((answer) => (
              <AnswerCard
                onClick={() => handleSelection(answer.id)}
                key={answer.id}
                formValues={JSON.parse(answer.formValues)}
                title={answer.userName}
                isSelected={selected.includes(answer.id)}
                isActive={answer.isActive}
              />
            ))}
          </div>
        </Form>
      ) : (
        <Spinner />
      )}
    </Layout>
  )
}

export default Page
