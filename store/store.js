import { configureStore } from '@reduxjs/toolkit'
import mapmarkerslice from './slices/coinslice'
export const store = configureStore({
  reducer: {
    map: mapmarkerslice
  },
})