import {useState} from "react"
import contact_img from "../images/user.png"
import star_filled from "../images/star-filled.png"
import star_empty from "../images/star-empty.png"


export default function Contact_card(){
    let [contact, setContact] = useState({
        firstName: "Lucas",
        lastName: "Tito",
        phone:"+1 (719) 555-1212",
        email: "lucastito.contato@gmail.com",
        isFavorite: false
    })

    function toggleFavorite(){
        setContact((prevContact) => {
            return{
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }
    
    return(
        <div className="contact_container">
            <img className="contact_img" src={contact_img}></img>
            <div className="contact_info">
                <button onClick={toggleFavorite}>
                    <img 
                        className="contact_star" 
                        src={contact.isFavorite ? star_filled : star_empty}>
                    </img>
                </button>

                <h2>{`${contact.firstName} ${contact.lastName}`}</h2>
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
            </div>
        </div>
    )
}