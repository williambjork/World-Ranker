import Image from "next/image"

function Thumbnail(props) {
  return (
    <div className="bg-gray-600 bg-opacity-30 relative overflow-hidden w-full h-full">
      <div>
        <Image 
        className="fade-image" 
        layout="responsive" priority="true" objectFit="cover" src={props.image} height={100} width={200}/>
        </div>
    </div>
  )
}

export default Thumbnail

