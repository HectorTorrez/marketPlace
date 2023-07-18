import { type Action, type ThunkDispatch } from '@reduxjs/toolkit'
import { addUser, onSession } from '.'
import { type RootState } from '..'

export const getUser = (email: string | undefined, id: string | undefined) => {
  return async (dispatch: ThunkDispatch<RootState, unknown, Action>) => {
    dispatch(addUser({ email, id }))
  }
}

export const getSession = (session: any) => {
  return async (dispatch: ThunkDispatch<RootState, unknown, Action>) => {
    dispatch(onSession(session))
  }
}

export const logOut = () => {
  return async (dispatch: any) => {
    dispatch(logOut)
  }
}
