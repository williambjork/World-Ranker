import Image from "next/image"

function Thumbnail(props) {
  return (
    <div>
        <Image layout="responsive" src={game?.background_image} height={1080} width={1920}/>
    </div>
  )
}

export default Thumbnail