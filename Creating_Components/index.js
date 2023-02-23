function NavBar(){
    return(
        <header>
            <img className="logo" src="images/react-logo.svg" alt="logo"/>            
            <nav>
                <ul className="nav-links">
                    <li><a href="#">Link</a></li>
                </ul>
            </nav>
            <button className="contact_btn">Contact</button>
        </header>
    )
}

function H1Greeting(){
    return(
        <h1 align="center">Let's Learn</h1>
    )
}

ReactDOM.render(
    <div>
        <NavBar/>
        <H1Greeting/>
    </div>
    , document.querySelector("#root")
)