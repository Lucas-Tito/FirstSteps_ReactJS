import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App(){
    return(
        <>
            <Header/>
            <Hero/>
            <Card 
                sold_out={true}
                img="zaferes_pic.png"
                rating="5.0"
                review_count={6}
                country="USA"
                title="Life lessons with Katie Zaferes"
                pricing={136}
            />
        </>
    )
}
