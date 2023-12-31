import { createSlice } from '@reduxjs/toolkit'
export interface cart {
  id: string
  img: string
  name: string
  price: number
  quantity: number
}

const initialState: cart[] = (() => {
  const cart = localStorage.getItem('applicationState')
  if (cart != null) return JSON.parse(cart).cart.cart
  return []
})()

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
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload)
      if (item != null) {
        item.quantity++
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload)
      if (item != null) {
        if (item.quantity === 1) {
          item.quantity = 1
        } else {
          item.quantity--
        }
      }
    }
  }
})

export const { addToCart, removeItem, incrementQuantity, decrementQuantity } = cartSlice.actions
