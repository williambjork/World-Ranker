import Head from 'next/head';
import React from 'react'
import Card from '../components/Card';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { fetchWorstGames } from "../lib/loadGames"
import { motion } from "framer-motion";

type Props = {}

function worstGames({games}: Props) {
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
                <h2>Worst Games</h2>
              </div>
              <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
                {games.map((game : any) => (
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
              </div>
            </div>
          </main>
        </div>
      );
    };

    export async function getStaticProps() {
        const url =
    "https://api.rawg.io/api/games?key=f6d4a95732b6497e929238e5994121e6&metacritic=1,35";
    const response = await fetch(url);
    const data = await response.json();
  
    
        
        
        return {
          props: { games : data.results },
        }
      }

export default worstGames