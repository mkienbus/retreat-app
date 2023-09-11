'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import styles from '@/styles/createUserForm.module.css'

export default function Login() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const supabase = createClientComponentClient()

  const handleSignUp = async () => {
    //not redirecting to post auth page upon submission and email confirmation
        //below line is what is new on Supabase website
        await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
        data: {
          first_name: firstName,
          last_name: lastName,
        },
      },
    })
    console.log(email, firstName, lastName)
    router.refresh()
  }

  return (
    <>
        <Link href="/">Home</Link>
        <div className={styles.formContainer}>
          {/* Supabase was not receiving user input when using the 
          <form></form> and <button type="submit" method */}
          {/* <form onSubmit={handleSignUp}> */}
            <input placeholder="First name" name="firstName" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
            <input placeholder="Last name" name="lastName" onChange={(e) => setLastName(e.target.value)} value={lastName} />
            <input placeholder="Email address" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
            <input
                placeholder="Password (minimum of 6 characters)"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <button onClick={handleSignUp}>Sign up</button>
          {/* </form> */}
          <footer>
            Having issues registering?
            <br/>
            Contact webmaster <Link href="/pre-auth/ContactWebmaster">here</Link>
          </footer>
        </div>
    </>
  )
}