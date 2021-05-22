import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email: '',
  photo: '',
}

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLogin: (state, actions) => {
      state.name = actions.payload.name
      state.email = actions.payload.email
      state.photo = actions.payload.photo
    },
    setSignOut: (state) => {
      state.name = null
      state.email = null
      state.photo = null
    },
  },
})

export const { setUserLogin, setSignOut } = UserSlice.actions

export const selectUserName = (state) => state.user.name
export const selectUserEmail = (state) => state.user.email
export const selectUserPhoto = (state) => state.user.photo

export default UserSlice.reducer
