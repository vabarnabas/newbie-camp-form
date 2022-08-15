import { RadioGroup } from "@headlessui/react"
import React, { useState } from "react"
import InputLabel from "../input-label"

interface Props {
  options: string[]
  label: string
  required?: boolean
}

const FormRadioGroup: React.FC<Props> = ({ label, options, required }) => {
  const [selected, setSelected] = useState(options[0])

  return (
    <div className="">
      <InputLabel text={label} required={required} />
      <RadioGroup value={selected} onChange={setSelected}>
        <div className="space-y-1">
          {options.map((option) => (
            <RadioGroup.Option
              key={option}
              value={option}
              className={({ active, checked }) =>
                `${active ? "" : ""}
                  ${checked ? "bg-soft-green text-white" : "bg-gray-700"}
                    relative flex cursor-pointer rounded-lg px-5 py-1 focus:outline-none`
              }
            >
              {({ active, checked }) => (
                <>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <RadioGroup.Label as="p" className={` text-white`}>
                          {option}
                        </RadioGroup.Label>
                      </div>
                    </div>
                    {checked && <div className="shrink-0 text-white"></div>}
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  )
}

export default FormRadioGroup
