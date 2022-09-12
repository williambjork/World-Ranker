
function SidebarButton(props) {
  return (
    <div className="hover:bg-gray-700 px-4 py-2 rounded">
            <button className="flex items-center space-x-2  ">
                {props.icon}  
                <h3 className="">{props.title}</h3>
            </button>
        </div>
  )
}

export default SidebarButton