
function SidebarButton(props) {
  return (
    <div className="hover:bg-gray-700 px-4 py-2 rounded">
            <button className="flex items-center space-x-2  ">
                
                
                    {props.icon} 
                

                <div className="flex-nowrap">
                    <h3>{props.title}</h3>
                </div> 

            </button>
        </div>
  )
}

export default SidebarButton