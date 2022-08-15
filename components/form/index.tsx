import React from "react"
import { useCurrentStep } from "../../hooks/useCurrentStep"
import { Steps } from "../../types/steps.types"
import FormButton from "../form-button"
import FormTitle from "../form-title"
import FormTracker from "../form-tracker"

interface Props {
  children: JSX.Element
  title?: string
  onSubmit?: () => void
}

const Form: React.FC<Props> = ({ children, title, onSubmit }) => {
  const { getCurrentStep } = useCurrentStep()

  return (
    <div className="flex h-full w-full select-none items-start justify-center pt-4">
      {title && getCurrentStep() && (
        <FormTitle currentStep={1} maxSteps={4} text={title} />
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit && onSubmit()
        }}
        action=""
        className="mt-12 mb-8 flex w-full flex-col space-y-4 py-4 px-4 md:w-1/2"
      >
        {children}
        <FormButton text="Continue" />
      </form>
      <FormTracker currentStep={getCurrentStep() || 0} maxSteps={4} />
    </div>
  )
}

export default Form
