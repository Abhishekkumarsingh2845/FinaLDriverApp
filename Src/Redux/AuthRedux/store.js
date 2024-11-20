// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './userSlice';

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });




























import {configureStore} from '@reduxjs/toolkit';
import authReducer from './userSlice';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, authReducer);
export const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
});

export const persistor = persistStore(store);



















// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage'; // Storage engine
// import authReducer from './userSlice'; // Import your reducer

// // Redux Persist configuration
// const persistConfig = {
//   key: 'root', // The key where the persisted data will be stored
//   storage: AsyncStorage, // Use AsyncStorage for persistence
// };

// // Create a persisted reducer
// const persistedReducer = persistReducer(persistConfig, authReducer);

// // Configure the Redux store
// export const store = configureStore({
//   reducer: {
//     auth: persistedReducer, // Apply persisted reducer to the store
//   },
// });

// // Set up persistor (to rehydrate the state)
// export const persistor = persistStore(store);
