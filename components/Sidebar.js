import { HomeIcon } from '@heroicons/react/24/solid'
import { BookmarkIcon } from '@heroicons/react/24/solid'
import { CloudIcon } from '@heroicons/react/24/solid'
import { UserIcon } from '@heroicons/react/24/solid'
import { CakeIcon } from '@heroicons/react/24/solid'
import { PuzzlePieceIcon } from '@heroicons/react/24/solid'
import { FilmIcon } from '@heroicons/react/24/solid'
import { MusicalNoteIcon } from '@heroicons/react/24/solid'
import Logo from "./Logo"


import SidebarButton from "./SidebarButton"
import User from "./User"

function Sidebar(props) {

  

  return (
    <div className="h-screen overflow-y-scroll border-r border-gray-900 px-5 py-2
                    text-sm lg:text-sm text-white scrollbar-hide  min-w-max
                    sm:max-w-[17rem] lg:max-w-[20rem]  left-3 bg-black">
        <div className="">
       
      <div className="pb-6 pt-6">
        <Logo />
      </div>
        
       {/* <User /> */}

        <SidebarButton icon={<HomeIcon className="w-6 h-6"/>} url="home" title="Home"/>
        <SidebarButton icon={<PuzzlePieceIcon className="w-6 h-6"/>} url="topGames" title="Games"/>
        <SidebarButton icon={<FilmIcon className="w-6 h-6"/>} url="topMovies" title="Movies"/> 
        <SidebarButton icon={<MusicalNoteIcon className="w-6 h-6" />} url="topMusic" title="Music"/>
        <SidebarButton icon={<CakeIcon className="w-6 h-6"/>} title="Free Cake"/>         

            <div className="flex items-center space-x-3  text-gray-400 pl-2 pt-9">
            
            </div>
        </div>
    </div>
  )
}

export default Sidebar