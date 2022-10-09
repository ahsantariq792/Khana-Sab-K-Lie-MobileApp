import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../state/User"
export const store = configureStore({
  reducer: {
    user: userReducer
  },
})