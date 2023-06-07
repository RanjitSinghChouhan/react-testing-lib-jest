import { useState } from "react"
import { useCounterType } from "./useCounter.types";

function useCounter({initialCount = 0}: useCounterType = {}) {
    const [count, setCount] = useState(initialCount);

    const increment = () => setCount(count+1);
    const decrement = () => setCount(count-1);
    
    return {count, increment, decrement}
}

export default useCounter