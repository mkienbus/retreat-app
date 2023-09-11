import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import AccountForm from '../components/AccountForm'

export default async function Account() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <>
      <h1>User Account Landing</h1>
      {/* <AccountForm session={session} /> */}
    </>
  )
}