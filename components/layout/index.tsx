import Head from "next/head"
import React from "react"
import { Steps } from "../../types/steps.types"

interface Props extends Partial<Steps> {
  children: JSX.Element
}

const Layout: React.FC<Props> = ({ children, currentStep }) => {
  return (
    <div className="flex min-h-screen w-screen select-none flex-col bg-white text-slate-500 dark:bg-gray-800 dark:text-white">
      <Head>
        <title>Meme-s Bevonó Tábor Jelentkezés</title>
        <meta name="description" content="Meme-s Bevonó Tábor Jelentkezés" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-1">{children}</div>
    </div>
  )
}

export default Layout
