import {useState} from "react"

export default function App(){

    const [formData, setFormData] = useState({
                                                firstName:"",
                                                lastName:""
                                            })

    function handleChange(event){
        let newFormData

        setFormData((prevFormData)=>{
            event.target.name === "firstName" ?
                        newFormData = {...prevFormData, firstName:event.target.value}
                        :newFormData = {...prevFormData, lastName:event.target.value}

            return newFormData
        })
    }

    return(
        <>
            <form>
                <input 
                    name="firstName"
                    type="text" 
                    placeholder="First Name" 
                    onChange={handleChange}>
                </input>

                <input 
                    name="lastName"
                    type="text" 
                    placeholder="Last Name" 
                    onChange={handleChange}>
                </input>
            </form>

            <h3>{formData.firstName}</h3>
            <h3>{formData.lastName}</h3>
        </>
    )
}