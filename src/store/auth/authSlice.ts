import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type AuthState = {
    status: null | string,
    uid: null | string,
    email: null | string,
    displayName: null | string,
    photoURL: null | string,
    errorMessage: null | string

}



export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        uid: null, 
        email: null, 
        displayName: null, 
        photoURL: null, 
        errorMessage: null,  
    }
})