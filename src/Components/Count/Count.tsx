import { CountProps } from "./Count.types"

const Count = ({count, handleInc, handleDec}: CountProps) => {
    return(
        <>
            <h1>Counter again</h1>
            <p>{count}</p>
            <button onClick={handleInc}>Increment</button>
            <button onClick={handleDec}>Decrement</button>
        </>
    )
}

export default Count