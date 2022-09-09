import { useState } from "react"
import Checkbox from "./Checkbox"

const [price, setPrice] = useState(0);

function Main() {
  return (
    <a class="relative block p-8 border border-gray-100 shadow-xl rounded-xl" href="">
 

  <div class="mt-4 text-gray-500 sm:pr-8">
   
     

    <h5 class="mt-4 text-xl font-bold text-gray-900">Pizza Time!</h5>

    <p class="hidden mt-2 text-sm sm:block">
      Your pizza is: {price}
    </p>

    <Checkbox title="Pepperoni"/>
    <Checkbox title="Cheese"/>
    <Checkbox title="Bacon"/>
    <Checkbox title="Kebab"/>
  </div>
</a>

  )
}

export default Main