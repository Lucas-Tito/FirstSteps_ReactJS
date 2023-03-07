import smile_logo from "../images/smile_logo.svg"

export default function Header(){
    return(
        <header>
            <div className="logo">
                <img className="logo_img" src={smile_logo}/>
                <span>Meme Generator</span>
            </div>
            <span className="title">React Course - Project 3</span>
        </header>
    )
}