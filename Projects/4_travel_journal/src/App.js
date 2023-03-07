import Card from "./components/Card";
import Header from "./components/Header";
import travel_data from "./travel_data";

export default function App(){
    let card_elements = travel_data.map(function(data){
        return(
            <Card
                key={data.id}
                data={data}
            />
        )
    })
    return(
        <>
            <Header/>
            <div className="cards_container">
                {card_elements}
            </div>
            
        </>
    )
}