import MemeGenerator from "../utils/MemeGenerator"
import meme_placeholder from "../images/meme_placeholder.png"
import React from "react"

export default function Form(){
    const [randomMeme_img, setRandomMeme] = React.useState(meme_placeholder)
    
    function handleClick(){
        setRandomMeme(new MemeGenerator().getRandomMeme_img())
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
                <img src={randomMeme_img}/>
            </div>
        </>
    )
}