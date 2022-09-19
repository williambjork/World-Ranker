import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Image from "next/image";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const [games, setGames] = useState([]);



  async function fetchGames() {
    const url =
      "https://api.rawg.io/api/games?key=f6d4a95732b6497e929238e5994121e6&dates=2019-09-01,2019-09-30&platforms=18,1,7";
    const response = await fetch(url);
    const data = await response.json();
    setGames(data.results);
    console.log(games);
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" flex">
        <Sidebar />

        <div className="bgmesh h-screen w-screen overflow-hidden overflow-y-scroll scrollbar-hide">
          <Header />
          <button onClick={fetchGames}>Fetch</button>

          <div className="flex justify-center text-3xl text-white pt-9 pb-2">
            <h2>Upcoming Games</h2>
          </div>
          <div className="container mx-auto p-6 grid grid-cols-3 gap-4 ">
            {games.map((game) => (
              <div>
                <Card
                  metacritic={game.metacritic}
                  key={game.id}
                  maintitle={game.name}
                  subtitle={game.released}
                  image={game?.background_image}
                />
               
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
