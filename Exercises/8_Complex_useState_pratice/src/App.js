import { useState } from "react"

export default function App(){
    let [items, setItem ] = useState(["item 1", "item 2"])
    
    function AddItem(){
        setItem((prevItems) => [...prevItems, `item ${prevItems.length+1}`])
    }

    return(
        <>
            <button onClick={AddItem}><h1>Add Item</h1></button>
            {items.map(item => <p>{item}</p>)}
        </>      
    )
}

