import ReactDOM from "react-dom"

import "./index.css"
import Header from "./components/Header"
import UnorderedList from "./components/UnorderedList"
import Footer from "./components/Footer"


function App(){
    return(
    <>
        <Header/>
        <UnorderedList/>
        <Footer/>
    </>
    )
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App/>)