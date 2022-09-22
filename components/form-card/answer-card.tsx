import { useAutoAnimate } from "@formkit/auto-animate/react"
import React from "react"
import { BsFillCheckCircleFill } from "react-icons/bs"
import { HiChevronDown, HiChevronUp } from "react-icons/hi"
import { FormValues } from "../../types/formvalues.types"
interface Props {
  title: string
  formValues: FormValues
  isSelected: boolean
  onClick: (...params: any) => void
}

const AnswerCard: React.FC<Props> = ({
  title,
  formValues,
  isSelected,
  onClick,
}) => {
  const [ref] = useAutoAnimate<HTMLDivElement>()

  return (
    <div
      onClick={() => onClick()}
      className={`cursor-pointer rounded-md bg-gray-100 p-4 dark:bg-gray-700`}
    >
      <div ref={ref} className="">
        <div className="flex items-center justify-between">
          <p className="pr-6 text-lg font-bold leading-tight">{title}</p>
          {isSelected ? (
            <HiChevronDown className="text-xl" />
          ) : (
            <HiChevronUp className="text-xl" />
          )}
        </div>
        {isSelected && (
          <div className="mt-3 flex flex-col text-sm font-light">
            <div className="inline-flex space-x-1">
              <p className="font-semibold">Email: </p>
              <p className="">{formValues.email}</p>
            </div>
            <div className="inline-flex space-x-1">
              <p className="font-semibold">Neptun kód: </p>
              <p className="">{formValues.neptunCode}</p>
            </div>
            <div className="inline-flex space-x-1">
              <p className="font-semibold">Lakcím: </p>
              <p className="">{`${formValues.zipCode} ${formValues.city}, ${formValues.address}`}</p>
            </div>
            <div className="inline-flex space-x-1">
              <p className="font-semibold">Születési hely: </p>
              <p className="">{formValues.placeOfBirth}</p>
            </div>
            <div className="inline-flex space-x-1">
              <p className="font-semibold">Születési idő: </p>
              <p className="">{formValues.dateOfBirth}</p>
            </div>
            <div className="inline-flex space-x-1">
              <p className="font-semibold">Személyi ig. száma: </p>
              <p className="">{formValues.idNumber}</p>
            </div>
            <div className="inline-flex space-x-1">
              <p className="font-semibold">Diák ig. száma: </p>
              <p className="">{formValues.studentIdNumber}</p>
            </div>
            <div className="mt-2 inline-flex space-x-1">
              <p className="font-semibold">Fogyaszt-e alkoholt: </p>
              <p className="">{formValues.alcohol ? "Igen" : "Nem"}</p>
            </div>
            <div className="inline-flex space-x-1">
              <p className="font-semibold">Alkohol preferenciák </p>
              <p className="">{formValues.alcoholOptions.join(", ")}</p>
            </div>
            <div className="mt-2 inline-flex space-x-1">
              <p className="font-semibold">Étkezik-e: </p>
              <p className="">{formValues.likeToEat ? "Igen" : "Nem"}</p>
            </div>
            {formValues.likeToEat && formValues.foodSensitivities && (
              <div className="inline-flex space-x-1">
                <p className="font-semibold">Ételérzékenységek:</p>
                <p className="">{formValues.foodSensitivities}</p>
              </div>
            )}
            <div className="mt-2 inline-flex space-x-1">
              <p className="font-semibold">Segítő-e: </p>
              <p className="">{formValues.likeToHelp ? "Igen" : "Nem"}</p>
            </div>
            {formValues.likeToHelp && formValues.helpOptions && (
              <div className="inline-flex space-x-1">
                <p className="font-semibold">Miben segítene:</p>
                <p className="">{formValues.helpOptions.join(", ")}</p>
              </div>
            )}
            {formValues.ticket && (
              <div className="mt-2 inline-flex space-x-1">
                <p className="font-semibold">Vásárolt jegy:</p>
                <p className="">{formValues.ticket.displayName}</p>
              </div>
            )}
            {formValues.ticket && formValues.ticket.displayName.includes("1") && (
              <div className="mt-2 inline-flex space-x-1">
                <p className="font-semibold">Preferált éjszaka:</p>
                <p className="">{formValues.nightStay}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default AnswerCard
