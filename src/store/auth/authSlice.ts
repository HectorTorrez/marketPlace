import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  email: string | null
  userId: string
  login: boolean
}

const initialState: AuthState = (() => {
  const persistedState = localStorage.getItem('applicationState')
  if (persistedState !== null) {
    const { auth } = JSON.parse(persistedState)
    return auth
  }
  return {
    email: null,
    userId: '',
    login: false
  }
})()

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { email, id } = action.payload
      state.email = email
      state.userId = id
      state.login = true
    },

    onSession: (state, action) => {
      if (action.payload === null) {
        state.login = false
      } else {
        state.login = true
        state.userId = action.payload?.user.id
        state.email = action.payload?.user.email
      }
    },
    logout: (state) => {
      state.email = null
      state.userId = ''
      state.login = false
    }
  }
})
export const { addUser, onSession } = authSlice.actions
