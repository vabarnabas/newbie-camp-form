import React from "react"

interface Props {
  text: string
  onClick?: (...params: any) => void
  disabled?: boolean
}

const FormButton: React.FC<Props> = ({ text, onClick, disabled }) => {
  return (
    <button
      onClick={() => {
        onClick && onClick()
      }}
      disabled={disabled}
      className="w-full rounded-md bg-soft-green py-1 px-3 text-sm text-white outline-none hover:bg-soft-green-dark disabled:bg-slate-400"
    >
      {text}
    </button>
  )
}

export default FormButton
