import React, { SyntheticEvent } from "react"
import InputLabel from "../input-label"

interface Props {
  type: "text" | "number" | "email" | "tel" | "date"
  value: string | number
  placeholder?: string
  className?: string
  label?: string
  required?: boolean
  onChange: (e: SyntheticEvent) => void
}

const FormInput: React.FC<Props> = ({
  type,
  placeholder,
  required,
  label,
  value,
  className,
  onChange,
}) => {
  return (
    <div className="">
      {label && <InputLabel text={label} required={required} />}
      <input
        className={`w-full rounded-md bg-gray-100 py-1 px-3 text-sm outline-none dark:bg-gray-700 ${className}`}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required || false}
        onChange={(e) => onChange(e)}
      />
    </div>
  )
}

export default FormInput
