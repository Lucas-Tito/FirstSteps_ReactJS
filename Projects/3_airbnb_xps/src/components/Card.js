import zaferes_pic from "../images/zaferes_pic.png"
import rating_star from "../images/rating_star.png"

export default function Card(){
    return(
        <div className="card_container">
            <span className="product_situation">SOLD OUT</span>
            <img src={zaferes_pic}/>
            <div className="description_container">
                <div className="rating">
                    <img src={rating_star}/>
                    <span id="score">5.0 </span>
                    <span id="secondary_rating">(6)•USA</span>
                </div>
                <p className="description">Life lessons with Katie Zaferes</p>
                <div className="pricing_container">
                    <span className="pricing"><b>From $136/</b> person</span>
                </div>
            </div>
        </div>
    )
}