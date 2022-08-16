import React from "react"

interface Props {
  title: string
  description: string
  price: number
}

const FormCard: React.FC<Props> = ({ description, title, price }) => {
  return (
    <div className="rounded-md bg-gray-700 px-4 py-4">
      <div className="">
        <p className="text-lg font-bold">{title}</p>
        <p className="-mt-0.5 text-xs text-soft-green">{`${price} Ft`}</p>
        <p className="mt-3 text-sm leading-tight">{description}</p>
      </div>
    </div>
  )
}

export default FormCard
