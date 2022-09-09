import { useState } from "react"
import Checkbox from "./Checkbox"

function handleCheckbox() {
    console.log("click")
}

function Main() {

    const [price, setPrice] = useState();

  return (
    <a class="relative block p-8 border border-gray-100 shadow-xl rounded-xl" href="">
 

  <div class="mt-4 text-gray-500 sm:pr-8">
   
     

    <h5 class="mt-4 text-xl font-bold text-gray-900">Pizza Time!</h5>

    <p class="hidden mt-2 text-sm sm:block">
      Your pizza is: {price}
    </p>

    <Checkbox title="Pepperoni" cost={1} handleCheckbox={handleCheckbox}/>
    <Checkbox title="Cheese" cost={3}/>
    <Checkbox title="Bacon" cost={7}/>
    <Checkbox title="Kebab" cost={10}/>
  </div>
</a>

  )
}

export default Main