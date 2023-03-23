import {useState} from "react"

export default function App(){
    const [messages, setMessages] = useState(["I'm breaking up with you !", 
                                                    "my son, you are a 40 year old man that still lives with his parents, Get out of this house!!!!"])

    return(
        <>
            {(messages.length > 0) ?    
              <h2>You have {messages.length} unread {messages.length > 1 ? "messages" : "message"}!</h2>
              :<h2>You are all caught up</h2>}
        </>
    )
}