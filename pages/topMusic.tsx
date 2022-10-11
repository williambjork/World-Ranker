import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import MusicCardList from '../components/MovieCardList'
import Sidebar from '../components/Sidebar'

type Props = {}

async function fetchMusic() {
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '248a69af1dmsh2bd4ec49697497ap14fbeejsn8814fc4068ee',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

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

            <button onClick={fetchMusic}>fetch</button>
              
                
              <MusicCardList music={data} /> 
 

            </div>
          </main>
        </div>
  )
}

export async function getStaticProps() {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '248a69af1dmsh2bd4ec49697497ap14fbeejsn8814fc4068ee',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks', options)
        .then(response => response.json())
        .then(response => console.log(response))
        
        return {
          props: { data : data.results },
        }
      } 

export default topMusic