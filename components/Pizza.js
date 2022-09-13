import { useState } from "react"
import Checkbox from "./Checkbox"
import { toppings } from "../utils/toppings";




function Pizza() {

    const handleOnChange = (position) => {
        const updatedCheckedState = isChecked.map((item, index) => 
        index === position ? !item : item)

        setIsChecked(updatedCheckedState);
    }
    

    const [price, setPrice] = useState();
    const [isChecked, setIsChecked] = useState(
        new Array(toppings.length).fill(false)
    );


  return (
    <a className="relative block p-8 border border-gray-100 shadow-xl rounded-xl" href="">
 

  <div className="mt-4 text-gray-500 sm:pr-8">
   
     

    <h5 className="mt-4 text-xl font-bold text-gray-900">Pizza Time!</h5>

    <p className="hidden mt-2 text-sm sm:block">
      Your pizza is: {price}
    </p>

    <p>Check box is {isChecked ? "checked" : "no checked"}</p>

    <Checkbox title="Pepperoni" cost={1} handleOnChange={handleOnChange} isChecked={isChecked}/>
    <Checkbox title="Cheese" cost={3}/>
    <Checkbox title="Bacon" cost={7}/>
    <Checkbox title="Kebab" cost={10}/>
  </div>
</a>

  )
}

export default Pizza