import React from "react"
import { Steps } from "../../types/steps.types"

interface Props extends Steps {}

const FormTracker: React.FC<Props> = ({ currentStep, maxSteps }) => {
  return (
    <div className="fixed inset-x-0 bottom-0 flex auto-cols-auto bg-inherit">
      {Array(maxSteps)
        .fill("a")
        .map((rect, idx) => (
          <div
            key={idx}
            className={`h-2 w-full bg-soft-green text-xs ${
              idx + 1 <= currentStep
                ? "bg-soft-green"
                : "bg-gray-300 dark:bg-gray-400"
            }`}
          ></div>
        ))}
    </div>
  )
}

export default FormTracker
