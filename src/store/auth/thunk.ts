import { Dispatch } from "@reduxjs/toolkit"
import { checkingCredentials } from "./authSlice"



export const checkingAuthentication = (): ((dispatch: Dispatch) => void) => {
    return async( dispatch ) => {
        dispatch(checkingCredentials())
    }
}