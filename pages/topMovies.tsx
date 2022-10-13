import Head from 'next/head';
import React from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MovieCardList from '../components/MovieCardList';

type Props = {}


function topMovies({data} : Props) {

 console.log(data)
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
                <h2>Movies</h2>
              </div>

              

              <MovieCardList movies={data} /> 

            </div>
          </main>
        </div>
      );
    };



export default topMovies

export async function getStaticProps() {
  const url =
"https://api.themoviedb.org/3/movie/top_rated?api_key=6d0fa2197867b2f5e0c1ed6a22813e94&language=en-US&page=1";
const response = await fetch(url);
const data = await response.json();




  
  
  return {
    props: { data : data.results },
  }
} 

/*   export async function getStaticProps() {

  const url =
  "https://api.rawg.io/api/games?key=f6d4a95732b6497e929238e5994121e6&metacritic=95,100";
const response = await fetch(url);
const data = await response.json();
  
    return {
      props: { data : data.results,
              next : data.next },
    }
  } */
