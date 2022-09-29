import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import CardList from "../components/CardList";
import { useRouter } from "next/router";

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

        <div className="bgmesh h-screen w-screen overflow-hidden overflow-y-scroll scrollbar-hide">
          <Header />

          <div className="flex justify-center text-3xl text-white pt-9 pb-2">
            <h2>Upcoming Games</h2>
          </div>

          <CardList games={games} />
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
