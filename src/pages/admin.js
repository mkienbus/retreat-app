import Link from 'next/link'
import LoginForm from './components/LoginForm'
import styles from '@/styles/admin.module.css'

export default function Admin(){

    return(
        <>
            <Link href="/">Home</Link>
            <div className = {styles.adminLogin}>
                <h2>Administrator portal</h2>
                <LoginForm />
            </div>
            <footer>
                Need to register as an administrator?
                <br/>
                Contact webmaster <Link href="/ContactWebmaster">here</Link>
            </footer>
        </>
    )
}