import React from "react"
import { BsFillCheckCircleFill } from "react-icons/bs"
interface Props {
  title: string
  description: string
  price: number
  isSelected: boolean
  onClick: (...params: any) => void
}

const FormCard: React.FC<Props> = ({
  description,
  title,
  price,
  isSelected,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick()}
      className={`relative box-border cursor-pointer rounded-md bg-gray-700 p-4 ${
        isSelected ? "border border-soft-green" : ""
      }`}
    >
      {isSelected && (
        <BsFillCheckCircleFill className="absolute top-3 right-3 text-soft-green" />
      )}
      <div className="">
        <p className="pr-6 text-lg font-bold leading-tight">{title}</p>
        <p className="-mt-0.5 text-xs text-soft-green">{`${price} Ft`}</p>
        <p className="mt-3 text-sm leading-tight">{description}</p>
      </div>
    </div>
  )
}

export default FormCard
