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
                    text-xs lg:text-sm text-white scrollbar-hide
                    sm:max-w-[15rem] lg:max-w-[18rem]  pb-36 left-3 bg-black">
        <div className="">

        <User />

        
        <SidebarButton icon={<HomeIcon />} title="Game Pass"/>
        <SidebarButton icon={<BookmarkIcon />} title="Library"/>
        <SidebarButton icon={<CloudIcon />} title="Cloud Gaming"/> 
        <SidebarButton icon={<UserIcon />} title="Community"/>
        <SidebarButton icon={<CakeIcon />} title="Store"/>         

            <button className="flex items-center space-x-2 ">
            <p>Installerad</p>
            </button>
        </div>
    </div>
  )
}

export default Sidebar