import React from "react"

interface Props {
  text: string
  required?: boolean
}

const InputLabel: React.FC<Props> = ({ text, required }) => {
  return (
    <div className="mb-1 flex items-start pl-1 text-xs">
      <p className="">{text}</p>
      {required && <p className="ml-0.5 flex text-rose-500">*</p>}
    </div>
  )
}

export default InputLabel
