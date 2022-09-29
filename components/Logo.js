import globe from "../src/images/globelobe-white.png";
import Image from "next/image";

function Logo() {
  return (
    <Image src={globe} layout="responsive" priority="true"  height={75} width={160} />
  )
}

export default Logo