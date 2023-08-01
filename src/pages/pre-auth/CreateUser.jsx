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
      const {data, error} = await supabase.auth.signUp({
        // first_name: firstName,
        // last_name: lastName,
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
    console.log("data: " + data.user)
    console.log("error: " + error.message)
    console.log("err status:" + error.status)
    console.log("err stack: " + error.stack)
    router.refresh()
  }

  return (
    <>
        <Link href="/">Home</Link>
        <div className={styles.formContainer}>
          <form onSubmit={handleSignUp}>
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
            <button type="submit">Sign up</button>
          </form>
          <footer>
            Having issues registering?
            <br/>
            Contact webmaster <Link href="/pre-auth/ContactWebmaster">here</Link>
          </footer>
        </div>
    </>
  )
}