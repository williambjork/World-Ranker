import React from 'react'
import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import { motion } from "framer-motion";
import { fetchTopGames } from "../lib/loadGames"
import  useFetch  from "../hooks/useFetch"
import CardList from '../components/CardList';
type Props = {}

function topGames({games, next}: Props) {

  const router = useRouter();

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
                <h2>Top Games</h2>
              </div>
              
              <CardList games={games} />

              <div className="flex br-3" >
                <button onClick={() => {router.push(useFetch({next}))}}>next</button>
              </div>

          
              
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
          props: { games : data.results,
                  next : data.next },
        }
      }

export default topGames