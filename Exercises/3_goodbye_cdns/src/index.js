import React from "react"
import ReactDOM from "react-dom"


   const page_sample =( <div align="center">
        <h1>Hi</h1>
        <p>From now on I stopped using CDNs, which are those imports that we were using previously</p>
        <p><h5>this method that I'm using now uses npx from node</h5></p>
    </div>)
    
    // reactDOM interprets these jsx objects and turn them into DOM elements 
    ReactDOM.render(page_sample, document.querySelector("#root"))
    // using append we get only the to string of the object and not the DOM elements
    document.querySelector("#root").append(page_sample)
    console.log(page_sample)