import React from "react"
import email_icon from "../images/email_icon.svg"
import linkedin_icon from "../images/linkedin_icon.svg"

export default function Contact_Btns(){
    return(
        <div className="contact_btns">
            <button id="email" onClick={setup_email_link()}>
                <img id="email_btn_icon" src={email_icon}/>
                <span>Email</span>
            </button>
           
            <button id="linkedin" onClick={setup_linkedin_link()}>
                <img id="linkedin_btn_icon" src={linkedin_icon}/>
                <span>LinkedIn</span>
            </button>
        </div>
    )
}

function setup_email_link(){
    return function(){
        window.location.href = ("mailto:lucastito.contato@gmail.com")
    }
}

function setup_linkedin_link(){
    return function(){
        window.location.href = ("https://www.linkedin.com/in/lucas-tito-530997211/")
    }
}
    


