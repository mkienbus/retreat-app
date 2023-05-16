import Link from 'next/link'
import styles from '@/styles/login.module.css'

export default function Login(){

    return(
        <>
            <Link href="/">Home</Link>
            <h2>Existing user login form</h2>
            <footer>
                <Link href="/">Logout</Link>
            </footer>
        </>
    )
}