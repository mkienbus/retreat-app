import Link from 'next/link'

export default function Admin(){

    return(
        <>
            <Link href="/">Home</Link>
            <h2>Administrator portal</h2>
            <footer>
                <Link href="/">Logout</Link>
            </footer>
        </>
    )
}