import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import card_data from "./card_data";

export default function App(){
    let card_elements = card_data.map( function(data){
        return(
            <Card

                key={data.id}
                //sold out attribute tells to card component if content is sold out
                sold_out={
                    data.openSpots == 0 ? true : false
                }
                img={data.coverImg}
                rating={data.stats.rating}
                review_count={data.stats.reviewCount}
                country={data.location}
                title={data.title}
                pricing={data.price}
            />
        )
    })
    return(
        <>
            <Header/>
            <Hero/>
            <div className="cards_container">
                {card_elements}
            </div> 
        </>
    )
}
