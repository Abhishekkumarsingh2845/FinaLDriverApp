// // src/Redux/store.js
// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './userSlice';

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });


import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Storage engine
import authReducer from './userSlice'; // Import your reducer

// Redux Persist configuration
const persistConfig = {
  key: 'root', // The key where the persisted data will be stored
  storage: AsyncStorage, // Use AsyncStorage for persistence
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, authReducer);

// Configure the Redux store
export const store = configureStore({
  reducer: {
    auth: persistedReducer, // Apply persisted reducer to the store
  },
});

// Set up persistor (to rehydrate the state)
export const persistor = persistStore(store);
