import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  phone: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    register: (state, action) => {
      state.phone = action.payload;
    },
    login: (state, action) => {
      state.phone = action.payload;
    },
    logout: (state) => {
      state.phone = null; 
    },
  },
});

export const { register, login, logout } = userSlice.actions;
export default userSlice.reducer;
