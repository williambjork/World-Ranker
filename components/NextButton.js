import { useRouter } from "next/router";

function NextButton({ data }) {

    const router = useRouter();

  const handleClick = () => {
    router.push(data.next)
  }
  
  return (
    <div>
        <button onClick={handelClick}>Next</button>
    </div>
  )
}

export default NextButton