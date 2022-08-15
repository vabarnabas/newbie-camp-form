import React from "react"
import InputLabel from "../input-label"

interface Props {
  type: "text" | "number" | "email" | "tel"
  value: string | number
  placeholder?: string
  className?: string
  label?: string
  required?: boolean
}

const FormInput: React.FC<Props> = ({
  type,
  placeholder,
  required,
  label,
  className,
}) => {
  return (
    <div className="">
      {label && <InputLabel text={label} required={required} />}
      <input
        className={`w-full rounded-md bg-gray-100 py-1 px-3 text-sm outline-none dark:bg-gray-700 ${className}`}
        type={type}
        placeholder={placeholder}
        required={required || false}
      />
    </div>
  )
}

export default FormInput
