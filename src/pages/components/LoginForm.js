import { useState } from 'react'
import styles from '@/styles/loginForm.module.css'

export default function LoginForm(){

    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        fetch("https://3953e582-af0f-4061-86bd-2043f989be0e.mock.pstmn.io",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(r => {
            if(r.ok){
                // r.json().then(user => setUser(user))
                console.log(r)
            }
            else {
                r.json().then(error => setError(error.error)).then(setEmail(''),setPassword(''))
            }
        })
    }

    return(
        <>
            <div className={styles.loginFormContainer}>
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
                    id = "password"
                    value = {password}
                    onChange = {e => setPassword(e.target.value)}/>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}