import "../styles/globals.css"
import type { AppProps } from "next/app"
import { FormStorageProvider } from "../providers/form.provider"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FormStorageProvider>
      <Component {...pageProps} />
    </FormStorageProvider>
  )
}

export default MyApp
