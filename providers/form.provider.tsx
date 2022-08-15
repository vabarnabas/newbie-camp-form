import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react"
import { FormValues } from "../types/formvalues.types"

type Action =
  | { type: "modify_storage"; storage: FormValues }
  | { type: "set_storage"; storage: FormValues }
  | { type: "clear_storage" }

interface Context {
  formStorage: FormValues
  modifyStorage: (pokemon: FormValues) => void
  clearStorage: () => void
}

const reducer = (state: any, action: Action) => {
  switch (action.type) {
    case "modify_storage":
      return { ...state, ...action.storage }
    case "set_storage":
      return action.storage
    case "clear_storage":
      return {}
    default:
      return state
  }
}

const FormStorageContext = createContext<Context>({} as any)

interface Props {
  children: React.ReactNode
}

export const FormStorageProvider: React.FC<Props> = ({ children }) => {
  const [fetching, setFetching] = useState(true)
  const [state, dispatch] = useReducer(reducer, [])

  const actions = useMemo(
    () => ({
      modifyStorage: (storage: FormValues) => {
        dispatch({ type: "modify_storage", storage })
      },
      setStorage: (storage: FormValues) => {
        dispatch({
          type: "set_storage",
          storage,
        })
      },
      clearStorage: () => {
        dispatch({ type: "clear_storage" })
      },
    }),
    []
  )

  useEffect(() => {
    actions.setStorage(JSON.parse(localStorage.getItem("formStorage") || "{}"))
    setFetching(false)
  }, [])

  useEffect(() => {
    if (!fetching) {
      localStorage.setItem("formStorage", JSON.stringify(state))
    }
  }, [state])

  return (
    <FormStorageContext.Provider value={{ formStorage: state, ...actions }}>
      {children}
    </FormStorageContext.Provider>
  )
}

export const useFormStorage = () => useContext(FormStorageContext)
