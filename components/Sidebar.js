import { HomeIcon } from '@heroicons/react/24/solid'
import { BookmarkIcon } from '@heroicons/react/24/solid'
import { CloudIcon } from '@heroicons/react/24/solid'
import { UserIcon } from '@heroicons/react/24/solid'
import { CakeIcon } from '@heroicons/react/24/solid'

import SidebarButton from "./SidebarButton"
import User from "./User"

function Sidebar() {
  return (
    <div className="h-screen overflow-y-scroll border-r border-gray-900 px-2 py-2
                    text-sm lg:text-sm text-white scrollbar-hide
                    sm:max-w-[15rem] lg:max-w-[18rem]   left-3 bg-black">
        <div className="">

        <User />

        

        
        <SidebarButton icon={<HomeIcon className="w-6 h-6"/>} title="Game Pass"/>
        <SidebarButton icon={<BookmarkIcon className="w-6 h-6"/>} title="My Library"/>
        <SidebarButton icon={<CloudIcon className="w-6 h-6"/>} title="Cloud Gaming"/> 
        <SidebarButton icon={<UserIcon className="w-6 h-6" />} title="Community"/>
        <SidebarButton icon={<CakeIcon className="w-6 h-6"/>} title="Store"/>         

            <div className="flex items-center space-x-3  text-gray-400 pl-2 pt-9">
            <p>Installerad</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar