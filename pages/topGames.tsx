import React from 'react'
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Router, useRouter } from "next/router";
import  useFetch  from "../hooks/useFetch"
import CardList from '../components/CardList';
type Props = {}

<<<<<<< HEAD
function topGames({games, next}: Props) {
=======
function topGames({data, next} : Props) {
>>>>>>> 02686284714b3a96867d6f551a99339c0c64f342

  const router = useRouter();

  console.log(data)
    return (
        <div>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className="bgmeshdark flex">
            <Sidebar /> 
    
            <div className=" h-screen w-screen overflow-hidden overflow-y-scroll scrollbar-hide">
              <Header />
             
    
              <div className="flex justify-center font-eurostile text-3xl text-white pt-9 pb-2">
<<<<<<< HEAD
                <h2>Top Games</h2>
              </div>
              
              <CardList games={games} />
=======
                <h2>Games</h2>
              </div>
              
              <CardList games={data} />
>>>>>>> 02686284714b3a96867d6f551a99339c0c64f342

              

          
              
            </div>
          </main>
        </div>
      );
    };

    export async function getStaticProps() {

      const url =
      "https://api.rawg.io/api/games?key=f6d4a95732b6497e929238e5994121e6&metacritic=95,100";
    const response = await fetch(url);
    const data = await response.json();
      
        return {
<<<<<<< HEAD
          props: { games : data.results,
=======
          props: { data : data.results,
>>>>>>> 02686284714b3a96867d6f551a99339c0c64f342
                  next : data.next },
        }
      }

export default topGames

