import { useState } from "react"
import WindowTracker from "./components/WindowTracker"

export default function App(){

    const [show, setShow] = useState(true)

    function toggle(){
        setShow((prevState) => !prevState)
    }

    return(
        <>
            <button onClick={toggle}>Toggle WindowTracker</button>
            {show && <WindowTracker/>} 
        </>
    )
}