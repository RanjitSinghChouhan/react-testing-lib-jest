type greetProp = {
  name?: String,
}
function Greet(props: greetProp) {
  return (
    <div>Hello {props.name ? props.name : "Guest"}</div>
  )
}

export default Greet