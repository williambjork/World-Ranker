import Head from 'next/head';
import React from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CardList from '../components/CardList';

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

              <CardList games={games} />

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