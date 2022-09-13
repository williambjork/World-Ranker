import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from "../components/Sidebar"
import { useState } from 'react'
import Header from "../components/Header"
import Carousel from "../components/Carousel"
import Card from "../components/Card"


const Home: NextPage = () => {

  const [games, setGames] = useState({})

  function fetchGames() {

    
    
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '248a69af1dmsh2bd4ec49697497ap14fbeejsn8814fc4068ee',
        'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
        'platforms': 4
      }
    };
    
    fetch('https://rawg-video-games-database.p.rapidapi.com/games?key=f6d4a95732b6497e929238e5994121e6', options)
      .then(response => response.json())
      .then(response => setGames(response))
      .catch(err => console.error(err));
    
      
  }

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
      
      <Card  maintitle="Card one" subtitle="wow" />
      <Card maintitle="Card two" subtitle="ok" />
      <Card maintitle="Card three" subtitle="cool" />
      </div>
        
      

      
        
      

        
      </main>

   
    </div>
  )
}

export default Home
