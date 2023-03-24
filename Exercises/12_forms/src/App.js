import {useState} from "react"

export default function App(){

    const [formData, setFormData] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
            isRobot: true,
            employment:"",
            favColor:""
        })



    function handleChange(event){
        const {name, value, type, checked} = event.target

        setFormData((prevFormData)=>{
            return {
                ...prevFormData,
                // this way the target name is used to access a specif attribute
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event){
        // this function prevents the page from refreshing 
        event.preventDefault()
        console.log(formData)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                {/* each input receives a value property so it can be a controlled input (input value is driven by react) */}
                <input 
                    name="firstName"
                    type="text" 
                    placeholder="First Name" 
                    onChange={handleChange}
                    value={formData.firstName}
                >
                </input>

                <input 
                    name="lastName"
                    type="text" 
                    placeholder="Last Name" 
                    onChange={handleChange}
                    value={formData.lastName}
                >
                </input>

                <input 
                    name="email"
                    type="email" 
                    placeholder="Email" 
                    onChange={handleChange}
                    value={formData.email}
                >
                </input>

                <textarea 
                    value={formData.comments}
                    onChange={handleChange}
                    placeholder="Your comments go here"
                    name="comments"
                />

                <input 
                    type="checkbox" 
                    name="isRobot"
                    id="isRobot" 
                    checked={formData.isRobot} 
                    onChange={handleChange}
                />
                <label htmlFor="isRobot">Are you a Robot?</label>


                <fieldset>
                    <legend>Current employment status</legend>

                    <input
                        type="radio"
                        id="unemployed"
                        name="employment"
                        value="unemployed"
                        onChange={handleChange}
                        checked={formData.employment === "unemployed"}
                    />
                    <label htmlFor="unemployed">Unemployed</label>

                    <input
                        type="radio"
                        id="employed"
                        name="employment"
                        value="employed"
                        onChange={handleChange}
                        checked={formData.employment === "employed"}
                    />
                    <label htmlFor="unemployed">Employed</label>

                </fieldset>


                <select
                    id="favColor"
                    value={formData.favColor}
                    onChange={handleChange}
                    name="favColor"
                >

                    <option value=""> ---Choose--- </option>
                    <option value="red"> Red </option>
                    <option value="yellow"> Yellow </option>
                    <option value="black"> Black </option>
                    
                </select>

                <button>Submit</button>
            </form>

            <h3>{formData.firstName}</h3>
            <h3>{formData.lastName}</h3>
            <h3>{formData.email}</h3>
            <h3>{formData.comments}</h3>
        </>
    )
}