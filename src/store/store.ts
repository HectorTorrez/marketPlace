import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { productSlice } from './products/productSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    product: productSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
