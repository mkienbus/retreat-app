import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import styles from '@/styles/createUser.module.css'
import {
    // Import predefined theme
    ThemeSupa,
  } from '@supabase/auth-ui-shared'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export default function LoginForm(){

    return(
        <>
            <div className={styles.createUserFormParent}>
            {/* https://supabase.com/docs/guides/auth/auth-helpers/nextjs */}
                {/* customize Auth component by overriding the theme 
                https://github.com/supabase/auth-ui/blob/main/packages/shared/src/theming/Themes.ts */}
                <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa,
                    variables: {
                        default: {
                          colors: {
                            inputLabelText: 'gray',
                            inputText: 'gray'
                          },
                        },
                      }, 
                    }}
                //would be nice to include social providers, have to register through them to include on the site
                //need Client ID and Secret
                //providers={["google", "facebook"]}
                providers={null}
                />
            </div>
        </>
    )
}
// https://supabase.com/docs/guides/auth/auth-helpers/nextjs
// look into client side sign in method:
// const handleSignIn = async () => {
//   await supabase.auth.signInWithPassword({
//     email,
//     password,
//   })
//   router.refresh()
// }
