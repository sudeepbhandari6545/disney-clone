import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import movieReducer from '../features/movie/movieSlice'
import Userslice from '../features/user/Userslice'
import userReducer from '../features/user/Userslice'

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: Userslice,
  },
})
