import { useEffect, useState } from "react"

export default function App(){
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount((prevCount) => ++prevCount)
    }

    useEffect(() => {
        console.log("sus")
    }, [count])

    return(
        <>
            <div className="counter">
                <h3>The count is {count}</h3>
                <button onClick={handleClick}>Add</button>
            </div>
        </>
    )
}