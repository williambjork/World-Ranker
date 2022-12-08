import Head from 'next/head';
import React from 'react'
import CardList from '../components/CardList';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

type Props = {}

function search({data}: Props) {
    const router = useRouter();

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
                <h2>Games</h2>
              </div>
              
              <CardList games={data} />

              

          
              
            </div>
          </main>
        </div>
      );
}

export default search