import { useRouter } from "next/router"

function SidebarButton(props) {

  const router = useRouter();

  return (
    <div className="hover:bg-gray-700 hover:neumo1 px-4 py-2 rounded">
            <button onClick={() => {router.push(props.url)}} className="flex items-center space-x-2  ">
                
                
                    {props.icon} 
                

                <div className="flex-nowrap">
                    <h3>{props.title}</h3>
                </div> 

            </button>
        </div>
  )
}

export default SidebarButton