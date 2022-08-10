import { configureStore } from '@reduxjs/toolkit'
import coinslice from './slices/coinslice'
export const store = configureStore({
  reducer: {
    map: coinslice
  },
})