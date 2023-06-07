import { CounterTwoTypes } from "./CounterTwo.types"

function CounterTwo(props: CounterTwoTypes) {
  return (
    <div>
      <h1>CounterTwo</h1>
      <h2>{props.count}</h2>
      {props.incrementFn && <button onClick={props.incrementFn}>Increment</button>}
      {props.decrementFn && <button onClick={props.decrementFn}>Decrement</button>}
    </div>
  )
}

export default CounterTwo