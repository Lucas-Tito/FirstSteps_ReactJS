import { useState } from "react"

export default function Form(){
    const [formData, setFormData] = useState(
        {
            email:"",
            password:"",
            confirmPassword:"",
            joinedNews:false
        })

    function handleChange(event){
        const {name, value, type, checked} = event.target

        setFormData((prevFormData)=>{
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()

        if(formData.password !== formData.confirmPassword)
            console.log("password doesn't match")
        else{
            console.log("Welcome")

            if(formData.joinedNews)
                console.log("Thanks for signing for the newsletter!")
        }
            
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />

            <input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />

            <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
            />

            <div className="checkbox">
                <input
                    id="joinNews"
                    type="checkbox"
                    name="joinedNews"
                    checked={formData.joinedNews}
                    onChange={handleChange}
                />

                <label htmlFor="joinNews">I want to join the newsletter</label>
            </div>

            <button>Sign Up</button>
        </form>
    )
}