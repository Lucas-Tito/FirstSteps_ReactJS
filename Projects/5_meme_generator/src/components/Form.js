import MemeGenerator from "../utils/RandomNumber"
import meme_placeholder from "../images/meme_placeholder.png"
import React from "react"
import memeData from "../memeData"
import RandomNumber from "../utils/RandomNumber"

export default function Form(){

    React.useEffect(() => {
        //fetch does a request from the api asynchronously
        fetch("https://api.imgflip.com/get_memes")
            //here we transform the response in json (which is asynchronously too)
            .then(res => res.json())
            //here we start to manage the data from the request
            .then(data => setAllMemes(data.data.memes))
    }, [])


    const [allMemes, setAllMemes] = React.useState(memeData)

    const [meme, setRandomMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: meme_placeholder
    })

    function handleChange(event){
        const {name, value} = event.target

        setRandomMeme((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    
    function handleClick(){
        
        setRandomMeme(prevMeme => ({
            ...prevMeme,
            randomImage: allMemes[RandomNumber()].url
        }))
    }

    return(
        <>
            <div className="meme_form">
                <div className="input_container">
                    <input 
                        name="topText"
                        value={meme.topText}
                        placeholder="Top text"
                        onChange={handleChange}>
                    </input>

                    <input 
                        name="bottomText"
                        value={meme.bottomText}
                        placeholder="Bottom text"
                        onChange={handleChange}>
                    </input>

                </div>
                <button onClick={handleClick}>Get a new meme image 🖼️</button>
            </div>
            <div className="meme_container">
                <h1 className="top_text">{meme.topText}</h1>
                <h1 className="bottom_text">{meme.bottomText}</h1>
                <img src={meme.randomImage}/>
            </div>
        </>
    )
}