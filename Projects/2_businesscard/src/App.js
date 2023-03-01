import Photo_and_Name from "./components/Photo_and_Name"
import Contact_Btns from "./components/Contact_Btns"

export default function App(){
    return(
        <>
            <div className="card">
                <Photo_and_Name/>
                <Contact_Btns/>
            </div>
        </>
    )
}