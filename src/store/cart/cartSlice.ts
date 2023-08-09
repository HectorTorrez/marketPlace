import { createSlice } from '@reduxjs/toolkit'
interface cart {
  id: string
  image: string
  title: string
  price: number
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
    }
  }
})

export const { addToCart } = cartSlice.actions
