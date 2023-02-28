import reactLogo from "../images/react.svg"

export default function Header(){
    return (
        <header>
            <div className="logoContainer">
                <img className="logo" src={reactLogo}/> 
                <span>ReactFacts</span>
            </div>
            <nav>
                {/* <ul className="nav_links">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul> */}
                <h4>React Course - Project 1</h4>
            </nav>
        </header>
    )
}