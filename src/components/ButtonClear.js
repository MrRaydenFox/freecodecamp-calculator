import '../stylesheets/ButtonClear.css'

const ButtonClear = (props) => (
  <button className='button-clear' onClick={props.manageClick}>
    {props.children}
  </button>
)

export default ButtonClear