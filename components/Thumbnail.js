import Image from "next/image"

function Thumbnail(props) {
  return (
    <div className="hover:blur-sm relative overflow-hidden w-full h-full">
      <div>
        <Image layout="responsive" src={props.image} height={100} width={200}/>
        </div>
    </div>
  )
}

export default Thumbnail