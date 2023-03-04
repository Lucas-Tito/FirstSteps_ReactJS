import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App(){
    return(
        <>
            <Header/>
            <Hero/>
            <Card 
                product_situation="SOLD OUT"
                img="zaferes_pic.png"
                rating="5.0"
                secondary_rating="(6)•USA"
                description="Life lessons with Katie Zaferes"
                pricing="$136"
            />
        </>
    )
}
