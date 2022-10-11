import React from 'react'
import SidebarInit from '../components/SidebarInit'
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {}

function home({}: Props) {

  const [text, count] = useTypewriter({
    words: ["using 3 different APIs", "helping you find the best anything", 
            "for my portfolio", "for fun", "for the hell of it", "for the horde",
          "convincing you to hire me", "that looks pretty neat"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <main className=" bgmeshdark flex">
            <SidebarInit /> 
    
            <div className=" h-screen w-screen overflow-hidden overflow-y-scroll scrollbar-hide">
              
             
    
              <div className="flex justify-center font-eurostile text-3xl text-white pt-9 pb-2">
                
              </div>
              
              
              <h2 className="text-white font-oswald">An API implementation {text}</h2>

          
              
            </div>
          </main>
  )
}

export default home