import { useState } from 'react'
import Header from "./Header"
import Carousel from "./Carousel"
import Card from "./Card"


function Main() {

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

 fetchGames()
 console.log(games)

  return (
    <div className="bgmesh h-screen w-screen overflow-hidden">
      
      <Header />
      
      <Card  maintitle="Card one" subtitle="wow" />
      <Card maintitle="Card two" subtitle="ok" />
      <Card maintitle="Card three" subtitle="cool" />
      </div>

   
  )
}

export default Main