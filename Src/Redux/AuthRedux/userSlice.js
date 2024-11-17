// import {createSlice} from '@reduxjs/toolkit';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     token: null,
//     phoneNumber: '',
//   },
//   reducers: {
//     setToken: (state, action) => {
//       state.token = action.payload;
//     },
//     setPhn: (state, action) => {
//       state.phoneNumber = action.payload;
//     },
//     logout: state => {
//       state.token = null;
//       state.phoneNumber = null;
//     },
//   },
// });

// export const {setToken, logout, setPhn} = authSlice.actions;
// export default authSlice.reducer;




import { createSlice } from '@reduxjs/toolkit';
import { persistReducer, PURGE } from 'redux-persist';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    phoneNumber: '',
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setPhn: (state, action) => {
      state.phoneNumber = action.payload;
    },
    logout: (state, action) => {
      state.token = null;
      state.phoneNumber = null;
      // Clear persisted state on logout
      action.asyncDispatch({ type: PURGE });
    },
  },
});

export const { setToken, logout, setPhn } = authSlice.actions;
export default authSlice.reducer;
