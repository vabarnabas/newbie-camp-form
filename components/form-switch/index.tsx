import { SyntheticEvent, useState } from "react"
import { Switch } from "@headlessui/react"

interface Props {
  title: string
  value: boolean
  onChange: () => void
}

export const FormSwitch: React.FC<Props> = ({ title, onChange, value }) => {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch.Group>
      <div
        onClick={() => onChange()}
        className="flex cursor-pointer items-center text-sm"
      >
        <Switch
          checked={value || false}
          className={`${
            value ? "bg-soft-green" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
        >
          <span
            className={`${
              value ? "translate-x-5" : "translate-x-1"
            } inline-block h-5 w-5 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
        <Switch.Label className="ml-2 cursor-pointer">{title}</Switch.Label>
      </div>
    </Switch.Group>
  )
}
