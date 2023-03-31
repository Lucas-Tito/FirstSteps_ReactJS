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