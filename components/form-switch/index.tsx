import { useState } from "react"
import { Switch } from "@headlessui/react"

export const FormSwitch = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch.Group>
      <div
        onClick={() => setEnabled(!enabled)}
        className="flex cursor-pointer items-center text-sm"
      >
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? "bg-soft-green" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
        >
          <span
            className={`${
              enabled ? "translate-x-5" : "translate-x-1"
            } inline-block h-5 w-5 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
        <Switch.Label className="ml-2 cursor-pointer">
          Enable notifications
        </Switch.Label>
      </div>
    </Switch.Group>
  )
}
