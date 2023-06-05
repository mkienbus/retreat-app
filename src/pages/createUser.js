import Link from 'next/link'
import CreateUserForm from './components/CreateUserForm'
import styles from '@/styles/createUser.module.css'

export default function CreateUser(){

    return(
        <>
            <Link href="/">Home</Link>
            <div className={styles.createUserFormParent}>
                <CreateUserForm />
            </div>
        </>
    )
}