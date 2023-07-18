import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  email: string | null
  userId: number | null
  login: boolean
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: null,
    userId: null,
    login: false
  },
  reducers: {
    addUser: (state, action) => {
      const { email, id } = action.payload
      state.email = email
      state.userId = id
      state.login = true
    },

    onSession: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
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
      state.userId = null
      state.login = false
    }
  }
})
export const { addUser, onSession } = authSlice.actions
