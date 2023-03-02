import React from "react"
import linkedin_icon from "../images/linkedin_icon_footer.svg"
import github_icon from "../images/github_icon.svg"



export default function Card_Footer(){
    return(
        <div className="footer_container">
            <img id="github_icon" src={github_icon} onClick={setup_github_link()}/>
            <img id="linkedin_icon" src={linkedin_icon} onClick={setup_linkedin_link()}/>
        </div>
    )
}


function setup_github_link(){
    return function(){
        window.location.href = ("https://github.com/Lucas-Tito")
    }
}

function setup_linkedin_link(){
    return function(){
        window.location.href = ("https://www.linkedin.com/in/lucas-tito-530997211/")
    }
}