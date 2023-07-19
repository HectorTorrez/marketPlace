import { type ThunkDispatch } from 'redux-thunk'
import { getProduct } from './productSlice'
import { type RootState } from '..'
import { type Action } from '@reduxjs/toolkit'
interface product {
  name: string
  category: string
  image: string
}
export const getProducts = (product: product[] | null) => {
  return async (dispatch: ThunkDispatch<RootState, unknown, Action>) => {
    dispatch(getProduct(product))
  }
}
