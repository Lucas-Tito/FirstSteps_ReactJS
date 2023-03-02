import photo_grid from "../images/photo-grid.png"

export default function Hero(){
    return (
    <div className="hero_container">
        <img src={photo_grid}/>
        <div className="text_container">
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by 
                one-of-a-kind hosts—all without leaving home.</p>
        </div>
    </div>
    )
}