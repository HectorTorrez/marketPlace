import { type Action, type ThunkDispatch } from '@reduxjs/toolkit'
import { addUser } from '.'
import { type RootState } from '..'

interface userProps {
  email: string | null | undefined
  id: string | null | undefined
}

export const getUser = (email: userProps, id: userProps) => {
  return async (dispatch: ThunkDispatch<RootState, unknown, Action>) => {
    dispatch(addUser({ email, id }))
  }
}
