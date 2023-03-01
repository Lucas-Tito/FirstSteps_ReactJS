import email_icon from "../images/email_icon.svg"
import linkedin_icon from "../images/linkedin_icon.svg"

export default function Contact_Btns(){
    return(
        <div className="contact_btns">
            <button id="email" href="">
                <img id="email_icon" src={email_icon}/>
                <span>Email</span>
            </button>

            <button id="linkedin" href="">
                <img id="linkedin_icon" src={linkedin_icon}/>
                <span>LinkedIn</span>
            </button>
        </div>
    )
}