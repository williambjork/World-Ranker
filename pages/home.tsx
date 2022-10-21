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
              
              <div className="flex justify-center">

              <div>

      
        <a
          href=""
          className="border-b-2  border-gray-600 relative block overflow-hidden bg-center rounded-xl "
        >
     

          

          <div className="relative  p-3 text-white bg-gray-600 bg-opacity-30">
            <h5 className="text-xl  truncate font-oswald">Testets</h5>
            <h2 className="text-white text-xl font-oswald">An API implementation {text}</h2>
            <p className="text-xs text-gray-300 truncate"></p>
          </div>
        </a>
      
      
    </div>
                
              </div>
          
              
            </div>
          </main>
  )
}

export default home