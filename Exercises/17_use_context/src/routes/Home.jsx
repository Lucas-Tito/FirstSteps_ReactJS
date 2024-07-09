import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export default function Home() {
    
    const {theme, toggleTheme} = useContext(ThemeContext)

    return(
        <>
            <h1>Home</h1>
            <button onClick={toggleTheme}>Mudar Tema</button>
            <p>O tema atual é: {theme}</p>
        </>
    )
}