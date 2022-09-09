function Checkbox(props) {

  return (
    <div>
        <input
        id="game"
        type="checkbox"
        name="type[game]"
        class="w-5 h-5 border-gray-300 rounded"
        onClick={props.handleCheckbox}
        />

        <label  class="ml-3 text-sm font-medium"> {props.title} </label>

  </div>
  )
}

export default Checkbox