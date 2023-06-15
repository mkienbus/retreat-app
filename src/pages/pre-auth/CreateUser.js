import Link from 'next/link'
// import CreateUserForm from './components/CreateUserForm'
import AuthForm from '../components/AuthForm'
import styles from '@/styles/createUser.module.css'

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