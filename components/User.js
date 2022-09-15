import { BellIcon } from '@heroicons/react/24/solid'
import { UserIcon } from '@heroicons/react/24/solid'

function User() {
  return (
    <>
        <div className="flex space-4 hover:bg-gray-700 py-2 mb-3 rounded">

        <UserIcon className="w-6 h-6 mt-4 mr-2"/>
        
        <div className="justify-content ">
            
            <p className=" px-4 py-2 hocer:cursor-pointer">William Björk </p>
           {/*} <p className="pl-4 bg-white text-black text-xs">PC GAMES</p> */}
        </div>
        
            
            
      

        {/* <BellIcon className="w-7 h-7 mt-4 hover:bg-gray-700 rounded" /> */}

        </div>
        
    </>
  )
}

export default User