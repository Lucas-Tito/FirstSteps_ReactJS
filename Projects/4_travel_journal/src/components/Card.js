import location_icon from "../images/location_icon.svg"

export default function Card(props){
    return(
        <div className="card_root">
            <div className="card_container">
                <img className="location_img" src={props.data.imageUrl}/>

                <div className="card_description">

                    <div className="location_n_maps">
                        <img src={location_icon}/>
                        <span>{(props.data.location).toUpperCase()}</span>
                        <a href={props.data.googleMapsUrl}>View on Google Maps</a>
                    </div>

                    <h1 className="card_title">{props.data.title}</h1>

                    <div className="card_date">
                        <span className="startDate">{props.data.startDate}</span>
                        <span> - </span>
                        <span className="endDate">{props.data.endDate}</span>
                    </div>

                    <div className="card_text_description">
                        <span>{props.data.description}</span>
                    </div>
                    
                </div>
                
            </div>
            <hr/>
        </div>
    )
}