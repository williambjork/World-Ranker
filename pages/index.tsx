import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import CardList from "../components/CardList";
import { useRouter } from "next/router";
import Image from "next/image";
import globeblack from "../src/images/globelobe-black.png";

const Home: NextPage = ({ games }) => {
  const router = useRouter();

  console.log(games);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" flex">
        
        <Sidebar />

        <div className="bgmesh justify-center items-center h-screen w-screen overflow-hidden overflow-y-scroll scrollbar-hide">
          
        <Image src={globeblack}  priority="true"  height={400} width={840} />
          

          
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const url =
    "https://api.rawg.io/api/games?key=f6d4a95732b6497e929238e5994121e6&dates=2020-09-12,2022-07-30";
  const response = await fetch(url);
  const games = await response.json();

  return {
    props: { games: games.results },
  };
}

export default Home;
