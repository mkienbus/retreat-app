import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

// export async function GET(req) {
  export default function GET(req) {
  const supabase = createRouteHandlerClient({ cookies })
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')

  if (code) {
    supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(new URL('http://localhost:3000/post-auth/UserAccount', req.url))
}