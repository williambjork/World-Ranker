<<<<<<< HEAD
import { HomeIcon } from '@heroicons/react/24/solid'
=======
import { FilmIcon, HomeIcon, MusicalNoteIcon, PuzzlePieceIcon } from '@heroicons/react/24/solid'
>>>>>>> 02686284714b3a96867d6f551a99339c0c64f342
import { BookmarkIcon } from '@heroicons/react/24/solid'
import { CloudIcon } from '@heroicons/react/24/solid'
import { UserIcon } from '@heroicons/react/24/solid'
import { CakeIcon } from '@heroicons/react/24/solid'
import { motion } from "framer-motion";
import Logo from "./Logo"


import SidebarButton from "./SidebarButton"
import User from "./User"

function SidebarInit(props) {

  

  return (
    <motion.div 
    initial={{
      x: -200,
      opacity: 1,
      scale: 1,
    }}
    animate={{
      x: 0,
      opacity: 1,
      scale: 1,
    }}
    transition={{
      duration: 1,
      ease: [0, 0.71, 0.2, 1.01]
    }}
    className="h-screen overflow-y-scroll border-r border-gray-900 px-5 py-2
                    text-sm lg:text-sm text-white scrollbar-hide  min-w-max
                    sm:max-w-[17rem] lg:max-w-[20rem]  left-3 bg-black">
        <div className="">
       
      <motion.div
      initial={{
        x: 0,
        opacity: 0,
        scale: 1,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        
        duration: 2,
      }} className="pb-6 pt-6">
        <Logo />
      </motion.div>
        
       {/* <User /> */}

      <motion.div>
        <motion.div
        initial={{
          x: -200,
          opacity: 1,
          scale: 1,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.3,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01]
        }}>
<<<<<<< HEAD
          <SidebarButton icon={<HomeIcon className="w-6 h-6"/>} url="/home" title="POOOOOO"/>
=======
          <SidebarButton icon={<HomeIcon className="w-6 h-6"/>} url="/home" title="Home"/>
>>>>>>> 02686284714b3a96867d6f551a99339c0c64f342
        </motion.div>

        <motion.div
        initial={{
          x: -200,
          opacity: 1,
          scale: 1,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.3,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01]
        }}>
<<<<<<< HEAD
          <SidebarButton icon={<BookmarkIcon className="w-6 h-6"/>} url="/topGames" title="Top Games"/>
=======
          <SidebarButton icon={<PuzzlePieceIcon className="w-6 h-6"/>} url="/topGames" title="Games"/>
>>>>>>> 02686284714b3a96867d6f551a99339c0c64f342
        </motion.div>

        <motion.div
        initial={{
          x: -200,
          opacity: 1,
          scale: 1,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.3,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01]
        }}>
<<<<<<< HEAD
          <SidebarButton icon={<CloudIcon className="w-6 h-6"/>} url="/worstGames" title="Shit Games"/> 
=======
          <SidebarButton icon={<FilmIcon className="w-6 h-6"/>} url="/topMovies" title="Movies"/> 
>>>>>>> 02686284714b3a96867d6f551a99339c0c64f342
        </motion.div>

        <motion.div
        initial={{
          x: -200,
          opacity: 1,
          scale: 1,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.3,
          delay: 0.4,
          ease: [0, 0.71, 0.2, 1.01]
        }}>
<<<<<<< HEAD
        <SidebarButton icon={<UserIcon className="w-6 h-6" />} title="Community"/>
=======
        <SidebarButton icon={<MusicalNoteIcon className="w-6 h-6" />} url="/topMusic" title="Music"/>
>>>>>>> 02686284714b3a96867d6f551a99339c0c64f342
        </motion.div>
        
        <motion.div
        initial={{
          x: -200,
          opacity: 1,
          scale: 1,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.3,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}>
        <SidebarButton icon={<CakeIcon className="w-6 h-6"/>} title="Free Cake"/>         
      </motion.div>
      </motion.div>
            <div className="flex items-center space-x-3  text-gray-400 pl-2 pt-9">
            
            </div>
        </div>
    </motion.div>
  )
}

export default SidebarInit