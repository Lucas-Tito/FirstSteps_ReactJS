import memeData from "../memeData"

export default class MemeGenerator{

    getRandomMeme_img(){
        let randomNumber = Math.floor(Math.random() * 100)

        return memeData.data.memes[randomNumber].url
    }
}

