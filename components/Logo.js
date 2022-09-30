import globe from "../src/images/WorldRanker2-white.png";
import Image from "next/image";

function Logo() {
  return (
    <Image src={globe} layout="responsive" priority="true"  height={95} width={180} />
  )
}

export default Logo