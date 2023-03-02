import airbnb_logo from "../images/airbnb_logo.svg"

export default function Header(){
    return(
        <header>
            <div className="logo_container">
                <img src={airbnb_logo}/>
            </div>
        </header>
    )
}
