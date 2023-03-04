import rating_star from "../images/rating_star.png"

export default function Card(props){
    return(
        <div className="card_container">
            <span className="product_situation">{props.product_situation}</span>
            <img src={require('../images/'+props.img)}/>
            <div className="description_container">
                <div className="rating">
                    <img src={rating_star}/>
                    <span id="score">{props.rating} </span>
                    <span id="secondary_rating">{props.secondary_rating}</span>
                </div>
                <p className="description">{props.description}</p>
                <div className="pricing_container">
                    <span className="pricing"><b>From {props.pricing}/</b> person</span>
                </div>
            </div>
        </div>
    )
}