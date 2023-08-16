import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { productSlice } from './products/productSlice'
import { cartSlice } from './cart/cartSlice'

const persistedState = (store: any) => (next: any) => (action: any) => {
  next(action)
  localStorage.setItem('applicationState', JSON.stringify(store.getState()))
}

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    product: productSlice.reducer,
    cart: cartSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistedState)

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
