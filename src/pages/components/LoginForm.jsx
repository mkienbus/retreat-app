import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import styles from '@/styles/createUser.module.css'
import {
    // Import predefined theme
    ThemeSupa,
  } from '@supabase/auth-ui-shared'

const supabase = createClient(
    'https://hmdjaftdjuwsgwzrhpef.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtZGphZnRkanV3c2d3enJocGVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzMTc3NDYsImV4cCI6MTk5Mzg5Mzc0Nn0.BHXLGuUoysTpPCy-ChXNudI336e8ylecTf6AQxbPXjI'
    )

export default function LoginForm(){

    return(
        <>
            <div className={styles.createUserFormParent}>
                {/* customize Auth component by overriding the theme 
                https://github.com/supabase/auth-ui/blob/main/packages/shared/src/theming/Themes.ts */}
                <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa,
                    variables: {
                        default: {
                          colors: {
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