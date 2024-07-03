import React from "react"

export default function Counter(){
    let [counter, setCounter] = React.useState(0)
    
    function add(){
        setCounter((prevValue) => ++prevValue)
    }

    function reduce(){
        setCounter((prevValue) => --prevValue)
    }

    return(
        <div className="counter_container">
            <div className="display">
                <spam>{counter}</spam>
            </div>
            <button className="reduce_btn" onClick={reduce}>-</button>
            <button className="add_btn" onClick={add}>+</button>
        </div>
    )
}
    
    