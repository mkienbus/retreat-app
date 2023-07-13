import Link from 'next/link'
import LoginForm from '../components/LoginForm'
import styles from '@/styles/admin.module.css'

export default function Admin(){

    return(
        <>
            <Link href="/">Home</Link>
            <div className = {styles.adminLogin}>
                <h2>Administrator portal</h2>
                <LoginForm />
                <footer>
                Need to register as an administrator?
                <br/>
                Contact webmaster <Link href="/pre-auth/ContactWebmaster">here</Link>
            </footer>
            </div>
        </>
    )
}