import Link from "next/link";
import { useRouter } from "next/router"

function SidebarButton({url, icon, title}) {

  const router = useRouter();

  return (
    <div className="flex items-center space-x-2 font-semibold font-oswald  hover:bg-gray-700 hover:neumo1 px-4 py-2 rounded">
          <Link href={`/${url}`}>
           
                
                
                    {icon} 
                

                <div className="flex-nowrap">
                    <h3>{title}</h3>
                </div> 

            
            
           </Link>
        </div>
  )
}

export default SidebarButton