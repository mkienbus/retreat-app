import Head from 'next/head'
import Link from 'next/link'
import LoginForm from './components/LoginForm'
import styles from '@/styles/Home.module.css'

export default function Home() {

  
  return (
    <>
      <Head>
        <title>Retreat Application</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <article>
        <div className={styles.existingLoginParent}>
          <div>
            <h2>
              Existing user login
            </h2>
          </div>
          <div className={styles.loginForm}>
            <LoginForm />
          </div>
        </div>
      </article>  
      <article>
        <div className={styles.createUserParent}>
          <Link href="/pre-auth/CreateUser">
            <h2>
              New user?
            </h2>
            <h4>
              Create an account here
            </h4>
          </Link>
        </div>
      </article>
      <article>
        <div className={styles.adminLoginParent}>
          <Link href="/pre-auth/Admin">
            <h2>
              Administrators
            </h2>
            <h4>
              Login here
            </h4>
          </Link>
        </div>
      </article>
    </>
  )
}