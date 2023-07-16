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
    }
  }
})
export const { addUser } = authSlice.actions
