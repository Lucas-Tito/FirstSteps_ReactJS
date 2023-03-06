import rating_star from "../images/rating_star.png"

export default function Card(props){
    return(
        <div className="card_container">
            <span className="product_situation">
                {props.sold_out ? "SOLD OUT" : "ONLINE"}
            </span>

            <img src={require('../images/'+props.img)}/>

            <div className="description_container">
                <div className="rating">
                    <img src={rating_star}/>
                    <span id="score">{props.rating} </span>
                    <span id="secondary_rating">{"("+props.review_count+")" + "•" + props.country}</span>
                </div>

                <p className="title">{props.title}</p>
                <div className="pricing_container">
                    <span className="pricing"><b>From ${props.pricing}/</b> person</span>
                </div>
            </div>
        </div>
    )
}