import { createSlice } from '@reduxjs/toolkit'

interface product {
  name: string
  category: string
  image: string
}

const initialState: product[] = [
  {
    name: '',
    category: '',
    image: ''
  }
]

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProduct: (state, action) => {
      console.log(action)
    }
  }
})

export const { getProduct } = productSlice.actions
