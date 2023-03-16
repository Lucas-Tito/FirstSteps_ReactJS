import MemeGenerator from "../utils/MemeGenerator"
import meme_placeholder from "../images/meme_placeholder.png"
import React from "react"
import memeData from "../memeData"

export default function Form(){

    const [allMemeImages, setMemeImages] = React.useState(memeData)

    const [meme, setRandomMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: meme_placeholder
    })
    
    function handleClick(){
        let memeGenerator = new MemeGenerator()

        setRandomMeme(prevMeme => ({
            ...prevMeme,
            randomImage: memeGenerator.getRandomMeme_img()
        }))
    }

    return(
        <>
            <div className="meme_form">
                <div className="input_container">
                    <input placeholder="Top text"></input>
                    <input placeholder="Bottom text"></input>
                </div>
                <button onClick={handleClick}>Get a new meme image 🖼️</button>
            </div>
            <div className="meme_container">
                <img src={meme.randomImage}/>
            </div>
        </>
    )
}