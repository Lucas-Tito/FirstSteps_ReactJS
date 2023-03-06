import Joke from "./components/Joke";
import jokesData from "./jokesData";

export default function App(){
    let jokeElements = jokesData.map(function(joke){
        return(
            <Joke
                setup={joke.setup}
                punchline={joke.punchline}
            />
        )
    })
    
    return(
        <>
            <h1>Jokes of The Day 🃏</h1>
            {jokeElements}
        </>
    )
}