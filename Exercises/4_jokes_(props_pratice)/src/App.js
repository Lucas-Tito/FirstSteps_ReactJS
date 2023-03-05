import Joke from "./components/Joke";

export default function App(){
    return(
        <>
            <h1>Joke of The Day 🃏</h1>
            <Joke 
                setup="why the chicken crossed the road?"
                punchline="to kick someone's baby"    
            />
            <Joke 
                setup="why the fox crossed the road?"
                punchline="to brutalize a old woman passing by"  
            />
            <Joke
                setup="knock knock... who's there?"
                punchline="LAPD you are under arrest for drink driving!"  
            />
        </>
    )
}