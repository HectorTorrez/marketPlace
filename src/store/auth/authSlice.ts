import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  status: null | string
  uid: null | string
  email: null | string
  displayName: null | string
  errorMessage: null | string

}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
    errorMessage: null
  },
  reducers: {
    login: (state, action) => {

    },

    logout: (state, action) => {

    },

    checkingCredentials: (state) => {
      state.status = 'checking'
    }

  }

})
export const { login, logout, checkingCredentials } = authSlice.actions
