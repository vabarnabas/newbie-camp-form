import React from "react"
import { useCurrentStep } from "../../hooks/useCurrentStep"
import { Steps } from "../../types/steps.types"
import FormButton from "../form-button"
import FormTitle from "../form-title"
import FormTracker from "../form-tracker"

interface Props {
  children: JSX.Element
  title?: string
  description?: string
  onSubmit?: () => void
  disabled?: boolean
  hide?: boolean
}

const Form: React.FC<Props> = ({
  children,
  title,
  onSubmit,
  description,
  disabled,
  hide,
}) => {
  const { getCurrentStep } = useCurrentStep()

  return (
    <div className="relative flex h-full w-full select-none items-start justify-center pt-4">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit && onSubmit()
        }}
        action=""
        className="mt-12 mb-8 flex w-full flex-col space-y-4 py-4 px-4 md:w-1/2"
      >
        <div className="mb-2 text-sm">
          {description && <p className="">{description}</p>}
        </div>
        {children}
        {!hide && onSubmit && <FormButton text="Tovább" disabled={disabled} />}
      </form>
      {!hide && title && getCurrentStep() && (
        <FormTitle
          currentStep={getCurrentStep() || 1}
          maxSteps={4}
          text={title}
        />
      )}
      {!hide && (
        <FormTracker currentStep={getCurrentStep() || 0} maxSteps={4} />
      )}
    </div>
  )
}

export default Form
