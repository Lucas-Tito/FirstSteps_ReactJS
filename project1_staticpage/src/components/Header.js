export default function Header(){
    return (
        <header>
            <div className="logoContainer">
                <img className="logo" src={require("../images/react.svg").default}/> 
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