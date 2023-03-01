import photo from "../images/myself.jpg"

export default function Photo_and_Name(){
    return (
        <div className="imageContainer">
            <img src={photo} />
            <div className="text">
                <h1>Lucas Tito</h1>
                <span id="profession">Software Developer</span>
                <span id="personal_website">lucastito.website</span>
            </div>
            
        </div>
    )
}