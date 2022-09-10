import { RadioGroup } from "@headlessui/react"
import React, { SyntheticEvent, useState } from "react"
import { AlcoholOption } from "../../types/formvalues.types"
import InputLabel from "../input-label"

interface Props {
  options: string[]
  label: string
  values: string[]
  description?: string
  required?: boolean
  onChange?: (e: string) => void
}

const FormCheckGroup: React.FC<Props> = ({
  label,
  options,
  values,
  required,
  description,
  onChange,
}) => {
  return (
    <div className="">
      <InputLabel text={label} required={required} />
      <div className="mb-2 -mt-1 pl-1 text-xs opacity-60">
        {description && <p className="">{description}</p>}
      </div>
      <RadioGroup
        value={values}
        // onChange={(e) => {
        //   onChange && onChange(e)
        // }}
      >
        <div className="space-y-1">
          {options.map((option) => (
            <RadioGroup.Option
              key={option}
              value={option}
              onClick={() => onChange && onChange(option)}
              className={({ active, checked }) =>
                `${active ? "" : ""}
                  ${
                    values.includes(option)
                      ? "bg-soft-green text-white"
                      : "bg-gray-100 text-slate-500 dark:bg-gray-700 dark:text-white"
                  }
                    relative flex cursor-pointer rounded-lg px-3 py-1 focus:outline-none`
              }
            >
              {({ active, checked }) => (
                <>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <RadioGroup.Label
                          as="p"
                          className={` flex items-center`}
                        >
                          {option}
                        </RadioGroup.Label>
                      </div>
                    </div>
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

export default FormCheckGroup
