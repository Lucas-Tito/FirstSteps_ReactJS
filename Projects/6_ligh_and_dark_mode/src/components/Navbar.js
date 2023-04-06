import { useContext } from "react"
import react_icon_small from "../images/react-icon-small.png"
import ThemeContext from "./ThemeContext"

export default function Navbar(props) {

    function handleThemes(){
        props.changeThemeHandler((prevState)=>{
            let mode
            prevState === false? mode = true: mode = false
            return mode
        })
    }

    let dark_mode = useContext(ThemeContext)
    
    return (
         <nav 
            className={dark_mode ? "dark": ""}
            >
            <img 
                className="nav--logo_icon"
                src={react_icon_small}
            />
            <h3 className="nav--logo_text">ReactFacts</h3>
            
            <div 
                className="toggler" 
                onClick={handleThemes}
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}