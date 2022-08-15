import React from "react"
import { HiArrowLeft } from "react-icons/hi"
import { Steps } from "../../types/steps.types"

export interface Props extends Steps {
  text: string
}

const FormTitle: React.FC<Props> = ({ text, currentStep, maxSteps }) => {
  return (
    <div className="absolute inset-x-0 top-0 flex w-fit items-center bg-inherit bg-white px-4 py-3 text-xl font-bold dark:bg-gray-800">
      {currentStep !== 1 && (
        <HiArrowLeft className="mr-2 cursor-pointer text-base hover:text-soft-green" />
      )}
      <p className="text-soft-green">
        <span>{`${currentStep}.`}</span>
      </p>
      <p className="ml-2">{text}</p>
    </div>
  )
}

export default FormTitle
