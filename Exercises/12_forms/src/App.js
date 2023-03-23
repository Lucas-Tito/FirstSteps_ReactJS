import {useState} from "react"

export default function App(){

    const [firstName, setFirstName] = useState("")

    function handleChange(event){
        setFirstName(() =>{
            return event.target.value
        })
    }

    return(
        <>
            <form>
                <input type="text" placeholder="First Name" onChange={handleChange}></input>
            </form>

            <h3>{firstName}</h3>
        </>
    )
}