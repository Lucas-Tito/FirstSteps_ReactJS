import star_filled from "../images/star-filled.png"
import star_empty from "../images/star-empty.png"

export default function Star(props){

    return(
        <button onClick={props.handleClick}>
            <img 
                className="contact_star" 
                src={props.isFavorite ? star_filled : star_empty}>
            </img>
        </button>
    )
}