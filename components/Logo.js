import globe from "../src/images/WorldRanker2-white.png";
import Image from "next/image";

function Logo() {
  return (
    <Image src={globe} layout="relative" priority="true"  height={50} />
  )
}

export default Logo