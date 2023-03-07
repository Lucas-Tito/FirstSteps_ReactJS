import MemeGenerator from "../utils/MemeGenerator"

export default function Form(){
    function handleClick(){
        let randomMeme_img = new MemeGenerator().getRandomMeme_img()
        console.log(randomMeme_img)
    }

    return(
        <div className="meme_form">
            <div className="input_container">
                <input placeholder="Top text"></input>
                <input placeholder="Bottom text"></input>
            </div>
            <button onClick={handleClick}>Get a new meme image 🖼️</button>
        </div>
    )
}