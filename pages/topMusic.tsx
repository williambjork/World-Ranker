import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import MusicCardList from '../components/MovieCardList'
import Sidebar from '../components/Sidebar'

type Props = {}

function topMusic({}: Props) {
  return (
    <div>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className="bgmeshdark flex">
            <Sidebar /> 

            
    
            <div className="h-screen w-screen overflow-hidden overflow-y-scroll scrollbar-hide">
              <Header />
             
    
              <div className="flex font-quicksand justify-center text-3xl text-white pt-9 pb-2">
                <h2>Music</h2>
              </div>

              
                {/*
              <MusicCardList music={data} /> 
  */}

            </div>
          </main>
        </div>
  )
}

export default topMusic