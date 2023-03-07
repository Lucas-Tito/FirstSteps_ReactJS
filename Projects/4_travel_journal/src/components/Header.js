import world_logo from "../images/world_logo.svg"

export default function Header(){
    return(
        <header>
            <img src={world_logo}/>
            <span>my travel journal.</span>
        </header>
    )
}