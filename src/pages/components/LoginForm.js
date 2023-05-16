import { useState } from 'react'
import styles from '@/styles/loginForm.module.css'

export default function LoginForm(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    function handleSubmit(){
        console.log("submitted")
    }

    return(
        <>
        <div id = "login">
                <form onSubmit = {handleSubmit}>
                    {/* {error ? <span>{error}</span> : <span></span>} */}
                    <br></br>
                    <label htmlFor="email">Email:</label>
                    <input 
                    type = "email" 
                    id = "email"
                    value = {email}
                    onChange = {e => setEmail(e.target.value)}/>
                    <br></br>
                    <label htmlFor="password">Password: </label>
                    <input
                    type = "password"
                    value = {password}
                    onChange = {e => setPassword(e.target.value)}/>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}