import Home from './index.js'
import Link from 'next/link'

export default function createUser(){

    return(
        <>
            <Link href="/">Home</Link>
            <h2>Create new user form</h2>
            <footer>
                <Link href="/">Logout</Link>
            </footer>
        </>
    )
}