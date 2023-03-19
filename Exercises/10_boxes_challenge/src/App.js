import boxesData from "./boxesData"
import Box from "./components/Box"
import { useState } from "react"

export default function App(){

    const [boxes, setBoxes] = useState(boxesData)

    function toggleOn(id){
        // code run trough current boxes array and find the box that matches the id in the parameter, thant updates it
        // then that change is stored in the newBoxes array
        setBoxes((prevBoxes) => {
            let newBoxes = []

            prevBoxes.forEach(box => {
                if(box.id === id)
                    newBoxes.push({
                        ...box,
                        on:!box.on
                    })
                else
                    newBoxes.push(box)
            })

            return newBoxes
        })
    }

    let box_elements = boxes.map(function(box){
        return(
            <Box
                key={box.id}
                data={box}
                toggleOn={toggleOn}
            />
        )
    })

    return(
        <>
        <h1>Boxes will go here</h1>
        <div className="boxes_container">
            {box_elements}
        </div>
        </>
    )
}