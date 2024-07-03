import {useState} from "react"
import contact_img from "../images/user.png"
import Star from "./Start"


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
                
                <Star
                    isFavorite = {contact.isFavorite}
                    handleClick = {toggleFavorite}
                />

                <h2>{`${contact.firstName} ${contact.lastName}`}</h2>
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
            </div>
        </div>
    )
}