import linkedin_icon from "../images/linkedin_icon_footer.svg"
import github_icon from "../images/github_icon.svg"

export default function Card_Footer(){
    return(
        <div className="footer_container">
            <img id="github_icon" src={github_icon}/>
            <img id="linkedin_icon" src={linkedin_icon}/>
        </div>
    )
}