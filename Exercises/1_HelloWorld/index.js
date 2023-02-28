
/* the function "render" has two parameters,
 * the first being the html code to render
 * second, where the html code will be rendered
*/
ReactDOM.render(
    <ul>
        <li>React can be used to write non-static web pages</li>
        <li>
        <details>
                <summary>React is composable</summary>
                <p>You can create your own html elements, which helps to reduce html code</p>
            </details>
        </li>
        <li>
            <details>
                <summary>It's Declarative</summary>
                <p>React simplifies it's code with it's built in functions</p>
            </details>
        </li>
    </ul>,
    document.querySelector("#root"))