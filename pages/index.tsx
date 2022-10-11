import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import CardList from "../components/CardList";
import { useRouter } from "next/router";
import Image from "next/image";
import globeblack from "../src/images/WorldRanker2-white.png";


const Home: NextPage = () => {
  const router = useRouter();

  

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bgmeshdark flex radial-gradient">
        
       

        <div className=" pb-5 flex flex-col justify-center items-center h-screen w-screen  scrollbar-hide">
          
        <Image src={globeblack}  priority={true}  height={400} width={840} />
          
        <button className="text-white font-oswald hover:underline  pt-9"
                onClick={() => {router.push("/home")}}>Enter</button>

                
          
        </div>
      </main>
    </div>
  );
};


export default Home;
