import { createSlice } from '@reduxjs/toolkit'

interface product {
  id: null
  created_at: string
  name: string
  category: string
  image: string
  user: string
}

const initialState: product[] = [

]

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProduct: (state, action) => {
      action.payload.forEach((m: product) => { state.push(m) })
    }
  }
})

export const { getProduct } = productSlice.actions
