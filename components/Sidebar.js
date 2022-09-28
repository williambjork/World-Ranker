import { HomeIcon } from '@heroicons/react/24/solid'
import { BookmarkIcon } from '@heroicons/react/24/solid'
import { CloudIcon } from '@heroicons/react/24/solid'
import { UserIcon } from '@heroicons/react/24/solid'
import { CakeIcon } from '@heroicons/react/24/solid'


import SidebarButton from "./SidebarButton"
import User from "./User"

function Sidebar(props) {

  

  return (
    <div className="h-screen overflow-y-scroll border-r border-gray-900 px-2 py-2
                    text-sm lg:text-sm text-white scrollbar-hide  min-w-max
                    sm:max-w-[15rem] lg:max-w-[18rem]  left-3 bg-black">
        <div className="">

        <User />

        
        <SidebarButton icon={<HomeIcon className="w-6 h-6"/>} url="/" title="Home"/>
        <SidebarButton icon={<BookmarkIcon className="w-6 h-6"/>} url="/topGames" title="Top Games"/>
        <SidebarButton icon={<CloudIcon className="w-6 h-6"/>} url="/worstGames" title="Shit Games"/> 
        <SidebarButton icon={<UserIcon className="w-6 h-6" />} title="Community"/>
        <SidebarButton icon={<CakeIcon className="w-6 h-6"/>} title="Free Cake"/>         

            <div className="flex items-center space-x-3  text-gray-400 pl-2 pt-9">
            <p>Installerad</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar