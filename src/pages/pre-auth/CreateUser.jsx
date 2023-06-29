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
    await supabase.auth.signUp({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })
    console.log({firstName, lastName, email, password}),
    router.refresh()
  }

//  REMOVED SIGN IN AND SIGN OUT FROM THIS SECTION 
//   const handleSignIn = async () => {
//     await supabase.auth.signInWithPassword({
//       email,
//       password,
//     })
//     router.refresh()
//   }

//   const handleSignOut = async () => {
//     await supabase.auth.signOut()
//     router.refresh()
//   }

  return (
    <>
        <Link href="/">Home</Link>
        <div className={styles.formContainer}>
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
            {/* <button onClick={handleSignIn}>Sign in</button> */}
            {/* <button onClick={handleSignOut}>Sign out</button> */}
        </div>
    </>
  )
}