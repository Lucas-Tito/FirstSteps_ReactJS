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
                data={data}
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
