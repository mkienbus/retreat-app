import Link from 'next/link'
import LoginForm from './components/LoginForm'
import styles from '@/styles/admin.module.css'

export default function Admin(){

    return(
        <>
            <div className = {styles.adminLogin}>
                <Link href="/">Home</Link>
                <h2>Administrator portal</h2>
                <LoginForm />
                <footer>
                    <Link href="/">Logout</Link>
                </footer>
            </div>
        </>
    )
}