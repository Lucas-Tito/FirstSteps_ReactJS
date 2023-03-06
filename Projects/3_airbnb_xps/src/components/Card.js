import rating_star from "../images/rating_star.png"

export default function Card(props){
    let badge_text
    if(props.sold_out === true)
        badge_text = "SOLD OUT"
    else if(props.country === "Online")
        badge_text = "ONLINE"
    else
        badge_text = "none"

    return(
        <div className="card_container">

            {
                // this section is rendering the img badge only if it is sold out or online
                badge_text !== "none" ? 
                    <span className="product_situation">
                        {badge_text}
                    </span>
                    : null
            }

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