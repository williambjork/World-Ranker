import Head from 'next/head';
import React from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MovieCardList from '../components/MovieCardList';

type Props = {}

function topMovies({movies}: Props) {
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
             
    
              <div className="flex justify-center text-3xl text-white pt-9 pb-2">
                <h2>Movies</h2>
              </div>

              <MovieCardList movies={movies} />

            </div>
          </main>
        </div>
      );
    };

    export async function getStaticProps() {
        const url =
    "https://api.themoviedb.org/3/movie/550?api_key=6d0fa2197867b2f5e0c1ed6a22813e94";
    const response = await fetch(url);
    const data = await response.json();
  
    
        
        
        return {
          props: { movies : data.results },
        }
      }

export default topMovies