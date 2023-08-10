import { createSlice } from '@reduxjs/toolkit'
export interface cart {
  id: string
  img: string
  name: string
  priceFormatted: number
  quantity: number
}

const initialState: cart[] = []
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: initialState
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id)
      if (itemInCart != null) {
        itemInCart.quantity++
      } else {
        state.cart.push({ ...action.payload, quantity: 1 })
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload)
      state.cart = removeItem
    }
  }
})

export const { addToCart, removeItem } = cartSlice.actions
