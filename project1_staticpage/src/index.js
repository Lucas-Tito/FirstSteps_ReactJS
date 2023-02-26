import ReactDOM from "react-dom/client"
import "./index.css"

const pageContent = (
    <div>
    {/* without require and default the img doesn't render for some reason */}
    <img src={require('./images/react.svg').default} className="logo"/>

    <h1>Fun facts about React</h1>
    <ul>
        <li>Was first released in 2013</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
    </div>
)

ReactDOM.createRoot(document.querySelector("#root")).render(pageContent)
