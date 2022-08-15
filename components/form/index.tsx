import React from "react"
import FormButton from "../form-button"
import FormInput from "../form-input"
import FormRadioGroup from "../form-radio"

const Form = () => {
  return (
    <div className="flex h-full w-full select-none items-start justify-center pt-4">
      <form action="" className="flex w-full flex-col space-y-4 px-4 md:w-1/2">
        <div className="grid gap-y-2">
          <FormInput type="text" value={""} label="Full Name" required />
          <FormInput type="text" value={""} label="Neptun Code" required />
          <FormRadioGroup
            options={["Newbie", "Member", "Alumni"]}
            label="Member Status"
          />
        </div>
        <FormButton text="Continue" />
      </form>
    </div>
  )
}

export default Form
