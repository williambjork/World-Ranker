import { BellIcon } from '@heroicons/react/24/solid'
import { UserIcon } from '@heroicons/react/24/solid'

function User() {
  return (
    <>
        <div className="flex space-4 hover:bg-gray-700 py-2 rounded">

        <UserIcon className="w-6 h-5 mt-4 mr-6"/>
        
        <div className="justify-content ">
            
            <p className=" px-4 py-2 ">Delicious Donut  </p>
            <p className="pl-4 bg-white text-black">PC GAMES</p>
        </div>
        
            
            
      

        <BellIcon className="w-7 h-7 tr-3 hover:bg-gray-700 rounded" />

        </div>
        
    </>
  )
}

export default User