import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: {} // { [id]: { id, name, price, thumbnail, qty } }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const p = action.payload
      if (!state.items[p.id]) {
        state.items[p.id] = { id: p.id, name: p.name, price: p.price, thumbnail: p.thumbnail, qty: 1 }
      }
      // If already exists, we do nothing; add button stays disabled per spec.
    },
    increment: (state, action) => {
      const id = action.payload
      if (state.items[id]) state.items[id].qty += 1
    },
    decrement: (state, action) => {
      const id = action.payload
      if (!state.items[id]) return
      state.items[id].qty -= 1
      if (state.items[id].qty <= 0) delete state.items[id]
    },
    remove: (state, action) => {
      const id = action.payload
      delete state.items[id]
    },
    clear: (state) => {
      state.items = {}
    }
  }
})

export const { addToCart, increment, decrement, remove, clear } = cartSlice.actions

export const selectCartItems = (state) => Object.values(state.cart.items)
export const selectIsInCart = (id) => (state) => Boolean(state.cart.items[id])
export const selectTotalCount = (state) => Object.values(state.cart.items).reduce((sum, it) => sum + it.qty, 0)
export const selectTotalCost = (state) => Object.values(state.cart.items).reduce((sum, it) => sum + it.qty * it.price, 0)

export default cartSlice.reducer
