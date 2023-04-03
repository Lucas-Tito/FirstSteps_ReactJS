import { useState } from "react"
import WindowTracker from "./components/WindowTracker"

export default function App(){

    const [show, setShow] = useState(true)

    return(
        <>
            <button>Toggle WindowTracker</button>
            {show && <WindowTracker/>} 
        </>
    )
}