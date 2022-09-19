import Image from "next/image"

function Thumbnail(props) {
  return (
    <div>
        <Image layout="responsive" src={props.image} height={100} width={200}/>
    </div>
  )
}

export default Thumbnail