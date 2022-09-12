import { HomeIcon } from '@heroicons/react/24/solid'
import { BookmarkIcon } from '@heroicons/react/24/solid'
import { CloudIcon } from '@heroicons/react/24/solid'
import { UserIcon } from '@heroicons/react/24/solid'
import { CakeIcon } from '@heroicons/react/24/solid'

function Sidebar() {
  return (
    <div className="h-screen overflow-y-scroll border-r border-gray-900 px-2 py-2
                    text-xs lg:text-sm text-white scrollbar-hide
                    sm:max-w-[15rem] lg:max-w-[18rem]  pb-36 left-3 bg-black">
        <div className="">

        <div className="hover:bg-gray-700 px-4 py-2 rounded">
            <button className="flex items-center space-x-2  ">
                <HomeIcon className=""  />
                <h3 className="">Game Pass</h3>
            </button>
        </div>

        <div className="hover:bg-gray-700 px-4 py-2 rounded">
            <button className="flex items-center space-x-2 ">
                <BookmarkIcon />
                <h3>My Library</h3>
            </button>
        </div>

        <div className="hover:bg-gray-700 px-4 py-2 rounded"></div>
            <button className="flex items-center space-x-2 ">
                <CloudIcon />
                <h3>Cloud Gaming</h3>
            </button>
        </div>

        <div className="hover:bg-gray-700 px-4 py-2 rounded">
            <button className="flex items-center space-x-2 ">
                <UserIcon />
                <h3>Community</h3>
            </button>
        </div>

        <div className="hover:bg-gray-700 px-4 py-2 rounded">
            <button className="flex items-center space-x-2 ">
                <CakeIcon />
                <h3>Store</h3>
            </button>
            </div>
         

            <button className="flex items-center space-x-2 ">
            <p>Installerad</p>
            </button>
        </div>
  )
}

export default Sidebar