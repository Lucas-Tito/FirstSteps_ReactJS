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
                    <span>(6)•USA</span>
                </div>
                <p className="description">Life lessons with Katie Zaferes</p>
                <div className="pricing_container">
                    <span className="before/">From $136/ </span>
                    <span className="after/">person</span>
                </div>
            </div>
        </div>
    )
}