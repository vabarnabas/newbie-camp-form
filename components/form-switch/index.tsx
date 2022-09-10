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
        className="flex cursor-pointer items-center py-1 text-sm"
      >
        <Switch
          checked={value || false}
          className={`${
            value ? "bg-soft-green" : "bg-gray-200 dark:bg-gray-400"
          } relative inline-flex h-4 w-8 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span
            className={`${
              value ? "translate-x-4" : "translate-x-0"
            } inline-block aspect-square h-3 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
        <Switch.Label className="ml-2 cursor-pointer">{title}</Switch.Label>
      </div>
    </Switch.Group>
  )
}
