import { useEffect, useState } from "react"

export default function WindowTracker(){

    let [windowWidth, setWindowWidth] = useState(window.innerWidth)

    
    useEffect(()=>{
        function watchWidth(){
            setWindowWidth(()=>window.innerWidth)
        }

        window.addEventListener("resize", watchWidth)

        //clean up function (it's called when the component is unmounted)
        return function() {
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    return(
        <>
            <h1>Window width: {windowWidth}</h1>
        </>
    )
}