import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { fetchGames } from "../lib/loadGames"
import { trackPromise} from 'react-promise-tracker';


const Home: NextPage = ({games}) => {
  

const router = useRouter();

console.log(games)



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
         

          <div className="flex justify-center text-3xl text-white pt-9 pb-2">
            <h2>Upcoming Games</h2>
          </div>
          <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
            
          
            {games.map((game: any) => (
              <motion.div
              initial={{
                x: -200,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                type: 'spring',
                duration: 1,
              }}
                >
                <Card
                  metacritic={game.metacritic}
                  key={game.id}
                  maintitle={game.name}
                  subtitle={game.released}
                  image={game?.background_image}
                  
                />
               
              </motion.div>

              

              
            ))}
            <div className="flex br-3" >
                <button>next</button>
              </div>
          </div>

          

        </div>

        
      </main>
    </div>
  );
};

export async function getStaticProps() {
  
  
  const data = await fetchGames();
  
  
  
  return {
    props: { games : data.results },
  }
}

export default Home;
