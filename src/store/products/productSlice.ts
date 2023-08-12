import { createSlice } from '@reduxjs/toolkit'

export interface product {
  id: string
  created_at: string
  name: string
  category: string
  price: number
  image: string
  user_id: string

}

const initialState: product[] = []
const userProduct: product[] = []

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: initialState,
    searchTerm: '',
    category: '',
    date: '',
    price: '',
    userProducts: userProduct

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
    },

    filterByUser: (state, action) => {
      console.log(action.payload)
      const data = state.products.filter((product) => product.id === action.payload)
      console.log(data)
    }
  }
})

export const { getProduct, filterProduct, filterByCategory, filterByDate, filterByPrice, filterByUser } = productSlice.actions
