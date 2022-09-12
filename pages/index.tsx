import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Main from "../Components/Main"
import Checkbox from "../Components/Checkbox"
import ResetButton from "../Components/ResetButton"
import Sidebar from "../components/Sidebar"

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
      {/*  <Main /> */}

        <Sidebar />
      </main>

   
    </div>
  )
}

export default Home
