import { configureStore } from "@reduxjs/toolkit";
import InfoReducer from './infoslice'



export const store = configureStore({
  reducer: {
    info: InfoReducer
  }
})