import { createSlice } from '@reduxjs/toolkit'

interface product {
  id: null
  created_at: string
  name: string
  category: string
  price: number
  image: string
  user: string
}

const initialState: product[] = []

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProduct: (state, action) => {
      action.payload.forEach((m: product) => {
        const findProduct = state.find((p) => p.id === m.id)
        if (findProduct != null) {
          return []
        } else {
          state.push(m)
        }
      })
    }
  }
})

export const { getProduct } = productSlice.actions
