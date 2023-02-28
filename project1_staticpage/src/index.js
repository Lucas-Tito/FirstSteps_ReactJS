import ReactDOM from "react-dom"
import "./index.css"


function Header(){
    return (
    <header>
        <div className="logoContainer">
            <img className="logo" src={require("./images/react.svg").default}/> 
            <span>ReactFacts</span>
        </div>
        <nav>
            <ul className="nav_links">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
    )
}

function UnorderedList(){
    return(
        <div className="UnorderedList">
            <h1>Reason I'm excited about React</h1>
            <ul>
                <li>React is very hireable</li>
                <li>React is composable</li>
                <li>React is declarative</li>
                <li>React code looks clean and fresh!</li>
            </ul>
        </div>
    )
}

function Footer(){
    return (
        <footer>
            <div className="footerContent">
                <p className="message">God bless those in need</p>
                <p>&copy; 2023<span> Lucas Tito </span>development. All rights reserved.</p>
            </div>
        </footer>
    )
}


function FullPage(){
    return(
    <>
        <Header/>
        <UnorderedList/>
        <Footer/>
    </>
    )
}

ReactDOM.createRoot(document.querySelector("#root")).render(<FullPage/>)