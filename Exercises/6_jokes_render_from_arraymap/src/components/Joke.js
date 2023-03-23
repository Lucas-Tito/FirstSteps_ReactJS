import { useState } from "react"

export default function Joke(props){
    const [isShown, setIsShown] = useState(true)

    function handleClick(){
        setIsShown((prevState) => {
            return !prevState
        })
    }

    return(
        <div className="joke">
            {isShown && <h3>{props.setup + " " + props.punchline}</h3>}
            <button onClick={handleClick}>{isShown ? "hide" : "show"}</button>
        </div>
        
    )
}