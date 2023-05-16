import Link from 'next/link'
import CreateUserForm from './components/createUserForm'

export default function CreateUser(){

    return(
        <>
            <Link href="/">Home</Link>
            <CreateUserForm />
        </>
    )
}