import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import ThemeContext from "./components/ThemeContext";

export default function App() {

    const [dark_mode, setDark_mode] = useState(false)

    console.log(dark_mode);

    return (
        <ThemeContext.Provider value={dark_mode}>
            <div className="container">
                <Navbar changeThemeHandler={setDark_mode}/>
                <Main />
            </div>
        </ThemeContext.Provider>
    )
}