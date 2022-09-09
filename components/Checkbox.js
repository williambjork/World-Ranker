function Checkbox(props) {

  return (
    <div>
        <input
        id="game"
        type="checkbox"
        name={props.title}
        className="w-5 h-5 border-gray-300 rounded"
        onChange={props.handleOnChange}
        
        />

        <label  className="ml-3 text-sm font-medium"> {props.title} </label>

  </div>
  )
}

export default Checkbox