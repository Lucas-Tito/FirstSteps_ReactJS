import reactIconLarge from "../images/react-icon-large.png"

export default function UnorderedList(){
    return(
        <div className="UnorderedList">
            <h1>Reason I'm excited about React</h1>
            <ul>
                <li>React is very hireable</li>
                <li>React is composable</li>
                <li>React is declarative</li>
                <li>React code looks clean and fresh!</li>
            </ul>
            <img className="background_logo" src={reactIconLarge}/>
        </div>
    )
}