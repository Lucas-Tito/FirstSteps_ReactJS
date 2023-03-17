import boxesData from "./boxesData"
import Box from "./components/Box"

export default function App(){

    let box_elements = boxesData.map(function(box){
        return(
            <Box
                key={box.id}
                data={box}
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