import { RadioGroup } from "@headlessui/react"
import React, { SyntheticEvent, useState } from "react"
import InputLabel from "../input-label"

interface Props {
  options: string[]
  label: string
  value: string
  required?: boolean
  onChange?: (e: string) => void
}

const FormRadioGroup: React.FC<Props> = ({
  label,
  options,
  value,
  required,
  onChange,
}) => {
  return (
    <div className="">
      <InputLabel text={label} required={required} />
      <RadioGroup
        value={value}
        onChange={(e) => {
          onChange && onChange(e)
        }}
      >
        <div className="space-y-1">
          {options.map((option) => (
            <RadioGroup.Option
              key={option}
              value={option}
              className={({ active, checked }) =>
                `${active ? "" : ""}
                  ${
                    checked
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

export default FormRadioGroup
