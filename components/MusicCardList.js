import React from 'react'
import MusicCard from './MusicCard'
import { motion } from "framer-motion";

function MusicCardList({music}) {
    console.log(music)
    console.log(music[0].trackMetadata.trackName )
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
            
          
            {music.map((artist, i) => (
              <motion.div
              initial={{
                x: -20,
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                type: 'spring',
                duration: 1,
                delay: i * 0.1
              }}
                >

                <MusicCard
                  maintitle={artist.trackMetadata.trackName }
                  image={artist.trackMetadata.displayImageUri}
                  /*}
                  key={artist.id}
                  subtitle={artist.release_date}
                  
            */
                  
                /> 
               
              </motion.div>
              
            ))}
            <div className="flex br-3" >
                <button>next</button>
              </div>
          </div>
  )
}

export default MusicCardList