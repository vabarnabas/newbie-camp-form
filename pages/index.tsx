import type { NextPage } from "next"
import Form from "../components/form"
import Layout from "../components/layout"
import { useCurrentStep } from "../hooks/useCurrentStep"

const Home: NextPage = () => {
  return (
    <Layout>
      <Form>
        <div className="">a</div>
      </Form>
    </Layout>
  )
}

export default Home
