import React from "react"

interface Props {
  text: string
  onClick?: (...params: any) => void
}

const FormButton: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button
      onClick={() => {
        onClick && onClick()
      }}
      className="w-full rounded-md bg-soft-green py-1 px-3 text-sm text-white outline-none hover:bg-soft-green-dark"
    >
      {text}
    </button>
  )
}

export default FormButton
