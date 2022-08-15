import { useRouter } from "next/router"

export const useCurrentStep = () => {
  const router = useRouter()
  const path = router.pathname.split("/").pop()

  const getCurrentStep = () => {
    return parseInt(path || "")
  }

  return { getCurrentStep }
}
