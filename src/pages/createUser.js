import Link from 'next/link'
import CreateUserForm from './components/CreateUserForm'
import AuthForm from './components/AuthForm'
import styles from '@/styles/createUser.module.css'
import { Auth } from '@supabase/auth-ui-react'

export default function CreateUser(){

    return(
        <>
            <Link href="/">Home</Link>
            <div className={styles.createUserFormParent}>
                <AuthForm />
                {/* <CreateUserForm /> */}
            </div>
        </>
    )
}