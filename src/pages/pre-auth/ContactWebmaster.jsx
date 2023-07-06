import Link from "next/link";
import ContactForm from "../components/ContactForm"

export default function ContactWebmaster(){

    return(
        <>
            <Link href="/">Home</Link>
            <div>
                <ContactForm />
            </div>
        </>
    )
}