import { createSlice } from '@reduxjs/toolkit'

export interface product {
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
  initialState: {
    products: initialState,
    searchTerm: '',
    category: '',
    date: '',
    price: ''
  },
  reducers: {
    getProduct: (state, action) => {
      action.payload.forEach((m: product) => {
        const findProduct = state.products.find((p) => p.id === m.id)
        if (findProduct != null) {
          return []
        } else {
          return {
            products: state.products.push(m)
          }
        }
      })
    },

    filterProduct: (state, action) => {
      state.searchTerm = action.payload
    },

    filterByCategory: (state, action) => {
      state.category = action.payload
    },

    filterByDate: (state, action) => {
      state.date = action.payload
    },
    filterByPrice: (state, action) => {
      state.price = action.payload
    }
  }
})

export const { getProduct, filterProduct, filterByCategory, filterByDate, filterByPrice } = productSlice.actions
