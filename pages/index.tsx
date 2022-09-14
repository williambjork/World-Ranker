import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from "../components/Sidebar"
import { useState } from 'react'
import Header from "../components/Header"
import Carousel from "../components/Carousel"
import Card from "../components/Card"
import { fetchGames } from "../utils/requests"


const Home: NextPage = () => {

  const [games, setGames] = useState({})

  function fetchGames() {

    fetch('https://api.rawg.io/api/games?key=f6d4a95732b6497e929238e5994121e6&dates=2019-09-01,2019-09-30&platforms=18,1,7')
    .then(response => response.json())
      .then(response => setGames(response))
      .catch(err => console.error(err));
    
    }
  

  
  console.log(games)


  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" flex">
      
      
      <Sidebar />
      

      <div className="bgmesh h-screen w-screen overflow-hidden">
        <Header />

        <div className="flex justify-center text-3xl text-white pt-9 pb-2">
          <h2>Upcoming Games</h2>
        </div>
        <div className="inline-flex m-3 gap-3 shrink-0 flex-wrap justify-center">
        <Card  maintitle="Card one" subtitle="wow" />
        <Card  maintitle="Card one" subtitle="wow" />
        <Card  maintitle="Card one" subtitle="wow" />
        <Card  maintitle="Card one" subtitle="wow" />
        <Card  maintitle="Card one" subtitle="wow" />
        <Card  maintitle="Card one" subtitle="wow" />
        <Card  maintitle="Card one" subtitle="wow" />
        <Card  maintitle="Card one" subtitle="wow" />
        <Card  maintitle="Card one" subtitle="wow" />
        <Card  maintitle="Card one" subtitle="wow" />
        <Card  maintitle="Card one" subtitle="wow" />
        <Card  maintitle="Card one" subtitle="wow" />
        <Card  maintitle="Card one" subtitle="wow" />
        <Card  maintitle="Card one" subtitle="wow" />
        <Card  maintitle="Card one" subtitle="wow" />
        
        </div>
      
      
      </div>

      
      
      
     
      
      
      

      
        
      

        
      </main>

   
    </div>
  )
}

export default Home
