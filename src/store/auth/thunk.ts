import { type Dispatch } from 'react'
import { checkingCredentials } from './authSlice'
import { supabase } from '../../supabase/client'

interface CreatinUser {
  email: string
  password: string
  displayName: string
}

export const checkingAuthentication = () => {
  return async (dispatch: Dispatch<unknown>) => {
    dispatch(checkingCredentials())
  }
}

export const startCreatingUserWithEmailPassword = ({ email, password }: CreatinUser) => {
  return async (dispatch: Dispatch<unknown>) => {
    dispatch(checkingCredentials())

    try {
      const result = await supabase.auth.signInWithPassword({
        email,
        password

      })
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }
}

// export const startGoogleSignIn = () => {
//   return async (dispatch: Dispatch<unknown>) => {
//     dispatch(checkingCredentials())
//   }
// }
