import { useState } from "react"

export default function Box(props){

    var styles = {
        backgroundColor: "transparent"
    }

    if(props.data.on){
        var styles = {
            backgroundColor: "grey"
        }
    }

    

    return(
        // you have to use the onClick like that to pass a parameter
        <button className="box_container" onClick={()=>props.toggleOn(props.data.id)} style={styles}>

        </button>
    )
}