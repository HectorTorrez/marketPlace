import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  name: string | null
  email: string | null
  userId: number | null
  isLoading: boolean
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    name: null,
    email: null,
    userId: null,
    isLoading: false
  },
  reducers: {
    addUser: (state, action) => {
      const { name, email, userId } = action.payload
    }
  }
})
export const { } = authSlice.actions
