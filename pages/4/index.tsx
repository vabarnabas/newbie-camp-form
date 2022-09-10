import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Form from "../../components/form"
import FormCard from "../../components/form-card"
import FormInput from "../../components/form-input"
import FormRadioGroup from "../../components/form-radio"
import { FormSwitch } from "../../components/form-switch"
import Layout from "../../components/layout"
import Spinner from "../../components/spinner"
import { useFormStorage } from "../../providers/form.provider"
import { getTickets } from "../../services/api/getTickets"
import { getEnablers } from "../../services/getEnablers"
import { checkout } from "../../services/stripe/checkout"
import { updateForm } from "../../services/updateForm"
import { FormValues } from "../../types/formvalues.types"
import { Ticket } from "../../types/tickets.types"

const Page: NextPage = () => {
  const { formStorage, modifyStorage } = useFormStorage()
  const router = useRouter()
  const [formValues, setFormValues] = useState({
    ...formStorage,
  } as FormValues)
  const [tickets, setTickets] = useState<Ticket[]>([])

  useEffect(() => {
    if (Object.keys(formStorage).length !== 0) {
      setFormValues({
        ...formStorage,
      } as FormValues)
    }
  }, [formStorage])

  useEffect(() => {
    const getData = async () => {
      setTickets(await getTickets())
    }

    getData()
  }, [])

  console.log(formValues.enablers)

  useEffect(() => {
    if (!formStorage.ticket && tickets.length !== 0) {
      setFormValues({
        ...formStorage,
        ticket: tickets[0],
      } as FormValues)
    }
  }, [tickets])

  return (
    <Layout>
      {tickets.length !== 0 ? (
        <Form
          onSubmit={() => {
            modifyStorage(formValues)
            checkout(
              [{ price: formValues.ticket.stripeId, quantity: 1 }],
              formValues.email
            )
          }}
          title="Jegyek"
        >
          <div className="space-y-3">
            {[
              ...new Map(
                tickets.map((ticket) => [ticket.groupName, ticket])
              ).values(),
            ]
              .sort((a, b) => a.groupIndex - b.groupIndex)
              .map((ticket) => (
                <div className="">
                  <p className="mb-3 pl-1 text-lg font-bold">
                    {ticket.groupName}
                  </p>
                  <div className="grid gap-x-4 gap-y-2 md:grid-cols-2">
                    {tickets
                      .filter(
                        (subTicket) => subTicket.groupName === ticket.groupName
                      )
                      .filter((subTicket) => subTicket.isActive)
                      .filter(
                        (subTicket) =>
                          subTicket.enablers.filter(() =>
                            formValues.enablers.some((b) =>
                              subTicket.enablers.includes(b)
                            )
                          ).length !== 0
                      )
                      .filter(
                        (subTicket) =>
                          subTicket.disablers.filter(() =>
                            formValues.enablers.some((b) =>
                              subTicket.disablers.includes(b)
                            )
                          ).length === 0
                      )
                      .map((subTicket) => (
                        <FormCard
                          key={subTicket.id}
                          title={subTicket.displayName}
                          price={subTicket.price}
                          description={subTicket.description}
                          onClick={() =>
                            updateForm(
                              subTicket,
                              "ticket",
                              formValues,
                              setFormValues
                            )
                          }
                          isSelected={
                            formValues.ticket?.stripeId === subTicket.stripeId
                          }
                        />
                      ))}
                  </div>
                </div>
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
